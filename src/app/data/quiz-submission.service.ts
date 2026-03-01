import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  isCourseSessionValid,
  readCourseSession,
  findAnyCourseSession,
} from '../course-access/auth-session.storage';

export type QuizSubmissionDto = {
  course: string; // e.g. "playwright"
  quizId: string; // e.g. "ex1-quiz"
  questionId: string; // e.g. "q1"
  selectedOption: string; // e.g. "b"
  isCorrect: boolean; // true/false
  attempts: number; // attempt count for this question
  userId?: string; // optional
};

@Injectable({ providedIn: 'root' })
export class QuizSubmissionService {
  private http = inject(HttpClient);

  submit(dto: QuizSubmissionDto) {
    const incoming = String(dto.userId ?? '').trim();
    const incomingIsAnonymous = incoming.length === 0 || incoming.toLowerCase() === 'anonymous';

    const courseSlug = String(dto.course ?? '')
      .trim()
      .toLowerCase();

    const courseSession = courseSlug ? readCourseSession(courseSlug) : null;
    const validCourseSession = isCourseSessionValid(courseSession) ? courseSession : null;

    const fallbackAny = findAnyCourseSession();
    const fallbackUsername = fallbackAny?.session.username;

    const resolvedUsername = validCourseSession?.username ?? fallbackUsername;

    const resolvedUserId = incomingIsAnonymous ? (resolvedUsername ?? 'anonymous') : incoming;

    const payload: QuizSubmissionDto = {
      ...dto,
      userId: resolvedUserId,
    };

    return this.http.post<{ success: boolean }>(
      'https://lecture-page-api.vercel.app/api/quiz-submission',
      payload,
    );
  }
}
