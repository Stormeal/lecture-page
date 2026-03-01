import { Injectable, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CourseUnlockDialogComponent } from './course-unlock-dialog.component';

@Injectable({ providedIn: 'root' })
export class CourseUnlockDialogService {
  private dialog = inject(Dialog);

  async open(slug: string): Promise<boolean> {
    const ref = this.dialog.open<boolean>(CourseUnlockDialogComponent, {
      data: { slug },
      disableClose: false,
      closeOnOverlayDetachments: true,
      width: 'min(920px, calc(100vw - 24px))',
      maxWidth: '920px',
      panelClass: 'lp-unlock-dialog-panel',
      backdropClass: 'lp-unlock-dialog-backdrop',
    });

    const result = await ref.closed.toPromise();
    return result === true;
  }
}
