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
    <div class="min-h-screen relative overflow-hidden">
      <!-- XP-ish background -->
      <div
        class="absolute inset-0"
        style="
    background:
      radial-gradient(1100px 700px at 18% 20%, rgba(255,255,255,0.18), transparent 62%),
      radial-gradient(900px 560px at 82% 30%, rgba(255,255,255,0.12), transparent 62%),
      linear-gradient(180deg, #68a1fc 0%, #5891ec 100%);
  "
      ></div>

      <!-- Subtle vignette -->
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- Centered "login window" -->
      <div class="relative min-h-screen grid place-items-center p-6">
        <div class="w-full max-w-3xl">
          <!-- Top "title bar" -->
          <div
            class="rounded-t-xl border border-white/20 bg-white/10 backdrop-blur px-5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <div class="flex items-center justify-between">
              <div class="text-white font-semibold tracking-wide">Welcome</div>

              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-white/60"></span>
                <span class="h-3 w-3 rounded-full bg-white/40"></span>
                <span class="h-3 w-3 rounded-full bg-white/25"></span>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div
            class="rounded-b-xl border-x border-b border-white/20 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] overflow-hidden"
          >
            <div class="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
              <!-- Left panel -->
              <div class="p-6 sm:p-8 bg-gradient-to-b from-[#f5f9ff] to-[#e9f1ff]">
                <div class="flex items-center gap-4">
                  <!-- "User tile" -->
                  <div
                    class="h-16 w-16 rounded-lg border border-[#7aa7f0] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] grid place-items-center"
                  >
                    <div
                      class="h-12 w-12 rounded-md bg-gradient-to-b from-[#4aa3ff] to-[#1f6fdc] grid place-items-center"
                      aria-hidden="true"
                    >
                      <span class="text-white text-xl font-bold">👤</span>
                    </div>
                  </div>

                  <div class="min-w-0">
                    <div class="text-sm text-gray-600">Log on to</div>
                    <div class="text-xl font-bold text-gray-900 truncate">Lecture Page</div>
                  </div>
                </div>

                <div class="mt-6 rounded-lg border border-[#cfe0ff] bg-white p-4">
                  <div class="text-sm font-semibold text-gray-800">Course access</div>
                  <p class="mt-1 text-sm text-gray-600">
                    Use your assigned username and password to access the Playwright course.
                  </p>
                </div>

                <div class="mt-6 text-xs text-gray-500 leading-relaxed">
                  <div class="font-semibold text-gray-700">Tip</div>
                  <div>
                    On shared computers, use <span class="font-semibold">Logout</span> when you’re
                    done. Sessions also expire after inactivity.
                  </div>
                </div>
              </div>

              <!-- Right panel -->
              <div class="p-6 sm:p-8 bg-white">
                <h1 class="text-lg font-bold text-gray-900">Log On</h1>
                <p class="mt-1 text-sm text-gray-600">Type your username and password.</p>

                <div class="mt-6 space-y-4">
                  <label class="block">
                    <span class="text-sm font-semibold text-gray-700">User name</span>
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

                    <div class="mt-2 flex items-stretch gap-2">
                      <input
                        class="flex-1 rounded-md border border-gray-300 px-3 py-2
                               focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400"
                        [type]="show() ? 'text' : 'password'"
                        [value]="password()"
                        (input)="onPasswordInput($event)"
                        (keydown.enter)="unlock()"
                        autocomplete="current-password"
                      />

                      <!-- XP-ish "go" button -->
                      <button
                        type="button"
                        class="shrink-0 rounded-md border border-[#1f7a2e] px-3
                               bg-gradient-to-b from-[#46d96a] to-[#1db24b]
                               text-white font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]
                               hover:from-[#53e277] hover:to-[#19a845]
                               focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400/40
                               disabled:opacity-60 disabled:cursor-not-allowed"
                        [disabled]="loading()"
                        (click)="unlock()"
                        aria-label="Log on"
                        title="Log on"
                      >
                        →
                      </button>
                    </div>
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

                <div class="mt-6 flex items-center justify-between gap-3">
                  <a
                    routerLink="/courses"
                    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2
                           text-sm font-semibold text-gray-700 hover:bg-gray-50
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                  >
                    Cancel
                  </a>

                  <div class="text-sm text-gray-500">
                    @if (loading()) {
                      <span>Signing in…</span>
                    } @else {
                      <span>Press Enter to sign in</span>
                    }
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom "status bar" -->
            <div
              class="border-t border-gray-200 bg-gray-50 px-5 py-2 text-xs text-gray-500 flex items-center justify-between"
            >
              <span>Course: Playwright</span>
              <span>Lecture Page</span>
            </div>
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
