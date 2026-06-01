import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_03: CourseGroupItem = {
  id: 'ex3',
  title: 'Exercise 3: Text and Forms',
  summary: 'Text and Form actions',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `This exercise is all about text and form actions. We will learn about how we can successfully interact with form elements while also using the skills we have learned previously.`,
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
      id: 'ex3-quiz',
      title: 'Quiz',
      summary:
        'Check your understanding of input actions: fill(), press(), pressSequentially(), and clear().',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'What does fill() do when used on an input or textarea?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It appends text to the existing value character-by-character.',
              wrongExplanation:
                'fill() does not append, and it does not type character-by-character.',
              wrongExplainFurther:
                'Appending and per-key typing behavior is closer to pressSequentially() than fill().',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It replaces the existing value by clearing the field automatically and setting the new value in one go.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. fill() clears the field automatically and replaces the value in one go (not character-by-character). It is fast and deterministic for most form fields.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It types like a real user and triggers keydown/keyup for each character.',
              wrongExplanation:
                'That describes character-by-character typing, which is what pressSequentially() is for.',
              wrongExplainFurther:
                'fill() is closer to setting the value directly, while pressSequentially() emits full key events per character.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It clears the field but cannot set a new value.',
              wrongExplanation: 'fill() both clears and sets a new value.',
              wrongExplainFurther:
                'If you only want to remove text, clear() is the dedicated action for that.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'What is press() best used for?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Simulating keyboard keys or key combos (Enter, Tab, Arrow keys, shortcuts) on a focused element.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. press() simulates pressing a key (or key combo) on a focused element, which is useful for submitting with Enter, using Tab navigation, or triggering shortcuts.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Typing full text into an input.',
              wrongExplanation: 'press() is for keys and shortcuts, not for typing full strings.',
              wrongExplainFurther:
                'Use fill() for fast replacement, or pressSequentially() for character-by-character typing.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Replacing an input value without typing events.',
              wrongExplanation: 'Replacing the value is what fill() is designed for.',
              wrongExplainFurther:
                'press() can be used for keys like Control+A, but it does not replace the full value by itself.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Clearing the input value.',
              wrongExplanation: 'Clearing is done with clear(), or implicitly when you use fill().',
              wrongExplainFurther: 'Use clear() when you want to remove text without typing.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'When should you prefer pressSequentially() over fill()?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When you want the fastest possible input every time.',
              wrongExplanation:
                'pressSequentially() is usually slower than fill() because it types character-by-character.',
              wrongExplainFurther: 'Rule of thumb: start with fill() for speed and stability.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'When you want to replace an input value deterministically without key events.',
              wrongExplanation: 'That is exactly what fill() is for.',
              wrongExplainFurther:
                'fill() sets the value in one go and is the most deterministic option for typical inputs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'When the UI reacts to per-keystroke events (autocomplete, masked inputs, type-ahead, per-key validation).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. pressSequentially() emits key events for each character. Use it when the UI logic depends on real typing events like keydown/keyup.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'When the input must be cleared without changing it.',
              wrongExplanation: 'If your goal is to remove text, use clear().',
              wrongExplainFurther: 'pressSequentially() is about typing, not clearing.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'What does clear() do, and why might you choose it?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It clears by sending Backspace repeatedly (typing behavior).',
              wrongExplanation: 'clear() clears the value without typing character-by-character.',
              wrongExplainFurther:
                'If you need typing events, use pressSequentially(). clear() is for removing the value without typing.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It replaces the value with an empty string using fill().',
              wrongExplanation: 'clear() is its own action and does not require fill() to work.',
              wrongExplainFurther:
                'While fill("") can result in an empty value, clear() is more explicit about intent and avoids typing behavior.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It submits the form after clearing.',
              wrongExplanation: 'clear() only clears the value. It does not submit forms.',
              wrongExplainFurther:
                'Submitting is typically done via clicking a button or pressing Enter (press("Enter")).',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It clears the input value without typing, useful when you want to remove text without triggering typing behavior.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. clear() removes the value without typing. Use it when you want to delete text without triggering typing-related UI behavior, or to be explicit before another input strategy.',
            },
          ],
        },

        {
          id: 'q5',
          prompt:
            'You are testing a search box with type-ahead suggestions that only appear when real key events fire. Which input action is the best fit?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'fill()',
              wrongExplanation:
                'fill() replaces the value in one go and may not trigger per-key typing behavior that type-ahead relies on.',
              wrongExplainFurther:
                'If the UI depends on key events (keydown/keyup), you typically need character-by-character typing.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'pressSequentially()',
              wrongExplanation: '',
              correctExplanation:
                'Correct. pressSequentially() types one character at a time and emits key events for each character, which is ideal for type-ahead/autocomplete behaviors.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'press()',
              wrongExplanation:
                'press() is for individual keys or shortcuts, not for typing a full string.',
              wrongExplainFurther:
                'You might still use press("Enter") to submit, but pressSequentially() is the right tool for the typing itself.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'clear()',
              wrongExplanation:
                'clear() removes text but does not type, so it will not trigger type-ahead suggestions by itself.',
              wrongExplainFurther:
                'clear() is useful as a cleanup step, but not for triggering per-keystroke UI behavior.',
            },
          ],
        },
      ],
    },

    {
      id: 'ex3-exercise',
      title: 'Exercise 3.1',
      summary: `It's exercise time! `,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 3.1: Mission Log Transmission' },
        { type: 'labelValue', label: 'Program', text: `Astronaut Automation Training` },
        { type: 'labelValue', label: 'Role', text: `Flight Engineer` },
        { type: 'labelValue', label: 'Mission Status', text: `Ready for transmission` },
        { type: 'labelValue', label: 'Mission Duration', text: `30 minutes` },
        {
          type: 'button',
          label: 'Open Test Site',
          routerLink: '/test-site/input-forms',
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
      title: 'Solution 3.1',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 3.1' },
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

    {
      id: 'ex3-2-exercise',
      title: 'Exercise 3.2 (DSB)',
      summary: 'Work with DSB route planner text fields and autocomplete',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'DSB Traffic Control Route Entry' },
        { type: 'labelValue', label: 'Program', text: `DSB Operations Automation` },
        { type: 'labelValue', label: 'Role', text: `Traffic Control Dispatcher` },
        { type: 'labelValue', label: 'Mission Status', text: `Route planner verification pending` },
        { type: 'labelValue', label: 'Mission Duration', text: `30 minutes` },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Briefing' },
        {
          type: 'p',
          text: `Dispatcher,`,
        },
        {
          type: 'p',
          text: `DSB Traffic Control is validating the route planner used by passengers. Before the system can be cleared for service, you must prove that the origin and destination fields react correctly to typing, correction, and autocomplete behavior.`,
        },
        {
          type: 'p',
          text: `The domestic planner is not a plain form. It reacts while you type and suggests stations dynamically. Your task is not only to enter route text, but also to correct draft values and verify that the suggestion list appears when expected.`,
        },
        {
          type: 'p',
          text: `If the route entry breaks down, passengers miss trains. If the route entry behaves correctly, the network keeps moving.`,
        },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Access the English DSB domestic planner',
              'Enter draft values into the From and To route fields',
              'Use pressSequentially() to trigger autocomplete suggestions',
              'Verify that the suggestion list appears while typing',
              'Correct at least one previously entered value using clear()',
              'Replace the draft values with final route text',
              'Capture and store visual evidence of the completed operation',
            ],
          },
          testId: 'dsb-advisory-requirements',
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
                text: 'Navigate to the DSB domestic planner',
                children: ['https://www.dsb.dk/en/domestic/'],
              },
              {
                text: 'If a cookie dialog blocks the planner, dismiss it before continuing',
              },
              {
                text: 'Locate the route entry controls and work with',
                children: [
                  'From field (Choose location)',
                  'To field (Choose destination)',
                ],
              },
              {
                text: 'Use different input actions during the mission',
                children: [
                  'Use pressSequentially() in the From field to type a draft value such as "Cop"',
                  'Use clear() to remove that draft value',
                  'Use fill() to replace it with a corrected value such as "Aar"',
                  'Use fill() and pressSequentially() in the To field as part of the same correction workflow',
                ],
              },
              {
                text: 'Verify that the planner reacts as expected:',
                children: [
                  'The autocomplete dropdown appears after typing',
                  'The input fields contain the values you entered after correction',
                ],
              },
              {
                text: 'Capture a screenshot of the final confirmed state and store it as mission evidence:',
                children: [
                  'File name: day1_ex3_2_dsb',
                  'Location: screenshots folder',
                ],
              },
            ],
          },
          testId: 'dsb-advisory-requirements',
        },
        { type: 'divider' },
        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },
        {
          type: 'labelValue',
          label: 'The mission is considered successful when:',
          list: {
            ordered: true,
            items: [
              'The DSB domestic planner is accessed',
              'Draft values are entered into both route fields',
              'At least one field is corrected using clear() and replaced with a final value',
              'The autocomplete dropdown is shown after typing',
              'The final values remain visible in the From and To fields',
              'A screenshot named day1_ex3_2_dsb is saved in the screenshots folder',
            ],
          },
          testId: 'dsb-advisory-requirements',
        },

        {
          type: 'hint',
          id: 'ex3-2-hint-mixed-input-actions',
          title: 'Hint 1: Do I need to use more than one input action?',
          blocks: [
            {
              type: 'p',
              text: 'Yes. This exercise is designed to make you practice the difference between fill(), pressSequentially(), and clear(). A good pattern is: type an initial value to trigger suggestions, verify the dropdown, clear the field, and then enter the corrected final value.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `await fromInput.pressSequentially('Cop', { delay: 20 });
await fromInput.clear();
await fromInput.fill('Aar');`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex3-2-hint-preview-checks',
          title: 'Hint 2: What should I verify on the page?',
          blocks: [
            {
              type: 'p',
              text: 'Focus on the form behavior that is clearly visible. Good candidates are the input values themselves and the autocomplete dropdown list that appears while typing.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `await expect(fromInput).toHaveValue('Aar');
await expect(page.locator('[data-testid="dropdown-list"] li').first()).toBeVisible();`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex3-2-hint-message-correction',
          title: 'Hint 3: How should I correct the route values?',
          blocks: [
            {
              type: 'p',
              text: 'Enter a short draft first, then clear the field and replace it with the final route text. This shows that you understand how to revise input rather than only entering it once.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex3-2-hint-cookie-layer',
          title: 'Hint 4: The planner is blocked by cookies',
          blocks: [
            {
              type: 'p',
              text: 'The DSB page can show a cookie layer that blocks clicks. Start by trying to accept cookies if a visible button appears. If the site still blocks interaction, you may need a small site-specific workaround in your solution.',
            },
          ],
        },
      ],
    },

    {
      id: 'ex3-2-solution',
      title: 'Solution 3.2 (DSB)',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 3.2 (DSB)' },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_3_2.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Exercise 3.2 (DSB): work with route planner text fields', async ({ page }) => {
  await page.goto('https://www.dsb.dk/en/domestic/', { waitUntil: 'domcontentloaded' });

  const acceptAllButton = page.locator('button:has-text("Accept all")').first();
  if (await acceptAllButton.isVisible().catch(() => false)) {
    await acceptAllButton.click().catch(() => {});
  }

  // Site-specific fallback: the cookie layer can still intercept clicks even
  // when no visible accept button is exposed to Playwright.
  await page.locator('#cookie-information-template-wrapper').evaluate((el) => el.remove()).catch(() => {});

  const fromButton = page.getByRole('button', { name: 'From:' });
  const toButton = page.getByRole('button', { name: 'To:' });

  await test.step('Enter and correct the origin field', async () => {
    await fromButton.click();
    const fromInput = page.getByPlaceholder('Choose location');

    await fromInput.pressSequentially('Cop', { delay: 20 });
    await expect(page.locator('[data-testid="dropdown-list"] li').first()).toBeVisible();

    await fromInput.clear();
    await fromInput.fill('Aar');
    await expect(fromInput).toHaveValue('Aar');
  });

  await test.step('Enter and correct the destination field', async () => {
    await toButton.click();
    const toInput = page.getByPlaceholder('Choose destination');

    await toInput.fill('Ode');
    await expect(toInput).toHaveValue('Ode');

    await toInput.clear();
    await toInput.pressSequentially('Ode', { delay: 20 });
    await expect(page.locator('[data-testid="dropdown-list"] li').first()).toBeVisible();
    await expect(toInput).toHaveValue('Ode');
  });

  await test.step('Capture mission evidence', async () => {
    await page.screenshot({ path: 'screenshots/day1_ex3_2_dsb.png', fullPage: true });
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good next step' },
        {
          type: 'p',
          text:
            'It combines fill(), pressSequentially(), and clear() in one realistic workflow on a live transport site. ' +
            'It forces students to correct previously entered values instead of only typing once. ' +
            'It keeps the assertions focused on visible form behavior such as input values and autocomplete. ' +
            'It stays within text-and-form interactions without overlapping too much with the later advanced exercises.',
        },
      ],
    },
  ],
};
