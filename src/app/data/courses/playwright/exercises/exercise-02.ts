import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_02: CourseGroupItem = {
  id: 'ex2',
  title: 'Exercise 2: Locators and Assertions',
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
      id: 'ex2-exercise',
      title: 'Exercise',
      summary: `It's exercise time! `,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Mission Dossier - Locate and assert!' },
        { type: 'labelValue', label: 'Classification', text: `Internal Training Operation` },
        { type: 'labelValue', label: 'Clearance Level', text: `Agent in Training` },
        { type: 'labelValue', label: 'Mission Status', text: `Active` },
        { type: 'labelValue', label: 'Extraction Time', text: `30 minutes` },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Briefing' },
        {
          type: 'p',
          text: `Agent,`,
        },
        {
          type: 'p',
          text: `Intelligence reports indicate that a high-value training asset is hidden within enemy territory. Your task is to infiltrate the site, locate the target course, and verify its authenticity.`,
        },
        {
          type: 'p',
          text: `This operation will test your ability to navigate unknown environments, identify objectives with precision, and report back with undeniable evidence.`,
        },
        {
          type: 'p',
          text: `Failure is not an option.`,
        },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'p',
          text: `Your mission is to:`,
        },
        {
          type: 'p',
          text: `• Infiltrate the target site without detection • Locate the classified course "Automatisering med Playwright" • Verify that the course title (Automatisering med Playwright) is correct • Verify that the course price is (10499kr) • Extract visual proof of your findings`,
        },
        { type: 'divider' },
        { type: 'h3', text: 'Operational Instructions' },
        {
          type: 'p',
          text: `Proceed with caution and follow these steps exactly:`,
        },
        {
          type: 'p',
          text: `1. Establish a connection to the target site (https://testhuset.dk/) 2. From the main navigation bar, locate and engange the control labeled "Kursus" 3. Allow the page to fully load before proceeding further 4. Identify and create a locator for the course name: "Automatisering med Playwright" 5. Engage the target by clicking the locator 6. Confirm the integrity of the asset. (Assert that the course title matches "Automatisering med Playwright" and assert that the listed price is "10499") 7. Capture photographic evidence of the confirmed asset and store it securely (File name: "exercise_2_mission_evidence" | Location: "screenshot" folder) `,
        },
        { type: 'divider' },
        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done' },
        {
          type: 'p',
          text: `The mission is considered successfull when:`,
        },
        {
          type: 'p',
          text: `• Navigation occurs via the main navbar • The Playwright course page is accessed • Title verification passes • Price verification passes • Screenshot evidence is succssfully stored in the screenshot folder`,
        },
        {
          type: 'p',
          text: `This concludes the breifing,`,
        },
        {
          type: 'p',
          text: `Good luck, Agent. We'll be watching.`,
        },
        { type: 'divider' },

        // -----END-----

        {
          type: 'hint',
          id: 'ex2-locator-menu-item',
          title: 'Hint 1: How do it find the locator?',
          blocks: [
            {
              type: 'p',
              text: 'First you need to find a selector for the locator. You open the page with the element you want to locate and inspect the page. Then find the element in the inspector and find a suitable selector.',
            },
            {
              type: 'code',
              language: 'html',
              filename: 'element example',
              code: `<div class="mb-3">
  <h4>getByRole</h4>
  <button class="btn btn-primary me-2" aria-label="Add Item">Add Item</button>
  <a href="/contact" role="link" class="btn btn-link">Contact</a>
</div>`,
            },
            {
              type: 'p',
              text: 'In the above example you can see that we are looking at a button. We can use various forms of selectors based on that element. We can use the CSS class "btn btn-primary me-2", we can also use the aria-label "Add Item" or we can use the name.  ',
            },
            {
              type: 'p',
              text: 'For this use case lets use the getByRole function using the name of the button, it should then look something like this:  ',
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'locator example',
              code: `page.getByRole("name", { name: "Add Item" });`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex2-hint-assert-text',
          title: 'Hint 2: How do I assert on a text value?',
          blocks: [
            {
              type: 'p',
              text: `No matter if it's text or numeric values you need to assert, we use the same expect API that Playwright provides. We can then use the functions ".toHaveText("string")" for text specific assertions. We need to make sure that the text matches the element precisely otherwise it will throw an error. `,
            },
            {
              type: 'code',
              language: 'html',
              filename: 'element example',
              code: `<div class="col">
  <label for="input-number">Input: Number</label>
  <input class="input-box" id="input-number" name="input-number">
</div>`,
            },
            {
              type: 'p',
              text: `So, if we use the above example of an element we want to assert some text from. For this example let's use the label text. We need to make sure that we expect the text to be "Input: Number" exactly. Otherwise, you guessed it. It'll throw an error.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'assertion example',
              code: `// Locator:
const inputLabel = await page.getByLabel('Input: Number');

// Assertion:
await expect(this.inputLabel).toHaveText("Input: Number");`,
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
