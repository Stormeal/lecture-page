import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {
  clearCourseSession,
  isCourseSessionValid,
  readCourseSession,
  touchCourseSession,
} from './auth-session.storage';
import { CourseUnlockDialogService } from './course-unlock-dialog.service';

export const courseAccessGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const unlockDialog = inject(CourseUnlockDialogService);

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

  const unlocked = await unlockDialog.open(slug);

  if (unlocked) {
    const newSession = readCourseSession(slug);
    if (newSession && isCourseSessionValid(newSession)) {
      touchCourseSession(slug, newSession);
      return true;
    }

    // Safety fallback: if something went wrong, send user to courses
    return router.createUrlTree(['/courses']);
  }

  // User cancelled the dialog (or dismissed it)
  return router.createUrlTree(['/courses']);
};
