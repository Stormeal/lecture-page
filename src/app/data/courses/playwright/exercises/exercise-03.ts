import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_03: CourseGroupItem = {
  id: 'ex3',
  title: 'Exercise 3: Text and Forms',
  summary: 'Text and Form actions',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `In this exercise we will take what we learned previously and apply this to deepen our knowledge within Playwright. There's two major topics we can't go without. The first one is Locators and the second is Assertions.`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex3-theory',
      title: 'Theory',
      summary: 'Text input actions: fill(), press(), pressSequentially(), and clear().',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Input Actions' },

        {
          type: 'p',
          text: `In this exercise we focus on the most common “typing” interactions in Playwright. These actions are used on a Locator and Playwright will automatically wait for the element to be ready (actionable) before performing them.`,
        },
        { type: 'divider' },

        { type: 'h3', text: 'fill()' },
        {
          type: 'p',
          text: `fill() replaces the existing value of an input/textarea with the new value. It clears the field automatically and sets the value in one go (not character-by-character).`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Replaces the value of the input
await page.getByLabel('Username').fill('john_doe');`,
        },
        {
          type: 'labelValue',
          label: 'Characteristics:',
          list: {
            ordered: false,
            items: [
              'Clears the field automatically',
              'Fast and deterministic for most form fields',
              `Best choice for “API-like” direct text replacement`,
            ],
          },
        },

        { type: 'divider' },

        { type: 'h3', text: 'press()' },
        {
          type: 'p',
          text: `press() simulates pressing a keyboard key (or key combo) on a focused element. It’s great for submitting with Enter, triggering shortcuts, or using navigation keys.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Submit a search by pressing Enter
await page.getByRole('textbox', { name: 'Search' }).press('Enter');

// Example: select all (platform-specific shortcuts may differ)
await page.getByRole('textbox', { name: 'Search' }).press('Control+A');`,
        },
        {
          type: 'labelValue',
          label: 'Notes:',
          list: {
            ordered: false,
            items: [
              'Uses keyboard events like a real user',
              'Does not insert text (use fill() or pressSequentially() for typing)',
            ],
          },
        },

        { type: 'divider' },

        { type: 'h3', text: 'pressSequentially()' },
        {
          type: 'p',
          text: `pressSequentially() types text one character at a time, emitting key events for each character. This is useful when the UI reacts to typing (masking, autocomplete, type-ahead, per-keystroke validation).`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Character-by-character typing (more “realistic”)
await page.getByRole('textbox', { name: 'Chat message' }).pressSequentially('hello world');`,
        },
        {
          type: 'labelValue',
          label: 'Why use this?:',
          list: {
            ordered: false,
            items: [
              'Autocomplete / type-ahead inputs',
              'Masked inputs',
              'UI logic that runs on keydown/keyup',
            ],
          },
        },
        {
          type: 'p',
          text: `Rule of thumb: start with fill() for speed and stability. If the UI doesn’t behave correctly because it expects real typing events, switch to pressSequentially().`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'clear()' },
        {
          type: 'p',
          text: `clear() clears the input value without typing. Use it when you want to remove text but avoid triggering “typing” behavior, or when you want to be explicit about clearing before another action.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Clears without typing
await page.getByRole('textbox', { name: 'Search' }).clear();`,
        },
        {
          type: 'labelValue',
          label: 'When to use?:',
          list: {
            ordered: false,
            items: [
              'Remove text without replacing it',
              'Inputs where typing/replacing triggers unwanted events',
              'As a clean step before a different input strategy',
            ],
          },
        },

        { type: 'divider' },

        { type: 'h3', text: 'Choosing the right action' },
        {
          type: 'p',
          text:
            `A quick comparison:\n` +
            `- fill(): instant replace, no per-key typing events\n` +
            `- pressSequentially(): character-by-character, emits full key events\n` +
            `- press(): keyboard keys/shortcuts (Enter, Tab, Arrow keys, etc.)\n` +
            `- clear(): remove value without typing`,
        },

        {
          type: 'links',
          links: [
            {
              label: 'Actionability (auto-waiting)',
              url: 'https://playwright.dev/docs/actionability',
              description: 'How Playwright waits for elements to be ready before actions',
            },
            {
              label: 'Locator.fill()',
              url: 'https://playwright.dev/docs/api/class-locator#locator-fill',
              description: 'Official API docs for fill()',
            },
            {
              label: 'Locator.press()',
              url: 'https://playwright.dev/docs/api/class-locator#locator-press',
              description: 'Official API docs for press()',
            },
            {
              label: 'Locator.pressSequentially()',
              url: 'https://playwright.dev/docs/api/class-locator#locator-press-sequentially',
              description: 'Official API docs for pressSequentially()',
            },
            {
              label: 'Locator.clear()',
              url: 'https://playwright.dev/docs/api/class-locator#locator-clear',
              description: 'Official API docs for clear()',
            },
          ],
        },
      ],
    },

    {
      id: 'ex3-exercise',
      title: 'Exercise',
      summary: `It's exercise time! `,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Mission Log Transmission' },
        { type: 'labelValue', label: 'Program', text: `Astronaut Automation Training` },
        { type: 'labelValue', label: 'Role', text: `Flight Engineer` },
        { type: 'labelValue', label: 'Mission Status', text: `Ready for transmission` },
        { type: 'labelValue', label: 'Mission Duration', text: `30 minutes` },
        {
          type: 'button',
          label: 'Open Test Site',
          routerLink: '/test-site',
          // optionally pass where they came from (if you want it)
          queryParams: { from: 'playwright' },
          variant: 'primary',
          testId: 'open-test-site-block',
          newTab: true,
        },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Briefing' },
        {
          type: 'p',
          text: `Flight Engineer,`,
        },
        {
          type: 'p',
          text: `Your spacecraft has completed its assigned operation. Before Mission Control can proceed with analysis, you must submit a mission log containing your identification and observations.`,
        },
        {
          type: 'p',
          text: `As you enter data, Mission Control’s telemetry systems will verify your input in real time. Accuracy is critical, any mismatch between your log and the telemetry feed may compromise the mission.`,
        },
        {
          type: 'p',
          text: `Once the log is complete, you will transmit it to Mission Control and archive visual proof of a successful submission.`,
        },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Access the Mission Log interface',
              'Enter mission data into the required input fields',
              `Verify that Mission Control live telemetry feed reflects the entered data`,
              `Transmit the mission log`,
              `Confirm that Mission Control acknowledges receipt`,
              `Capture and store visual evidence of the completed mission`,
              // {
              //   text: 'Mission notes',
              //   children: ['Add at least 20 characters', 'Include one emoji'],
              // },
            ],
          },
          testId: 'mission-log-requirements',
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
                text: 'Navigate to the Mission Log system',

                children: ['https://ast.testhuset.dk/test-site/'],
              },
              {
                text: 'Locate the mission input fields and enter valid data into',
                children: [
                  'Astronaut name (name)',
                  'Contact channel (email)',
                  'Mission notes (message)',
                ],
              },
              {
                text: 'As data is entered, observe the Live Preview panel (telemetry feed) and verify that:',
                children: [
                  'The astronaut name is reflected correctly',
                  'The contact channel is reflected correctly',
                ],
              },
              'Once all mission data has been verified, initiate the transmission by pressing the Submit button.',
              'Confirm that Mission Control responds with a successful transmission message.',
              {
                text: 'Capture a screenshot of the final confirmed state and store it as mission evidence:',
                children: [
                  'File name: exercise_3_mission_evidence',
                  'Location: screenshots folder',
                ],
              },
            ],
          },
          testId: 'mission-log-requirements',
        },
        { type: 'divider' },
        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },
        {
          type: 'labelValue',
          label: 'The mission is considered successfull when:',
          list: {
            ordered: true,
            items: [
              'The Mission Log page is accessed',
              'All required input fields are populated',
              'The Live Preview telemetry reflects the entered input values',
              'The mission log is successfully transmitted',
              'A confirmation message from Mission Control is displayed',
              'A screenshot named exercise_3_mission_evidence is saved in the screenshots folder',
            ],
          },
          testId: 'mission-log-requirements',
        },

        // -----END-----

        {
          type: 'hint',
          id: 'ex3-hint-fill',
          title: 'Hint 1: How do I enter text into inputs using fill()?',
          blocks: [
            {
              type: 'p',
              text: `In Playwright, the simplest way to type into a text input is using locator.fill(). It replaces any existing value in the input, so it is great when you want predictable results. Start by locating the field, then call fill with the text you want to enter.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'fill example',
              code: `// Example locators
const astronautName = page.getByTestId('contact-name');
const missionNotes = page.getByTestId('contact-message');

// Fill input fields
await astronautName.fill('John Doe');
await missionNotes.fill('Systems nominal. Completed checks and ready for analysis.');`,
            },
            {
              type: 'p',
              text: `After filling, you can verify the Live Preview values by locating the preview elements and asserting their text. That helps you confirm telemetry updates match your inputs.`,
            },
            {
              type: 'links',
              links: [
                {
                  label: 'Playwright Locator.fill',
                  url: 'https://playwright.dev/docs/api/class-locator#locator-fill',
                  description: 'How fill works and when to use it for reliable typing.',
                },
                {
                  label: 'Playwright Locators',
                  url: 'https://playwright.dev/docs/locators',
                  description:
                    'A guide to building stable locators like getByTestId and getByRole.',
                },
              ],
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex3-hint-press-sequentially',
          title: 'Hint 2: When should I use pressSequentially()?',
          blocks: [
            {
              type: 'p',
              text: `pressSequentially is useful when you want typing to behave more like a real user. It sends key events for each character, which can help if the UI reacts to typing events, formatting logic, or real time validation. You can use it after clicking into the field or on a focused locator.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'pressSequentially example',
              code: `const contactChannel = page.getByTestId('contact-topic');

// Select elements are usually better handled with selectOption,
// but pressSequentially is great for text inputs and textareas.
const astronautName = page.getByTestId('contact-name');

await astronautName.click();
await astronautName.pressSequentially('Alex Vega', { delay: 20 });`,
            },
            {
              type: 'p',
              text: `If you notice the telemetry preview updates only after each keystroke, pressSequentially can make your test match that behavior more closely.`,
            },
            {
              type: 'links',
              links: [
                {
                  label: 'Playwright Locator.pressSequentially',
                  url: 'https://playwright.dev/docs/api/class-locator#locator-press-sequentially',
                  description: 'Sends key events for each character, with optional delay.',
                },
                {
                  label: 'Playwright Keyboard',
                  url: 'https://playwright.dev/docs/api/class-keyboard',
                  description: 'Background on how Playwright sends keyboard events.',
                },
              ],
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex3-hint-clear',
          title: 'Hint 3: How do I clear a field before typing?',
          blocks: [
            {
              type: 'p',
              text: `If a field already contains text and you want to remove it before entering new data, you have a couple of good options. The easiest is fill('') because it clears the input. Another approach is to click into the field and use keyboard shortcuts to select all and delete.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'clear example',
              code: `const missionNotes = page.getByTestId('contact-message');

// Option 1: Use the clear() function
await missionNotes.clear();

// Option 2: Clear using fill with an empty string
await missionNotes.fill('');

// Option 3: Clear by selecting all and deleting
await missionNotes.click();
await missionNotes.press('Control+A');
await missionNotes.press('Backspace');`,
            },
            {
              type: 'p',
              text: `Once the field is cleared, you can enter the final value using fill or pressSequentially. If your telemetry preview shows the old value, clearing first can make your assertions more stable.`,
            },
            {
              type: 'links',
              links: [
                {
                  label: 'Playwright Locator.fill',
                  url: 'https://playwright.dev/docs/api/class-locator#locator-fill',
                  description: 'Using fill with an empty string is a simple way to clear inputs.',
                },
                {
                  label: 'Playwright Locator.press',
                  url: 'https://playwright.dev/docs/api/class-locator#locator-press',
                  description: 'Send keyboard shortcuts like Control+A and Backspace.',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'ex3-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 3' },
        {
          type: 'button',
          label: 'Open Test Site',
          routerLink: '/test-site',
          queryParams: { from: 'playwright' },
          variant: 'primary',
          testId: 'open-test-site-block',
          newTab: true,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution (recommended)' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_3.spec.ts',
          code: `import { test, expect } from "@playwright/test";

test.afterEach("Close browser", async ({ page }) => {
  page.close();
});

test("Exercise 3 - Filling out the forms", async ({ page }) => {
  const baseUrl: string = "https://stormeal.github.io/lecture-page";
  const nameInput = page.getByTestId("contact-name");
  const emailInput = page.getByTestId("contact-email");
  const messageInput = page.getByTestId("contact-message");
  const submitBtn = page.getByTestId("contact-submit");
  const namePreview = page.getByTestId("preview-name");
  const emailPreview = page.getByTestId("preview-email");
  const successfullToast = page.getByTestId("submit-success");
  const resetBtn = page.getByTestId("testsite-reset");

  await test.step("Navigate to page", async () => {
    await page.goto(\`\${baseUrl}/test-site\`);
  });

  await test.step("Fill the inputs and press the submit button", async () => {
    await nameInput.fill("Alex Storm");
    await emailInput.pressSequentially("ast@testhuset.dk");
    await messageInput.pressSequentially(
      "Mission log #3613, nothing to report but a lot of testing done today. Take care now 🔥",
      { delay: 10 }
    );
    await submitBtn.click();
  });

  await test.step("Validate the preview fields and confirmation toast", async () => {
    await expect(namePreview).toHaveText("Alex Storm");
    await expect(emailPreview).toHaveText("ast@testhuset.dk");
    await expect(successfullToast).toBeVisible();
  });

  await test.step("Take a screenshot", async () => {
    await page.screenshot({ path: "screenshots/day1_exercise3.png", fullPage: true });
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
            '• Uses stable getByTestId locators for form fields and previews (low-flake, easy to read) ' +
            '• Demonstrates the difference between fill() (fast replacement) and pressSequentially() (character-by-character typing) ' +
            '• Groups the flow with test.step() so failures are easier to understand in reports ' +
            '• Verifies outcomes with web-first assertions (toHaveText / toBeVisible) instead of manual reads',
        },
      ],
    },
  ],
};
