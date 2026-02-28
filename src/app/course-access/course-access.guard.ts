import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {
  clearCourseSession,
  isCourseSessionValid,
  readCourseSession,
  touchCourseSession,
} from './auth-session.storage';

export const courseAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const slug = route.paramMap.get('slug');
  if (!slug) return true;

  const session = readCourseSession(slug);
  const valid = isCourseSessionValid(session);

  if (valid && session) {
    // Mark activity so shared machines auto-logout after 5 days of inactivity
    touchCourseSession(slug, session);
    return true;
  }

  if (session) clearCourseSession(slug);

  return router.createUrlTree([`/courses/${slug}/unlock`], {
    queryParams: { redirect: state.url },
  });
};
