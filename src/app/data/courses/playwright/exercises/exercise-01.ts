import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_01: CourseGroupItem = {
  id: 'ex1',
  title: 'Exercise 1: Browser contexts and pages',
  summary: 'Learn the foundation of how Playwright thinks',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `In this exercise we’ll get comfortable with the basics: what a browser context is, how pages work, and how to structure your first test setup.`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
      testId: 'info-box-1',
    },
  ],
  children: [
    {
      id: 'ex1-theory',
      title: 'Theory',
      summary: 'Understanding browser contexts and pages in Playwright',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Browser Contexts and Pages' },

        {
          type: 'p',
          text: `Before we start writing real tests, it’s important to understand how Playwright models the browser. Everything you do in Playwright happens inside a Browser, a Browser Context, and a Page.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Browser Context' },

        {
          type: 'p',
          text: `A Browser Context is Playwright’s way of creating isolated browser sessions. You can think of a browser context as a brand-new, temporary browser profile.`,
        },

        {
          type: 'p',
          text: `Each browser context has its own state and is completely isolated from other contexts.`,
        },

        {
          type: 'p',
          text: 'A browser context includes its own:',
        },
        {
          type: 'p',
          text: `• Cookies\n• Local and session storage\n• Cache\n• Permissions (camera, geolocation, etc.)`,
        },
        {
          type: 'callout',
          variant: 'info',
          text: `This isolation is what makes Playwright tests reliable and reproducible. Every test can start from a clean state.`,
        },

        {
          type: 'p',
          text: `Because contexts are lightweight, Playwright can run many of them in parallel. This allows you to simulate multiple users at the same time without them interfering with each other.`,
        },

        {
          type: 'code',
          language: 'ts',
          filename: 'example.ts',
          code: `const browser = await playwright.chromium.launch();
const context = await browser.newContext();`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Page' },

        {
          type: 'p',
          text: `A Page is where all the actual interaction happens. A page represents a single browser tab inside a browser context.`,
        },

        {
          type: 'p',
          text: `Each browser context can contain multiple pages, just like a real browser can have multiple tabs open at the same time.`,
        },

        {
          type: 'p',
          text: `When you want to navigate to a website, click elements, fill forms, or extract data — you always do it through a page.`,
        },

        {
          type: 'p',
          text: `Common things you can do with a Page include:`,
        },

        {
          type: 'p',
          text: `• Navigate to URLs\n• Fill input fields\n• Click buttons and links\n• Take screenshots\n• Extract text or attributes\n• Wait for elements to appear`,
        },

        {
          type: 'code',
          language: 'ts',
          filename: 'example.ts',
          code: `const page = await context.newPage();`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Putting it together' },

        {
          type: 'p',
          text: `The typical flow in Playwright looks like this:`,
        },

        {
          type: 'p',
          text: `1. Launch a browser\n2. Create a browser context\n3. Open a page inside the context\n4. Interact with the page`,
        },
        { type: 'divider' },

        { type: 'h2', text: 'Summary: Browser, Context, and Page' },

        {
          type: 'p',
          text: `Let’s quickly recap how the different pieces fit together. Understanding this relationship is key to writing clean and reliable Playwright tests.`,
        },

        { type: 'h3', text: 'Browser' },

        {
          type: 'p',
          text: `The Browser represents the actual browser engine (Chromium, Firefox, or WebKit). It is responsible for running Playwright automation.`,
        },

        {
          type: 'p',
          text: `Analogy: Think of the browser as an apartment building.`,
        },

        { type: 'h3', text: 'Browser Context' },

        {
          type: 'p',
          text: `A Browser Context is an isolated browser session. Each context starts fresh and does not share cookies, storage, cache, or permissions with other contexts.`,
        },

        {
          type: 'p',
          text: `This isolation ensures that tests remain independent and reproducible.`,
        },

        {
          type: 'p',
          text: `Analogy: A browser context is like an apartment inside the building.`,
        },

        { type: 'h3', text: 'Page' },

        {
          type: 'p',
          text: `A Page represents a single browser tab within a browser context. This is where all user interactions happen.`,
        },

        {
          type: 'p',
          text: `You use a page to navigate, click elements, fill forms, take screenshots, and extract data.`,
        },

        {
          type: 'p',
          text: `Analogy: A page is like a room inside the apartment.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `In short: the Browser runs everything, the Context keeps things isolated, and the Page is where you interact with the application.`,
        },

        {
          type: 'code',
          language: 'ts',
          filename: 'example.ts',
          code: `const browser = await playwright.chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://example.com');`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `This structure is the foundation of everything you’ll do in Playwright. Once this model makes sense, the rest of the API becomes much easier to understand.`,
        },
      ],
    },

    {
      id: 'ex1-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of Browser, Context, and Page',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'In Playwright, what is a Browser Context best described as?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A single browser tab.',
              wrongExplanation:
                'A single tab is a Page, not a Browser Context. A context is the container that can hold one or more pages.',
              wrongExplainFurther:
                'Use the mental model from the theory: Browser = building, Context = apartment, Page = room. Tabs are pages, and they live inside the apartment (context).',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A brand-new, isolated browser session (like a temporary browser profile).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A Browser Context is an isolated browser session with its own cookies, storage, cache, and permissions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A browser engine like Chromium or Firefox.',
              wrongExplanation:
                'That describes the Browser (Chromium/Firefox/WebKit). A context is created inside a Browser to isolate session state.',
              wrongExplainFurther:
                'You launch a Browser first (engine choice), then create one or more contexts inside it to simulate separate users or clean sessions.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A saved user profile that persists between test runs.',
              wrongExplanation:
                'By default, contexts are designed to be temporary and start clean. Persistence across runs requires explicit configuration and is not the default testing mental model.',
              wrongExplainFurther:
                'The reason Playwright contexts are so useful for testing is that you can start clean every time, which makes failures easier to reproduce.',
            },
          ],
        },

        {
          id: 'q2',
          prompt:
            'Which of the following is NOT part of what a Browser Context isolates by default (as taught in this section)?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Cookies',
              wrongExplanation:
                'Cookies are part of a context’s isolated session state. Each context gets its own cookies.',
              wrongExplainFurther:
                'This is why tests do not “inherit” login sessions from other tests when using separate contexts.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Local and session storage',
              wrongExplanation:
                'Storage is isolated per context. That includes both localStorage and sessionStorage.',
              wrongExplainFurther:
                'This prevents tests from leaking application state into each other through storage.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Cache',
              wrongExplanation:
                'Cache is part of the isolated session state in a context, keeping sessions independent.',
              wrongExplainFurther:
                'If two contexts shared cache, it could change behavior and make tests order-dependent.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The Playwright test runner configuration',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The test runner configuration is not part of the browser model. Context isolation is about browser session state (cookies/storage/cache/permissions).',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'Why does Browser Context isolation make tests more reliable and reproducible?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because it forces tests to run slower and therefore more stable.',
              wrongExplanation:
                'Stability does not come from being slower. It comes from being predictable and starting from a clean, known state.',
              wrongExplainFurther:
                'A test can still be slow and flaky if it relies on shared state or order-dependent behavior.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because every test can start from a clean state without leaking cookies/storage between tests.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Isolation prevents “state leakage” between tests, which is one of the biggest sources of flaky behavior.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because contexts automatically fix flaky locators.',
              wrongExplanation:
                'Contexts do not affect how locators work. Locator stability comes from Playwright’s locator model and assertions.',
              wrongExplainFurther:
                'Even with perfect isolation, weak selectors can still be flaky. Isolation only ensures the session state is clean.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because contexts prevent network requests from happening.',
              wrongExplanation:
                'Contexts do not block network traffic by default. They isolate session state.',
              wrongExplainFurther:
                'You can intercept or block network requests, but that is done via routing APIs, not by context isolation.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'What is a Page in Playwright?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A single browser tab where interactions happen.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A Page represents one tab inside a browser context and is where navigation, clicks, and form interaction happen.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'An isolated browser session.',
              wrongExplanation: 'That describes a Browser Context. A page lives inside a context.',
              wrongExplainFurther:
                'A single context can hold multiple pages, like multiple tabs inside the same isolated session.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A collection of cookies and storage values.',
              wrongExplanation:
                'Cookies and storage are part of session state held by the Browser Context, not the Page.',
              wrongExplainFurther:
                'A page uses the context’s state. If you open two pages in the same context, they share cookies/storage.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A running browser engine (Chromium/Firefox/WebKit).',
              wrongExplanation: 'That describes the Browser. A page is created from a context.',
              wrongExplainFurther:
                'The hierarchy is Browser → Context → Page. The page is the tab you automate.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which statement about Pages and Contexts is correct?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'One context can contain multiple pages (tabs).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A browser context can contain multiple pages, like multiple tabs in one isolated session.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'One page can contain multiple contexts.',
              wrongExplanation: 'The relationship is reversed. Pages are created inside a context.',
              wrongExplainFurther: 'Contexts are containers. Pages are children of contexts.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A page is shared between contexts by default.',
              wrongExplanation:
                'Pages are not shared across contexts. Contexts are isolated, and a page belongs to exactly one context.',
              wrongExplainFurther:
                'Sharing pages would break isolation, because cookies and storage would leak across sessions.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Contexts can only contain one page.',
              wrongExplanation:
                'A context can contain multiple pages. This is how you model multiple tabs for the same isolated session.',
              wrongExplainFurther:
                'If you need a second tab in the same session, you create another page from the same context.',
            },
          ],
        },

        {
          id: 'q6',
          prompt:
            'When you want to navigate, click, fill forms, or take screenshots, which Playwright object do you use directly?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Browser',
              wrongExplanation:
                'The Browser hosts contexts but is not where interactions happen. You interact through a Page.',
              wrongExplainFurther:
                'The Browser is the top-level engine container. It is used to create contexts.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Browser Context',
              wrongExplanation:
                'A context holds session state and creates pages. Most user actions are performed on a Page.',
              wrongExplainFurther:
                'You create a page from a context, then interact with the UI via that page.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Page',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The Page is where navigation, clicks, form filling, screenshots, and data extraction happen.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Test runner',
              wrongExplanation:
                'The test runner orchestrates tests. It is not part of Playwright’s browser model.',
              wrongExplainFurther:
                'Playwright Test provides fixtures (like the page fixture), but actions still happen on the Page.',
            },
          ],
        },

        {
          id: 'q7',
          prompt:
            'What is the correct “typical flow” order in Playwright (as described in the theory)?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Create page → Create context → Launch browser → Interact',
              wrongExplanation: 'You cannot create a context or a page before a browser exists.',
              wrongExplainFurther:
                'The Browser is the top-level object. Contexts come from the browser. Pages come from the context.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Launch browser → Create context → Open page → Interact',
              wrongExplanation: '',
              correctExplanation:
                'Correct. This is the standard Playwright flow: Browser → Context → Page → actions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Launch browser → Open page → Create context → Interact',
              wrongExplanation:
                'A page is opened inside a context, so the context must exist first.',
              wrongExplainFurther:
                'Pages cannot exist without a context because the context provides the isolated session environment.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Create context → Launch browser → Open page → Interact',
              wrongExplanation:
                'A context is created from an already launched browser, not before it.',
              wrongExplainFurther:
                'The API shape reflects the hierarchy: browser.newContext() then context.newPage().',
            },
          ],
        },
      ],
    },

    {
      id: 'ex1-exercise',
      title: 'Exercise',
      summary: 'Write your first Playwright Test and save a screenshot',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 1: Browser contexts and pages', testId: 'ex1-exercise' },

        {
          type: 'p',
          text: 'Let’s write your first Playwright Test. You will open a website, confirm it loaded, and save a screenshot. Simple, useful, and a great foundation.',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Goal' },
        {
          type: 'p',
          text: '• Open https://testhuset.dk • Wait until the page is loaded • Take a screenshot and save it under screenshots/day1_ex1.png',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Recommended approach (Playwright Test)' },
        {
          type: 'p',
          text: 'We will use the Playwright Test runner and the built-in page fixture. That keeps the test clean and removes lifecycle noise so you can focus on the important parts.',
        },

        { type: 'h3', text: 'Steps' },
        {
          type: 'p',
          text: '1. Create a new test file named exercise_1.spec.ts in the same folder as this exercise. 2. Import test and expect from @playwright/test. 3. In the test, navigate to https://testhuset.dk and wait for domcontentloaded. 4. Save a full-page screenshot to screenshots/day1_ex1.png.',
        },

        {
          type: 'callout',
          variant: 'info',
          text: 'Tip: A beginner-friendly way to prove a page loaded is domcontentloaded combined with a simple assertion such as the page title.',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Definition of done' },
        {
          type: 'p',
          text: '• The test passes without errors • A screenshot exists at screenshots/day1_ex1.png',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Optional: run it headed' },
        {
          type: 'p',
          text: 'If you want to see the browser window while the test runs, run Playwright Test in headed mode.',
        },

        { type: 'divider' },

        {
          type: 'hint',
          id: 'ex1-hint-file-location',
          title: 'Hint 1: Where should I put the test file?',
          blocks: [
            {
              type: 'p',
              text: 'Place exercise_1.spec.ts next to the existing exercise folder for Day 1, Exercise 1, so it is easy to find and easy to run.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex1-hint-page-fixture',
          title: 'Hint 2: How do I get a page object?',
          blocks: [
            {
              type: 'p',
              text: 'Use Playwright Test. The test runner provides a built-in page fixture. Your test function can receive { page } and you can use it immediately.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `// Simple Page Object example (Playwright Test)
import { Page, expect } from '@playwright/test';

export class StatusPage {
  constructor(private readonly page: Page) {}

  // Locators (keep them in one place)
  readonly status = this.page.getByRole('status');

  // Assertions (web-first, auto-retrying)
  async expectReady(timeout = 10_000) {
    await expect(this.status).toHaveText('Ready', { timeout });
  }
}

// --- usage in a test ---
import { test } from '@playwright/test';

test('status becomes ready', async ({ page }) => {
  const statusPage = new StatusPage(page); // <-- "get" the page object
  await statusPage.expectReady();
});`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex1-hint-goto-and-wait',
          title: 'Hint 3: What does “wait until loaded” mean here?',
          blocks: [
            {
              type: 'p',
              text: 'A good starting point is to wait for domcontentloaded in page.goto. After that, add an assertion such as checking the title.',
            },
            {
              type: 'code',
              language: 'ts',
              code: `// Hint: tell goto what "loaded" should mean
await page.goto('YOUR_URL_HERE', { waitUntil: 'domcontentloaded' });

// Hint: then assert something stable, e.g. title
await expect(page).toHaveTitle(/YOUR_EXPECTED_TITLE/);`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex1-hint-screenshot-folder',
          title: 'Hint 4: My screenshot fails to save',
          blocks: [
            {
              type: 'p',
              text: 'Make sure the screenshots folder exists before saving. If the folder is missing, Node cannot write the file.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'ex1-hint-runner-not-working',
          title: 'Hint 5: Playwright runner not working for my test',
          blocks: [
            {
              type: 'p',
              text: 'If you are having issues with your playwright runner not having the run icon, it could be because of three things. ',
            },
            {
              type: 'p',
              text: '• If you just installed the Playwright extention, you might have to restart Visual Studio Code and try again. • Make sure that the test file is located with the "tests" folder. Playwright is configured to looks for tests within that folder. • Make sure that your test file is "*.spec.ts" it only looks for tests within spec files.  ',
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Helpful Playwright documentation' },
        {
          type: 'links',
          links: [
            {
              label: 'Playwright Test runner',
              url: 'https://playwright.dev/docs/test-intro',
              description: 'How Playwright Test works and how to run tests',
            },
            {
              label: 'page.goto',
              url: 'https://playwright.dev/docs/api/class-page#page-goto',
              description: 'Navigation and waiting options',
            },
            {
              label: 'Screenshots',
              url: 'https://playwright.dev/docs/screenshots',
              description: 'Taking screenshots with Playwright',
            },
          ],
        },
      ],
    },

    {
      id: 'ex1-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'h2', text: 'Solution: Exercise 1' },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution (recommended)' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_1.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Day 1, Exercise 1: open site and take screenshot', async ({ page }) => {
  // Navigates to the page and waits for the dom to load before proceeding
  await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });

  // Takes a fullpage screenshot of the page and saves it in the desired path
  await page.screenshot({ path: 'screenshots/day1_ex1.png', fullPage: true });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },
        {
          type: 'p',
          text: '• Uses Playwright Test and the built-in page fixture • Uses a reliable load signal (domcontentloaded) • Adds a meaningful assertion (title check) • Ensures the screenshots folder exists before writing the file',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Optional manual solution (Browser, Context, Page)' },
        {
          type: 'p',
          text: `This is the approach if you don't want to use the Playwright fixtures and want to try to build it manually. Notice that we have to manually close the context and browser, where the Playwright's fixture provides us with the built-in functionality, so that we don't have to do it manually.`,
        },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_1.ts',
          code: `import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: 'screenshots/day1_ex1.png', fullPage: true });
  } finally {
    await context.close();
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: 'Tip: If you want to watch the manual version run, set headless to false.',
        },
      ],
    },
  ],
};
