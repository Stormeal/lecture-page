import { Routes } from '@angular/router';
import { CoursesListPageComponent } from './pages/courses-list-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page.component';
import { courseAccessGuard } from './course-access/course-access.guard';
import { PlaywrightTestSitePageComponent } from './pages/playwright-test-site-page.component';
import { PlaywrightTestSiteTablePageComponent } from './pages/playwright-test-site-table-page.component';
import { ReportsRedirectPageComponent } from './pages/reports-redirect-page.component';
import { AutomationCandidateScorerPageComponent } from './pages/automation-candidate/automation-candidate-scorer-page.component';
import { AdminPageComponent } from './admin/admin-page.component';
import { AdminTestRunDetailsPageComponent } from './admin/admin-test-run-details-page.component';
import { adminGuard } from './admin/admin.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesListPageComponent },

  {
    path: 'test-site',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'input-forms' },
      { path: 'input-forms', component: PlaywrightTestSitePageComponent },
      { path: 'table', component: PlaywrightTestSiteTablePageComponent },
    ],
  },

  {
    path: 'courses/:slug',
    component: CourseDetailsPageComponent,
    canActivate: [courseAccessGuard],
  },

  { path: 'admin', component: AdminPageComponent, canActivate: [adminGuard] },
  { path: 'admin/test-runs/:runId', component: AdminTestRunDetailsPageComponent, canActivate: [adminGuard] },
  { path: 'candidate-scorer', component: AutomationCandidateScorerPageComponent },
  { path: 'reports', component: ReportsRedirectPageComponent },
  { path: '**', redirectTo: 'courses' },
];
