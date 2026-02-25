import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CourseCardComponent } from '../components/course-card.component';
import { CoursesService } from '../data/course.service';

@Component({
  selector: 'app-courses-list-page',
  standalone: true,
  imports: [CourseCardComponent],
  template: `
    <div class="min-h-screen inset-0 xp-background grid place-items-center p-6">
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
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  courses = this.coursesService.getAll();

  // Reactive query params
  private queryParamMap = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  private shouldForwardToUnlock = computed(
    () => this.queryParamMap().get('unlock') === 'playwright',
  );

  private redirectUrl = computed(
    () => this.queryParamMap().get('redirect') ?? '/courses/playwright',
  );

  private forwarded = signal(false);

  constructor() {
    // If something still links to /courses?unlock=playwright&redirect=...
    // we forward to the dedicated unlock route.
    if (this.shouldForwardToUnlock() && !this.forwarded()) {
      this.forwarded.set(true);

      this.router.navigate(['/courses/playwright/unlock'], {
        queryParams: { redirect: this.redirectUrl() },
        replaceUrl: true,
      });
    }
  }
}
