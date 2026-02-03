import { Routes } from '@angular/router';
import { CoursesListPageComponent } from './pages/courses-list-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', component: CoursesListPageComponent },
  { path: 'courses/:slug', component: CourseDetailsPageComponent },
  { path: '**', redirectTo: 'courses' },
];
