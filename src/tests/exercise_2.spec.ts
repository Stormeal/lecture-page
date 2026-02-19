import { test, expect } from '@playwright/test';

test.afterEach('Close browser', async ({ page }) => {
  page.close();
});

test('Exercise 2 - Filling out the forms', async ({ page }) => {
  const cookieBotDialogHeader = page.locator('#CybotCookiebotDialogHeader');
  const header = page.locator('#site-header');
  const courseMenuBtn = header.getByRole('link', { name: 'Kursus' });
  const playwrightCourseItem = page.locator('a:has-text("Automatisering med Playwright")');
  const courseTitle = page.locator('h1.hero-title');
  const pricingContainer = page.locator('div.pricing-part');
  const price = pricingContainer.locator('span[data-variation-price]');

  await test.step('Navigate to page', async () => {
    await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });

    if (cookieBotDialogHeader) {
      const cookieDialogAcceptBtn = page.getByRole('button', { name: 'Tillad valgte' });
      await cookieDialogAcceptBtn.click();
    }
  });

  await test.step('Press the KURSUS menu button', async () => {
    await courseMenuBtn.click();
  });

  await test.step('Press the Playwright Course element and screenshot the page', async () => {
    await playwrightCourseItem.click();
    await page.screenshot({ path: 'src/tests/screenshots/day1_exercise2.png', fullPage: true });
  });

  await test.step('Assert course title and price', async () => {
    await expect(courseTitle).toHaveText('Automatisering med Playwright');
    await expect(price).toHaveText('10.499 kr.');
  });
});
