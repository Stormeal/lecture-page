import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PLAYWRIGHT_ACCESS } from './playwright-access.config';
import { writePlaywrightSession } from './auth-session.storage';

type AuthLoginResponse =
  | { success: true; sessionId: string; expiresAt: string }
  | { success: false; message?: string };

@Component({
  selector: 'app-playwright-unlock-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-gray-100">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black/40 backdrop-blur-sm"></div>

      <!-- Modal -->
      <div class="fixed inset-0 grid place-items-center p-4">
        <div
          class="w-full max-w-md rounded-lg bg-white shadow-xl border border-gray-200 overflow-hidden"
        >
          <div class="px-6 py-4 border-b border-gray-200">
            <h1 class="text-lg font-bold text-gray-900">Sign in</h1>
            <p class="mt-1 text-sm text-gray-600">
              This course is protected. Enter your credentials to continue.
            </p>
          </div>

          <div class="px-6 py-5 space-y-4">
            <label class="block">
              <span class="text-sm font-semibold text-gray-700">Username</span>
              <input
                class="mt-2 w-full rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400"
                type="text"
                [value]="username()"
                (input)="onUsernameInput($event)"
                (keydown.enter)="unlock()"
                autocomplete="username"
              />
            </label>

            <label class="block">
              <span class="text-sm font-semibold text-gray-700">Password</span>
              <input
                class="mt-2 w-full rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400"
                [type]="show() ? 'text' : 'password'"
                [value]="password()"
                (input)="onPasswordInput($event)"
                (keydown.enter)="unlock()"
                autocomplete="current-password"
              />
            </label>

            <label class="inline-flex items-center gap-2 text-sm text-gray-700 select-none">
              <input
                type="checkbox"
                class="rounded"
                [checked]="show()"
                (change)="show.set(!show())"
              />
              Show password
            </label>

            @if (error()) {
              <div
                class="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 text-sm"
              >
                {{ error() }}
              </div>
            }
          </div>

          <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between gap-3">
            <a
              routerLink="/courses"
              class="text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              Cancel
            </a>

            <button
              type="button"
              class="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white font-semibold
                     hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40
                     disabled:opacity-60 disabled:cursor-not-allowed"
              [disabled]="loading()"
              (click)="unlock()"
            >
              {{ loading() ? 'Signing in…' : 'Unlock' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PlaywrightUnlockPageComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  username = signal('');
  password = signal('');
  show = signal(false);
  loading = signal(false);
  error = signal<string | null>(null);

  redirect = computed(
    () => this.route.snapshot.queryParamMap.get('redirect') ?? '/courses/playwright',
  );

  async unlock() {
    this.error.set(null);

    const username = this.username().trim();
    const password = this.password();

    if (!username || !password) {
      this.error.set('Please enter both username and password.');
      return;
    }

    this.loading.set(true);

    try {
      const resp = await fetch(`${PLAYWRIGHT_ACCESS.apiBaseUrl}/auth-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (resp.status === 401) {
        this.error.set('Wrong username or password. Try again.');
        return;
      }

      if (!resp.ok) {
        this.error.set(`Sign-in failed (${resp.status}). Try again.`);
        return;
      }

      const data = (await resp.json()) as AuthLoginResponse;

      if (!('success' in data) || data.success !== true) {
        this.error.set(data?.message ?? 'Sign-in failed. Try again.');
        return;
      }

      writePlaywrightSession({
        sessionId: data.sessionId,
        expiresAt: data.expiresAt,
        username,
        lastSeenAt: new Date().toISOString(),
      });

      await this.router.navigateByUrl(this.redirect());
    } catch {
      this.error.set('Network error. Try again.');
    } finally {
      this.loading.set(false);
    }
  }

  onUsernameInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.username.set(value);
  }

  onPasswordInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.password.set(value);
  }
}
