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
      id: 'ex4-quiz',
      title: 'Quiz',
      summary:
        'Check your understanding of hover(), locator filtering, and practical logging patterns.',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'Why is hover() useful in Playwright tests?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because hover() is required before every click.',
              wrongExplanation:
                'Hovering is only needed when the UI requires it (menus, tooltips, hidden actions).',
              wrongExplainFurther:
                'Most interactions do not require hover. Use it when hover is part of the user flow.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because some UI elements only appear or become usable after a hover interaction.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Hovering is essential for UI interactions like dropdown menus, tooltips, and hover-only actions that appear only after you hover.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because hover() automatically logs each step.',
              wrongExplanation:
                'hover() performs a user-like mouse interaction. It does not add logs by itself.',
              wrongExplainFurther:
                'For structure and logs, use test.step() and your logger/console output.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because hover() disables animations.',
              wrongExplanation:
                'hover() does not disable animations. It triggers hover events like a real user.',
              wrongExplainFurther:
                'Animations can still happen. Playwright’s auto-waiting and web-first assertions help handle dynamic UI timing.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'When is locator.filter() most useful?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When you want to speed up navigation.',
              wrongExplanation:
                'filter() is not a navigation feature. It refines which elements your locator matches.',
              wrongExplainFurther:
                'Use filter() when many elements match the same base locator and you need to narrow it down.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'When you want to type into an input.',
              wrongExplanation:
                'Typing actions are done with fill(), press(), or pressSequentially().',
              wrongExplainFurther:
                'filter() is about selecting the right element in repeated UI structures like lists and tables.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'When many elements match the same base locator and you need to narrow down to the correct one.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. filter() is ideal for lists and repeated components where a base locator matches multiple elements and you need precise targeting.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'When you want to create a new browser context.',
              wrongExplanation: 'A browser context is created from the browser, not from locators.',
              wrongExplainFurther:
                'filter() is part of the Locator API and only affects which DOM elements are matched.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'Which constraints can you use with locator.filter() (as taught here)?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'hasText and has',
              wrongExplanation: '',
              correctExplanation:
                'Correct. filter() can refine a locator using hasText (text content matching) and has (contains another locator).',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'timeout and retries',
              wrongExplanation:
                'Those relate to waiting/retry configuration, not locator filtering constraints.',
              wrongExplainFurther:
                'filter() is about narrowing matches, not changing timeouts or retry behavior.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'color and position',
              wrongExplanation:
                'filter() does not filter based on visual styling properties like color or coordinates.',
              wrongExplainFurther:
                'Instead, filter by text content (hasText) or by structure (has another locator).',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'url and method',
              wrongExplanation: 'Those are network concepts, not locator constraints.',
              wrongExplainFurther: 'filter() is purely about narrowing down DOM element matches.',
            },
          ],
        },

        {
          id: 'q4',
          prompt:
            'What is a practical benefit of wrapping actions in test.step() and adding minimal logs?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It makes tests run faster.',
              wrongExplanation: 'test.step() is for structure and reporting, not speed.',
              wrongExplainFurther:
                'Better structure can reduce debugging time, but it does not speed up execution directly.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It automatically fixes flaky locators.',
              wrongExplanation:
                'Steps and logs do not fix locators. They help you diagnose what happened.',
              wrongExplainFurther:
                'To reduce flakiness, use good locators, web-first assertions, and avoid manual time-based waits.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It replaces the need for assertions.',
              wrongExplanation: 'Logs never replace assertions. Assertions verify correctness.',
              wrongExplainFurther:
                'Logs provide context, while expect() ensures the UI state matches expectations.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It structures the test into meaningful phases and provides context right before a failure.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. test.step() structures the test into readable phases. Minimal, useful logs help you see what happened right before a failure, making debugging easier.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which logging rule is most important for test safety?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Always log every click.',
              wrongExplanation:
                'Logging every click usually creates noise and makes failures harder to diagnose.',
              wrongExplainFurther:
                'Prefer high-signal logs: key state, important data points, and step boundaries.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Never log secrets (passwords, tokens, personal data).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Never log secrets. Logs often end up in CI output and shared reports, so leaking credentials or personal data is a serious security risk.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Always log the full DOM.',
              wrongExplanation: 'Dumping the full DOM is extremely noisy and rarely useful.',
              wrongExplainFurther:
                'Use traces/screenshots for “what did the page look like?”, and keep logs focused.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Never use console.log.',
              wrongExplanation:
                'console.log can be useful, especially early on, if used sparingly and intentionally.',
              wrongExplainFurther:
                'What matters is consistency, signal-to-noise ratio, and never logging secrets.',
            },
          ],
        },
      ],
    },

    {
      id: 'ex4-exercise',
      title: 'Exercise 4.1',
      summary: `Mission Control requires an immediate crew roster update.`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 4.1: Mission Control Crew Roster' },

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
          text: `A new crew member must be registered, and an existing crew member Ava requires a clearance upgrade due to changing mission requirements.`,
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
      title: 'Solution 4.1',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 4.1' },

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

    {
      id: 'ex4-2-exercise',
      title: 'Exercise 4.2 (DSB)',
      summary: `DSB station operations needs a controlled staff board update.`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'DSB Station Operations Board' },

        { type: 'labelValue', label: 'System', text: `DSB Staff Assignment Console` },
        { type: 'labelValue', label: 'Role', text: `Platform Operations Coordinator` },
        { type: 'labelValue', label: 'Mission Status', text: `Shift reassignment pending` },
        { type: 'labelValue', label: 'Mission Duration', text: `30 minutes` },

        {
          type: 'button',
          label: 'Open Staff Console',
          routerLink: '/test-site/table',
          queryParams: { from: 'playwright' },
          variant: 'primary',
          testId: 'open-test-site-block',
          newTab: true,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },
        { type: 'p', text: `Coordinator,` },
        {
          type: 'p',
          text: `DSB Station Operations is preparing the next shift rotation. Before passenger traffic increases, the internal staff board must be updated and verified.`,
        },
        {
          type: 'p',
          text: `A new station staff member must be added, a specific assignment row must be located precisely using filters, and hover-only controls must be inspected before the final board state is approved.`,
        },
        {
          type: 'p',
          text: `Because this is an operational console, your reporting should be clean. Add a few useful logs so another operator can understand what happened if the test fails.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Access the DSB staff assignment console',
              'Register a new station staff member with role and status',
              'Use locator.filter() to find the correct staff row precisely',
              'Update one existing staff assignment',
              'Use hover() to inspect row information and reveal a hover-only control',
              'Use a few meaningful logs during the mission',
              'Capture and store visual evidence of the verified board state',
            ],
          },
          testId: 'dsb-board-objectives',
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
                text: 'Navigate to the DSB staff assignment console',
                children: ['https://ast.testhuset.dk/test-site/table'],
              },
              {
                text: 'Register a new staff member using the Add user section',
                children: [
                  'Enter a name',
                  'Enter an email',
                  'Choose a role',
                  'Choose a status',
                ],
              },
              {
                text: 'Use filtering to locate the correct staff row',
                children: [
                  'Target the row by staff name',
                  'Narrow it further by role or status badge when useful',
                ],
              },
              {
                text: 'Update an existing staff assignment',
                children: [
                  'Change Ada Lovelace from Member to Manager',
                  'Change her status from Invited to Active',
                  'Verify that only her row changed',
                ],
              },
              {
                text: 'Inspect row-only controls with hover',
                children: [
                  'Hover the info icon for a staff row and verify the tooltip',
                  'Hover the full row and verify the hidden Remove button becomes visible',
                ],
              },
              {
                text: 'Add a few meaningful logs during the mission',
                children: [
                  'Log when navigation begins',
                  'Log which staff member you add',
                  'Log which row you update',
                ],
              },
              {
                text: 'Capture a screenshot of the final verified board state',
                children: [
                  'File name: day1_ex4_2_dsb',
                  'Location: screenshots folder',
                ],
              },
            ],
          },
          testId: 'dsb-board-instructions',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },
        {
          type: 'labelValue',
          label: 'The mission is considered successful when:',
          list: {
            ordered: true,
            items: [
              'The DSB staff board page is accessed',
              'A new staff member is added and visible in the board',
              'Ada Lovelace is updated to Manager and Active',
              'The row is located with filtering rather than broad selectors only',
              'Tooltip information appears on hover',
              'The hover-only Remove button becomes visible on the targeted row',
              'A screenshot named day1_ex4_2_dsb is saved in the screenshots folder',
            ],
          },
          testId: 'dsb-board-dod',
        },

        { type: 'divider' },

        {
          type: 'hint',
          id: 'ex4-2-hint-filter-row',
          title: 'Hint 1: How should I find the correct row?',
          blocks: [
            {
              type: 'p',
              text: 'Start with the collection of rows, then narrow it with filter(). You can filter by text or by another locator inside the row.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `const rows = page.getByTestId('user-row');
const adaRow = rows.filter({
  has: page.getByTestId('user-name').filter({ hasText: 'Ada Lovelace' }),
});`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex4-2-hint-hover-controls',
          title: 'Hint 2: What should I use hover() on?',
          blocks: [
            {
              type: 'p',
              text: 'This page has two good hover targets: the info button that reveals a tooltip, and the row itself, which reveals the hidden Remove button.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex4-2-hint-logging',
          title: 'Hint 3: What should I log?',
          blocks: [
            {
              type: 'p',
              text: 'Log only the high-signal moments. A few examples are navigation start, the staff member you add, and the row you are about to update.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `console.log('Navigating to DSB staff board');
console.log('Adding station staff member: Ingrid Signal');
console.log('Updating row: Ada Lovelace');`,
            },
          ],
        },
      ],
    },

    {
      id: 'ex4-2-solution',
      title: 'Solution 4.2 (DSB)',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 4.2 (DSB)' },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_4_2.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Exercise 4.2 (DSB): station operations board update', async ({ page }) => {
  const baseUrl = 'https://stormeal.github.io/lecture-page';
  const adminSection = page.getByTestId('user-admin');
  const addNameInput = adminSection.getByTestId('add-user-name');
  const addEmailInput = adminSection.getByTestId('add-user-email');
  const addRoleSelect = adminSection.getByTestId('add-user-role');
  const addStatusSelect = adminSection.getByTestId('add-user-status');
  const addUserSubmitBtn = page.getByTestId('add-user-submit');
  const rows = page.getByTestId('user-row');

  const rowByName = (name: string) =>
    rows.filter({
      has: page.getByTestId('user-name').filter({ hasText: name }),
    });

  await test.step('Navigate to the DSB staff board', async () => {
    console.log('Navigating to DSB staff board');
    await page.goto(\`\${baseUrl}/test-site/table\`);
  });

  await test.step('Add a new station staff member', async () => {
    console.log('Adding station staff member: Ingrid Signal');
    await addNameInput.fill('Ingrid Signal');
    await addEmailInput.fill('ingrid.signal@dsb.dk');
    await addRoleSelect.selectOption({ label: 'Guest' });
    await addStatusSelect.selectOption({ label: 'Invited' });
    await addUserSubmitBtn.click();

    const ingridRow = rowByName('Ingrid Signal');
    await expect(ingridRow).toBeVisible();
  });

  await test.step('Filter and update Ada assignment', async () => {
    console.log('Updating row: Ada Lovelace');
    const invitedAdaRow = rowByName('Ada Lovelace').filter({
      has: page.getByTestId('badge-status-invited'),
    });

    await invitedAdaRow.getByTestId('user-role').selectOption({ label: 'Manager' });
    await invitedAdaRow.getByTestId('user-status').selectOption({ label: 'Active' });

    const adaRow = rowByName('Ada Lovelace');
    await expect(adaRow.getByTestId('user-role')).toHaveValue('Manager');
    await expect(adaRow.getByTestId('user-status')).toHaveValue('Active');
  });

  await test.step('Inspect hover-only information and actions', async () => {
    const adaRow = rowByName('Ada Lovelace');

    await adaRow.getByTestId('user-info').hover();
    await expect(page.getByRole('tooltip')).toBeVisible();

    await adaRow.hover();
    await expect(adaRow.getByTestId('user-remove')).toBeVisible();
  });

  await test.step('Capture final board evidence', async () => {
    await page.screenshot({ path: 'screenshots/day1_ex4_2_dsb.png', fullPage: true });
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good next step' },
        {
          type: 'p',
          text:
            'It uses filter() more intentionally than 4.1 by narrowing to a specific row and state. ' +
            'It demonstrates two different hover outcomes: tooltip reveal and a hover-only button. ' +
            'It adds small, high-signal logs without turning the test into noise. ' +
            'It keeps the operational DSB theme while staying aligned with the table playground built for these APIs.',
        },
      ],
    },
  ],
};
