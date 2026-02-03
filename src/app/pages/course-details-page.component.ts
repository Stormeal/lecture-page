import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { CoursesService } from '../data/course.service';
import { CourseItem, CourseContentBlock } from '../data/course.model';

@Component({
  selector: 'app-course-details-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-auto bg-orange-50">
      <!-- Sticky top bar -->
      <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center">
          <a
            routerLink="/courses"
            class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 rounded-md px-2 py-1 -ml-2"
            aria-label="Tilbage til kurser"
          >
            <span aria-hidden="true">←</span>
            <span class="hidden sm:inline">Back</span>
          </a>

          <!-- Center title -->
          <div class="relative flex-1 h-full">
            <div class="absolute inset-0 flex items-center justify-center px-12">
              @if (course(); as c) {
                <h1 class="text-base sm:text-lg font-bold text-gray-900 truncate">
                  {{ c.title }}
                </h1>
              } @else {
                <h1 class="text-base sm:text-lg font-bold text-gray-900">Course</h1>
              }
            </div>
          </div>

          <!-- Reserved space -->
          <div class="shrink-0 w-[84px] sm:w-[104px]"></div>
        </div>
      </header>

      <!-- Content area: only this scrolls (two independent panes) -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="h-[calc(95vh-1.5rem)] py-6">
          @if (course(); as c) {
            <div class="h-39/40 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
              <!-- Main pane -->
              <section class="h-full overflow-y-auto rounded-lg bg-white shadow p-6">
                @if (selectedItem(); as item) {
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <h2 class="text-2xl font-bold text-gray-900">{{ item.title }}</h2>
                      @if (item.summary) {
                        <p class="mt-2 text-gray-600">{{ item.summary }}</p>
                      }
                    </div>

                    @if (item.type === 'external') {
                      <a
                        class="shrink-0 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold
                               hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                        [href]="item.externalUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Åbn link
                        <span aria-hidden="true">↗</span>
                      </a>
                    }
                  </div>

                  <div class="mt-6 space-y-5">
                    @if (item.type === 'content') {
                      @for (block of item.blocks; track $index) {
                        @switch (block.type) {
                          @case ('h1') {
                            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
                              {{ block.text }}
                            </h1>
                          }
                          @case ('h3') {
                            <h3 class="text-lg font-bold underline text-gray-900">
                              {{ block.text }}
                            </h3>
                          }
                          @case ('h2') {
                            <h3 class="text-xl font-bold text-gray-900">{{ block.text }}</h3>
                          }
                          @case ('p') {
                            <p class="text-gray-700 leading-relaxed">{{ block.text }}</p>
                          }
                          @case ('callout') {
                            <div
                              class="rounded-md p-4 border"
                              [class.border-blue-200]="block.variant === 'info'"
                              [class.bg-blue-50]="block.variant === 'info'"
                              [class.text-blue-900]="block.variant === 'info'"
                              [class.border-yellow-200]="block.variant === 'warning'"
                              [class.bg-yellow-50]="block.variant === 'warning'"
                              [class.text-yellow-900]="block.variant === 'warning'"
                            >
                              <p class="font-semibold">
                                {{ block.variant === 'info' ? 'Info' : 'Bemærk' }}
                              </p>
                              <p class="mt-1">{{ block.text }}</p>
                            </div>
                          }
                          @case ('links') {
                            <div>
                              <h3 class="text-lg font-bold text-gray-900">Links</h3>
                              <ul class="mt-3 space-y-3">
                                @for (l of block.links; track l.url) {
                                  <li class="rounded-md border border-gray-200 p-4">
                                    <a
                                      class="font-semibold text-blue-700 hover:underline"
                                      [href]="l.url"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {{ l.label }}
                                    </a>
                                    @if (l.description) {
                                      <p class="mt-1 text-gray-600">{{ l.description }}</p>
                                    }
                                    <p class="mt-2 text-xs text-gray-500 break-all">{{ l.url }}</p>
                                  </li>
                                }
                              </ul>
                            </div>
                          }
                          @case ('downloads') {
                            <div>
                              <h3 class="text-lg font-bold text-gray-900">Downloads</h3>
                              <ul class="mt-3 space-y-3">
                                @for (d of block.downloads; track d.url) {
                                  <li
                                    class="rounded-md border border-gray-200 p-4 flex items-center justify-between gap-4"
                                  >
                                    <div class="min-w-0">
                                      <p class="font-semibold text-gray-900 truncate">
                                        {{ d.label }}
                                      </p>
                                      @if (d.meta) {
                                        <p class="text-sm text-gray-600">{{ d.meta }}</p>
                                      }
                                      <p class="mt-1 text-xs text-gray-500 break-all">
                                        {{ d.url }}
                                      </p>
                                    </div>
                                    <a
                                      class="shrink-0 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white font-semibold
                                             hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40"
                                      [href]="d.url"
                                      download
                                    >
                                      Download
                                    </a>
                                  </li>
                                }
                              </ul>
                            </div>
                          }
                          @case ('divider') {
                            <br />
                            <hr class="border-gray-200" />
                          }
                          @case ('code') {
                            <div class="rounded-md border border-gray-200 overflow-hidden">
                              @if (block.filename || block.language) {
                                <div
                                  class="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between"
                                >
                                  <div class="text-sm font-semibold text-gray-700">
                                    {{ block.filename ?? 'Code' }}
                                  </div>
                                  @if (block.language) {
                                    <span
                                      class="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                    >
                                      {{ block.language }}
                                    </span>
                                  }
                                </div>
                              }
                              <pre
                                class="p-4 bg-gray-900 text-gray-100 overflow-x-auto text-sm leading-relaxed"
                              ><code>{{ block.code }}</code></pre>
                            </div>
                          }
                        }
                      }
                    } @else {
                      <div class="rounded-md border border-gray-200 p-4">
                        <p class="text-gray-700">
                          Dette item er et eksternt link:
                          <a
                            class="text-blue-700 hover:underline break-all"
                            [href]="item.externalUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {{ item.externalUrl }}
                          </a>
                        </p>
                      </div>
                    }
                  </div>
                } @else {
                  <p class="text-gray-700">Vælg et item i listen til højre.</p>
                }
              </section>

              <!-- Right list pane -->
              <aside class="h-full overflow-y-auto rounded-lg bg-white shadow">
                <div class="p-4 border-b border-gray-200">
                  <p class="text-sm font-semibold text-gray-900">Content</p>
                  <p class="text-xs text-gray-500 mt-1">
                    Click on an item below to view the content.
                  </p>
                </div>

                <nav class="p-2">
                  @for (item of c.items; track item.id) {
                    @if (item.type === 'external') {
                      <a
                        class="block rounded-md px-3 py-3 m-1 border border-transparent hover:bg-gray-50
                               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                        [class.bg-blue-50]="selectedId() === item.id"
                        [class.border-blue-200]="selectedId() === item.id"
                        [href]="item.externalUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        (click)="setSelected(item.id)"
                      >
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="font-semibold text-gray-900 truncate">
                              {{ item.title }}
                              <span class="ml-1 text-xs text-gray-500">↗</span>
                            </p>
                            @if (item.summary) {
                              <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                                {{ item.summary }}
                              </p>
                            }
                          </div>
                          @if (item.badge) {
                            <span
                              class="shrink-0 text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {{ item.badge }}
                            </span>
                          }
                        </div>
                      </a>
                    } @else {
                      <button
                        type="button"
                        class="w-full text-left rounded-md px-3 py-3 m-1 border border-transparent hover:bg-gray-50
                               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                        [class.bg-blue-50]="selectedId() === item.id"
                        [class.border-blue-200]="selectedId() === item.id"
                        (click)="setSelected(item.id)"
                      >
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="font-semibold text-gray-900 truncate">{{ item.title }}</p>
                            @if (item.summary) {
                              <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                                {{ item.summary }}
                              </p>
                            }
                          </div>
                          @if (item.badge) {
                            <span
                              class="shrink-0 text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {{ item.badge }}
                            </span>
                          }
                        </div>
                      </button>
                    }
                  }
                </nav>
              </aside>
            </div>
          } @else {
            <div class="rounded-lg bg-white shadow p-6">
              <h2 class="text-lg font-semibold">Kurset blev ikke fundet</h2>
              <p class="text-gray-700 mt-2">Tjek URL’en eller gå tilbage til oversigten.</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class CourseDetailsPageComponent {
  private route = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);

  private slug = toSignal(this.route.paramMap.pipe(map((pm) => pm.get('slug') ?? '')), {
    initialValue: '',
  });

  course = computed(() => this.coursesService.getBySlug(this.slug()));

  // selection state (state-only navigation)
  selectedId = signal<string | null>(null);

  constructor() {
    // Auto-select first item whenever course changes
    effect(() => {
      const c = this.course();
      const firstId = c?.items?.[0]?.id ?? null;
      this.selectedId.set(firstId);
    });
  }

  setSelected(id: string) {
    this.selectedId.set(id);
  }

  selectedItem = computed<CourseItem | null>(() => {
    const c = this.course();
    const id = this.selectedId();
    if (!c || !id) return null;
    return c.items.find((i) => i.id === id) ?? null;
  });
}
