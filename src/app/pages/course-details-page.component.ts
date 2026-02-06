import { Component, computed, effect, inject, signal } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { CoursesService } from '../data/course.service';
import {
  CourseItem,
  CourseContentBlock,
  CourseGroupItem,
  CourseContentItem,
  CourseExternalItem,
} from '../data/course.model';
import { ElementRef, ViewChild } from '@angular/core';
import { NestedListComponent } from '../shared/nested-list.component';

@Component({
  selector: 'app-course-details-page',
  standalone: true,
  imports: [RouterModule, NestedListComponent],
  template: `
    <div class="min-h-screen bg-orange-50">
      <!-- Sticky top bar -->
      <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center">
          <a
            routerLink="/courses"
            class="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900
                   focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 rounded-md px-2 py-1 -ml-2"
            aria-label="Back to courses"
          >
            <span aria-hidden="true">←</span>
            <span class="hidden sm:inline">Back</span>
          </a>

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

          <div class="shrink-0 w-[84px] sm:w-[104px]"></div>
        </div>
      </header>

      <!-- Content area -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="h-[calc(100vh-6.5rem)] py-6">
          @if (course(); as c) {
            <div class="h-full grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-6">
              <!-- Main pane -->
              <section #mainPane class="h-full overflow-y-auto rounded-lg bg-white shadow p-6">
                @if (selectedItem(); as item) {
                  <div class="flex items-start justify-between gap-4">
                    <div class="min-w-0">
                      <h2 class="text-2xl font-bold text-gray-900 truncate">{{ item.title }}</h2>
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
                        Open link <span aria-hidden="true">↗</span>
                      </a>
                    }
                  </div>

                  <!-- Revealable content (solutions) -->
                  @if (item.type === 'content' && item.revealable && !isRevealed(item.id)) {
                    <div
                      class="mt-6 rounded-md border border-yellow-200 bg-yellow-50 p-4 text-yellow-900"
                    >
                      <p class="font-semibold">Solution is hidden</p>
                      <p class="mt-1">
                        Try the exercise first. If you’re stuck, you can reveal the solution below.
                      </p>
                      <button
                        type="button"
                        class="mt-3 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white font-semibold
                               hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40"
                        (click)="reveal(item.id)"
                      >
                        Reveal solution
                      </button>
                    </div>
                  } @else {
                    <div class="mt-6 space-y-5">
                      @for (block of selectedBlocks(); track $index) {
                        @switch (block.type) {
                          @case ('h1') {
                            <h1
                              class="text-2xl sm:text-3xl font-bold text-gray-900"
                              [attr.data-testid]="block.testId ?? null"
                            >
                              {{ block.text }}
                            </h1>
                          }
                          @case ('h2') {
                            <h2
                              class="text-xl sm:text-2xl font-bold text-gray-900"
                              [attr.data-testid]="block.testId ?? null"
                            >
                              {{ block.text }}
                            </h2>
                          }
                          @case ('h3') {
                            <h3
                              class="text-lg font-bold text-gray-900"
                              [attr.data-testid]="block.testId ?? null"
                            >
                              {{ block.text }}
                            </h3>
                          }
                          @case ('p') {
                            @if (asBulletList(block.text); as bullets) {
                              <ul
                                class="list-disc pl-8 space-y-1 text-gray-700 leading-relaxed"
                                [attr.data-testid]="block.testId ?? null"
                              >
                                @for (b of bullets; track b) {
                                  <li>{{ b }}</li>
                                }
                              </ul>
                            } @else if (asNumberedList(block.text); as steps) {
                              <ol
                                class="list-decimal pl-8 space-y-1 text-gray-700 leading-relaxed"
                                [attr.data-testid]="block.testId ?? null"
                              >
                                @for (s of steps; track s) {
                                  <li>{{ s }}</li>
                                }
                              </ol>
                            } @else {
                              <p
                                class="text-gray-700 leading-relaxed"
                                [attr.data-testid]="block.testId ?? null"
                              >
                                {{ block.text }}
                              </p>
                            }
                          }
                          @case ('divider') {
                            <hr class="border-gray-200" />
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
                              [attr.data-testid]="block.testId ?? null"
                            >
                              <p class="font-semibold" [attr.data-testid]="block.testId ?? null">
                                {{ block.variant === 'info' ? 'Tip' : 'Note' }}
                              </p>
                              <p class="mt-1">{{ block.text }}</p>
                            </div>
                          }
                          @case ('links') {
                            <div>
                              <h3 class="text-lg font-bold text-gray-900">Links</h3>
                              <ul class="mt-3 space-y-3" [attr.data-testid]="block.testId ?? null">
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
                              <ul class="mt-3 space-y-3" [attr.data-testid]="block.testId ?? null">
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
                          @case ('code') {
                            <div
                              class="rounded-md border border-gray-200 overflow-hidden"
                              [attr.data-testid]="block.testId ?? null"
                            >
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
                          @case ('labelValue') {
                            <div
                              class="text-gray-700 leading-snug"
                              [attr.data-testid]="block.testId ?? null"
                            >
                              @if (block.list; as list) {
                                <!-- LIST MODE: stacked label + nested list -->
                                <div class="font-semibold text-gray-900">{{ block.label }}</div>

                                @if (list.items.length) {
                                  <div class="mt-2">
                                    <app-nested-list
                                      [items]="list.items"
                                      [ordered]="list.ordered ?? false"
                                    />
                                  </div>
                                }
                              } @else {
                                <!-- TEXT MODE: inline "Label: Value" -->
                                <div class="flex items-baseline gap-2">
                                  <span class="font-semibold text-gray-900 whitespace-nowrap">{{
                                    block.label
                                  }}</span>
                                  <span class="text-gray-400">:</span>
                                  <span class="text-gray-700">{{ block.text }}</span>
                                </div>
                              }
                            </div>
                          }
                          @case ('button') {
                            <div [attr.data-testid]="block.testId ?? null">
                              @if (block.routerLink) {
                                @if (block.newTab) {
                                  <a
                                    class="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold
                 focus:outline-none focus-visible:ring-4"
                                    [class.bg-orange-400]="
                                      (block.variant ?? 'primary') === 'primary'
                                    "
                                    [class.text-white]="(block.variant ?? 'primary') === 'primary'"
                                    [class.hover:bg-orange-500]="
                                      (block.variant ?? 'primary') === 'primary'
                                    "
                                    [class.focus-visible:ring-blue-400/40]="
                                      (block.variant ?? 'primary') === 'primary'
                                    "
                                    [class.bg-white]="(block.variant ?? 'primary') === 'secondary'"
                                    [class.text-gray-900]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [class.border]="(block.variant ?? 'primary') === 'secondary'"
                                    [class.border-gray-300]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [class.hover:bg-gray-50]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [class.focus-visible:ring-gray-400/40]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [href]="internalHref(block.routerLink, block.queryParams)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {{ block.label }}
                                  </a>
                                } @else {
                                  <a
                                    class="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold
                 focus:outline-none focus-visible:ring-4"
                                    [class.bg-orange-400]="
                                      (block.variant ?? 'primary') === 'primary'
                                    "
                                    [class.text-white]="(block.variant ?? 'primary') === 'primary'"
                                    [class.hover:bg-orange-500]="
                                      (block.variant ?? 'primary') === 'primary'
                                    "
                                    [class.focus-visible:ring-blue-400/40]="
                                      (block.variant ?? 'primary') === 'primary'
                                    "
                                    [class.bg-white]="(block.variant ?? 'primary') === 'secondary'"
                                    [class.text-gray-900]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [class.border]="(block.variant ?? 'primary') === 'secondary'"
                                    [class.border-gray-300]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [class.hover:bg-gray-50]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [class.focus-visible:ring-gray-400/40]="
                                      (block.variant ?? 'primary') === 'secondary'
                                    "
                                    [routerLink]="block.routerLink"
                                    [queryParams]="block.queryParams ?? null"
                                  >
                                    {{ block.label }}
                                    <span aria-hidden="true">→</span>
                                  </a>
                                }
                              } @else if (block.href) {
                                <a
                                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold
               focus:outline-none focus-visible:ring-4"
                                  [class.bg-blue-600]="(block.variant ?? 'primary') === 'primary'"
                                  [class.text-white]="(block.variant ?? 'primary') === 'primary'"
                                  [class.hover:bg-blue-700]="
                                    (block.variant ?? 'primary') === 'primary'
                                  "
                                  [class.focus-visible:ring-blue-400/40]="
                                    (block.variant ?? 'primary') === 'primary'
                                  "
                                  [class.bg-white]="(block.variant ?? 'primary') === 'secondary'"
                                  [class.text-gray-900]="
                                    (block.variant ?? 'primary') === 'secondary'
                                  "
                                  [class.border]="(block.variant ?? 'primary') === 'secondary'"
                                  [class.border-gray-300]="
                                    (block.variant ?? 'primary') === 'secondary'
                                  "
                                  [class.hover:bg-gray-50]="
                                    (block.variant ?? 'primary') === 'secondary'
                                  "
                                  [class.focus-visible:ring-gray-400/40]="
                                    (block.variant ?? 'primary') === 'secondary'
                                  "
                                  [href]="block.href"
                                  [target]="block.newTab ? '_blank' : null"
                                  [rel]="block.newTab ? 'noopener noreferrer' : null"
                                >
                                  {{ block.label }}
                                  <span aria-hidden="true">{{ block.newTab ? '↗' : '→' }}</span>
                                </a>
                              } @else {
                                <button
                                  type="button"
                                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold bg-gray-200 text-gray-500 cursor-not-allowed"
                                  disabled
                                >
                                  {{ block.label }}
                                </button>
                              }
                            </div>
                          }
                          @case ('hint') {
                            <div
                              class="rounded-md border border-gray-200 overflow-hidden"
                              [attr.data-testid]="block.testId ?? null"
                            >
                              <div
                                class="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between gap-3"
                              >
                                <p class="font-semibold text-gray-900">{{ block.title }}</p>

                                @if (!isHintRevealed(block.id)) {
                                  <button
                                    type="button"
                                    class="shrink-0 inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-white font-semibold
                 hover:bg-black focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400/40"
                                    (click)="revealHint(block.id)"
                                  >
                                    Reveal hint
                                  </button>
                                } @else {
                                  <span
                                    class="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full"
                                  >
                                    Revealed
                                  </span>
                                }
                              </div>

                              @if (isHintRevealed(block.id)) {
                                <div class="p-4 space-y-4">
                                  @for (h of block.blocks; track $index) {
                                    @switch (h.type) {
                                      @case ('h1') {
                                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
                                          {{ h.text }}
                                        </h1>
                                      }
                                      @case ('h2') {
                                        <h2 class="text-xl sm:text-2xl font-bold text-gray-900">
                                          {{ h.text }}
                                        </h2>
                                      }
                                      @case ('h3') {
                                        <h3 class="text-lg font-bold text-gray-900">
                                          {{ h.text }}
                                        </h3>
                                      }
                                      @case ('p') {
                                        @if (asBulletList(h.text); as bullets) {
                                          <ul
                                            class="list-disc pl-8 space-y-1 text-gray-700 leading-relaxed"
                                          >
                                            @for (b of bullets; track b) {
                                              <li>{{ b }}</li>
                                            }
                                          </ul>
                                        } @else if (asNumberedList(h.text); as steps) {
                                          <ol
                                            class="list-decimal pl-8 space-y-1 text-gray-700 leading-relaxed"
                                          >
                                            @for (s of steps; track s) {
                                              <li>{{ s }}</li>
                                            }
                                          </ol>
                                        } @else {
                                          <p class="text-gray-700 leading-relaxed">{{ h.text }}</p>
                                        }
                                      }
                                      @case ('divider') {
                                        <hr class="border-gray-200" />
                                      }

                                      @case ('callout') {
                                        <div
                                          class="rounded-md p-4 border"
                                          [class.border-blue-200]="h.variant === 'info'"
                                          [class.bg-blue-50]="h.variant === 'info'"
                                          [class.text-blue-900]="h.variant === 'info'"
                                          [class.border-yellow-200]="h.variant === 'warning'"
                                          [class.bg-yellow-50]="h.variant === 'warning'"
                                          [class.text-yellow-900]="h.variant === 'warning'"
                                        >
                                          <p class="font-semibold">
                                            {{ h.variant === 'info' ? 'Tip' : 'Note' }}
                                          </p>
                                          <p class="mt-1">{{ h.text }}</p>
                                        </div>
                                      }
                                      @case ('links') {
                                        <div>
                                          <h3 class="text-lg font-bold text-gray-900">Links</h3>
                                          <ul class="mt-3 space-y-3">
                                            @for (l of h.links; track l.url) {
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
                                                  <p class="mt-1 text-gray-600">
                                                    {{ l.description }}
                                                  </p>
                                                }
                                                <p class="mt-2 text-xs text-gray-500 break-all">
                                                  {{ l.url }}
                                                </p>
                                              </li>
                                            }
                                          </ul>
                                        </div>
                                      }
                                      @case ('downloads') {
                                        <div>
                                          <h3 class="text-lg font-bold text-gray-900">Downloads</h3>
                                          <ul class="mt-3 space-y-3">
                                            @for (d of h.downloads; track d.url) {
                                              <li
                                                class="rounded-md border border-gray-200 p-4 flex items-center justify-between gap-4"
                                              >
                                                <div class="min-w-0">
                                                  <p class="font-semibold text-gray-900 truncate">
                                                    {{ d.label }}
                                                  </p>
                                                  @if (d.meta) {
                                                    <p class="text-sm text-gray-600">
                                                      {{ d.meta }}
                                                    </p>
                                                  }
                                                  <p class="mt-1 text-xs text-gray-500 break-all">
                                                    {{ d.url }}
                                                  </p>
                                                </div>
                                                <a
                                                  class="shrink-0 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white font-semibold hover:bg-black"
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
                                      @case ('code') {
                                        <div
                                          class="rounded-md border border-gray-200 overflow-hidden"
                                        >
                                          @if (h.filename || h.language) {
                                            <div
                                              class="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between"
                                            >
                                              <div class="text-sm font-semibold text-gray-700">
                                                {{ h.filename ?? 'Code' }}
                                              </div>
                                              @if (h.language) {
                                                <span
                                                  class="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                                  >{{ h.language }}</span
                                                >
                                              }
                                            </div>
                                          }
                                          <pre
                                            class="p-4 bg-gray-900 text-gray-100 overflow-x-auto text-sm leading-relaxed"
                                          ><code>{{ h.code }}</code></pre>
                                        </div>
                                      }
                                      @case ('labelValue') {
                                        <div class="text-sm text-gray-700 leading-snug">
                                          @if (h.list; as list) {
                                            <div class="font-semibold text-gray-900">
                                              {{ h.label }}
                                            </div>

                                            @if (list.items.length) {
                                              <div class="mt-2">
                                                <app-nested-list
                                                  [items]="list.items"
                                                  [ordered]="list.ordered ?? false"
                                                />
                                              </div>
                                            }
                                          } @else {
                                            <div class="flex items-baseline gap-2">
                                              <span
                                                class="font-semibold text-gray-900 whitespace-nowrap"
                                                >{{ h.label }}</span
                                              >
                                              <span class="text-gray-400">:</span>
                                              <span class="text-gray-700">{{ h.text }}</span>
                                            </div>
                                          }
                                        </div>
                                      }

                                      @default {}
                                    }
                                  }
                                </div>
                              } @else {
                                <div class="p-4">
                                  <p class="text-sm text-gray-600">
                                    Try it yourself first. Reveal this hint if you get stuck.
                                  </p>
                                </div>
                              }
                            </div>
                          }
                        }
                      }
                    </div>
                  }
                } @else {
                  <p class="text-gray-700">Select an item on the right.</p>
                }
              </section>

              <!-- Right list pane -->
              <aside class="h-full overflow-y-auto rounded-lg bg-white shadow">
                <div class="p-4 border-b border-gray-200">
                  <p class="text-sm font-semibold text-gray-900">Contents</p>
                  <p class="text-xs text-gray-500 mt-1">Click an item to display it.</p>
                </div>

                <nav class="p-2">
                  @for (item of c.items; track item.id) {
                    @if (item.type === 'group') {
                      <!-- Group item -->
                      <button
                        type="button"
                        class="w-full text-left rounded-md px-3 py-3 m-1 border border-transparent hover:bg-gray-50
                               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                        [class.bg-blue-50]="selectedId() === item.id"
                        [class.border-blue-200]="selectedId() === item.id"
                        (click)="toggleGroup(item.id); setSelected(item.id)"
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
                          <div class="flex items-center gap-2 shrink-0">
                            @if (item.badge) {
                              <span
                                class="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                              >
                                {{ item.badge }}
                              </span>
                            }
                            <span class="text-gray-500">
                              {{ isExpanded(item.id) ? '▾' : '▸' }}
                            </span>
                          </div>
                        </div>
                      </button>

                      <!-- Children -->
                      @if (isExpanded(item.id)) {
                        <div class="ml-3 pl-2 border-l border-gray-200">
                          @for (child of item.children; track child.id) {
                            @if (child.type === 'group') {
                              <button
                                type="button"
                                class="w-full text-left rounded-md px-3 py-2 m-1 border border-transparent hover:bg-gray-50
                                       focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                                [class.bg-blue-50]="selectedId() === child.id"
                                [class.border-blue-200]="selectedId() === child.id"
                                (click)="toggleGroup(child.id); setSelected(child.id)"
                              >
                                <div class="flex items-center justify-between gap-3">
                                  <p class="font-semibold text-gray-900 truncate">
                                    {{ child.title }}
                                  </p>
                                  <span class="text-gray-500 shrink-0">
                                    {{ isExpanded(child.id) ? '▾' : '▸' }}
                                  </span>
                                </div>
                              </button>

                              @if (isExpanded(child.id)) {
                                <div class="ml-3 pl-2 border-l border-gray-200">
                                  @for (leaf of child.children; track leaf.id) {
                                    @if (leaf.type === 'external') {
                                      <a
                                        class="block rounded-md px-3 py-2 m-1 border border-transparent hover:bg-gray-50
                                               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                                        [class.bg-blue-50]="selectedId() === leaf.id"
                                        [class.border-blue-200]="selectedId() === leaf.id"
                                        [href]="leaf.externalUrl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        (click)="setSelected(leaf.id)"
                                      >
                                        <span class="font-medium text-gray-900 truncate">{{
                                          leaf.title
                                        }}</span>
                                        <span class="ml-1 text-xs text-gray-500">↗</span>
                                      </a>
                                    } @else {
                                      <button
                                        type="button"
                                        class="w-full text-left rounded-md px-3 py-2 m-1 border border-transparent hover:bg-gray-50
                                               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                                        [class.bg-blue-50]="selectedId() === leaf.id"
                                        [class.border-blue-200]="selectedId() === leaf.id"
                                        (click)="setSelected(leaf.id)"
                                      >
                                        <span class="font-medium text-gray-900 truncate">{{
                                          leaf.title
                                        }}</span>
                                      </button>
                                    }
                                  }
                                </div>
                              }
                            } @else if (child.type === 'external') {
                              <a
                                class="block rounded-md px-3 py-2 m-1 border border-transparent hover:bg-gray-50
                                       focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                                [class.bg-blue-50]="selectedId() === child.id"
                                [class.border-blue-200]="selectedId() === child.id"
                                [href]="child.externalUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                (click)="setSelected(child.id)"
                              >
                                <span class="font-medium text-gray-900 truncate">{{
                                  child.title
                                }}</span>
                                <span class="ml-1 text-xs text-gray-500">↗</span>
                              </a>
                            } @else {
                              <button
                                type="button"
                                class="w-full text-left rounded-md px-3 py-2 m-1 border border-transparent hover:bg-gray-50
                                       focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                                [class.bg-blue-50]="selectedId() === child.id"
                                [class.border-blue-200]="selectedId() === child.id"
                                (click)="setSelected(child.id)"
                              >
                                <span class="font-medium text-gray-900 truncate">{{
                                  child.title
                                }}</span>
                              </button>
                            }
                          }
                        </div>
                      }
                    } @else if (item.type === 'external') {
                      <!-- Top-level external -->
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
                        <span class="font-semibold text-gray-900 truncate">{{ item.title }}</span>
                        <span class="ml-1 text-xs text-gray-500">↗</span>
                      </a>
                    } @else {
                      <!-- Top-level content -->
                      <button
                        type="button"
                        class="w-full text-left rounded-md px-3 py-3 m-1 border border-transparent hover:bg-gray-50
                               focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                        [class.bg-blue-50]="selectedId() === item.id"
                        [class.border-blue-200]="selectedId() === item.id"
                        (click)="setSelected(item.id)"
                      >
                        <p class="font-semibold text-gray-900 truncate">{{ item.title }}</p>
                        @if (item.summary) {
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">{{ item.summary }}</p>
                        }
                      </button>
                    }
                  }
                </nav>
              </aside>
            </div>
          } @else {
            <div class="rounded-lg bg-white shadow p-6">
              <h2 class="text-lg font-semibold">Course not found</h2>
              <p class="text-gray-700 mt-2">Check the URL or go back to the list.</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class CourseDetailsPageComponent {
  @ViewChild('mainPane') mainPane?: ElementRef<HTMLElement>;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private locationStrategy = inject(LocationStrategy);

  private coursesService = inject(CoursesService);

  slug = toSignal(this.route.paramMap.pipe(map((pm) => pm.get('slug') ?? '')), {
    initialValue: '',
  });

  course = computed(() => this.coursesService.getBySlug(this.slug()));
  selectedId = signal<string | null>(null);

  private expanded = signal<Set<string>>(new Set());
  private revealed = signal<Set<string>>(new Set());

  constructor() {
    effect(() => {
      const c = this.course();
      const first = c?.items?.[0]?.id ?? null;
      this.selectedId.set(first);
      this.revealed.set(new Set());
      this.expanded.set(new Set());
      this.revealedHints.set(new Set());
    });
    effect(() => {
      const id = this.selectedId();
      if (!id) return;

      queueMicrotask(() => {
        this.mainPane?.nativeElement.scrollTo({ top: 0, behavior: 'auto' });
      });
    });
  }

  internalHref(
    path: string,
    queryParams?: Record<string, string | number | boolean | null | undefined>,
  ): string {
    const urlTree = this.router.createUrlTree([path], {
      queryParams: queryParams ?? undefined,
    });

    const internal = this.router.serializeUrl(urlTree);
    return this.locationStrategy.prepareExternalUrl(internal);
  }

  private revealedHints = signal<Set<string>>(new Set());

  revealHint(id: string) {
    const next = new Set(this.revealedHints());
    next.add(id);
    this.revealedHints.set(next);
  }

  isHintRevealed(id: string) {
    return this.revealedHints().has(id);
  }

  setSelected(id: string) {
    this.selectedId.set(id);
  }

  toggleGroup(id: string) {
    const next = new Set(this.expanded());
    next.has(id) ? next.delete(id) : next.add(id);
    this.expanded.set(next);
  }

  isExpanded(id: string) {
    return this.expanded().has(id);
  }

  reveal(id: string) {
    const next = new Set(this.revealed());
    next.add(id);
    this.revealed.set(next);
  }

  isRevealed(id: string) {
    return this.revealed().has(id);
  }

  asBulletList(text: string): string[] | null {
    if (!text.includes('•')) return null;

    const items = text
      .split('•')
      .map((s) => s.trim())
      .filter(Boolean);

    return items.length >= 2 ? items : null;
  }

  asNumberedList(text: string): string[] | null {
    const matches = [...text.matchAll(/(?:^|\s)(\d+)\.\s+([^]+?)(?=\s+\d+\.\s+|$)/g)];
    if (matches.length < 2) return null;

    return matches.map((m) => m[2].trim()).filter(Boolean);
  }

  selectedItem = computed<CourseItem | null>(() => {
    const c = this.course();
    const id = this.selectedId();
    if (!c || !id) return null;
    return this.findItemById(c.items, id);
  });

  selectedBlocks = computed<CourseContentBlock[]>(() => {
    const item = this.selectedItem();
    if (!item) return [];
    if (item.type === 'content') return item.blocks;
    if (item.type === 'group') return item.overviewBlocks ?? [];
    return [];
  });

  private findItemById(items: CourseItem[], id: string): CourseItem | null {
    for (const item of items) {
      if (item.id === id) return item;

      if (item.type === 'group') {
        const found = this.findItemById(item.children, id);
        if (found) return found;
      }
    }
    return null;
  }
}
