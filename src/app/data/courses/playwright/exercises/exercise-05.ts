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
      id: 'ex5-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of intent-based form actions: check() and selectOption().',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt:
            'Why should you prefer intent-based actions (like check() and selectOption()) over click() for form controls?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because click() is not supported in Playwright.',
              wrongExplanation: 'click() is supported and is a common action in Playwright.',
              wrongExplainFurther:
                'The key point is reliability. Intent-based actions express the end state you want and Playwright works to reach it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because they describe the end state you want, and Playwright will wait and retry until the control reaches that state.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Intent-based actions are more reliable for form controls because they ensure the control ends up in the desired state and Playwright will wait and retry until it does.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because intent-based actions automatically write assertions for you.',
              wrongExplanation:
                'Intent-based actions do not create assertions. They only perform the interaction.',
              wrongExplainFurther:
                'You still need to assert the result (for example toBeChecked() or toHaveValue()) to prove the UI changed as expected.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because click() always fails on form controls.',
              wrongExplanation:
                'click() can work on form controls, but it is not always the most reliable way to express your intent.',
              wrongExplainFurther:
                'With click(), you are hoping the state changes correctly. With check()/selectOption(), you tell Playwright the state you want.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'What is locator.check() used for?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Typing into a textbox.',
              wrongExplanation: 'Typing is done with fill(), press(), or pressSequentially().',
              wrongExplainFurther: 'check() is specifically for checkbox and radio inputs.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Selecting an option in a <select> dropdown.',
              wrongExplanation:
                'Dropdown selection is done with selectOption() for native <select> elements.',
              wrongExplainFurther: 'check() is for checkbox/radio controls, not select dropdowns.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Ensuring a checkbox or radio button becomes checked.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. check() is used to ensure checkbox inputs are turned on and radio inputs are selected.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Clearing an input value.',
              wrongExplanation: 'Clearing is done with clear() (or by fill() replacing the value).',
              wrongExplainFurther: 'check() is not an input clearing action.',
            },
          ],
        },

        {
          id: 'q3',
          prompt:
            'What happens if you call check() on an element that is not a checkbox or radio input?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Playwright fails because check() only works on checkbox and radio inputs.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. check() only works on checkbox and radio inputs. Using it on other elements will fail.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Playwright silently falls back to click().',
              wrongExplanation: 'Playwright does not silently switch behavior for check().',
              wrongExplainFurther:
                'This is intentional: if you’re using check(), Playwright expects a checkbox or radio input. Otherwise it fails so you can fix the test.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Playwright ignores the call and continues.',
              wrongExplanation:
                'Playwright treats it as a misuse and fails rather than ignoring it.',
              wrongExplainFurther:
                'Failing fast prevents hidden bugs where the test “passes” without performing the intended interaction.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Playwright checks the nearest checkbox on the page.',
              wrongExplanation: 'Playwright never guesses which control you “meant”.',
              wrongExplainFurther:
                'Tests should be explicit and precise. If the locator is wrong, the test should fail.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'What is locator.selectOption() intended for?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Selecting a row in a table.',
              wrongExplanation:
                'selectOption() is not for tables. It is for native <select> dropdowns.',
              wrongExplainFurther:
                'For tables/lists, you typically scope locators (and sometimes use filter()) to select the right row.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Selecting an item in a custom dropdown component.',
              wrongExplanation:
                'selectOption() is for native HTML <select> elements, not custom dropdown widgets.',
              wrongExplainFurther:
                'Custom dropdowns usually require clicking the trigger and then clicking an option element in the opened list.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Selecting a checkbox.',
              wrongExplanation: 'Checkboxes are handled with check()/uncheck().',
              wrongExplainFurther:
                'selectOption() is specifically tied to the <select> element API.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Selecting an option in a native HTML <select> dropdown.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. selectOption() is designed for native <select> dropdowns and selects the option you specify.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which ways can you select options with selectOption() (as taught here)?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'By CSS class, URL, or role.',
              wrongExplanation: 'Those are not selection methods for selectOption().',
              wrongExplainFurther:
                'selectOption() supports selecting by value, label (visible text), or index.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'By value, label, or index.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. You can select an option by value (often most stable), label (visible text), or index (position).',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'By pixel position.',
              wrongExplanation: 'selectOption() does not select options by coordinates.',
              wrongExplainFurther: 'It selects logically based on option data (value/label/index).',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'By screenshot comparison.',
              wrongExplanation:
                'Screenshots are for visual assertions, not selecting dropdown options.',
              wrongExplainFurther:
                'For dropdowns, prefer selecting by value or label via selectOption().',
            },
          ],
        },

        {
          id: 'q6',
          prompt: 'Which selectOption() strategy is usually the most stable?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Selecting by value.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Selecting by value is usually the most stable because visible labels can change due to copy updates or translations.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Selecting by label.',
              wrongExplanation: 'Labels are human-friendly but often less stable than values.',
              wrongExplainFurther:
                'Copy changes and translations can alter labels, causing tests to break even though the underlying value stayed the same.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Selecting by index.',
              wrongExplanation: 'Index can be fragile if option order changes.',
              wrongExplainFurther:
                'Index is sometimes useful, but changes in the list order can break the test even if the values are unchanged.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Selecting by placeholder.',
              wrongExplanation:
                'Placeholder is not one of the selection methods described for selectOption().',
              wrongExplainFurther: 'The supported approaches here are value, label, or index.',
            },
          ],
        },

        {
          id: 'q7',
          prompt:
            'After using check() or selectOption(), what should you do to prove the UI changed as expected?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Add waitForTimeout(1000).',
              wrongExplanation:
                'Time-based waits are usually unnecessary and can make tests flaky.',
              wrongExplainFurther:
                'Instead, assert the expected state using web-first assertions like toBeChecked() or toHaveValue().',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Print the locator to the console.',
              wrongExplanation: 'Logs can help debugging but do not verify correctness.',
              wrongExplainFurther: 'Assertions are what prove the UI is in the expected state.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Assert the result (for example, toBeChecked() or toHaveValue() on the control).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Always assert after interacting. Use toBeChecked() for checkboxes/radios and toHaveValue() (or similar) for a <select> to prove the UI changed as expected.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Rerun the test to confirm.',
              wrongExplanation:
                'Rerunning is not a verification strategy. Tests should prove correctness in a single run.',
              wrongExplainFurther:
                'Reliable tests combine intent-based actions with assertions that auto-retry until the UI reaches the expected state.',
            },
          ],
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
