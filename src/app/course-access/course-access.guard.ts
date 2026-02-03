import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PLAYWRIGHT_ACCESS } from './playwright-access.config';

export const courseAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const slug = route.paramMap.get('slug');
  if (slug !== 'playwright') return true;

  const unlocked = localStorage.getItem(PLAYWRIGHT_ACCESS.storageKey) === '1';
  if (unlocked) return true;

  // Redirect back to courses list, and ask it to show the unlock modal
  return router.createUrlTree(['/courses'], {
    queryParams: { unlock: 'playwright', redirect: state.url },
  });
};
