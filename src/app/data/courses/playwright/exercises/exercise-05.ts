import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_05: CourseGroupItem = {
  id: 'ex5',
  title: 'Exercise 5: Control Elements',
  summary: 'Check() and SelectOption()',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `With this exercise we are talking about two more Playwright functions, check and selectoption. This will assist on for the upcoming exercise. Where we are going to interact with checkboxes, dropdowns and radio buttons.`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex5-theory',
      title: 'Theory',
      summary: 'Check() and SelectOption()',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Theory: check() and selectOption()' },

        {
          type: 'p',
          text: `In Playwright, you should prefer intent-based actions when interacting with form controls. Instead of clicking and hoping the state changes, you use APIs that describe the end state you want.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Intent-based actions are more reliable than click() for form controls because Playwright will wait and retry until the element reaches the desired state.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'check() for checkboxes and radio buttons' },

        {
          type: 'p',
          text: `Use locator.check() when you need a checkbox or radio button to become checked. It is different from click() because it ensures the control ends up checked, even if the first attempt is blocked or the page is still updating.`,
        },

        {
          type: 'labelValue',
          label: 'check() is used for:',
          list: {
            ordered: false,
            items: ['Checkbox inputs (toggle on)', 'Radio inputs (select one option in a group)'],
          },
          testId: 'ex5-theory-check-used-for',
        },

        {
          type: 'labelValue',
          label: 'Common patterns:',
          list: {
            ordered: false,
            items: [
              'Use check() to select a checkbox or radio option.',
              'Use uncheck() for checkboxes if you need to ensure it is off.',
              'Assert the result with toBeChecked() or by verifying the UI state/value after the interaction.',
            ],
          },
          testId: 'ex5-theory-check-patterns',
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `check() only works on checkbox and radio inputs. If you try it on other elements, Playwright will fail.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'selectOption() for dropdowns' },

        {
          type: 'p',
          text: `Use locator.selectOption() for native HTML <select> dropdowns. Like check(), it is intent-based: it selects the option you specify, and Playwright waits for the selection to apply.`,
        },

        {
          type: 'labelValue',
          label: 'You can select options by:',
          list: {
            ordered: false,
            items: [
              'Value (usually the most stable)',
              'Label (the visible text)',
              'Index (position in the list)',
            ],
          },
          testId: 'ex5-theory-selectoption-ways',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Selecting by value is usually the most stable because visible labels are more likely to change due to copy updates or translations.`,
        },

        {
          type: 'p',
          text: `After selecting, you should assert the result. A common assertion is to verify the <select> has the expected value.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Reliability tips' },

        {
          type: 'labelValue',
          label: 'Tips:',
          list: {
            ordered: false,
            items: [
              'Prefer stable selectors like data-testid for locating the control.',
              'Interact with the actual input/select element (not just a surrounding container).',
              'Always assert the result after checking/selecting to prove the UI changed as expected.',
            ],
          },
          testId: 'ex5-theory-reliability-tips',
        },
      ],
    },

    {
      id: 'ex5-exercise',
      title: 'Exercise',
      summary: `Mission Part 2: Control Elements`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Mission Log Configuration – Control Elements' },

        { type: 'labelValue', label: 'Program', text: `Astronaut Automation Training` },
        { type: 'labelValue', label: 'Role', text: `Flight Engineer` },
        { type: 'labelValue', label: 'Mission Status', text: `Configuration Required` },
        { type: 'labelValue', label: 'Mission Duration', text: `35 minutes` },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },
        { type: 'p', text: `Flight Engineer,` },
        {
          type: 'p',
          text: `Your mission log transmission from the previous exercise has been reviewed and approved by Mission Control.`,
        },
        {
          type: 'p',
          text: `New operational requirements have now been introduced. Before future missions can proceed, additional configuration controls must be set correctly as part of the mission log process.`,
        },
        {
          type: 'p',
          text: `You are instructed to copy your completed solution from Exercise 3 and extend it. Do not rewrite the mission from scratch.`,
        },
        {
          type: 'p',
          text: `These new requirements involve dropdowns, radio buttons, and checkboxes. Precision is critical: every control must end in the correct state and be verified through telemetry.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Reuse your completed Exercise 3 mission log test',
              'Configure additional control elements using intent-based Playwright actions',
              'Preserve all existing text input logic and assertions',
              'Verify that Mission Control telemetry reflects both existing and new configuration values',
              'Capture updated mission evidence after successful transmission',
            ],
          },
          testId: 'ex5-mission-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Operational Instructions' },
        {
          type: 'labelValue',
          label: 'Starting from your Exercise 3 solution:',
          list: {
            ordered: true,
            items: [
              'Copy your Exercise 3 test into a new Exercise 5 test file.',
              'Keep all existing steps that fill text inputs, submit the form, and assert telemetry.',
              'Extend the test to configure the Topic dropdown using selectOption(). Select option "Support"',
              'Extend the test to configure the Priority radio group using check(). Make sure that the value is High',
              'Extend the test to select multiple values in the Clearances multi-select using selectOption(). Select option "Bravo" and "Delta"',
              'Verify that selected clearances are reflected visually in the UI.',
              'Extend the test to enable the Newsletter subscription checkbox using check().',
              'Note: the Newsletter checkbox does not provide a data-testid and must be located differently.',
              'Extend the test to accept the Mission Terms checkbox using check().',
              'Assert that the Live Preview telemetry reflects all configured values, including:',
              {
                text: 'Telemetry fields to verify:',
                children: [
                  'Topic',
                  'Priority',
                  'Clearances',
                  'Newsletter subscription status',
                  'Mission terms acceptance',
                ],
              },
              'Transmit the mission log and confirm Mission Control acknowledges receipt.',
              {
                text: 'Capture updated mission evidence:',
                children: [
                  'File name: screenshots/day1_exercise5.png',
                  'Location: screenshots folder',
                ],
              },
            ],
          },
          testId: 'ex5-operational-instructions',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },
        {
          type: 'labelValue',
          label: 'The mission is considered successful when:',
          list: {
            ordered: false,
            items: [
              'The Exercise 3 solution is reused and extended, not rewritten',
              'Text input behavior from Exercise 3 remains unchanged',
              'Topic is configured using selectOption()',
              'Priority is configured using check()',
              'Multiple Clearances are selected correctly',
              'Newsletter checkbox is checked without relying on a data-testid',
              'Mission terms checkbox is checked',
              'Live Preview telemetry reflects all configured values',
              'A screenshot named day1_exercise5 is saved in the screenshots folder',
            ],
          },
          testId: 'ex5-definition-of-done',
        },
        { type: 'divider' },

        { type: 'h3', text: 'Hints' },

        {
          type: 'hint',
          id: 'ex5-hint-check',
          title: 'Hint 1: Using check() correctly',
          blocks: [
            {
              type: 'p',
              text: `check() is intended for checkbox and radio inputs. It ensures the control ends up checked, even if the page is still updating.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'check examples',
              code: `// Checkbox
await page.getByRole('checkbox', { name: 'Subscribe' }).check();
await expect(page.getByRole('checkbox', { name: 'Subscribe' })).toBeChecked();

// Radio button
await page.getByRole('radio', { name: 'High' }).check();
await expect(page.getByRole('radio', { name: 'High' })).toBeChecked();`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex5-hint-selectoption',
          title: 'Hint 2: Selecting dropdown values',
          blocks: [
            {
              type: 'p',
              text: `selectOption() works only on native <select> elements. Selecting by value is usually the most stable approach.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'selectOption examples',
              code: `// Single-select dropdown
await page.getByRole('combobox').selectOption({ value: 'option-a' });

// Assert selected value
await expect(page.getByRole('combobox')).toHaveValue('option-a');`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex5-hint-multi-select',
          title: 'Hint 3: Multi-select dropdowns',
          blocks: [
            {
              type: 'p',
              text: `A multi-select <select multiple> can be configured with more than one value in a single selectOption() call.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'multi-select examples',
              code: `// Multi-select dropdown
await page.getByRole('listbox').selectOption(['option-a', 'option-b']);

// Assert multiple selected values
await expect(page.getByRole('listbox')).toHaveValues(['option-a', 'option-b']);`,
            },
          ],
        },
      ],
    },
    {
      id: 'ex5-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution (recommended)' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_5.spec.ts',
          code: `import { test, expect, Page } from "@playwright/test";

export enum ContactTopic {
  Support = "support",
  Billing = "billing",
  Feedback = "feedback",
  Other = "other",
}

export enum Clearance {
  Alpha = "0: 'alpha'",
  Bravo = "1: 'bravo'",
  Charlie = "2: 'charlie'",
  Delta = "3: 'delta'",
}

async function selectClearances(page: Page, ...clearances: Clearance[]) {
  await page.getByTestId("contact-clearances").selectOption(clearances.map((value) => ({ value })));
}

test.afterEach("Close browser", async ({ page }) => {
  page.close();
});

test("Exercise 5 - Control Elements", async ({ page }) => {
  const baseUrl: string = "https://stormeal.github.io/lecture-page/test-site";
  const nameInput = page.getByTestId("contact-name");
  const emailInput = page.getByTestId("contact-email");
  const messageInput = page.getByTestId("contact-message");
  const submitBtn = page.getByTestId("contact-submit");
  const namePreview = page.getByTestId("preview-name");
  const emailPreview = page.getByTestId("preview-email");
  const topicPreview = page.getByTestId("preview-topic");
  const priorityPreview = page.getByTestId("preview-priority");
  const clearancesPreview = page.getByTestId("preview-clearances");
  const newsletterPreview = page.getByTestId("preview-newsletter");
  const conditionsPreview = page.getByTestId("preview-terms");
  const successfullToast = page.getByTestId("submit-success");
  const resetBtn = page.getByTestId("testsite-reset");
  const priorityGroup = page.getByTestId("contact-priority");
  const priorityHigh = priorityGroup.getByTestId("priority-high");
  const topicSelect = page.getByTestId("contact-topic");
  const newsletterCheckbox = page.locator("#newsletter");
  const conditionsCheckbox = page.getByTestId("contact-accept-terms");

  await test.step("Navigate to page", async () => {
    await page.goto(\`\${baseUrl}\` + \`/input-forms\`);
  });

  await test.step("Fill the inputs and press the submit button", async () => {
    await nameInput.fill("Alex Storm");
    await emailInput.pressSequentially("ast@testhuset.dk");
    await messageInput.pressSequentially("Mission log #3613, nothing to report but a lot of testing done today. Take care now 🔥", { delay: 10 });
  });

  await test.step("Select Support topic", async () => {
    await expect(topicSelect).toBeVisible();
    await topicSelect.selectOption(ContactTopic.Support);
  });

  await test.step("Select High priority", async () => {
    await expect(priorityGroup).toBeVisible();
    await priorityHigh.check();
  });

  await test.step("Select required Clearances", async () => {
    await selectClearances(page, Clearance.Bravo, Clearance.Delta);

    const chipItems = page.getByTestId("clearances-chips").locator("span");
    await expect(chipItems).toContainText(["bravo", "delta"]);
  });

  await test.step("Accept newsletters and conditions", async () => {
    await newsletterCheckbox.check();
    await conditionsCheckbox.check();
  });

  await test.step("Submit form", async () => {
    await submitBtn.click();
  });

  await test.step("Validate the preview fields and confirmation toast", async () => {
    await expect(namePreview).toHaveText("Alex Storm");
    await expect(emailPreview).toHaveText("ast@testhuset.dk");
    await expect(topicPreview).toHaveText("support");
    await expect(priorityPreview).toHaveText("high");
    await expect(clearancesPreview).toHaveText("bravo, delta");
    await expect(newsletterPreview).toHaveText("Yes");
    await expect(conditionsPreview).toHaveText("Accepted");
    await expect(successfullToast).toBeVisible();
  });

  await test.step("Take a screenshot", async () => {
    await page.screenshot({ path: "screenshots/day1_exercise5.png", fullPage: true });
  });

  await test.step("Clear the inputs and validate fields are cleared", async () => {
    await resetBtn.click();
    await expect(namePreview).not.toHaveText("Alex Storm");
    await expect(emailPreview).not.toHaveText("ast@testhuset.dk");
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },
        {
          type: 'p',
          text:
            '• Builds directly on the Exercise 3 flow (navigation, text entry, telemetry assertions, submission)\n' +
            '• Uses intent-based interactions for controls (check() for checkbox/radio and selectOption() for selects)\n' +
            '• Verifies outcomes through Live Preview fields (web-first assertions) instead of manual reads\n' +
            '• Uses test.step() to keep reports readable and failures easy to locate\n' +
            '• Demonstrates a realistic selector strategy by handling a control without data-testid',
        },
      ],
    },
  ],
};
