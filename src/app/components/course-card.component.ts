import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../data/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (course.disabled) {
      <!-- Disabled card: no routerLink -->
      <div
        class="block w-full max-w-sm rounded overflow-hidden shadow-lg bg-white
               opacity-60 cursor-not-allowed select-none relative"
        [attr.aria-disabled]="true"
      >
        <img class="w-full" [src]="course.imageUrl" [alt]="course.title" />

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 flex items-center gap-2">
            {{ course.title }}
            <span
              class="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-center"
            >
              Coming soon
            </span>
          </div>

          <p class="text-gray-700 text-base">
            {{ course.description }}
          </p>
        </div>

        <div class="px-6 pt-4 pb-2">
          @for (tag of course.tags; track tag) {
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{{ tag }}
            </span>
          }
        </div>

        <!-- subtle overlay -->
        <div class="absolute inset-0 pointer-events-none"></div>
      </div>
    } @else {
      <!-- Enabled card: navigates -->
      <a
        class="h-full block w-full max-w-sm rounded overflow-hidden shadow-lg bg-white
               cursor-pointer select-none
               transition hover:shadow-xl hover:-translate-y-1
               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/50"
        [routerLink]="['/courses', course.slug]"
        [attr.aria-label]="'Gå til ' + course.title"
      >
        <img class="w-full" [src]="course.imageUrl" [alt]="course.title" />

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ course.title }}</div>
          <p class="text-gray-700 text-base">
            {{ course.description }}
          </p>
        </div>

        <div class="px-6 pt-4 pb-2">
          @for (tag of course.tags; track tag) {
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{{ tag }}
            </span>
          }
        </div>
      </a>
    }
  `,
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
}
