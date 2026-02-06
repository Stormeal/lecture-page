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
  selector: 'app-playwright-test-site-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-orange-50">
      <!-- Top bar -->
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
            Playwright Test Site
          </h1>

          <div class="w-[84px] sm:w-[104px]"></div>
        </div>
      </header>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8 pb-20">
        <!-- Context card -->
        <section class="rounded-xl bg-white shadow border border-slate-200 p-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p class="text-sm font-semibold text-slate-900">Contact Us (Test Form)</p>
              <p class="mt-1 text-sm text-slate-600">
                This page is intentionally packed with stable selectors for Playwright.
              </p>

              @if (fromCourseSlug()) {
                <p class="mt-2 text-xs text-slate-500">
                  Opened from course:
                  <span class="font-semibold" data-testid="testsite-from-slug">{{
                    fromCourseSlug()
                  }}</span>
                </p>
              }
            </div>

            <div class="flex items-center gap-2">
              <button
                type="button"
                class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white font-semibold
                       hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/40 disabled:opacity-60"
                (click)="fillDemo()"
                data-testid="testsite-fill-demo"
              >
                Fill demo
              </button>
              <button
                type="button"
                class="inline-flex items-center rounded-md bg-white border border-slate-300 px-4 py-2 text-slate-900 font-semibold
                       hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 disabled:opacity-60"
                (click)="reset()"
                [disabled]="isSubmitting()"
                data-testid="testsite-reset"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <!-- Form + side panel -->
        <div class="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          <!-- Form -->
          <section class="rounded-xl bg-white shadow border border-slate-200 p-6">
            <form
              [formGroup]="form"
              (ngSubmit)="submit()"
              class="space-y-5"
              data-testid="contact-form"
            >
              <!-- Success banner -->
              @if (successMessage()) {
                <div
                  class="rounded-md border border-green-200 bg-green-50 p-4 text-green-900"
                  role="status"
                  data-testid="submit-success"
                >
                  <p class="font-semibold">Submitted!</p>
                  <p class="text-sm mt-1">{{ successMessage() }}</p>
                </div>
              }

              <!-- Error banner -->
              @if (submitAttempted() && form.invalid) {
                <div
                  class="rounded-md border border-red-200 bg-red-50 p-4 text-red-900"
                  role="alert"
                  data-testid="submit-error"
                >
                  <p class="font-semibold">Please fix the errors below.</p>
                  <p class="text-sm mt-1">Some required fields are missing or invalid.</p>
                </div>
              }

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-900" for="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900
                           focus:outline-none focus:ring-4 focus:ring-blue-400/25"
                    placeholder="Ada Lovelace"
                    formControlName="name"
                    data-testid="contact-name"
                  />
                  @if (showError('name')) {
                    <p class="mt-1 text-xs text-red-600" data-testid="error-name">
                      Name is required (min 2 chars).
                    </p>
                  }
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-900" for="email"
                    >Email</label
                  >
                  <input
                    id="email"
                    type="email"
                    class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900
                           focus:outline-none focus:ring-4 focus:ring-blue-400/25"
                    placeholder="ada@example.com"
                    formControlName="email"
                    data-testid="contact-email"
                  />
                  @if (showError('email')) {
                    <p class="mt-1 text-xs text-red-600" data-testid="error-email">
                      Enter a valid email.
                    </p>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-slate-900" for="topic"
                    >Topic</label
                  >
                  <select
                    id="topic"
                    class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900
                           focus:outline-none focus:ring-4 focus:ring-blue-400/25 bg-white"
                    formControlName="topic"
                    data-testid="contact-topic"
                  >
                    <option value="">Select…</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  @if (showError('topic')) {
                    <p class="mt-1 text-xs text-red-600" data-testid="error-topic">
                      Topic is required.
                    </p>
                  }
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-900" for="priority"
                    >Priority</label
                  >
                  <div class="mt-2 flex items-center gap-4" data-testid="contact-priority">
                    <label class="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        formControlName="priority"
                        value="low"
                        data-testid="priority-low"
                      />
                      Low
                    </label>
                    <label class="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        formControlName="priority"
                        value="normal"
                        data-testid="priority-normal"
                      />
                      Normal
                    </label>
                    <label class="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        formControlName="priority"
                        value="high"
                        data-testid="priority-high"
                      />
                      High
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-900" for="message"
                  >Message</label
                >
                <textarea
                  id="message"
                  rows="6"
                  class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900
                         focus:outline-none focus:ring-4 focus:ring-blue-400/25"
                  placeholder="Type your message…"
                  formControlName="message"
                  data-testid="contact-message"
                ></textarea>
                <div class="mt-1 flex items-center justify-between">
                  @if (showError('message')) {
                    <p class="text-xs text-red-600" data-testid="error-message">
                      Message is required (min 10 chars).
                    </p>
                  } @else {
                    <span class="text-xs text-slate-500">Min 10 characters.</span>
                  }

                  <span class="text-xs text-slate-500" data-testid="message-length">
                    {{ messageLength() }}/500
                  </span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <input
                  id="newsletter"
                  type="checkbox"
                  class="mt-1"
                  formControlName="newsletter"
                  data-testid="contact-newsletter"
                />
                <label for="newsletter" class="text-sm text-slate-700">
                  Subscribe to updates (checkbox target for Playwright)
                </label>
              </div>

              <div class="flex items-center gap-3">
                <button
                  type="submit"
                  class="inline-flex items-center rounded-md bg-orange-400 px-5 py-2.5 text-white font-semibold
                         hover:bg-orange-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40
                         disabled:opacity-60"
                  [disabled]="isSubmitting()"
                  data-testid="contact-submit"
                >
                  @if (isSubmitting()) {
                    <span data-testid="submit-loading">Submitting…</span>
                  } @else {
                    <span>Submit</span>
                  }
                </button>

                <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-white border border-slate-300 px-4 py-2.5 text-slate-900 font-semibold
                         hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                  (click)="simulateServerError()"
                  [disabled]="isSubmitting()"
                  data-testid="simulate-error"
                >
                  Simulate error
                </button>
              </div>
            </form>
          </section>

          <!-- Side panel: echoes values so you can assert text easily -->
          <aside class="rounded-xl bg-white shadow border border-slate-200 p-6 h-fit">
            <p class="text-sm font-semibold text-slate-900">Live Preview</p>
            <p class="mt-1 text-xs text-slate-500">
              Handy for Playwright assertions (text content updates as you type).
            </p>

            <div class="mt-4 space-y-3 text-sm">
              <div class="flex justify-between gap-3">
                <span class="text-slate-500">Name</span>
                <span class="font-semibold text-slate-900" data-testid="preview-name">{{
                  form.value.name || '—'
                }}</span>
              </div>
              <div class="flex justify-between gap-3">
                <span class="text-slate-500">Email</span>
                <span class="font-semibold text-slate-900" data-testid="preview-email">{{
                  form.value.email || '—'
                }}</span>
              </div>
              <div class="flex justify-between gap-3">
                <span class="text-slate-500">Topic</span>
                <span class="font-semibold text-slate-900" data-testid="preview-topic">{{
                  form.value.topic || '—'
                }}</span>
              </div>
              <div class="flex justify-between gap-3">
                <span class="text-slate-500">Priority</span>
                <span class="font-semibold text-slate-900" data-testid="preview-priority">{{
                  form.value.priority
                }}</span>
              </div>
              <div class="flex justify-between gap-3">
                <span class="text-slate-500">Newsletter</span>
                <span class="font-semibold text-slate-900" data-testid="preview-newsletter">
                  {{ form.value.newsletter ? 'Yes' : 'No' }}
                </span>
              </div>
            </div>

            <hr class="my-5 border-slate-200" />

            <p class="text-xs font-semibold text-slate-700">Debug payload</p>
            <pre
              class="mt-2 text-xs bg-slate-900 text-slate-100 rounded-md p-3 overflow-x-auto"
              data-testid="preview-json"
              >{{ payloadJson() }}</pre
            >
          </aside>
        </div>

        <!-- Exercise 4 playground: Hover + Filter -->
        <section
          class="mt-6 rounded-xl bg-white shadow border border-slate-200 p-6"
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

        <section
          class="mt-6 rounded-xl bg-white shadow border border-slate-200 p-6"
          data-testid="user-directory"
        >
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

          <!-- OPTION B: simple toast on "Open" -->
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
                (mouseenter)="hoveredUserId.set(user.id)"
                (mouseleave)="hoveredUserId.set(null)"
              >
                <!-- LEFT: identity + tooltip -->
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <p class="font-semibold text-slate-900" data-testid="user-name">
                      {{ user.name }}
                    </p>

                    <!-- Role badge -->
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

                    <!-- Status badge -->
                    <span
                      class="text-xs rounded-full px-2 py-0.5 border bg-slate-50 border-slate-200 text-slate-700"
                      [attr.data-testid]="'badge-status-' + user.status.toLowerCase()"
                    >
                      {{ user.status }}
                    </span>

                    <!-- Tooltip trigger -->
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

                <!-- RIGHT: actions -->
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
export class PlaywrightTestSitePageComponent {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  readonly InfoIcon = Info;
  readonly TrashIcon = Trash2;

  isSubmitting = signal(false);
  submitAttempted = signal(false);
  successMessage = signal<string | null>(null);

  // OPTION B: simple banner/toast when clicking "Open"
  openedUserMessage = signal<string | null>(null);

  users = signal<User[]>([
    { id: 'u1', name: 'Alex Storm', email: 'alex@storm.dev', role: 'Admin', status: 'Active' },
    { id: 'u2', name: 'Ada Lovelace', email: 'ada@calc.io', role: 'Member', status: 'Invited' },
    { id: 'u3', name: 'Grace Hopper', email: 'grace@navy.mil', role: 'Member', status: 'Active' },
  ]);

  hoveredUserId = signal<string | null>(null);
  tooltipUserId = signal<string | null>(null);

  fromCourseSlug = computed(() => this.route.snapshot.queryParamMap.get('from') ?? '');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    topic: ['', []],
    priority: ['normal' as 'low' | 'normal' | 'high'],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    newsletter: [false],
  });

  userForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['Member' as UserRole, [Validators.required]],
    status: ['Invited' as UserStatus, [Validators.required]],
  });

  messageLength = computed(() => this.form.value.message?.length ?? 0);

  payloadJson = computed(() =>
    JSON.stringify(
      {
        ...this.form.getRawValue(),
        from: this.fromCourseSlug() || null,
      },
      null,
      2,
    ),
  );

  showError(controlName: keyof typeof this.form.controls) {
    const c = this.form.controls[controlName];
    return (c.touched || this.submitAttempted()) && c.invalid;
  }

  fillDemo() {
    this.successMessage.set(null);
    this.form.setValue({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      topic: 'feedback',
      priority: 'high',
      message: 'Hello! This is a demo message for Playwright testing. Please ignore 🙂',
      newsletter: true,
    });
    this.form.markAllAsTouched();
  }

  reset() {
    this.successMessage.set(null);
    this.submitAttempted.set(false);
    this.form.reset({
      name: '',
      email: '',
      topic: '',
      priority: 'normal',
      message: '',
      newsletter: false,
    });
  }

  openUser(user: User) {
    this.openedUserMessage.set(`Opened: ${user.name}`);
    setTimeout(() => this.openedUserMessage.set(null), 1500);
  }

  removeUser(id: string) {
    this.users.update((list) => list.filter((u) => u.id !== id));
  }

  submit() {
    this.submitAttempted.set(true);
    this.successMessage.set(null);

    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.successMessage.set('We received your message. (Not really — this is a test site.) ✅');
    }, 650);
  }

  simulateServerError() {
    this.successMessage.set(null);
    this.submitAttempted.set(true);
    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.form.controls.email.setErrors({ server: true });
      this.form.controls.email.markAsTouched();
    }, 650);
  }

  private nextId() {
    return `u_${crypto?.randomUUID?.() ?? Math.random().toString(16).slice(2)}`;
  }

  addUser() {
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

  updateUserRole(id: string, role: UserRole) {
    this.users.update((list) => list.map((u) => (u.id === id ? { ...u, role } : u)));
  }

  updateUserStatus(id: string, status: UserStatus) {
    this.users.update((list) => list.map((u) => (u.id === id ? { ...u, status } : u)));
  }
}
