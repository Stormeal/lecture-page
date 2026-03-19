import { test, expect } from '@playwright/test';

test.afterEach('Close browser', async ({ page }) => {
  page.close();
});

test('Exercise 3 - Filling out the forms', { tag: ['@ex3', '@regression'] }, async ({ page }) => {
  const baseUrl: string = 'https://stormeal.github.io/lecture-page/test-site';
  const nameInput = page.getByTestId('contact-name');
  const emailInput = page.getByTestId('contact-email');
  const messageInput = page.getByTestId('contact-message');
  const submitBtn = page.getByTestId('contact-submit');
  const namePreview = page.getByTestId('preview-name');
  const emailPreview = page.getByTestId('preview-email');
  const successfullToast = page.getByTestId('submit-success');
  const resetBtn = page.getByTestId('testsite-reset');

  await test.step('Navigate to page', async () => {
    await page.goto(`${baseUrl}` + `/input-forms`);
  });

  await test.step('Fill the inputs and press the submit button', async () => {
    await nameInput.fill('Alex Storm');
    await emailInput.pressSequentially('ast@testhuset.dk');
    await messageInput.pressSequentially(
      'Mission log #3613, nothing to report but a lot of testing done today. Take care now 🔥',
      { delay: 10 },
    );
    await submitBtn.click();
  });

  await test.step('Validate the preview fields and confirmation toast', async () => {
    await expect(namePreview).toHaveText('Alex Storm');
    await expect(emailPreview).toHaveText('ast@testhuset.dk');
    await expect(successfullToast).toBeVisible();
  });

  await test.step('Take a screenshot', async () => {
    await page.screenshot({ path: 'src/tests/screenshots/day1_exercise3.png', fullPage: true });
  });

  await test.step('Clear the inputs and validate fields are cleared', async () => {
    await resetBtn.click();
    await expect(namePreview).not.toHaveText('Alex Storm');
    await expect(emailPreview).not.toHaveText('ast@testhuset.dk');
  });
});
