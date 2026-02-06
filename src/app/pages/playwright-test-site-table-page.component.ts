import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, Info, Trash2 } from 'lucide-angular';

type UserRole = 'Admin' | 'Member' | 'Manager' | 'Guest';
type UserStatus = 'Active' | 'Invited' | 'Suspended';

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

@Component({
  selector: 'app-playwright-test-site-table-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-orange-50">
      <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a
            routerLink="/courses/playwright"
            class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 rounded-md px-2 py-1 -ml-2"
            data-testid="testsite-back-to-courses"
          >
            <span aria-hidden="true">←</span>
            <span>Courses</span>
          </a>

          <h1 class="text-base sm:text-lg font-bold text-slate-900" data-testid="testsite-title">
            Playwright Test Site (Table)
          </h1>

          <div class="flex items-center gap-2">
            <a
              routerLink="/test-site/input-forms"
              class="inline-flex items-center rounded-md bg-white border border-slate-300 px-3 py-1.5 text-slate-900 text-sm font-semibold
                     hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
              data-testid="nav-input-forms"
            >
              Input forms
            </a>
            <a
              routerLink="/test-site/table"
              class="inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-white text-sm font-semibold
                     hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/40"
              aria-current="page"
              data-testid="nav-table"
            >
              Table
            </a>
          </div>
        </div>
      </header>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 pb-20">
        <!-- Add user -->
        <section
          class="rounded-xl bg-white shadow border border-slate-200 p-6"
          data-testid="user-admin"
        >
          <p class="text-sm font-semibold text-slate-900">Add user</p>
          <p class="mt-1 text-xs text-slate-500">Creates a new row for hover/filter practice.</p>

          <form
            class="mt-4 grid grid-cols-1 sm:grid-cols-6 gap-3 items-end"
            [formGroup]="userForm"
            (ngSubmit)="addUser()"
            data-testid="add-user-form"
          >
            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-700">Name</label>
              <input
                class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                formControlName="name"
                data-testid="add-user-name"
              />
            </div>

            <div class="sm:col-span-2">
              <label class="block text-xs font-semibold text-slate-700">Email</label>
              <input
                class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                formControlName="email"
                data-testid="add-user-email"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700">Role</label>
              <select
                class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white"
                formControlName="role"
                data-testid="add-user-role"
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Member</option>
                <option>Guest</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-700">Status</label>
              <select
                class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white"
                formControlName="status"
                data-testid="add-user-status"
              >
                <option>Active</option>
                <option>Invited</option>
                <option>Suspended</option>
              </select>
            </div>

            <button
              type="submit"
              class="inline-flex w-fit items-center justify-center rounded-md bg-orange-400 px-5 py-2.5 text-white text-sm font-semibold
                     hover:bg-orange-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/40"
              data-testid="add-user-submit"
            >
              Add user
            </button>
          </form>
        </section>

        <!-- Directory -->
        <section class="mt-6 rounded-xl bg-white shadow border border-slate-200 p-6">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-sm font-semibold text-slate-900">
                User Directory (Hover + Filter Playground)
              </p>
              <p class="mt-1 text-xs text-slate-500">
                Designed for practicing locator.filter() and hover().
              </p>
            </div>
          </div>

          @if (openedUserMessage()) {
            <div
              class="mt-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-blue-900 text-sm"
              role="status"
              data-testid="user-open-toast"
            >
              {{ openedUserMessage() }}
            </div>
          }

          <div class="mt-4 space-y-2" data-testid="user-list">
            @for (user of users(); track user.id) {
              <div
                class="group rounded-lg border border-slate-200 p-3 flex items-center justify-between gap-4"
                data-testid="user-row"
              >
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <p class="font-semibold text-slate-900" data-testid="user-name">
                      {{ user.name }}
                    </p>

                    <span
                      class="text-xs rounded-full px-2 py-0.5 border"
                      [class]="
                        user.role === 'Admin'
                          ? 'bg-orange-50 border-orange-200 text-orange-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      "
                      [attr.data-testid]="'badge-role-' + user.role.toLowerCase()"
                    >
                      {{ user.role }}
                    </span>

                    <span
                      class="text-xs rounded-full px-2 py-0.5 border bg-slate-50 border-slate-200 text-slate-700"
                      [attr.data-testid]="'badge-status-' + user.status.toLowerCase()"
                    >
                      {{ user.status }}
                    </span>

                    <button
                      type="button"
                      class="text-slate-500 hover:text-slate-900"
                      (mouseenter)="tooltipUserId.set(user.id)"
                      (mouseleave)="tooltipUserId.set(null)"
                      aria-label="Info"
                      data-testid="user-info"
                    >
                      <lucide-icon [img]="InfoIcon" class="w-4 h-4"></lucide-icon>
                    </button>

                    @if (tooltipUserId() === user.id) {
                      <div
                        class="ml-2 text-xs bg-slate-900 text-white rounded px-2 py-1"
                        role="tooltip"
                        data-testid="user-tooltip"
                      >
                        {{ user.email }} • Status: {{ user.status }}
                      </div>
                    }
                  </div>

                  <p class="text-xs text-slate-500 truncate" data-testid="user-email">
                    {{ user.email }}
                  </p>
                </div>

                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    class="text-xs rounded-md border border-slate-300 px-3 py-1.5 hover:bg-slate-50"
                    (click)="openUser(user)"
                    data-testid="user-open"
                  >
                    Open
                  </button>

                  <select
                    class="text-xs rounded-md border border-slate-300 px-2 py-1 bg-white"
                    [value]="user.role"
                    (change)="updateUserRole(user.id, $any($event.target).value)"
                    data-testid="user-role"
                  >
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Member</option>
                    <option>Guest</option>
                  </select>

                  <select
                    class="text-xs rounded-md border border-slate-300 px-2 py-1 bg-white"
                    [value]="user.status"
                    (change)="updateUserStatus(user.id, $any($event.target).value)"
                    data-testid="user-status"
                  >
                    <option>Active</option>
                    <option>Invited</option>
                    <option>Suspended</option>
                  </select>

                  <button
                    type="button"
                    class="text-xs rounded-md bg-red-600 text-white px-3 py-1.5 hover:bg-red-700
                                 opacity-0 group-hover:opacity-100 transition-opacity"
                    (click)="removeUser(user.id)"
                    data-testid="user-remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            }
          </div>
        </section>
      </main>
    </div>
  `,
})
export class PlaywrightTestSiteTablePageComponent {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  readonly InfoIcon = Info;
  readonly TrashIcon = Trash2;

  openedUserMessage = signal<string | null>(null);

  users = signal<User[]>([
    { id: 'u1', name: 'Alex Storm', email: 'alex@storm.dev', role: 'Admin', status: 'Active' },
    { id: 'u2', name: 'Ada Lovelace', email: 'ada@calc.io', role: 'Member', status: 'Invited' },
    { id: 'u3', name: 'Grace Hopper', email: 'grace@navy.mil', role: 'Member', status: 'Active' },
  ]);

  tooltipUserId = signal<string | null>(null);

  userForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['Member' as UserRole, [Validators.required]],
    status: ['Invited' as UserStatus, [Validators.required]],
  });

  openUser(user: User) {
    this.openedUserMessage.set(`Opened: ${user.name}`);
    setTimeout(() => this.openedUserMessage.set(null), 1500);
  }

  private nextId() {
    return `u_${crypto?.randomUUID?.() ?? Math.random().toString(16).slice(2)}`;
  }

  addUser() {
    console.log('Add user clicked', this.userForm.getRawValue(), this.userForm.valid);

    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) return;

    const { name, email, role, status } = this.userForm.getRawValue();
    this.users.update((list) => [...list, { id: this.nextId(), name, email, role, status }]);

    this.userForm.reset({
      name: '',
      email: '',
      role: 'Member' as UserRole,
      status: 'Invited' as UserStatus,
    });
  }

  removeUser(id: string) {
    this.users.update((list) => list.filter((u) => u.id !== id));
  }

  updateUserRole(id: string, role: UserRole) {
    this.users.update((list) => list.map((u) => (u.id === id ? { ...u, role } : u)));
  }

  updateUserStatus(id: string, status: UserStatus) {
    this.users.update((list) => list.map((u) => (u.id === id ? { ...u, status } : u)));
  }
}
