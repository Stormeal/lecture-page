import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_04: CourseGroupItem = {
  id: 'ex4',
  title: 'Exercise 4: Hover, Filtering and Logging',
  summary: 'Hover(), filter() & Logging',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `With this exercise we are talking about two more Playwright functions, hover and filter. This will assist on for the upcoming exercise.`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex4-theory',
      title: 'Theory',
      summary: 'Hover(), filter(), and practical logging patterns for debugging tests.',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Hover, Filtering & Logging' },

        {
          type: 'p',
          text: `Exercise 4 is about making tests more realistic (hover interactions), more precise (filtering locators), and easier to debug (logging + structured steps).`,
        },

        { type: 'divider' },

        // -------------------- HOVER --------------------
        { type: 'h3', text: 'hover()' },
        {
          type: 'p',
          text: `Hovering is essential for UI interactions such as dropdown menus, tooltips, and hidden actions that appear on hover.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Hover to reveal something (menu / tooltip / hidden action)
await page.getByTestId('menu-products').hover();

// Then assert what appeared
await expect(page.getByRole('menu')).toBeVisible();`,
        },
        {
          type: 'labelValue',
          label: 'What Playwright does automatically:',
          list: {
            ordered: false,
            items: [
              'Waits for the element to be visible/actionable',
              'Moves the mouse to the element’s target point',
              'Triggers browser hover events (e.g. mouseover / mouseenter)',
              'Works well with animated and dynamic UIs',
            ],
          },
        },
        {
          type: 'labelValue',
          label: 'When to use?:',
          list: {
            ordered: false,
            items: [
              'Opening a hidden menu',
              'Triggering tooltips',
              'Revealing hover-only buttons (e.g. delete icons in lists)',
            ],
          },
        },

        { type: 'divider' },

        // -------------------- FILTER --------------------
        { type: 'h3', text: 'filter()' },
        {
          type: 'p',
          text: `filter() refines a locator by adding constraints. It’s ideal for lists and repeated components where many elements match the same base locator.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Find the correct row by text, then act inside it
const row = page.getByRole('row').filter({ hasText: 'Alex Storm' });
await row.getByRole('button', { name: 'Remove' }).click();`,
        },
        {
          type: 'labelValue',
          label: 'Why we use filters:',
          list: {
            ordered: false,
            items: [
              'Avoid fragile XPath / deep CSS',
              'Express intent clearly',
              'Precise targeting in dynamic lists',
            ],
          },
        },
        {
          type: 'labelValue',
          label: 'Filter options:',
          list: {
            ordered: false,
            items: [
              'hasText: matches text content',
              'has: contains another locator',
              'Tip: combine filter() with scoping (row.getByRole(...))',
            ],
          },
        },

        { type: 'divider' },

        // -------------------- LOGGING --------------------
        { type: 'h3', text: 'Logging in Playwright' },
        {
          type: 'p',
          text: `Logging helps you track execution, debug failures, and understand what happened right before the test failed.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `import { test, expect } from '@playwright/test';

test('example with logging', async ({ page }) => {
  await test.step('Navigate', async () => {
    console.log('Navigating to homepage');
    await page.goto('https://example.com');
  });

  await test.step('Hover menu', async () => {
    console.log('Hovering over menu');
    await page.getByTestId('menu').hover();
    await expect(page.getByRole('menu')).toBeVisible();
  });

  console.log('Test finished');
});`,
        },
        {
          type: 'labelValue',
          label: 'How can logging help us?:',
          list: {
            ordered: false,
            items: [
              'Track test execution',
              'Debug failures',
              'Record steps or data',
              'Monitor long test runs',
            ],
          },
        },
        {
          type: 'labelValue',
          label: 'Benefits:',
          list: {
            ordered: false,
            items: [
              'Cleaner debugging signals (if you keep it minimal)',
              'Central place for test runtime info',
              'Consistent output across tests',
              'Easy to extend later (files, structured logs, etc.)',
            ],
          },
        },

        { type: 'divider' },

        { type: 'h3', text: 'Logging best practices' },
        {
          type: 'labelValue',
          label: 'Use consistent “levels”:',
          list: {
            ordered: false,
            items: [
              'error – something failed and needs attention',
              'warn – something unexpected happened; not fatal',
              'info – high-level operational messages',
              'debug – detailed diagnostic information',
            ],
          },
        },
        {
          type: 'labelValue',
          label: 'Log only what is useful:',
          list: {
            ordered: false,
            items: [
              'Too much logging = noise',
              'Too little logging = missing context',
              'Avoid logging every click/selector repeatedly',
            ],
          },
        },
        {
          type: 'labelValue',
          label: 'Practical tip:',
          list: {
            ordered: false,
            items: [
              'Use test.step() to structure the story',
              'Use screenshots/trace for “what did the page look like?”',
              'Never log secrets (passwords, tokens, personal data)',
            ],
          },
        },

        {
          type: 'links',
          links: [
            {
              label: 'Locator.hover()',
              url: 'https://playwright.dev/docs/api/class-locator#locator-hover',
              description: 'Official API docs for hover()',
            },
            {
              label: 'Locator.filter()',
              url: 'https://playwright.dev/docs/api/class-locator#locator-filter',
              description: 'Official API docs for filter()',
            },
            {
              label: 'test.step()',
              url: 'https://playwright.dev/docs/api/class-test#test-step',
              description: 'Official API docs for structuring tests with steps',
            },
            {
              label: 'Trace Viewer',
              url: 'https://playwright.dev/docs/trace-viewer',
              description: 'Official debugging tool: trace viewer',
            },
          ],
        },
      ],
    },

    {
      id: 'ex4-exercise',
      title: 'Exercise',
      summary: `Mission Control requires an immediate crew roster update.`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Mission Control Crew Roster' },

        { type: 'labelValue', label: 'System', text: `Mission Control Personnel Console` },
        { type: 'labelValue', label: 'Role', text: `Operations Officer` },
        { type: 'labelValue', label: 'Mission Status', text: `Pre-flight roster update` },
        { type: 'labelValue', label: 'Mission Duration', text: `30 minutes` },

        {
          type: 'button',
          label: 'Open Mission Control',
          routerLink: '/test-site/table',
          queryParams: { from: 'playwright' },
          variant: 'primary',
          testId: 'open-test-site-block',
          newTab: true,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },
        { type: 'p', text: `Operations Officer,` },
        {
          type: 'p',
          text: `Mission Control has received a late personnel update. Before launch clearance can be granted, the active crew roster must be reviewed and updated.`,
        },
        {
          type: 'p',
          text: `A new crew member must be registered, and an existing crew member — Ava — requires a clearance upgrade due to changing mission requirements.`,
        },
        {
          type: 'p',
          text: `You are also required to inspect crew dossiers and archive visual evidence of the final crew configuration.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Access the Mission Control Crew Roster',
              'Register a new crew member using the Add user console',
              'Promote Ava from Member to Manager (Optional)',
              'Inspect a crew dossier using hover-based intel',
              'Capture and store visual evidence of the final roster state',
            ],
          },
          testId: 'crew-roster-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Operational Instructions' },
        {
          type: 'labelValue',
          label: 'Proceed in the following order:',
          list: {
            ordered: true,
            items: [
              {
                text: 'Navigate to the Mission Control Personnel Console',
                children: ['https://ast.testhuset.dk/test-site/'],
              },
              {
                text: 'Register a new crew member using the Add user section',
                children: [
                  'Enter a crew member name',
                  'Enter a contact email',
                  'Confirm the crew member appears in the roster',
                ],
              },
              {
                text: 'Locate Ava in the crew roster and update her clearance level (Optional)',
                children: [
                  'Change her role from Member to Manager',
                  'Verify the updated role is visible in the roster',
                ],
              },
              {
                text: 'Inspect crew dossier intel',
                children: [
                  'Hover over the information icon for a crew member',
                  'Confirm that tooltip is visible',
                ],
              },
              {
                text: 'Capture a screenshot of the final verified roster state',
                children: [
                  'File name: exercise_4_mission_evidence',
                  'Location: screenshots folder',
                ],
              },
            ],
          },
          testId: 'crew-roster-instructions',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },
        {
          type: 'labelValue',
          label: 'The mission is considered successful when:',
          list: {
            ordered: true,
            items: [
              'The Mission Control Crew Roster page is accessed',
              'A new crew member is added and visible in the roster',
              'Ava’s role is updated to Manager (Optional)',
              'Crew dossier information appears on hover',
              'A screenshot named exercise_4_mission_evidence is saved in the screenshots folder',
            ],
          },
          testId: 'crew-roster-dod',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Test Cases' },

        {
          type: 'labelValue',
          label: 'TC-401',
          text: 'Mission Control Crew Roster loads successfully and displays existing crew members.',
        },
        {
          type: 'labelValue',
          label: 'TC-402',
          text: 'Registering a new crew member results in a new roster entry with correct name and email.',
        },
        {
          type: 'labelValue',
          label: 'TC-403',
          text: 'Updating Ava’s role changes her clearance level from Member to Manager and affects only her row. (Optional)',
        },
        {
          type: 'labelValue',
          label: 'TC-404',
          text: 'Hovering over a crew dossier icon displays additional information and hides it when no longer hovered.',
        },
        {
          type: 'labelValue',
          label: 'TC-405',
          text: 'A mission evidence screenshot is captured and stored with the correct file name and location.',
        },
      ],
    },

    {
      id: 'ex4-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 4' },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution (recommended)' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_4.spec.ts',
          code: `import { test, expect } from "@playwright/test";

test.afterEach("Close browser", async ({ page }) => {
  page.close();
});

test("Exercise 4 - Mission Control Crew Roster", async ({ page }) => {
  const baseUrl: string = "https://stormeal.github.io/lecture-page";
  const adminSection = page.getByTestId("user-admin");
  const addNameInput = adminSection.getByTestId("add-user-name");
  const addEmailInput = adminSection.getByTestId("add-user-email");
  const addUserSubmitBtn = page.getByTestId("add-user-submit");
  const directory = page.getByTestId("user-directory");
  const list = directory.getByTestId("user-list");
  const rows = list.getByTestId("user-row");

  const rowByName = (name: string) =>
    rows.filter({ has: page.getByTestId("user-name").filter({ hasText: name }) });

  const infoBtn = (row) => row.getByTestId("user-info");

  await test.step("TC1: Navigation", async () => {
    await page.goto(\`\${baseUrl}/test-site/table\`);
  });

  await test.step("TC2: Adding new crew member to roster", async () => {
    await addNameInput.fill("Astro Naut");
    await addEmailInput.fill("an@rocket.com");
    await addUserSubmitBtn.click();
  });

  await test.step("TC3: Locate and update Ava clearance level", async () => {
    const row = rowByName("Ada Lovelace");

    // Change the role via the <select>
    const role = row.getByTestId("user-role");
    await role.selectOption({ label: "Manager" });

    // Assert the <select> changed
    await expect(role).toHaveValue("Manager");
  });

  await test.step("TC4: Inspect crew dossier intel", async () => {
    const row = rowByName("Alex Storm");
    await infoBtn(row).hover();
    await expect(page.getByRole("tooltip")).toBeVisible();
  });

  await test.step("TC5: Capture a screenshot of the final verified roster state", async () => {
    await page.screenshot({ path: "screenshots/day1_exercise4.png", fullPage: true });
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },
        {
          type: 'p',
          text:
            '• Uses stable getByTestId locators for admin inputs, table rows, and actions (low-flake, easy to read) ' +
            '• Groups the flow with test.step() so failures are easier to understand in reports ' +
            '• Verifies outcomes with web-first assertions (toHaveValue / toBeVisible) instead of manual reads ' +
            '• Captures an end-state screenshot for quick review in CI artifacts',
        },
      ],
    },
  ],
};
