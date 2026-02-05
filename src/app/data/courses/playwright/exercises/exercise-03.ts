import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_03: CourseGroupItem = {
  id: 'ex3',
  title: 'Exercise 3: Locators and Assertions',
  summary: 'How to find Locators and to assert on given Locator.',
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
      id: 'ex2-theory',
      title: 'Theory',
      summary: 'Understanding the basics about Locators and Assertions.',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Locators & Assertions' },

        {
          type: 'p',
          text: `Before we jump into the theory for the exercise it's important to understand that Playwright tests are supposed to be simple. Basically they perform actions and assert the state against expectations. `,
        },
        {
          type: 'p',
          text: `Last exercise we used the navigation action, now we will start with some basics interactions. But first we need to talk, about Locators.`,
        },
        { type: 'divider' },

        { type: 'h3', text: 'Locators' },

        {
          type: 'p',
          text: `Performing actions starts with locating certain elements. We can use Playwrights Locators API for this specific action. Locators represent a way to find element(s) on the page at the given moment. \n Playwright automatically waits for this element to be "actionable" before it performs the given action, therefore we don't actually need to wait for it to become available.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Create a locator.
const getStarted = page.getByRole('link', { name: 'Get started' });

// Click it.
await getStarted.click();`,
        },

        {
          type: 'p',
          text: `In some cases, you can also write the locator with the action in a single line`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `await page.getByRole('link', { name: 'Get started' }).click();`,
        },
        {
          type: 'p',
          text: `Locators are strict. Meaning, that if you perform an action on a locator that targets a specific DOM element and it finds more than one element that matches your locator, it will throw an error. This doesn't mean that the locator is wrong, just not specific enough. For example, the following call below will throw an error if there is more than one button in the DOM.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `await page.getByRole('button').click();`,
        },
        {
          type: 'links',
          links: [
            {
              label: 'Playwright Locators',
              url: 'https://playwright.dev/docs/locators',
              description: 'Official Playwright locator documentation',
            },
          ],
        },
        { type: 'divider' },

        { type: 'h3', text: 'Assertions' },

        {
          type: 'p',
          text: `Assertions are how we verify the UI is in the state we expect. In Playwright Test, assertions are done with the \`expect()\` API.`,
        },
        {
          type: 'p',
          text: `The big win: Playwright has "web-first" (auto-retrying) assertions for locators. That means \`expect(locator).toBeVisible()\` (and friends) will wait and retry until the condition is met (or it times out). This is a major reason Playwright tests can be stable without sprinkling manual waits everywhere.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `import { test, expect } from '@playwright/test';

test('shows success message after saving', async ({ page }) => {
  await page.getByRole('button', { name: 'Save' }).click();

  // Web-first assertion: retries until the message appears.
  await expect(page.getByRole('alert')).toBeVisible();
  await expect(page.getByRole('alert')).toHaveText(/saved/i);
});`,
        },

        {
          type: 'p',
          text: `Prefer asserting via locator matchers (like \`toBeVisible\`, \`toHaveText\`, \`toHaveValue\`, \`toBeChecked\`) instead of reading values yourself with \`innerText()\`, \`isVisible()\`, etc. Locator assertions are designed to avoid race conditions and flakiness.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// ✅ Prefer locator assertions (auto-retry)
await expect(page.getByLabel('Email')).toHaveValue('boomers@internet.com');
await expect(page.getByRole('checkbox', { name: 'Subscribe' })).toBeChecked();

// ❌ More racy: manual reads are a snapshot in time
// const visible = await page.getByRole('alert').isVisible();
// expect(visible).toBe(true);`,
        },

        {
          type: 'p',
          text: `Assertions have their own timeout (separate from the test timeout). By default, Playwright will keep retrying an expectation until it passes or the expect timeout is hit.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Per-assertion timeout override
await expect(page.getByRole('status')).toHaveText('Ready', { timeout: 10_000 });`,
        },

        {
          type: 'p',
          text: `When you need to wait for a non-UI condition (or some computed value) to eventually become true, use \`expect.poll()\`. It repeatedly runs your function until the matcher passes.`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Poll an arbitrary condition until it matches.
await expect.poll(async () => {
  const countText = await page.getByTestId('cart-count').textContent();
  return Number(countText);
}).toBe(3);`,
        },

        {
          type: 'p',
          text: `And yes, you can even assert visuals: Playwright can compare screenshots with \`toHaveScreenshot()\`. (The future is now.)`,
        },
        {
          type: 'code',
          language: 'ts',
          code: `// Visual regression assertion
await expect(page).toHaveScreenshot();`,
        },

        {
          type: 'links',
          links: [
            {
              label: 'Playwright Test Assertions',
              url: 'https://playwright.dev/docs/test-assertions',
              description: 'Official guide to expect() and web-first assertions',
            },
            {
              label: 'Locator Assertions API',
              url: 'https://playwright.dev/docs/api/class-locatorassertions',
              description: 'Full list of locator-specific matchers (toBeVisible, toHaveText, etc.)',
            },
            {
              label: 'Expect timeout',
              url: 'https://playwright.dev/docs/test-timeouts#expect-timeout',
              description: 'How assertion timeouts work (separate from test timeouts)',
            },
            {
              label: 'Actionability & auto-waiting',
              url: 'https://playwright.dev/docs/actionability',
              description: 'How Playwright waits for actions and why it reduces flakiness',
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
                  'The mission notes appear as expected',
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
      id: 'ex2-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 2' },
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

        { type: 'h3', text: 'Playwright Test solution (recommended)' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_2.spec.ts',
          code: `import { test, expect } from "@playwright/test";

test("Exercise 2 - Locate and Assert!", async ({ page }) => {

  // Locators:
  const cookieBotDialogHeader = page.locator("#CybotCookiebotDialogHeader");
  const courseMenuBtn = page.getByRole("link", { name: "Kursus" });
  const playwrightCourseItem = page.locator('a:has-text("Automatisering med Playwright")');
  const courseTitle = page.locator("h1.hero-title");
  const pricingContainer = page.locator("div.pricing-part");
  const price = pricingContainer.locator("span[data-variation-price]");

  await test.step("Navigate to page", async () => {
    // Navigates to the page and waits for the DOM to finish loading
    await page.goto("https://testhuset.dk", { waitUntil: "domcontentloaded" });

    // Handles the cookie dialog if it appears
    if (cookieBotDialogHeader) {
      const cookieDialogAcceptBtn = page.getByRole("button", { name: "Tillad valgte" });
      await cookieDialogAcceptBtn.click();
    }
  });

  await test.step("Press the KURSUS menu button", async () => {
    await courseMenuBtn.click();
  });

  await test.step("Press the Playwright Course element and screenshot the page", async () => {
    await playwrightCourseItem.click();
    await page.screenshot({ path: "screenshots/day1_exercise2.png", fullPage: true });
  });

  await test.step("Assert course title and price", async () => {
    await expect(courseTitle).toHaveText("Automatisering med Playwright");
    await expect(price).toHaveText("10.499 kr.");
  });
});
`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },
        {
          type: 'p',
          text: '• Uses Playwright Test and the built-in page fixture (simple, standard, and maintainable) • Prefers semantic locators with getByRole for key actions (more resilient than CSS and aligns with accessibility) • Scopes locators via a parent container (pricingContainer.locator(...)) to reduce accidental matches • Uses test.step() to make the report and failures easier to read (great for debugging)',
        },
      ],
    },
  ],
};
