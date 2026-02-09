import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-playwright-test-site-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="h-screen flex flex-col bg-orange-50">
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

      <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 flex-1 overflow-hidden">
        <div class="h-full flex flex-col py-8 pb-20 min-h-0">
          <!-- Context card (fixed, not scrollable) -->
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

          <!-- Form + side panel (fills remaining height) -->
          <div class="mt-2 flex-1 min-h-0 overflow-hidden">
            <div class="h-full grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 min-h-0">
              <!-- Form pane (scroll container) -->
              <section
                class="rounded-xl bg-white shadow border border-slate-200 p-4 h-full min-h-0 overflow-hidden flex flex-col"
              >
                <div class="flex-1 min-h-0 overflow-y-auto">
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
                        <label class="block text-sm font-semibold text-slate-900" for="name"
                          >Name</label
                        >
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
                      <label class="block text-sm font-semibold text-slate-900" for="clearances"
                        >Clearances</label
                      >
                      <select
                        id="clearances"
                        multiple
                        class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900
                               focus:outline-none focus:ring-4 focus:ring-blue-400/25 bg-white"
                        formControlName="clearances"
                        data-testid="contact-clearances"
                      >
                        <option value="alpha">Alpha</option>
                        <option value="bravo">Bravo</option>
                        <option value="charlie">Charlie</option>
                        <option value="delta">Delta</option>
                      </select>

                      <div class="mt-1 flex items-center justify-between">
                        @if (showError('clearances')) {
                          <p class="text-xs text-red-600" data-testid="error-clearances">
                            Select at least one clearance.
                          </p>
                        } @else {
                          <span class="text-xs text-slate-500"
                            >Hold Ctrl/Cmd to select multiple.</span
                          >
                        }
                      </div>

                      <div class="mt-2 flex flex-wrap gap-2" data-testid="clearances-chips">
                        @if ((form.value.clearances?.length ?? 0) > 0) {
                          @for (c of form.value.clearances ?? []; track c) {
                            <span
                              class="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-800"
                              data-testid="clearance-chip"
                              >{{ c }}</span
                            >
                          }
                        } @else {
                          <span class="text-xs text-slate-500" data-testid="clearances-empty">
                            No clearances selected.
                          </span>
                        }
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
                      />
                      <label for="newsletter" class="text-sm text-slate-700">
                        Subscribe to updates (checkbox target for Playwright)
                      </label>
                    </div>

                    <div class="flex items-start gap-3">
                      <input
                        id="acceptTerms"
                        type="checkbox"
                        class="mt-1"
                        formControlName="acceptTerms"
                        data-testid="contact-accept-terms"
                      />
                      <label for="acceptTerms" class="text-sm text-slate-700">
                        Accept mission terms (required)
                      </label>
                    </div>
                    @if (showError('acceptTerms')) {
                      <p class="text-xs text-red-600" data-testid="error-acceptTerms">
                        You must accept the mission terms.
                      </p>
                    }

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
                </div>
              </section>

              <!-- Side panel (non-scrolling) -->
              <aside class="rounded-xl bg-white shadow border border-slate-200 p-6 h-fill">
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
                    <span class="text-slate-500">Clearances</span>
                    <span class="font-semibold text-slate-900" data-testid="preview-clearances">{{
                      form.value.clearances?.length ? form.value.clearances?.join(', ') : '—'
                    }}</span>
                  </div>
                  <div class="flex justify-between gap-3">
                    <span class="text-slate-500">Newsletter</span>
                    <span class="font-semibold text-slate-900" data-testid="preview-newsletter">
                      {{ form.value.newsletter ? 'Yes' : 'No' }}
                    </span>
                  </div>
                  <div class="flex justify-between gap-3">
                    <span class="text-slate-500">Mission terms</span>
                    <span class="font-semibold text-slate-900" data-testid="preview-terms">
                      {{ form.value.acceptTerms ? 'Accepted' : 'Not accepted' }}
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
          </div>
        </div>
      </main>
    </div>
  `,
})
export class PlaywrightTestSitePageComponent {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);

  isSubmitting = signal(false);
  submitAttempted = signal(false);
  successMessage = signal<string | null>(null);

  fromCourseSlug = computed(() => this.route.snapshot.queryParamMap.get('from') ?? '');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    topic: ['', [Validators.required]],
    priority: ['normal' as 'low' | 'normal' | 'high'],
    clearances: [<string[]>[], [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    newsletter: [false],
    acceptTerms: [false, [Validators.requiredTrue]],
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
      clearances: ['alpha', 'charlie'],
      message: 'Hello! This is a demo message for Playwright testing. Please ignore 🙂',
      newsletter: true,
      acceptTerms: true,
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
      clearances: [],
      message: '',
      newsletter: false,
      acceptTerms: false,
    });
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
}
