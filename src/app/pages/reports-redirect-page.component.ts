import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports-redirect-page',
  standalone: true,
  template: `
    <main style="padding: 16px">
      <p>Redirecting to the test report…</p>
    </main>
  `,
})
export class ReportsRedirectPageComponent implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const { hostname, origin, pathname } = window.location;
    const isLocalhost =
      hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
    const runId = this.route.snapshot.paramMap.get('runId')?.trim();
    const reportPath = runId ? `allure/runs/${runId}/` : 'allure/';

    if (isLocalhost) {
      window.location.assign(`https://stormeal.github.io/lecture-page/${reportPath}`);
      return;
    }

    const reportsSegment = runId ? `/reports/${runId}` : '/reports';
    const appRoot = pathname.endsWith(reportsSegment) ? pathname.slice(0, -reportsSegment.length) : pathname;
    window.location.assign(new URL(`./${reportPath}`, `${origin}${appRoot}/`).toString());
  }
}
