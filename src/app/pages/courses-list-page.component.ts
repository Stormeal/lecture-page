import { Component, inject } from '@angular/core';
import { CourseCardComponent } from '../components/course-card.component';
import { CoursesService } from '../data/course.service';

@Component({
  selector: 'app-courses-list-page',
  standalone: true,
  imports: [CourseCardComponent],
  template: `
    <div class="min-h-screen bg-orange-50 grid place-items-center p-6">
      <div
        class="grid gap-6 place-items-center
         items-stretch
         grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]
         w-full max-w-6xl "
      >
        @for (course of courses; track course.slug) {
          <app-course-card [course]="course" />
        }
      </div>
    </div>
  `,
})
export class CoursesListPageComponent {
  private coursesService = inject(CoursesService);

  // IMPORTANT: declared AFTER coursesService so it's initialized after the inject()
  courses = this.coursesService.getAll();
}
