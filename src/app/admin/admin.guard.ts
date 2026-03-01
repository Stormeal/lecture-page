import type { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { findAnyAdminSession } from '../course-access/auth-session.storage';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const admin = findAnyAdminSession();
  if (admin) return true;

  return router.createUrlTree(['/courses'], {
    queryParams: { redirect: state.url },
  });
};
