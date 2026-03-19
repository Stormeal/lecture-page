import { test, expect } from '@playwright/test';

test('Exercise 1: open site and take screenshot', { tag: ['@ex1', '@smoke'] }, async ({ page }) => {
  await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: 'src/tests/screenshots/day1_exercise1.png', fullPage: true });
});
