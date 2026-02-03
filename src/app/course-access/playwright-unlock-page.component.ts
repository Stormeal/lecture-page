import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PLAYWRIGHT_ACCESS } from './playwright-access.config';

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
            <h1 class="text-lg font-bold text-gray-900">Enter course password</h1>
            <p class="mt-1 text-sm text-gray-600">
              This course is protected. Enter the password to continue.
            </p>
          </div>

          <div class="px-6 py-5 space-y-4">
            <label class="block">
              <span class="text-sm font-semibold text-gray-700">Password</span>
              <input
                class="mt-2 w-full rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400"
                [type]="show() ? 'text' : 'password'"
                [value]="password()"
                (input)="onPasswordInput($event)"
                (keydown.enter)="unlock()"
                autocomplete="off"
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
                     hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40"
              (click)="unlock()"
            >
              Unlock
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

  password = signal('');
  show = signal(false);
  error = signal<string | null>(null);

  redirect = computed(
    () => this.route.snapshot.queryParamMap.get('redirect') ?? '/courses/playwright',
  );

  unlock() {
    this.error.set(null);

    const ok = this.password().trim() === PLAYWRIGHT_ACCESS.password;
    if (!ok) {
      this.error.set('Wrong password. Try again.');
      return;
    }

    localStorage.setItem(PLAYWRIGHT_ACCESS.storageKey, '1');
    this.router.navigateByUrl(this.redirect());
  }

  onPasswordInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.password.set(value);
  }
}
