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
          text: `Before we jump into the theory, know that Playwright tests are meant to be simple: they perform actions, then assert the state against expectations. `,
        },
        {
          type: 'p',
          text: `Last exercise we used the navigation action. Now we'll start with some basic interactions, but first we need to talk about Locators.`,
        },
        { type: 'divider' },

        { type: 'h3', text: 'Locators' },

        {
          type: 'p',
          text: `Performing actions starts with locating elements. You use Playwright's Locators API for this. A locator is a way to find element(s) on the page at a given moment. \n Playwright automatically waits for the element to be "actionable" before it performs the action, so we don't need to wait for it to become available ourselves.`,
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
      id: 'ex2-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of Locators and Assertions',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'In Playwright, what does a Locator represent?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A way to find element(s) on the page at the moment an action or assertion is performed.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A Locator represents a way to find element(s) dynamically when an action or assertion runs. It is evaluated at the time of use, not when it is created.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A snapshot of the DOM captured when the test starts.',
              wrongExplanation:
                'A Locator is not a snapshot. It is evaluated when you perform an action or assertion.',
              wrongExplainFurther:
                'Thinking of locators as snapshots leads to misunderstandings about why they reflect current DOM state.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A special assertion that verifies visibility.',
              wrongExplanation:
                'A Locator is used to find elements. Assertions are performed using expect() on locators.',
              wrongExplainFurther:
                'Locators and assertions work together, but they are separate concepts.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A reference to a Browser Context.',
              wrongExplanation:
                'A Browser Context represents an isolated session. A Locator operates inside a Page to find elements.',
              wrongExplainFurther: 'The hierarchy is Browser → Context → Page → Locator.',
            },
          ],
        },

        {
          id: 'q2',
          prompt:
            "What happens if you call await page.getByRole('button').click(); and multiple buttons match?",
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It clicks the first matching button automatically.',
              wrongExplanation:
                'Playwright locators are strict by default and do not silently choose one match.',
              wrongExplainFurther:
                'If multiple elements match, Playwright throws an error to prevent unintended interactions.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It clicks all matching buttons.',
              wrongExplanation:
                'Playwright does not perform bulk actions unless explicitly instructed.',
              wrongExplainFurther:
                'A strict locator must resolve to exactly one element when performing actions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Playwright throws an error because the locator matches more than one element.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Locators are strict. If an action resolves to more than one element, Playwright throws an error so you can make the locator more specific.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It waits until only one button exists in the DOM.',
              wrongExplanation: 'Playwright does not wait for ambiguity to resolve automatically.',
              wrongExplainFurther:
                'You must make your locator specific enough to uniquely identify the intended element.',
            },
          ],
        },

        {
          id: 'q3',
          prompt:
            'Why do we typically not need manual waits before clicking a button located with Playwright’s Locator API?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because click() is always instant and cannot fail.',
              wrongExplanation: 'Clicks can fail if elements are not ready or actionable.',
              wrongExplainFurther:
                'Stability does not come from speed but from actionability checks and auto-waiting.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because Playwright automatically waits for the element to become actionable before performing the action.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Playwright automatically waits for elements to be actionable before performing actions like click(), reducing the need for manual waits.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because Playwright retries the entire test automatically if it fails.',
              wrongExplanation:
                'Test retries are a separate configuration and not related to locator auto-waiting.',
              wrongExplainFurther: 'Auto-waiting happens before each action to ensure stability.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Because we must always use waitForTimeout() before interactions.',
              wrongExplanation:
                'Using waitForTimeout() is generally discouraged and can introduce flakiness.',
              wrongExplainFurther:
                'Auto-waiting and web-first assertions remove most need for manual time-based waits.',
            },
          ],
        },

        {
          id: 'q4',
          prompt:
            'What makes await expect(locator).toBeVisible() more stable than manually checking isVisible()?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It automatically retries until the condition is met or it times out.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Web-first assertions retry until the condition passes or the expect timeout is reached, which reduces race conditions.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It reads the DOM faster.',
              wrongExplanation: 'Speed is not the key factor in stability.',
              wrongExplainFurther:
                'The stability comes from retrying until the expected state is reached.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It converts visibility into a boolean snapshot.',
              wrongExplanation: 'Manual reads like isVisible() produce a snapshot in time.',
              wrongExplainFurther:
                'Locator assertions are designed to avoid snapshot-based race conditions.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It disables animations on the page.',
              wrongExplanation: 'Assertions do not automatically disable animations.',
              wrongExplainFurther:
                'Animations can affect timing, but stability here comes from auto-retry behavior.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'How do assertion timeouts differ from test timeouts in Playwright?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Assertions share the exact same timeout as the test.',
              wrongExplanation:
                'Assertions have their own timeout separate from the overall test timeout.',
              wrongExplainFurther:
                'The test timeout controls total test duration, while expect() has its own retry timeout.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Assertions do not have timeouts.',
              wrongExplanation: 'Assertions retry until they pass or their timeout is reached.',
              wrongExplainFurther:
                'If the condition never becomes true, the assertion eventually times out.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Assertions stop retrying after one second.',
              wrongExplanation:
                'The default expect timeout is configurable and not limited to one second.',
              wrongExplainFurther: 'You can also override the timeout per assertion.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Assertions have their own retry timeout separate from the overall test timeout.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. expect() has its own timeout and retry behavior, separate from the total test timeout.',
            },
          ],
        },
      ],
    },

    {
      id: 'ex2-exercise',
      title: 'Exercise 2.1',
      summary: `It's exercise time! `,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 2.1: Mission Dossier - Locate and assert!' },
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
      title: 'Solution 2.1',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 2.1' },

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

    {
      id: 'ex2-2-exercise',
      title: 'Exercise 2.2 (DSB)',
      summary: 'Use locators and assertions across a language change on DSB',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Mission Dossier - DSB Transit Control' },
        { type: 'labelValue', label: 'Classification', text: `Public Transit Operations` },
        { type: 'labelValue', label: 'Clearance Level', text: `Route Inspector` },
        { type: 'labelValue', label: 'Mission Status', text: `Active` },
        { type: 'labelValue', label: 'Extraction Time', text: `30 minutes` },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Briefing' },
        {
          type: 'p',
          text: `Inspector,`,
        },
        {
          type: 'p',
          text: 'DSB headquarters has reported inconsistent passenger information across language versions of the booking interface. Your assignment is to inspect the public transit control panel and confirm that critical travel controls are shown correctly in both English and Danish.',
        },
        {
          type: 'p',
          text: 'You will begin on the English route planner, document the visible controls, switch the interface to Danish, and verify that the localized transport controls appear as expected.',
        },
        {
          type: 'p',
          text: `Precision matters. Commuters are depending on this system.`,
        },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Objectives' },
        {
          type: 'p',
          text: `Your mission is to:`,
        },
        {
          type: 'p',
          text: 'Locate the English DSB travel planner. Verify that the main heading and key route controls are visible in English. Switch the interface to Danish. Verify that the same travel controls are shown in Danish. Capture visual proof of the localized interface.',
        },

        { type: 'h3', text: 'Operational Instructions' },
        {
          type: 'p',
          text: `Proceed with caution and follow these steps exactly:`,
        },
        {
          type: 'p',
          text: '1. Establish a connection to the English DSB domestic site (https://www.dsb.dk/en/domestic/). 2. If a cookie dialog blocks access, clear it before continuing. 3. Identify and create locators for the English heading "Find travel", the route controls "From:" and "To:", and the language switch "Dansk". 4. Confirm that the English transport controls are visible. 5. Activate the "Dansk" language switch. 6. Identify and create locators for the Danish heading "Find rejse", the route controls "Fra:" and "Til:", and the login link "Log ind". 7. Confirm that the Danish transport controls are visible. 8. Capture photographic evidence of the Danish interface and store it securely (File name: "day1_ex2_2_dsb" | Location: "screenshots" folder).',
        },

        {
          type: 'callout',
          variant: 'info',
          text: 'Operational note: this mission is more advanced than 2.1 because the page changes state after your action. You must prove the UI is correct before and after the language switch.',
        },

        { type: 'divider' },
        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },
        {
          type: 'p',
          text: `The mission is considered successful when:`,
        },
        {
          type: 'p',
          text: 'The English DSB page is opened successfully. The English heading and travel controls are verified. The language switch is activated. The Danish heading, travel controls, and login link are verified. Screenshot evidence is stored in the screenshots folder.',
        },

        { type: 'divider' },
        {
          type: 'hint',
          id: 'ex2-2-hint-role-locators',
          title: 'Hint 1: Which locator strategy should I start with?',
          blocks: [
            {
              type: 'p',
              text: 'Start with getByRole() for headings, buttons, and links. It is usually the clearest and most maintainable approach for beginner exercises.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `const heading = page.getByRole('heading', { name: 'Find travel' });
const languageLink = page.getByRole('link', { name: 'Dansk' });`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex2-2-hint-cookie-dialog',
          title: 'Hint 2: The page is blocked by a cookie dialog',
          blocks: [
            {
              type: 'p',
              text: 'If the cookie dialog appears, dismiss it before trying to click the page underneath. A simple way is to look for the "Accept all" button and click it if it is visible.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex2-2-hint-assert-visible',
          title: 'Hint 3: Which assertion should I use?',
          blocks: [
            {
              type: 'p',
              text: 'When the task is to prove that headings, buttons, and links are present on the page, toBeVisible() is a good default choice.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `await expect(heading).toBeVisible();
await expect(languageLink).toBeVisible();`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex2-2-hint-danish-elements',
          title: 'Hint 4: What should change after clicking Dansk?',
          blocks: [
            {
              type: 'p',
              text: 'After the language switch, look for Danish UI text. Good candidates are the main heading "Find rejse", the search labels "Fra:" and "Til:", and the login link "Log ind".',
            },
          ],
        },

        { type: 'divider' },
        { type: 'h3', text: 'Helpful Playwright documentation' },
        {
          type: 'links',
          links: [
            {
              label: 'Locators',
              url: 'https://playwright.dev/docs/locators',
              description: 'How to locate headings, buttons, and links',
            },
            {
              label: 'Assertions',
              url: 'https://playwright.dev/docs/test-assertions',
              description: 'Use expect() and web-first assertions',
            },
            {
              label: 'page.getByRole',
              url: 'https://playwright.dev/docs/api/class-page#page-get-by-role',
              description: 'Role-based locator strategy',
            },
          ],
        },
      ],
    },

    {
      id: 'ex2-2-solution',
      title: 'Solution 2.2 (DSB)',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 2.2 (DSB)' },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_2_2.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Exercise 2.2 (DSB): locate, switch language, and assert', async ({ page }) => {
  await page.goto('https://www.dsb.dk/en/domestic/', { waitUntil: 'domcontentloaded' });

  const acceptAllButton = page.getByRole('button', { name: 'Accept all' });
  if (await acceptAllButton.isVisible().catch(() => false)) {
    await acceptAllButton.click();
  }

  const englishHeading = page.getByRole('heading', { name: 'Find travel' });
  const fromButtonEnglish = page.getByRole('button', { name: 'From:' });
  const toButtonEnglish = page.getByRole('button', { name: 'To:' });
  const danishLink = page.getByRole('link', { name: 'Dansk' });

  await expect(englishHeading).toBeVisible();
  await expect(fromButtonEnglish).toBeVisible();
  await expect(toButtonEnglish).toBeVisible();
  await expect(danishLink).toBeVisible();

  await danishLink.click();

  const danishHeading = page.getByRole('heading', { name: 'Find rejse' });
  const fromButtonDanish = page.getByRole('button', { name: 'Fra:' });
  const toButtonDanish = page.getByRole('button', { name: 'Til:' });
  const loginLinkDanish = page.getByRole('link', { name: 'Log ind' });

  await expect(danishHeading).toBeVisible();
  await expect(fromButtonDanish).toBeVisible();
  await expect(toButtonDanish).toBeVisible();
  await expect(loginLinkDanish).toBeVisible();

  await page.screenshot({ path: 'screenshots/day1_ex2_2_dsb.png', fullPage: true });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good next step' },
        {
          type: 'p',
          text: 'It uses several semantic locators on the same flow. It verifies the UI before and after a user action. It introduces a realistic case where your assertions must adapt after navigation. It stays focused on locators and assertions without adding too much extra complexity.',
        },
      ],
    },
  ],
};
