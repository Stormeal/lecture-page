import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post<{ success: boolean }>(
      'https://lecture-page-api.vercel.app/api/quiz-submission',
      dto,
    );
  }
}
