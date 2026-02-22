import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CategoryKey = 'value' | 'stability' | 'determinism' | 'observability' | 'maintenance';

type RiskKey =
  | 'dynamicContent'
  | 'thirdParty'
  | 'downloads'
  | 'timingSensitive'
  | 'subjectiveValidation';

type CandidateScores = Record<CategoryKey, number>;
type CandidateWeights = Record<CategoryKey, number>;
type CandidateRisks = Record<RiskKey, boolean>;

type Recommendation = 'Strong candidate' | 'Borderline' | 'Poor candidate';

@Component({
  selector: 'app-automation-candidate-scorer-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './automation-candidate-scorer-page.component.html',
  styleUrl: './automation-candidate-scorer-page.component.css',
})
export class AutomationCandidateScorerPageComponent {
  protected readonly categoryKeys = [
    'value',
    'stability',
    'determinism',
    'observability',
    'maintenance',
  ] as const;

  protected readonly riskKeys = [
    'dynamicContent',
    'thirdParty',
    'downloads',
    'timingSensitive',
    'subjectiveValidation',
  ] as const;

  protected readonly candidateName = signal<string>('Test case candidate');

  protected readonly scores = signal<CandidateScores>({
    value: 3,
    stability: 3,
    determinism: 3,
    observability: 3,
    maintenance: 3,
  });

  protected readonly weights = signal<CandidateWeights>({
    value: 1,
    stability: 1,
    determinism: 1,
    observability: 1,
    maintenance: 1,
  });

  protected readonly risks = signal<CandidateRisks>({
    dynamicContent: false,
    thirdParty: false,
    downloads: false,
    timingSensitive: false,
    subjectiveValidation: false,
  });

  protected readonly penaltyPerRiskPoints = 5;
  protected readonly maxPenaltyPoints = 25;

  protected readonly basePercent = computed(() => {
    const s = this.scores();
    const w = this.weights();

    const weightedTotal =
      s.value * w.value +
      s.stability * w.stability +
      s.determinism * w.determinism +
      s.observability * w.observability +
      s.maintenance * w.maintenance;

    const maxTotal = 5 * (w.value + w.stability + w.determinism + w.observability + w.maintenance);

    if (maxTotal <= 0) return 0;

    return weightedTotal / maxTotal;
  });

  protected readonly penaltyPoints = computed(() => {
    const r = this.risks();
    const riskCount = Object.values(r).filter(Boolean).length;
    return Math.min(this.maxPenaltyPoints, riskCount * this.penaltyPerRiskPoints);
  });

  protected readonly finalPercent = computed(() => {
    const base = this.basePercent(); // 0..1
    const penalty = this.penaltyPoints() / 100; // points -> fraction
    return this.clamp(base - penalty, 0, 1);
  });

  protected readonly recommendation = computed<Recommendation>(() => {
    const pct = this.finalPercent();

    if (pct >= 0.8) return 'Strong candidate';
    if (pct >= 0.6) return 'Borderline';
    return 'Poor candidate';
  });

  protected readonly weakestCategories = computed(() => {
    const s = this.scores();

    const entries: Array<{ key: CategoryKey; score: number }> = [
      { key: 'value', score: s.value },
      { key: 'stability', score: s.stability },
      { key: 'determinism', score: s.determinism },
      { key: 'observability', score: s.observability },
      { key: 'maintenance', score: s.maintenance },
    ];

    const minScore = Math.min(...entries.map((e) => e.score));
    return entries.filter((e) => e.score === minScore).map((e) => e.key);
  });

  protected readonly summary = computed(() => {
    const name = this.candidateName().trim() || 'This candidate';
    const rec = this.recommendation();
    const pct = Math.round(this.finalPercent() * 100);
    const penalties = this.penaltyPoints();
    const weak = this.weakestCategories();

    const weakLabel = weak.length
      ? `Weakest area${weak.length > 1 ? 's' : ''}: ${weak.map(this.labelForCategory).join(', ')}.`
      : '';

    const penaltyLabel =
      penalties > 0 ? `Risk penalties applied: ${penalties} points.` : 'No risk penalties applied.';

    return `${name} is rated as "${rec}" (${pct}%). ${weakLabel} ${penaltyLabel}`.trim();
  });

  protected setScore(key: CategoryKey, value: number): void {
    this.scores.update((s) => ({ ...s, [key]: this.clampInt(value, 1, 5) }));
  }

  protected setWeight(key: CategoryKey, value: number): void {
    this.weights.update((w) => ({ ...w, [key]: this.clampInt(value, 1, 5) }));
  }

  protected setRisk(key: RiskKey, checked: boolean): void {
    this.risks.update((r) => ({ ...r, [key]: checked }));
  }

  protected reset(): void {
    this.candidateName.set('Test case candidate');

    this.scores.set({
      value: 3,
      stability: 3,
      determinism: 3,
      observability: 3,
      maintenance: 3,
    });

    this.weights.set({
      value: 1,
      stability: 1,
      determinism: 1,
      observability: 1,
      maintenance: 1,
    });

    this.risks.set({
      dynamicContent: false,
      thirdParty: false,
      downloads: false,
      timingSensitive: false,
      subjectiveValidation: false,
    });
  }

  protected labelForCategory = (key: CategoryKey): string => {
    switch (key) {
      case 'value':
        return 'Value';
      case 'stability':
        return 'Stability';
      case 'determinism':
        return 'Determinism';
      case 'observability':
        return 'Observability';
      case 'maintenance':
        return 'Maintenance cost';
    }
  };

  protected labelForRisk = (key: RiskKey): string => {
    switch (key) {
      case 'dynamicContent':
        return 'Dynamic content';
      case 'thirdParty':
        return 'Third-party dependency';
      case 'downloads':
        return 'Downloads/files';
      case 'timingSensitive':
        return 'Timing sensitive UI';
      case 'subjectiveValidation':
        return 'Subjective validation';
    }
  };

  private clamp(n: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, n));
  }

  private clampInt(n: number, min: number, max: number): number {
    const v = Number.isFinite(n) ? Math.trunc(n) : min;
    return Math.min(max, Math.max(min, v));
  }
}
