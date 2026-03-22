import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findAnyAdminSession } from '../course-access/auth-session.storage';

type TestRunDetailJob = {
  id: number;
  name: string;
  status: string;
  conclusion: string | null;
  startedAt: string | null;
  completedAt: string | null;
  url: string | null;
};

type TestRunDetail = {
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

type AdminTestRunDetailResponse =
  | {
      success: true;
      run: TestRunDetail;
      jobs: TestRunDetailJob[];
    }
  | { success: false; message?: string };

const API_BASE_URL = 'https://lecture-page-api.vercel.app/api';

@Component({
  selector: 'app-admin-test-run-details-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen xp-background p-6">
      <div class="mx-auto max-w-5xl">
        <header class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <a
              routerLink="/admin"
              class="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Back to admin
            </a>
            <h1 class="mt-4 text-2xl font-bold text-gray-900">Run details</h1>
            <p class="mt-1 text-sm text-gray-600">
              In-app summary for a Playwright workflow run.
            </p>
          </div>

          @if (run()) {
            <a
              [href]="run()!.runUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center rounded-full bg-red-700 px-5 py-3 text-sm font-semibold text-white hover:bg-red-800"
            >
              Open in GitHub
            </a>
          }
        </header>

        @if (loading()) {
          <div class="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p class="text-sm text-gray-600">Loading run details...</p>
          </div>
        } @else if (error()) {
          <div class="mt-6 rounded-3xl border border-red-200 bg-red-50 p-6 text-sm text-red-800 shadow-sm">
            {{ error() }}
          </div>
        } @else if (run()) {
          <div class="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.22em] text-red-700">
                    {{ run()!.workflowName }}
                  </p>
                  <h2 class="mt-2 text-xl font-semibold text-gray-900">{{ run()!.title }}</h2>
                  <p class="mt-1 text-sm text-gray-600">Run #{{ run()!.runNumber }}</p>
                </div>

                <span
                  class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  [class]="runStateClasses(run()!.status, run()!.conclusion)"
                >
                  {{ formatRunState(run()!.status, run()!.conclusion) }}
                </span>
              </div>

              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl bg-gray-50 p-4">
                  <div class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Created</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ formatDateTime(run()!.createdAt) }}</div>
                </div>
                <div class="rounded-2xl bg-gray-50 p-4">
                  <div class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Updated</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ formatDateTime(run()!.updatedAt) }}</div>
                </div>
                <div class="rounded-2xl bg-gray-50 p-4">
                  <div class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Actor</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ run()!.actor || '—' }}</div>
                </div>
                <div class="rounded-2xl bg-gray-50 p-4">
                  <div class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Branch</div>
                  <div class="mt-2 text-sm font-medium text-gray-900">{{ run()!.headBranch || '—' }}</div>
                </div>
              </div>

              <div class="mt-8">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="text-lg font-semibold text-gray-900">Jobs</h3>
                  <button
                    type="button"
                    class="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    (click)="reload()"
                    [disabled]="loading()"
                  >
                    Refresh
                  </button>
                </div>

                @if (jobs().length === 0) {
                  <p class="mt-4 text-sm text-gray-600">No jobs found for this run.</p>
                } @else {
                  <div class="mt-4 space-y-3">
                    @for (job of jobs(); track job.id) {
                      <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p class="text-sm font-semibold text-gray-900">{{ job.name }}</p>
                            <p class="mt-1 text-xs text-gray-500">
                              {{ formatDateTime(job.startedAt) }}
                              @if (job.completedAt) {
                                · {{ formatDateTime(job.completedAt) }}
                              }
                            </p>
                          </div>

                          <div class="flex flex-wrap items-center gap-2">
                            <span
                              class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                              [class]="runStateClasses(job.status, job.conclusion)"
                            >
                              {{ formatRunState(job.status, job.conclusion) }}
                            </span>

                            @if (job.url) {
                              <a
                                [href]="job.url"
                                target="_blank"
                                rel="noreferrer"
                                class="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100"
                              >
                                GitHub job
                              </a>
                            }
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                }
              </div>
            </section>

            <aside class="space-y-6">
              <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  Report
                </p>
                <h3 class="mt-2 text-lg font-semibold text-gray-900">Latest published report</h3>
                <p class="mt-2 text-sm text-gray-600">
                  The report route always points to the latest published Allure report, not necessarily this exact run.
                </p>
                <a
                  routerLink="/reports"
                  class="mt-4 inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white"
                >
                  View report
                </a>
              </section>
            </aside>
          </div>
        }
      </div>
    </div>
  `,
})
export class AdminTestRunDetailsPageComponent implements OnInit {
  private route = inject(ActivatedRoute);

  loading = signal(true);
  error = signal<string | null>(null);
  run = signal<TestRunDetail | null>(null);
  jobs = signal<TestRunDetailJob[]>([]);

  ngOnInit(): void {
    void this.load();
  }

  async reload() {
    await this.load();
  }

  private async load() {
    this.loading.set(true);
    this.error.set(null);
    this.run.set(null);
    this.jobs.set([]);

    const runId = Number.parseInt(this.route.snapshot.paramMap.get('runId') ?? '', 10);
    if (!Number.isFinite(runId) || runId <= 0) {
      this.error.set('Invalid run id.');
      this.loading.set(false);
      return;
    }

    const admin = findAnyAdminSession();
    if (!admin) {
      this.error.set('Not logged in as admin.');
      this.loading.set(false);
      return;
    }

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
        this.error.set(data.success === false ? (data.message ?? `Failed to load run (${resp.status}).`) : `Failed to load run (${resp.status}).`);
        return;
      }

      if (data.success === false) {
        this.error.set(data.message ?? 'Failed to load run.');
        return;
      }

      this.run.set(data.run);
      this.jobs.set(data.jobs);
    } catch {
      this.error.set('Network error.');
    } finally {
      this.loading.set(false);
    }
  }

  formatDateTime(iso: string | null) {
    if (!iso) return '—';
    const ms = Date.parse(iso);
    if (!Number.isFinite(ms)) return '—';
    return new Date(ms).toLocaleString();
  }

  formatRunState(status: string, conclusion: string | null) {
    if (status !== 'completed') {
      return this.startCase(status);
    }

    return this.startCase(conclusion ?? 'completed');
  }

  runStateClasses(status: string, conclusion: string | null) {
    if (status === 'completed' && conclusion === 'success') {
      return 'bg-emerald-100 text-emerald-800';
    }

    if (status === 'completed' && (conclusion === 'failure' || conclusion === 'cancelled' || conclusion === 'timed_out')) {
      return 'bg-red-100 text-red-800';
    }

    if (status === 'in_progress' || status === 'queued' || status === 'waiting') {
      return 'bg-amber-100 text-amber-900';
    }

    return 'bg-gray-100 text-gray-700';
  }

  private startCase(value: string) {
    return String(value ?? '')
      .replace(/[_-]+/g, ' ')
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
