import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findAnyAdminSession } from '../course-access/auth-session.storage';

type AdminTestRunDetail = {
  runId: number;
  runNumber: number;
  runUrl: string;
  workflowName: string;
  title: string;
  status: string;
  conclusion: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  actor: string | null;
  event: string | null;
  headBranch: string | null;
};

type AdminTestRunJob = {
  id: number;
  name: string;
  status: string;
  conclusion: string | null;
  startedAt: string | null;
  completedAt: string | null;
  url: string | null;
};

type AdminTestRunDetailResponse =
  | {
      success: true;
      run: AdminTestRunDetail;
      jobs: AdminTestRunJob[];
    }
  | { success: false; message?: string };

const API_BASE_URL = 'https://lecture-page-api.vercel.app/api';

@Component({
  selector: 'app-admin-test-run-details-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-neutral-100 px-6 py-8">
      <div class="mx-auto max-w-5xl">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-red-700">
              Test Runner
            </p>
            <h1 class="mt-2 text-3xl font-semibold text-neutral-900">Run details</h1>
            <p class="mt-2 text-sm text-neutral-600">
              Internal view for one admin-triggered workflow run.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              routerLink="/admin"
              class="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
            >
              Back to admin
            </a>

            @if (runDetail()) {
              <a
                [routerLink]="['/reports', runDetail()!.runId]"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
              >
                View report
              </a>

              <a
                [href]="runDetail()!.runUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
              >
                Open in GitHub
              </a>
            }
          </div>
        </div>

        @if (loading()) {
          <div class="mt-6 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
            <p class="text-sm text-neutral-600">Loading run details...</p>
          </div>
        } @else if (error()) {
          <div class="mt-6 rounded-[28px] border border-red-200 bg-red-50 p-6 shadow-sm">
            <p class="text-sm font-medium text-red-800">{{ error() }}</p>
          </div>
        } @else if (runDetail()) {
          <section class="mt-6 rounded-[32px] overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <div class="bg-gradient-to-r from-red-800 via-red-700 to-neutral-900 px-6 py-6 text-white">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-red-100">
                    {{ runDetail()!.workflowName }}
                  </p>
                  <h2 class="mt-2 text-2xl font-semibold text-white">
                    {{ runDetail()!.title }}
                  </h2>
                  <p class="mt-2 text-sm text-red-100">
                    Run #{{ runDetail()!.runNumber }}
                    @if (runDetail()!.headBranch) {
                      · Branch {{ runDetail()!.headBranch }}
                    }
                    @if (runDetail()!.actor) {
                      · Started by {{ runDetail()!.actor }}
                    }
                  </p>
                </div>

                <span
                  class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  [class]="runStateClasses(runDetail()!)"
                >
                  {{ formatRunState(runDetail()!) }}
                </span>
              </div>
            </div>

            <div class="grid gap-4 px-6 py-6 md:grid-cols-2 xl:grid-cols-4">
              <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Created
                </p>
                <p class="mt-2 text-sm font-medium text-neutral-900">
                  {{ formatDateTime(runDetail()!.createdAt) }}
                </p>
              </div>

              <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Updated
                </p>
                <p class="mt-2 text-sm font-medium text-neutral-900">
                  {{ formatDateTime(runDetail()!.updatedAt) }}
                </p>
              </div>

              <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Event
                </p>
                <p class="mt-2 text-sm font-medium text-neutral-900">
                  {{ startCase(runDetail()!.event ?? 'unknown') }}
                </p>
              </div>

              <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Jobs
                </p>
                <p class="mt-2 text-sm font-medium text-neutral-900">
                  {{ jobs().length }}
                </p>
              </div>
            </div>
          </section>

          <section class="mt-6 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 class="text-xl font-semibold text-neutral-900">Jobs</h3>
                <p class="mt-1 text-sm text-neutral-600">
                  Current status for the jobs inside this workflow run.
                </p>
              </div>

              <button
                type="button"
                class="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                (click)="reload()"
                [disabled]="loading()"
              >
                Refresh
              </button>
            </div>

            @if (jobs().length === 0) {
              <p class="mt-4 text-sm text-neutral-600">No jobs were returned for this run yet.</p>
            } @else {
              <div class="mt-4 space-y-3">
                @for (job of jobs(); track job.id) {
                  <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div class="flex flex-wrap items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2">
                          <p class="text-sm font-semibold text-neutral-900">{{ job.name }}</p>
                          <span
                            class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
                            [class]="jobStateClasses(job)"
                          >
                            {{ formatJobState(job) }}
                          </span>
                        </div>

                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500">
                          <span>Started {{ formatDateTime(job.startedAt) }}</span>
                          <span>Completed {{ formatDateTime(job.completedAt) }}</span>
                          <span>Duration {{ formatDuration(job.startedAt, job.completedAt) }}</span>
                        </div>
                      </div>

                      @if (job.url) {
                        <a
                          [href]="job.url"
                          target="_blank"
                          rel="noreferrer"
                          class="shrink-0 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:bg-neutral-100"
                        >
                          GitHub job
                        </a>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          </section>
        }
      </div>
    </div>
  `,
})
export class AdminTestRunDetailsPageComponent {
  private route = inject(ActivatedRoute);
  private paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  loading = signal(false);
  error = signal<string | null>(null);
  runDetail = signal<AdminTestRunDetail | null>(null);
  jobs = signal<AdminTestRunJob[]>([]);

  constructor() {
    effect(() => {
      const rawRunId = this.paramMap().get('runId') ?? '';
      const runId = Number.parseInt(rawRunId, 10);

      if (!Number.isFinite(runId) || runId <= 0) {
        this.runDetail.set(null);
        this.jobs.set([]);
        this.error.set('Invalid run id.');
        return;
      }

      void this.loadRunDetail(runId);
    });
  }

  async reload() {
    const rawRunId = this.paramMap().get('runId') ?? '';
    const runId = Number.parseInt(rawRunId, 10);
    if (!Number.isFinite(runId) || runId <= 0) {
      this.error.set('Invalid run id.');
      return;
    }

    await this.loadRunDetail(runId);
  }

  private async loadRunDetail(runId: number) {
    this.error.set(null);

    const admin = findAnyAdminSession();
    if (!admin) {
      this.runDetail.set(null);
      this.jobs.set([]);
      this.error.set('Not logged in as admin.');
      return;
    }

    this.loading.set(true);

    try {
      const url = new URL(`${API_BASE_URL}/admin-test-run-detail`);
      url.searchParams.set('runId', String(runId));

      const resp = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${admin.session.sessionId}`,
        },
      });

      const data = (await resp.json()) as AdminTestRunDetailResponse;

      if (!resp.ok) {
        this.runDetail.set(null);
        this.jobs.set([]);
        this.error.set(
          data.success === false
            ? (data.message ?? `Failed to load run details (${resp.status}).`)
            : `Failed to load run details (${resp.status}).`,
        );
        return;
      }

      if (data.success === false) {
        this.runDetail.set(null);
        this.jobs.set([]);
        this.error.set(data.message ?? 'Failed to load run details.');
        return;
      }

      this.runDetail.set(data.run);
      this.jobs.set(data.jobs);
    } catch {
      this.runDetail.set(null);
      this.jobs.set([]);
      this.error.set('Network error.');
    } finally {
      this.loading.set(false);
    }
  }

  formatRunState(run: AdminTestRunDetail) {
    if (run.status !== 'completed') {
      return this.startCase(run.status);
    }

    return this.startCase(run.conclusion ?? 'completed');
  }

  runStateClasses(run: AdminTestRunDetail) {
    if (run.status === 'completed' && run.conclusion === 'success') {
      return 'bg-emerald-100 text-emerald-800';
    }

    if (
      run.status === 'completed' &&
      (run.conclusion === 'failure' ||
        run.conclusion === 'cancelled' ||
        run.conclusion === 'timed_out')
    ) {
      return 'bg-red-100 text-red-800';
    }

    if (run.status === 'in_progress' || run.status === 'queued' || run.status === 'waiting') {
      return 'bg-amber-100 text-amber-900';
    }

    return 'bg-neutral-200 text-neutral-700';
  }

  formatJobState(job: AdminTestRunJob) {
    if (job.status !== 'completed') {
      return this.startCase(job.status);
    }

    return this.startCase(job.conclusion ?? 'completed');
  }

  jobStateClasses(job: AdminTestRunJob) {
    if (job.status === 'completed' && job.conclusion === 'success') {
      return 'bg-emerald-100 text-emerald-800';
    }

    if (
      job.status === 'completed' &&
      (job.conclusion === 'failure' ||
        job.conclusion === 'cancelled' ||
        job.conclusion === 'timed_out')
    ) {
      return 'bg-red-100 text-red-800';
    }

    if (job.status === 'in_progress' || job.status === 'queued' || job.status === 'waiting') {
      return 'bg-amber-100 text-amber-900';
    }

    return 'bg-neutral-200 text-neutral-700';
  }

  formatDateTime(iso: string | null) {
    if (!iso) return 'Unknown';
    const ms = Date.parse(iso);
    if (!Number.isFinite(ms)) return 'Unknown';
    return new Date(ms).toLocaleString();
  }

  formatDuration(startIso: string | null, endIso: string | null) {
    const startMs = Date.parse(String(startIso ?? ''));
    const endMs = Date.parse(String(endIso ?? ''));

    if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs < startMs) {
      return 'Unknown';
    }

    const totalSeconds = Math.round((endMs - startMs) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes <= 0) {
      return `${seconds}s`;
    }

    return `${minutes}m ${seconds}s`;
  }

  startCase(value: string) {
    return String(value ?? '')
      .replace(/[_-]+/g, ' ')
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
