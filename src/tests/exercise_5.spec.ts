import { test, expect, Page } from '@playwright/test';

export enum ContactTopic {
  Support = 'support',
  Billing = 'billing',
  Feedback = 'feedback',
  Other = 'other',
}

export enum Clearance {
  Alpha = "0: 'alpha'",
  Bravo = "1: 'bravo'",
  Charlie = "2: 'charlie'",
  Delta = "3: 'delta'",
}

async function selectClearances(page: Page, ...clearances: Clearance[]) {
  await page.getByTestId('contact-clearances').selectOption(clearances.map((value) => ({ value })));
}

test.afterEach('Close browser', async ({ page }) => {
  page.close();
});

test('Exercise 5 - Control Elements', async ({ page }) => {
  const baseUrl: string = 'https://stormeal.github.io/lecture-page/test-site';
  const nameInput = page.getByTestId('contact-name');
  const emailInput = page.getByTestId('contact-email');
  const messageInput = page.getByTestId('contact-message');
  const submitBtn = page.getByTestId('contact-submit');
  const namePreview = page.getByTestId('preview-name');
  const emailPreview = page.getByTestId('preview-email');
  const topicPreview = page.getByTestId('preview-topic');
  const priorityPreview = page.getByTestId('preview-priority');
  const clearancesPreview = page.getByTestId('preview-clearances');
  const newsletterPreview = page.getByTestId('preview-newsletter');
  const conditionsPreview = page.getByTestId('preview-terms');
  const successfullToast = page.getByTestId('submit-success');
  const resetBtn = page.getByTestId('testsite-reset');
  const priorityGroup = page.getByTestId('contact-priority');
  const priorityHigh = priorityGroup.getByTestId('priority-high');
  const topicSelect = page.getByTestId('contact-topic');
  const newsletterCheckbox = page.locator('#newsletter');
  const conditionsCheckbox = page.getByTestId('contact-accept-terms');

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
  });

  await test.step('Select Support topic', async () => {
    await expect(topicSelect).toBeVisible();
    await topicSelect.selectOption(ContactTopic.Support);
  });

  await test.step('Select High priority', async () => {
    await expect(priorityGroup).toBeVisible();
    await priorityHigh.check();
  });

  await test.step('Select required Clearances', async () => {
    await selectClearances(page, Clearance.Bravo, Clearance.Delta);

    const chipItems = page.getByTestId('clearances-chips').locator('span');
    await expect(chipItems).toContainText(['bravo', 'delta']);
  });

  await test.step('Accept newsletters and conditions', async () => {
    await newsletterCheckbox.check();
    await conditionsCheckbox.check();
  });

  await test.step('Submit form', async () => {
    await submitBtn.click();
  });

  await test.step('Validate the preview fields and confirmation toast', async () => {
    await expect(namePreview).toHaveText('Alex Storm');
    await expect(emailPreview).toHaveText('ast@testhuset.dk');
    await expect(topicPreview).toHaveText('support');
    await expect(priorityPreview).toHaveText('high');
    await expect(clearancesPreview).toHaveText('bravo, delta');
    await expect(newsletterPreview).toHaveText('Yes');
    await expect(conditionsPreview).toHaveText('Accepted');
    await expect(successfullToast).toBeVisible();
  });

  await test.step('Take a screenshot', async () => {
    await page.screenshot({ path: 'src/tests/screenshots/day1_exercise5.png', fullPage: true });
  });

  await test.step('Clear the inputs and validate fields are cleared', async () => {
    await resetBtn.click();
    await expect(namePreview).not.toHaveText('Alex Storm');
    await expect(emailPreview).not.toHaveText('ast@testhuset.dk');
  });
});
