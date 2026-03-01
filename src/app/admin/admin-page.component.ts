import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { findAnyAdminSession } from '../course-access/auth-session.storage';

type AdminUser = {
  username: string;
  active: boolean;
  role: 'student' | 'teacher' | 'admin';
  notes: string;
  courses: string[];
  daysLeft: number | null;
};

type AdminUsersResponse =
  | { success: true; users: AdminUser[] }
  | { success: false; message?: string };

type CreateAdminUserRequest = {
  username: string;
  password: string;
  role: AdminUser['role'];
  active: boolean;
  notes: string;
  courses: string[];
};

type CreateAdminUserResponse =
  | {
      success: true;
      user: {
        username: string;
        role: AdminUser['role'];
        active: boolean;
        notes: string;
        coursesAdded: string[];
      };
    }
  | { success: false; message?: string };

type UpdateAdminUserRequest = {
  username: string;
  password?: string;
  role?: AdminUser['role'];
  active?: boolean;
  notes?: string;
  courses?: string[];
};

type UpdateAdminUserResponse =
  | {
      success: true;
      user: {
        username: string;
        role: AdminUser['role'];
        active: boolean;
        notes: string;
      };
    }
  | { success: false; message?: string };

type DeleteAdminUserRequest = {
  username: string;
};

type DeleteAdminUserResponse =
  | {
      success: true;
      deleted: {
        username: string;
        authAccessRowsDeleted: number;
        quizSubmissionRowsDeleted?: number;
      };
    }
  | { success: false; message?: string };

type AdminAnalyticsUser = {
  username: string;
  totalSubmissions: number;
  correct: number;
  accuracy: number; // 0..1
  lastActivityAt: string | null; // ISO
  courses: string[];
};

type AdminAnalyticsCourse = {
  course: string;
  totalSubmissions: number;
  uniqueUsers: number;
  accuracy: number; // 0..1
};

type AdminAnalyticsResponse =
  | {
      success: true;
      users: AdminAnalyticsUser[];
      courses: AdminAnalyticsCourse[];
    }
  | { success: false; message?: string };

