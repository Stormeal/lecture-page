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
    // Relative URL so it works with GitHub Pages base-href (/lecture-page/).
    window.location.assign('./allure/');
  }
}
