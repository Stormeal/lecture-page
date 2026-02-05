import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseListItem } from '../data/course.model';

@Component({
  selector: 'app-nested-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container
      [ngTemplateOutlet]="listTpl"
      [ngTemplateOutletContext]="{ items: items, ordered: ordered }"
    >
    </ng-container>

    <ng-template #listTpl let-items="items" let-ordered="ordered">
      @if (ordered) {
        <ol class="list-decimal pl-6 space-y-1 text-gray-700 leading-relaxed">
          @for (it of items; track $index) {
            <li>
              @if (isString(it)) {
                {{ it }}
              } @else {
                <span>{{ it.text }}</span>
                @if (it.children?.length) {
                  <div class="mt-1">
                    <ng-container
                      [ngTemplateOutlet]="listTpl"
                      [ngTemplateOutletContext]="{ items: it.children, ordered: false }"
                    />
                  </div>
                }
              }
            </li>
          }
        </ol>
      } @else {
        <ul class="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed">
          @for (it of items; track $index) {
            <li>
              @if (isString(it)) {
                {{ it }}
              } @else {
                <span>{{ it.text }}</span>
                @if (it.children?.length) {
                  <div class="mt-1">
                    <ng-container
                      [ngTemplateOutlet]="listTpl"
                      [ngTemplateOutletContext]="{ items: it.children, ordered: false }"
                    />
                  </div>
                }
              }
            </li>
          }
        </ul>
      }
    </ng-template>
  `,
})
export class NestedListComponent {
  @Input({ required: true }) items: CourseListItem[] = [];
  @Input() ordered = false;

  isString(v: CourseListItem): v is string {
    return typeof v === 'string';
  }
}