const API_BASE_URL = 'https://lecture-page-api.vercel.app/api';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen xp-background p-6">
      <div class="max-w-6xl mx-auto">
        <header class="flex items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Admin</h1>
            <p class="mt-1 text-sm text-gray-600">User management.</p>
          </div>

          <div class="flex gap-3">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2
                     text-sm font-semibold text-white hover:bg-blue-700"
              (click)="openCreateModal()"
            >
              Create user
            </button>

            <a
              routerLink="/courses"
              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2
                     text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Back
            </a>
          </div>
        </header>

        <!-- USERS -->
        <div class="mt-6 rounded-lg bg-white shadow p-6">
          @if (loading()) {
            <p class="text-gray-700">Loading users…</p>
          } @else if (error()) {
            <div class="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm">
              {{ error() }}
            </div>
          } @else {
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-600">
                Showing <span class="font-semibold text-gray-900">{{ users().length }}</span> users
              </p>

              <button
                type="button"
                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2
                       text-sm font-semibold text-gray-700 hover:bg-gray-50"
                (click)="reload()"
              >
                Refresh
              </button>
            </div>

            @if (users().length === 0) {
              <p class="mt-4 text-gray-700">No users found.</p>
            } @else {
              <div class="mt-4 overflow-x-auto rounded-md border border-gray-200">
                <table class="min-w-full text-sm">
                  <thead class="bg-gray-50 border-b border-gray-200">
                    <tr class="text-left text-gray-700">
                      <th class="px-4 py-3 font-semibold">Username</th>
                      <th class="px-4 py-3 font-semibold">Role</th>
                      <th class="px-4 py-3 font-semibold">Courses</th>
                      <th class="px-4 py-3 font-semibold">Days left</th>
                      <th class="px-4 py-3 font-semibold">Active</th>
                      <th class="px-4 py-3 font-semibold">Notes</th>
                      <th class="px-4 py-3 font-semibold"></th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    @for (u of users(); track u.username) {
                      <tr>
                        <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                          {{ u.username }}
                        </td>

                        <td class="px-4 py-3 whitespace-nowrap">
                          <span
                            class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold"
                            [class.bg-blue-100]="u.role === 'student'"
                            [class.text-blue-800]="u.role === 'student'"
                            [class.bg-yellow-100]="u.role === 'teacher'"
                            [class.text-yellow-800]="u.role === 'teacher'"
                            [class.bg-green-100]="u.role === 'admin'"
                            [class.text-green-800]="u.role === 'admin'"
                          >
                            {{ u.role }}
                          </span>
                        </td>

                        <td class="px-4 py-3">
                          @if (u.courses.length === 0) {
                            <span class="text-gray-500">—</span>
                          } @else {
                            <div class="flex flex-wrap gap-1.5">
                              @for (c of u.courses; track c) {
                                <span
                                  class="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-2 py-0.5 text-xs font-semibold"
                                >
                                  {{ c }}
                                </span>
                              }
                            </div>
                          }
                        </td>

                        <td class="px-4 py-3 whitespace-nowrap">
                          @if (u.daysLeft === null) {
                            <span
                              class="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs font-semibold"
                            >
                              Never signed in
                            </span>
                          } @else if (u.daysLeft <= 0) {
                            <span
                              class="inline-flex items-center rounded-full bg-red-100 text-red-800 px-2 py-0.5 text-xs font-semibold"
                            >
                              Expired
                            </span>
                          } @else if (u.daysLeft <= 7) {
                            <span
                              class="inline-flex items-center rounded-full bg-yellow-100 text-yellow-800 px-2 py-0.5 text-xs font-semibold"
                            >
                              {{ u.daysLeft }} days
                            </span>
                          } @else {
                            <span
                              class="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-semibold"
                            >
                              {{ u.daysLeft }} days
                            </span>
                          }
                        </td>

                        <td class="px-4 py-3 whitespace-nowrap">
                          @if (u.active) {
                            <span
                              class="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-semibold"
                            >
                              Active
                            </span>
                          } @else {
                            <span
                              class="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs font-semibold"
                            >
                              Disabled
                            </span>
                          }
                        </td>

                        <td class="px-4 py-3 text-gray-700">
                          {{ u.notes || '—' }}
                        </td>

                        <td class="px-4 py-3 whitespace-nowrap">
                          <div class="flex gap-2">
                            <button
                              type="button"
                              class="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                              (click)="openEditModal(u)"
                            >
                              Edit
                            </button>

                            <button
                              type="button"
                              class="rounded-md border border-red-300 bg-white px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                              (click)="openDeleteModal(u)"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            }
          }
        </div>

        <!-- ANALYTICS -->
        <div class="mt-6 rounded-lg bg-white shadow p-6">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-lg font-semibold text-gray-900">Analytics</h2>
              <p class="mt-1 text-sm text-gray-600">
                Aggregated quiz activity (deleted users are excluded).
              </p>
            </div>

            <button
              type="button"
              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2
                     text-sm font-semibold text-gray-700 hover:bg-gray-50"
              (click)="reloadAnalytics()"
              [disabled]="analyticsLoading()"
            >
              @if (analyticsLoading()) {
                Refreshing…
              } @else {
                Refresh analytics
              }
            </button>
          </div>

          @if (analyticsLoading()) {
            <p class="mt-4 text-gray-700">Loading analytics…</p>
          } @else if (analyticsError()) {
            <div
              class="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm"
            >
              {{ analyticsError() }}
            </div>
          } @else {
            <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <!-- Courses summary -->
              <div class="rounded-md border border-gray-200 overflow-hidden">
                <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div class="font-semibold text-gray-900">Courses</div>
                  <div class="text-xs text-gray-600">Submissions, unique users, accuracy</div>
                </div>

                @if (analyticsCourses().length === 0) {
                  <div class="px-4 py-4 text-sm text-gray-700">No course activity yet.</div>
                } @else {
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm">
                      <thead class="bg-white border-b border-gray-200">
                        <tr class="text-left text-gray-700">
                          <th class="px-4 py-3 font-semibold">Course</th>
                          <th class="px-4 py-3 font-semibold">Submissions</th>
                          <th class="px-4 py-3 font-semibold">Users</th>
                          <th class="px-4 py-3 font-semibold">Accuracy</th>
                        </tr>
                      </thead>

                      <tbody class="divide-y divide-gray-200">
                        @for (c of analyticsCourses(); track c.course) {
                          <tr>
                            <td class="px-4 py-3 font-medium text-gray-900">{{ c.course }}</td>
                            <td class="px-4 py-3 text-gray-700">{{ c.totalSubmissions }}</td>
                            <td class="px-4 py-3 text-gray-700">{{ c.uniqueUsers }}</td>
                            <td class="px-4 py-3 text-gray-700 whitespace-nowrap">
                              {{ formatPct(c.accuracy) }}
                            </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                }
              </div>

              <!-- Users leaderboard -->
              <div class="rounded-md border border-gray-200 overflow-hidden">
                <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div class="font-semibold text-gray-900">Users</div>
                  <div class="text-xs text-gray-600">Activity leaderboard</div>
                </div>

                @if (analyticsUsers().length === 0) {
                  <div class="px-4 py-4 text-sm text-gray-700">No user activity yet.</div>
                } @else {
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm">
                      <thead class="bg-white border-b border-gray-200">
                        <tr class="text-left text-gray-700">
                          <th class="px-4 py-3 font-semibold">User</th>
                          <th class="px-4 py-3 font-semibold">Submissions</th>
                          <th class="px-4 py-3 font-semibold">Correct</th>
                          <th class="px-4 py-3 font-semibold">Accuracy</th>
                          <th class="px-4 py-3 font-semibold">Last activity</th>
                          <th class="px-4 py-3 font-semibold">Courses</th>
                        </tr>
                      </thead>

                      <tbody class="divide-y divide-gray-200">
                        @for (u of analyticsUsers(); track u.username) {
                          <tr>
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                              {{ u.username }}
                            </td>

                            <td class="px-4 py-3 text-gray-700">
                              {{ u.totalSubmissions }}
                            </td>

                            <td class="px-4 py-3 text-gray-700">
                              {{ u.correct }}
                            </td>

                            <td class="px-4 py-3 text-gray-700 whitespace-nowrap">
                              {{ formatPct(u.accuracy) }}
                            </td>

                            <td class="px-4 py-3 text-gray-700 whitespace-nowrap">
                              {{ formatDateTime(u.lastActivityAt) }}
                            </td>

                            <td class="px-4 py-3">
                              @if (u.courses.length === 0) {
                                <span class="text-gray-500">—</span>
                              } @else {
                                <div class="flex flex-wrap gap-1.5">
                                  @for (c of u.courses; track c) {
                                    <span
                                      class="inline-flex items-center rounded-full bg-gray-100 text-gray-800 px-2 py-0.5 text-xs font-semibold"
                                    >
                                      {{ c }}
                                    </span>
                                  }
                                </div>
                              }
                            </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>

    <!-- CREATE MODAL -->
    @if (showCreateModal()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-lg rounded-lg bg-white shadow-lg p-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Create user</h2>
            <button class="text-gray-500 hover:text-gray-800" (click)="closeCreateModal()">
              ✕
            </button>
          </div>

          @if (createError()) {
            <div
              class="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm"
            >
              {{ createError() }}
            </div>
          }

          <div class="mt-4 space-y-4">
            <input
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="Username"
              [value]="newUsername()"
              (input)="newUsername.set(($any($event.target).value ?? '').toString())"
            />

            <input
              type="password"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="Password"
              [value]="newPassword()"
              (input)="newPassword.set(($any($event.target).value ?? '').toString())"
            />

            <select
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              [value]="newRole()"
              (change)="onRoleChanged($event)"
            >
              <option value="student">student</option>
              <option value="teacher">teacher</option>
              <option value="admin">admin</option>
            </select>

            <select
              multiple
              size="2"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              (change)="onCoursesChanged($event)"
            >
              @for (c of availableCourses(); track c) {
                <option [value]="c">{{ c }}</option>
              }
            </select>

            <p class="text-xs text-gray-500">Hold Ctrl/Cmd to select multiple courses.</p>
          </div>

          <div class="mt-6 flex justify-end gap-3">
            <button
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm"
              (click)="closeCreateModal()"
              [disabled]="creatingUser()"
            >
              Cancel
            </button>

            <button
              class="rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
              (click)="createUser()"
              [disabled]="creatingUser()"
            >
              @if (creatingUser()) {
                Creating…
              } @else {
                Create
              }
            </button>
          </div>
        </div>
      </div>
    }

    <!-- EDIT MODAL -->
    @if (showEditModal()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-lg rounded-lg bg-white shadow-lg p-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Edit user: {{ editUsername() }}</h2>
            <button class="text-gray-500 hover:text-gray-800" (click)="closeEditModal()">✕</button>
          </div>

          @if (editError()) {
            <div
              class="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm"
            >
              {{ editError() }}
            </div>
          }

          <div class="mt-4 space-y-4">
            <input
              type="password"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="New password (leave empty to keep current)"
              [value]="editPassword()"
              (input)="editPassword.set(($any($event.target).value ?? '').toString())"
            />

            <select
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              [value]="editRole()"
              (change)="onEditRoleChanged($event)"
            >
              <option value="student">student</option>
              <option value="teacher">teacher</option>
              <option value="admin">admin</option>
            </select>

            <select
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              [value]="editActive() ? '1' : '0'"
              (change)="editActive.set(($any($event.target).value ?? '1') === '1')"
            >
              <option value="1">Active</option>
              <option value="0">Disabled</option>
            </select>

            <input
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              placeholder="Notes"
              [value]="editNotes()"
              (input)="editNotes.set(($any($event.target).value ?? '').toString())"
            />

            <select
              multiple
              size="2"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              (change)="onEditCoursesChanged($event)"
            >
              @for (c of availableCourses(); track c) {
                <option [value]="c" [selected]="editCourses().includes(c)">{{ c }}</option>
              }
            </select>

            <p class="text-xs text-gray-500">Courses will be replaced to match your selection.</p>
          </div>

          <div class="mt-6 flex justify-end gap-3">
            <button
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm"
              (click)="closeEditModal()"
              [disabled]="savingEdit()"
            >
              Cancel
            </button>

            <button
              class="rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
              (click)="saveEdit()"
              [disabled]="savingEdit()"
            >
              @if (savingEdit()) {
                Saving…
              } @else {
                Save
              }
            </button>
          </div>
        </div>
      </div>
    }

    <!-- DELETE MODAL -->
    @if (showDeleteModal()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-md rounded-lg bg-white shadow-lg p-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Delete user</h2>
            <button class="text-gray-500 hover:text-gray-800" (click)="closeDeleteModal()">
              ✕
            </button>
          </div>

          @if (deleteError()) {
            <div
              class="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm"
            >
              {{ deleteError() }}
            </div>
          }

          <p class="mt-4 text-sm text-gray-700">
            This will permanently delete <span class="font-semibold">{{ deleteUsername() }}</span>
            and remove their course access and quiz submissions.
          </p>

          <div class="mt-6 flex justify-end gap-3">
            <button
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm"
              (click)="closeDeleteModal()"
              [disabled]="deletingUser()"
            >
              Cancel
            </button>

            <button
              class="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
              (click)="confirmDelete()"
              [disabled]="deletingUser()"
            >
              @if (deletingUser()) {
                Deleting…
              } @else {
                Delete
              }
            </button>
          </div>
        </div>
      </div>
    }
  `,
})
export class AdminPageComponent {
  users = signal<AdminUser[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  availableCourses = signal<string[]>(['fundamental-dev', 'playwright']);

  // Analytics state
  analyticsLoading = signal(false);
  analyticsError = signal<string | null>(null);
  analyticsUsers = signal<AdminAnalyticsUser[]>([]);
  analyticsCourses = signal<AdminAnalyticsCourse[]>([]);

  // Create modal state
  showCreateModal = signal(false);
  creatingUser = signal(false);
  createError = signal<string | null>(null);

  newUsername = signal('');
  newPassword = signal('');
  newRole = signal<AdminUser['role']>('student');
  selectedCourses = signal<string[]>([]);

  // Edit modal state
  showEditModal = signal(false);
  savingEdit = signal(false);
  editError = signal<string | null>(null);

  editUsername = signal('');
  editPassword = signal('');
  editRole = signal<AdminUser['role']>('student');
  editActive = signal(true);
  editNotes = signal('');
  editCourses = signal<string[]>([]);

  // Delete modal state
  showDeleteModal = signal(false);
  deletingUser = signal(false);
  deleteError = signal<string | null>(null);
  deleteUsername = signal('');

  private adminSession = computed(() => findAnyAdminSession());

  constructor() {
    effect(() => {
      void this.loadUsers();
      void this.loadAnalytics();
    });
  }

  // ---------- ANALYTICS ----------
  async reloadAnalytics() {
    await this.loadAnalytics();
  }

  private async loadAnalytics() {
    this.analyticsError.set(null);

    const admin = this.adminSession();
    if (!admin) {
      this.analyticsUsers.set([]);
      this.analyticsCourses.set([]);
      this.analyticsError.set('Not logged in as admin.');
      return;
    }

    this.analyticsLoading.set(true);

    try {
      const resp = await fetch(`${API_BASE_URL}/admin-analytics`, {
        headers: {
          Authorization: `Bearer ${admin.session.sessionId}`,
        },
      });

      const data = (await resp.json()) as AdminAnalyticsResponse;

      if (!resp.ok) {
        this.analyticsUsers.set([]);
        this.analyticsCourses.set([]);
        this.analyticsError.set(`Failed to load analytics (${resp.status}).`);
        return;
      }

      if (data.success === false) {
        this.analyticsUsers.set([]);
        this.analyticsCourses.set([]);
        this.analyticsError.set(data.message ?? 'Failed to load analytics.');
        return;
      }

      this.analyticsUsers.set(data.users);
      this.analyticsCourses.set(data.courses);
    } catch {
      this.analyticsUsers.set([]);
      this.analyticsCourses.set([]);
      this.analyticsError.set('Network error.');
    } finally {
      this.analyticsLoading.set(false);
    }
  }

  formatPct(value: number) {
    const v = Number.isFinite(value) ? value : 0;
    const pct = Math.round(v * 100);
    return `${pct}%`;
  }

  formatDateTime(iso: string | null) {
    if (!iso) return '—';
    const ms = Date.parse(iso);
    if (!Number.isFinite(ms)) return '—';
    return new Date(ms).toLocaleString();
  }

  // ---------- CREATE ----------
  openCreateModal() {
    this.resetCreateForm();
    this.showCreateModal.set(true);
  }

  closeCreateModal() {
    this.showCreateModal.set(false);
  }

  resetCreateForm() {
    this.newUsername.set('');
    this.newPassword.set('');
    this.newRole.set('student');
    this.selectedCourses.set([]);
    this.createError.set(null);
  }

  onRoleChanged(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'admin' || value === 'teacher' || value === 'student') {
      this.newRole.set(value);
    }
  }

  onCoursesChanged(event: Event) {
    const select = event.target as HTMLSelectElement;
    const values = Array.from(select.selectedOptions).map((o) => o.value);
    this.selectedCourses.set(values);
  }

  async createUser() {
    this.createError.set(null);

    const admin = this.adminSession();
    if (!admin) {
      this.createError.set('Session expired.');
      return;
    }

    this.creatingUser.set(true);

    try {
      const resp = await fetch(`${API_BASE_URL}/admin-users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${admin.session.sessionId}`,
        },
        body: JSON.stringify({
          username: this.newUsername().trim(),
          password: this.newPassword(),
          role: this.newRole(),
          active: true,
          notes: '',
          courses: this.selectedCourses(),
        } as CreateAdminUserRequest),
      });

      const data = (await resp.json()) as CreateAdminUserResponse;

      if (!resp.ok) {
        this.createError.set('Failed to create user.');
        return;
      }

      if (data.success === false) {
        this.createError.set(data.message ?? 'Failed to create user.');
        return;
      }

      this.closeCreateModal();
      await this.loadUsers();
      await this.loadAnalytics();
    } catch {
      this.createError.set('Network error.');
    } finally {
      this.creatingUser.set(false);
    }
  }

  // ---------- EDIT ----------
  openEditModal(user: AdminUser) {
    this.editError.set(null);
    this.editUsername.set(user.username);
    this.editPassword.set('');
    this.editRole.set(user.role);
    this.editActive.set(user.active);
    this.editNotes.set(user.notes ?? '');
    this.editCourses.set([...user.courses]);
    this.showEditModal.set(true);
  }

  closeEditModal() {
    this.showEditModal.set(false);
  }

  onEditRoleChanged(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'admin' || value === 'teacher' || value === 'student') {
      this.editRole.set(value);
    }
  }

  onEditCoursesChanged(event: Event) {
    const select = event.target as HTMLSelectElement;
    const values = Array.from(select.selectedOptions).map((o) => o.value);
    this.editCourses.set(values);
  }

  async saveEdit() {
    this.editError.set(null);

    const admin = this.adminSession();
    if (!admin) {
      this.editError.set('Session expired.');
      return;
    }

    const username = this.editUsername().trim();
    if (!username) {
      this.editError.set('Missing username.');
      return;
    }

    const payload: UpdateAdminUserRequest = {
      username,
      role: this.editRole(),
      active: this.editActive(),
      notes: this.editNotes(),
      courses: this.editCourses(),
    };

    const newPassword = this.editPassword();
    if (newPassword.trim().length > 0) {
      payload.password = newPassword;
    }

    this.savingEdit.set(true);

    try {
      const resp = await fetch(`${API_BASE_URL}/admin-users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${admin.session.sessionId}`,
        },
        body: JSON.stringify(payload),
      });

      const data = (await resp.json()) as UpdateAdminUserResponse;

      if (!resp.ok) {
        this.editError.set(`Failed to update user (${resp.status}).`);
        return;
      }

      if (data.success === false) {
        this.editError.set(data.message ?? `Failed to update user (${resp.status}).`);
        return;
      }

      this.closeEditModal();
      await this.loadUsers();
      await this.loadAnalytics();
    } catch {
      this.editError.set('Network error.');
    } finally {
      this.savingEdit.set(false);
    }
  }

  // ---------- DELETE ----------
  openDeleteModal(user: AdminUser) {
    this.deleteError.set(null);
    this.deleteUsername.set(user.username);
    this.showDeleteModal.set(true);
  }

  closeDeleteModal() {
    this.showDeleteModal.set(false);
  }

  async confirmDelete() {
    this.deleteError.set(null);

    const admin = this.adminSession();
    if (!admin) {
      this.deleteError.set('Session expired.');
      return;
    }

    const username = this.deleteUsername().trim();
    if (!username) {
      this.deleteError.set('Missing username.');
      return;
    }

    this.deletingUser.set(true);

    try {
      const resp = await fetch(`${API_BASE_URL}/admin-users`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${admin.session.sessionId}`,
        },
        body: JSON.stringify({ username } as DeleteAdminUserRequest),
      });

      const data = (await resp.json()) as DeleteAdminUserResponse;

      if (!resp.ok) {
        this.deleteError.set(`Failed to delete user (${resp.status}).`);
        return;
      }

      if (data.success === false) {
        this.deleteError.set(data.message ?? `Failed to delete user (${resp.status}).`);
        return;
      }

      this.closeDeleteModal();
      await this.loadUsers();
      await this.loadAnalytics();
    } catch {
      this.deleteError.set('Network error.');
    } finally {
      this.deletingUser.set(false);
    }
  }

  // ---------- LOAD ----------
  async reload() {
    await this.loadUsers();
    await this.loadAnalytics();
  }

  private async loadUsers() {
    this.error.set(null);

    const admin = this.adminSession();
    if (!admin) {
      this.error.set('Not logged in as admin.');
      return;
    }

    this.loading.set(true);

    try {
      const resp = await fetch(`${API_BASE_URL}/admin-users`, {
        headers: {
          Authorization: `Bearer ${admin.session.sessionId}`,
        },
      });

      const data = (await resp.json()) as AdminUsersResponse;

      if (!resp.ok) {
        this.error.set('Failed to load users.');
        return;
      }

      if (data.success === false) {
        this.error.set(data.message ?? 'Failed to load users.');
        return;
      }

      this.users.set(data.users);
    } catch {
      this.error.set('Network error.');
    } finally {
      this.loading.set(false);
    }
  }
}
