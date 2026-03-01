import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { findAnyAdminSession } from '../course-access/auth-session.storage';

type AdminUser = {
  username: string;
  active: boolean;
  role: 'student' | 'teacher' | 'admin';
  notes: string;
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

const API_BASE_URL = 'https://lecture-page-api.vercel.app/api';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen xp-background p-6">
      <div class="max-w-5xl mx-auto">
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
              (click)="openModal()"
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

        <!-- USERS TABLE -->
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
                      <th class="px-4 py-3 font-semibold">Active</th>
                      <th class="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    @for (u of users(); track u.username) {
                      <tr>
                        <td class="px-4 py-3 font-medium text-gray-900">{{ u.username }}</td>
                        <td class="px-4 py-3">{{ u.role }}</td>
                        <td class="px-4 py-3">{{ u.active ? 'Active' : 'Disabled' }}</td>
                        <td class="px-4 py-3">{{ u.notes || '—' }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            }
          }
        </div>
      </div>
    </div>

    <!-- MODAL -->
    @if (showModal()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="w-full max-w-lg rounded-lg bg-white shadow-lg p-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Create user</h2>
            <button class="text-gray-500 hover:text-gray-800" (click)="closeModal()">✕</button>
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
          </div>

          <div class="mt-6 flex justify-end gap-3">
            <button
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm"
              (click)="closeModal()"
            >
              Cancel
            </button>

            <button
              class="rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
              (click)="createUser()"
              [disabled]="creatingUser()"
            >
              Create
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

  showModal = signal(false);
  creatingUser = signal(false);
  createError = signal<string | null>(null);

  newUsername = signal('');
  newPassword = signal('');
  newRole = signal<AdminUser['role']>('student');
  availableCourses = signal<string[]>(['fundamental-dev', 'playwright']);
  selectedCourses = signal<string[]>([]);

  private adminSession = computed(() => findAnyAdminSession());

  constructor() {
    effect(() => {
      void this.loadUsers();
    });
  }

  openModal() {
    this.resetForm();
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  resetForm() {
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

      const data = await resp.json();

      if (!resp.ok || !data.success) {
        this.createError.set(data?.message ?? 'Failed to create user.');
        return;
      }

      this.closeModal();
      await this.loadUsers();
    } catch {
      this.createError.set('Network error.');
    } finally {
      this.creatingUser.set(false);
    }
  }

  async reload() {
    await this.loadUsers();
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

      // At this point TS knows data is { success: true; users: AdminUser[] }
      this.users.set(data.users);
    } catch {
      this.error.set('Network error.');
    } finally {
      this.loading.set(false);
    }
  }
}
