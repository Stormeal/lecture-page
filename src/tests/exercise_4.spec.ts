import { test, expect, Locator } from '@playwright/test';

test.afterEach('Close browser', async ({ page }) => {
  page.close();
});

test(
  'Exercise 4 - Mission Control Crew Roster',
  { tag: ['@ex4', '@regression'] },
  async ({ page }) => {
    const baseUrl: string = 'https://stormeal.github.io/lecture-page';
    const adminSection = page.getByTestId('user-admin');
    const addNameInput = adminSection.getByTestId('add-user-name');
    const addEmailInput = adminSection.getByTestId('add-user-email');
    const addUserSubmitBtn = page.getByTestId('add-user-submit');
    const directory = page.getByTestId('user-directory');
    const list = directory.getByTestId('user-list');
    const rows = list.getByTestId('user-row');
    const rowByName = (name: string) =>
      rows.filter({ has: page.getByTestId('user-name').filter({ hasText: name }) });
    const infoBtn = (row: Locator) => row.getByTestId('user-info');

    await test.step('TC1: Navigation', async () => {
      await page.goto(`${baseUrl}/test-site/table`);
    });

    await test.step('TC2: Adding new crew member to roster', async () => {
      await addNameInput.fill('Astro Naut');
      await addEmailInput.fill('an@rocket.com');
      await addUserSubmitBtn.click();
    });

    await test.step('TC3: Locate and update Ava clearance level', async () => {
      const row = rowByName('Ada Lovelace');
      const role = row.getByTestId('user-role');

      await role.selectOption({ label: 'Manager' });

      await expect(role).toHaveValue('Manager');
    });

    await test.step('TC4: Inspect crew dossier intel', async () => {
      const row = rowByName('Alex Storm');
      await infoBtn(row).hover();
      await expect(page.getByRole('tooltip')).toBeVisible();
    });

    await test.step('TC5: Capture a screenshot of the final verified roster state', async () => {
      await page.screenshot({ path: 'src/tests/screenshots/day1_exercise4.png', fullPage: true });
    });
  },
);
