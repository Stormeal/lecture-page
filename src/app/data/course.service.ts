import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { COURSES } from './courses';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  getAll(): Course[] {
    return COURSES;
  }

  getBySlug(slug: string): Course | undefined {
    return COURSES.find((c) => c.slug === slug);
  }
}
