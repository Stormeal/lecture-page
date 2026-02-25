import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PLAYWRIGHT_ACCESS } from './playwright-access.config';
import {
  clearPlaywrightSession,
  isPlaywrightSessionValid,
  readPlaywrightSession,
  touchPlaywrightSession,
} from './auth-session.storage';

export const courseAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const slug = route.paramMap.get('slug');
  if (slug !== PLAYWRIGHT_ACCESS.courseSlug) return true;

  const session = readPlaywrightSession();
  const valid = isPlaywrightSessionValid(session);

  if (valid && session) {
    // Mark activity so shared machines auto-logout after 5 days of inactivity
    touchPlaywrightSession(session);
    return true;
  }

  if (session) clearPlaywrightSession();

  return router.createUrlTree(['/courses/playwright/unlock'], {
    queryParams: { redirect: state.url },
  });
};
