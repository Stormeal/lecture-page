import { Routes } from '@angular/router';
import { CoursesListPageComponent } from './pages/courses-list-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page.component';
import { PlaywrightUnlockPageComponent } from './course-access/playwright-unlock-page.component';
import { courseAccessGuard } from './course-access/course-access.guard';
import { PlaywrightTestSitePageComponent } from './pages/playwright-test-site-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesListPageComponent },
  { path: 'courses/playwright/unlock', component: PlaywrightUnlockPageComponent },

  { path: 'test-site', component: PlaywrightTestSitePageComponent },

  // Course details, protected for playwright only
  {
    path: 'courses/:slug',
    component: CourseDetailsPageComponent,
    canActivate: [courseAccessGuard],
  },

  { path: '**', redirectTo: 'courses' },
];
