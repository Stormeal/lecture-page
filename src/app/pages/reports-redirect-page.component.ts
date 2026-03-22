import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    const { hostname, origin, pathname } = window.location;
    const isLocalhost =
      hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]';

    if (isLocalhost) {
      window.location.assign('https://stormeal.github.io/lecture-page/allure/');
      return;
    }

    // Resolve against the deployed app root so /reports works with the GitHub Pages base path.
    const appRoot = pathname.endsWith('/reports') ? pathname.slice(0, -'/reports'.length) : pathname;
    window.location.assign(new URL('./allure/', `${origin}${appRoot}/`).toString());
  }
}
