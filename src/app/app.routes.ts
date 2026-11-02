import { Routes } from '@angular/router';
import { CoursesListPageComponent } from './pages/courses-list-page.component';
import { courseAccessGuard } from './course-access/course-access.guard';
import { adminGuard } from './admin/admin.guard';

// Only the course list is loaded eagerly; every other page is a lazy chunk
// so the course content does not push the initial bundle over budget.
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesListPageComponent },

  {
    path: 'test-site',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'input-forms' },
      {
        path: 'input-forms',
        loadComponent: () =>
          import('./pages/playwright-test-site-page.component').then(
            (m) => m.PlaywrightTestSitePageComponent,
          ),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./pages/playwright-test-site-table-page.component').then(
            (m) => m.PlaywrightTestSiteTablePageComponent,
          ),
      },
    ],
  },

  {
    path: 'courses/:slug',
    loadComponent: () =>
      import('./pages/course-details-page.component').then((m) => m.CourseDetailsPageComponent),
    canActivate: [courseAccessGuard],
  },

  {
    path: 'admin',
    loadComponent: () => import('./admin/admin-page.component').then((m) => m.AdminPageComponent),
    canActivate: [adminGuard],
  },
  {
    path: 'admin/test-runs/:runId',
    loadComponent: () =>
      import('./admin/admin-test-run-details-page.component').then(
        (m) => m.AdminTestRunDetailsPageComponent,
      ),
    canActivate: [adminGuard],
  },
  {
    path: 'candidate-scorer',
    loadComponent: () =>
      import('./pages/automation-candidate/automation-candidate-scorer-page.component').then(
        (m) => m.AutomationCandidateScorerPageComponent,
      ),
  },
  {
    path: 'reports/:runId',
    loadComponent: () =>
      import('./pages/reports-redirect-page.component').then((m) => m.ReportsRedirectPageComponent),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports-redirect-page.component').then((m) => m.ReportsRedirectPageComponent),
  },
  { path: '**', redirectTo: 'courses' },
];
