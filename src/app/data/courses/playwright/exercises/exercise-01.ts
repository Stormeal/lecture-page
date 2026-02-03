import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_01: CourseGroupItem = {
  id: 'ex1',
  title: 'Exercise 1: Browser contexts and pages',
  summary: 'Learn the foundation of how Playwright thinks',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Exercise 1: Browser contexts & pages' },
    {
      type: 'p',
      text: `In this exercise we’ll get comfortable with the basics: what a browser context is, how pages work, and how to structure your first test setup.`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
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
          text: `A browser context includes its own:`,
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
      id: 'ex1-exercise',
      title: 'Exercise',
      summary: 'Write your first Playwright Test and save a screenshot',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 1: Browser contexts and pages' },

        {
          type: 'p',
          text: 'Let’s write your first Playwright Test. You will open a website, confirm it loaded, and save a screenshot. Simple, useful, and a great foundation.',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Goal' },
        {
          type: 'p',
          text: '• Open https://testhuset.dk • Wait until the page is loaded • Verify the title contains "Testhuset" (or similar) • Take a screenshot and save it under screenshots/day1_ex1.png',
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
          text: '1. Create a new test file named exercise_1.spec.ts in the same folder as this exercise. 2. Import test and expect from @playwright/test. 3. In the test, navigate to https://testhuset.dk and wait for domcontentloaded. 4. Assert the title contains "testhuset". 5. Save a full-page screenshot to screenshots/day1_ex1.png.',
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
          text: '• The test passes without errors • The title assertion succeeds • A screenshot exists at screenshots/day1_ex1.png',
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

        {
          type: 'p',
          text: 'Nice work. Here is a clean solution using Playwright Test first, plus an optional manual solution that matches the Browser, Context, and Page model.',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution (recommended)' },
        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_1.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Day 1, Exercise 1: open site and take screenshot', async ({ page }) => {
  await page.goto('https://testhuset.dk', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveTitle(/testhuset/);

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
