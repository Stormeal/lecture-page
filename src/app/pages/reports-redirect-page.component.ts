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

  async ngOnInit(): Promise<void> {
    const { hostname, origin, pathname } = window.location;
    const isLocalhost =
      hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';
    const runId = this.route.snapshot.paramMap.get('runId')?.trim();
    const latestReportUrl = 'https://stormeal.github.io/lecture-page/allure/';
    const runReportUrl = runId
      ? `https://stormeal.github.io/lecture-page/allure/runs/${runId}/`
      : null;

    if (isLocalhost) {
      window.location.assign(runReportUrl ?? latestReportUrl);
      return;
    }

    if (runReportUrl) {
      const runReportExists = await this.checkReportExists(new URL(`./allure/runs/${runId}/index.html`, origin).toString());
      if (runReportExists) {
        window.location.assign(runReportUrl);
        return;
      }
    }

    const reportsSegment = runId ? `/reports/${runId}` : '/reports';
    const appRoot = pathname.endsWith(reportsSegment) ? pathname.slice(0, -reportsSegment.length) : pathname;
    window.location.assign(new URL('./allure/', `${origin}${appRoot}/`).toString());
  }

  private async checkReportExists(url: string) {
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        cache: 'no-store',
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}
