import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { CourseQuizItem, CourseQuizQuestion, CourseQuizOption } from '../../data/course.model';
import { inject } from '@angular/core';
import { QuizSubmissionService } from '../../data/quiz-submission.service';

type QuestionState = {
  selectedOptionId: string | null;
  submittedOptionId: string | null;
  isCorrect: boolean | null;
  attempts: number;
  explainFurtherOpen: boolean;
  lastSubmittedAttempt?: number;
};

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!quiz || quiz.questions.length === 0) {
      <div class="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-700">
        No quiz questions found.
      </div>
    } @else {
      <div class="space-y-4" [attr.data-testid]="testIdRoot">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            @if (quiz.intro) {
              <p class="text-gray-700">{{ quiz.intro }}</p>
            }
          </div>

          <div class="shrink-0 text-sm font-semibold text-gray-700">
            Question {{ currentIndex() + 1 }} of {{ quiz.questions.length }}
          </div>
        </div>

        <section
          class="rounded-lg border bg-white shadow-sm"
          [class.border-purple-500]="hasSubmitted()"
          [class.ring-1]="hasSubmitted()"
          [class.ring-purple-200]="hasSubmitted()"
        >
          <div class="p-5 border-b border-gray-200">
            <h3 class="text-lg font-bold text-gray-900" [attr.data-testid]="testIdQuestionPrompt">
              {{ question().prompt }}
            </h3>
          </div>

          <form class="p-5 space-y-3" (submit)="$event.preventDefault(); submit()">
            <fieldset [disabled]="isLockedCorrect()">
              <legend class="sr-only">Choose an answer</legend>

              @for (opt of question().options; track opt.id) {
                <label
                  class="block rounded-md border p-4 cursor-pointer select-none
                         focus-within:ring-4 focus-within:ring-blue-400/40"
                  [class.border-gray-200]="!isWrongSelected(opt)"
                  [class.hover:bg-gray-50]="!isWrongSelected(opt) && !isLockedCorrect()"
                  [class.bg-red-50]="isWrongSelected(opt)"
                  [class.border-red-300]="isWrongSelected(opt)"
                  [attr.data-testid]="optionTestId(opt)"
                >
                  <div class="flex items-start gap-3">
                    <input
                      class="mt-1"
                      type="radio"
                      name="quiz-option"
                      [value]="opt.id"
                      [checked]="state().selectedOptionId === opt.id"
                      (change)="select(opt.id)"
                      [attr.aria-invalid]="isWrongSelected(opt) ? 'true' : null"
                    />

                    <div class="min-w-0 flex-1">
                      <div class="font-semibold text-gray-900">
                        <span class="mr-2">{{ opt.label }}</span>
                        <span>{{ opt.text }}</span>
                      </div>

                      @if (isWrongSelected(opt)) {
                        <div class="mt-3 rounded-md border border-red-200 bg-red-50 p-3">
                          <div class="flex items-center justify-between gap-3">
                            <p class="text-sm font-semibold text-red-700">Try again</p>
                            <span class="text-red-700" aria-hidden="true">✕</span>
                          </div>

                          <p class="mt-2 text-sm text-gray-800 whitespace-pre-line">
                            {{ opt.wrongExplanation }}
                          </p>

                          @if (opt.wrongExplainFurther) {
                            <button
                              type="button"
                              class="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:underline
                                     focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 rounded-md px-1 py-1 -ml-1"
                              (click)="toggleExplainFurther()"
                              [attr.data-testid]="testIdExplainFurther"
                            >
                              <span aria-hidden="true">+</span>
                              Explain this further
                            </button>

                            @if (state().explainFurtherOpen) {
                              <div
                                class="mt-2 rounded-md border border-purple-200 bg-purple-50 p-3"
                              >
                                <p class="text-sm text-gray-800 whitespace-pre-line">
                                  {{ opt.wrongExplainFurther }}
                                </p>
                              </div>
                            }
                          }
                        </div>
                      }

                      @if (isCorrectSelected(opt)) {
                        <div class="mt-3 rounded-md border border-green-200 bg-green-50 p-3">
                          <p class="text-sm font-semibold text-green-800">Correct</p>
                          @if (opt.correctExplanation) {
                            <p class="mt-2 text-sm text-gray-800 whitespace-pre-line">
                              {{ opt.correctExplanation }}
                            </p>
                          }
                        </div>
                      }
                    </div>
                  </div>
                </label>
              }
            </fieldset>

            <div class="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-900
                       hover:bg-gray-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                (click)="prev()"
                [disabled]="currentIndex() === 0"
                [attr.data-testid]="testIdPrev"
              >
                Previous
              </button>

              @if (isLockedCorrect()) {
                <button
                  type="button"
                  class="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 font-semibold text-white
                         hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40"
                  (click)="next()"
                  [disabled]="currentIndex() >= quiz.questions.length - 1"
                  [attr.data-testid]="testIdNext"
                >
                  Next question
                </button>
              } @else {
                <button
                  type="submit"
                  class="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 font-semibold text-white
                         hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40"
                  [disabled]="!state().selectedOptionId"
                  [attr.data-testid]="testIdSubmit"
                >
                  Submit answer
                </button>
              }
            </div>

            @if (isLockedCorrect() && currentIndex() === quiz.questions.length - 1) {
              <div class="rounded-md border border-gray-200 bg-gray-50 p-4 text-gray-800">
                <p class="font-semibold">Quiz complete</p>
                <p class="mt-1 text-sm text-gray-700">
                  You’ve reached the end of this quiz. Use Previous to review questions.
                </p>
              </div>
            }
          </form>
        </section>
      </div>
    }
  `,
})
export class QuizComponent {
  @Input({ required: true }) quiz!: CourseQuizItem;

  // Stable selectors
  readonly testIdRoot = 'quiz';
  readonly testIdQuestionPrompt = 'quiz-question-prompt';
  readonly testIdSubmit = 'quiz-submit';
  readonly testIdPrev = 'quiz-prev';
  readonly testIdNext = 'quiz-next';
  readonly testIdExplainFurther = 'quiz-explain-further';

  currentIndex = signal(0);
  private quizSubmissionService = inject(QuizSubmissionService);
  private perQuestionState = signal<Map<string, QuestionState>>(new Map());

  question = computed<CourseQuizQuestion>(() => this.quiz.questions[this.currentIndex()]);

  state = computed<QuestionState>(() => {
    const qid = this.question().id;
    const existing = this.perQuestionState().get(qid);
    return (
      existing ?? {
        selectedOptionId: null,
        submittedOptionId: null,
        isCorrect: null,
        attempts: 0,
        explainFurtherOpen: false,
      }
    );
  });

  hasSubmitted = computed(() => this.state().submittedOptionId !== null);

  isLockedCorrect = computed(() => this.state().isCorrect === true);

  optionTestId(opt: CourseQuizOption): string {
    return `quiz-option-${this.question().id}-${opt.id}`;
  }

  select(optionId: string) {
    const qid = this.question().id;
    this.patchState(qid, {
      selectedOptionId: optionId,
      // Reset “explain further” when changing option
      explainFurtherOpen: false,
    });
  }

  submit() {
    const s = this.state();
    if (!s.selectedOptionId) return;

    const q = this.question();
    const isCorrect = s.selectedOptionId === q.correctOptionId;
    const attempts = s.attempts + 1;

    // Update UI state first (keeps behavior the same)
    this.patchState(q.id, {
      submittedOptionId: s.selectedOptionId,
      isCorrect,
      attempts,
      explainFurtherOpen: false,
    });

    // Prevent double-submit for the same attempt number
    const last = s.lastSubmittedAttempt ?? 0;
    if (last >= attempts) return;

    this.quizSubmissionService
      .submit({
        course: 'playwright',
        quizId: this.quiz.id,
        questionId: q.id,
        selectedOption: s.selectedOptionId,
        isCorrect,
        attempts,
        userId: 'anonymous',
      })
      .subscribe({
        next: () => {
          this.patchState(q.id, { lastSubmittedAttempt: attempts });
        },
        error: (err) => {
          console.error('Failed to submit quiz attempt', err);
        },
      });
  }

  toggleExplainFurther() {
    const qid = this.question().id;
    this.patchState(qid, { explainFurtherOpen: !this.state().explainFurtherOpen });
  }

  isWrongSelected(opt: CourseQuizOption): boolean {
    const s = this.state();
    return s.submittedOptionId === opt.id && s.isCorrect === false;
  }

  isCorrectSelected(opt: CourseQuizOption): boolean {
    const s = this.state();
    return s.submittedOptionId === opt.id && s.isCorrect === true;
  }

  next() {
    if (this.currentIndex() >= this.quiz.questions.length - 1) return;
    this.currentIndex.set(this.currentIndex() + 1);
  }

  prev() {
    if (this.currentIndex() <= 0) return;
    this.currentIndex.set(this.currentIndex() - 1);
  }

  private patchState(qid: string, patch: Partial<QuestionState>) {
    const next = new Map(this.perQuestionState());
    const current = next.get(qid) ?? {
      selectedOptionId: null,
      submittedOptionId: null,
      isCorrect: null,
      attempts: 0,
      explainFurtherOpen: false,
    };
    next.set(qid, { ...current, ...patch });
    this.perQuestionState.set(next);
  }
}
