import { Course } from '../course.model';

export const PLAYWRIGHT_COURSE: Course = {
  slug: 'playwright',
  title: 'Automatisering med Playwright',
  description:
    'Here you can find all the exercises, useful links and solutions that might want to explore during the coures. You will also find additional exercises and assistance on how you can continue your Playwright journey.',
  imageUrl: '/assets/playwright-course-img.jpg',
  tags: ['playwright', 'automation', 'beginner'],
  items: [
    {
      id: 'welcome',
      title: 'Welcome',
      summary: 'Overview and expectations',
      type: 'content',
      blocks: [
        { type: 'divider' },
        { type: 'h2', text: 'Let’s jump into it!' },
        {
          type: 'p',
          text: 'Think of this page as your personal course hub. On the right you’ll find topics. Each topic has its own content that you can open and explore.',
        },
        {
          type: 'callout',
          variant: 'info',
          text: 'Tip: This site includes all the exercises, slide decks, and handouts we’ll go through during the physical course.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'Expectations' },
        {
          type: 'p',
          text: `Before we begin, it’s important that we talk a bit about what you should expect from this course.`,
        },
        {
          type: 'p',
          text: `We’ll go through the fundamentals of Playwright using TypeScript. We’ll start with the basics: installation, configuration, and everything you need to get started.`,
        },
        {
          type: 'p',
          text: `You shouldn’t expect to become an expert in a day — but you will leave with the tools and exercises you need to continue your journey toward becoming an intermediate Technical Tester using Playwright.`,
        },
        {
          type: 'p',
          text: `After the basics, we’ll move into navigation and UI interactions. This is where you learn how to locate and interact with elements, work with forms, and control common UI components.`,
        },
        {
          type: 'p',
          text: `To wrap up Day 1, we’ll dive deeper into Playwright’s API tools and learn how to debug and investigate issues like a pro.`,
        },
        { type: 'h2', text: 'Requirements' },
        {
          type: 'p',
          text: `You should have a basic understanding of software development. It’s not required, but it’s highly recommended. We’ll be writing test scripts in TypeScript using Playwright — this course will not teach you TypeScript from scratch.`,
        },
      ],
    },

    {
      id: 'setup',
      title: 'Setup and Configuration',
      summary: 'Learn how to set up Playwright',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Setup' },
        {
          type: 'p',
          text: `There’s a lot to learn about Playwright, but one topic is absolutely essential — otherwise the rest becomes meaningless. We need to learn how to create our first Playwright project and configure it for what we need.`,
        },

        { type: 'h3', text: 'Step 1: Verify that you have Node.js installed' },
        {
          type: 'p',
          text: `Run the command below to verify that Node.js is installed. It should display the Node version. If you get an error, Node.js is not available in your terminal — try reinstalling Node.js or restarting your terminal.`,
        },
        { type: 'code', language: 'bash', filename: 'terminal', code: `node --version` },
        {
          type: 'p',
          text: `You should get a response like this (depending on your version):`,
        },
        { type: 'code', language: 'bash', filename: 'terminal', code: `v22.13.0` },
        {
          type: 'p',
          text: `If you get an error saying Node.js is not installed, use the link below and download the LTS build.`,
        },
        {
          type: 'links',
          links: [
            {
              label: 'Download Node.js®',
              url: 'https://nodejs.org/en/download',
              description: 'Official Node.js download',
            },
          ],
        },

        { type: 'divider' },

        { type: 'h3', text: 'Step 2: Setting up our IDE' },
        {
          type: 'p',
          text: `We need to install the following extensions into VS Code: “Playwright Test for VSCode” by Microsoft and “Cucumber” by Cucumber.`,
        },
        {
          type: 'p',
          text: `Now let’s download the course repository as a release (recommended). The link below always points to the latest release on GitHub.`,
        },
        {
          type: 'links',
          links: [
            {
              label: 'Download latest release (GitHub)',
              url: 'https://github.com/TestHusetQI/playwright-course-exercises/releases/latest',
              description: 'Open the latest release and download the ZIP under “Assets”.',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          text: `Tip: On the release page, scroll to “Assets” and download the ZIP file.`,
        },
        {
          type: 'p',
          text: `It’s recommended that we extract the codebase into a “source” folder, but for this course it’s totally fine to extract it directly onto your Desktop.`,
        },
        {
          type: 'p',
          text: `Open the folder in Visual Studio Code and make sure the terminal is pointing to the project root. Then we’re ready for the next step — let’s go!`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Step 3: Installing dependencies and Playwright' },
        {
          type: 'p',
          text: `First we need to install our Node packages (dependencies). Luckily, this is very easy. Assuming your terminal is pointing to the root of the project folder, run the command below and wait for the packages to install.`,
        },
        { type: 'code', language: 'bash', filename: 'terminal', code: `npm install` },
        {
          type: 'p',
          text: `How do we know it worked? There are a couple of quick signs: the terminal didn’t throw an error, and you should now see a new folder in the root called “node_modules”. That’s where all the dependencies live.`,
        },
        {
          type: 'p',
          text: `Now that we have dependencies installed, we need to install Playwright’s browser binaries. In the same terminal, run the command below.`,
        },
        { type: 'code', language: 'bash', filename: 'terminal', code: `npx playwright install` },
        {
          type: 'p',
          text: `If the terminal doesn’t throw any errors, we’re good! We now have a project and the browser binaries installed. Nice work 🎉`,
        },

        { type: 'divider' },

        {
          type: 'links',
          links: [
            {
              label: 'Playwright — Getting Started',
              url: 'https://playwright.dev/docs/intro',
              description: 'Official guide for installing and getting started with Playwright',
            },
          ],
        },
      ],
    },

    {
      id: 'exercises',
      title: 'Exercises',
      summary: 'Practice tasks + solutions (when you need them)',
      badge: 'Tasks',
      type: 'group',
      overviewBlocks: [
        { type: 'h2', text: 'Exercises' },
        {
          type: 'p',
          text: `This is where the fun starts! Pick an exercise on the right, read the Theory, do the Exercise, and use the Solution if you get stuck.`,
        },
        {
          type: 'callout',
          variant: 'info',
          text: `Tip: Solutions are not locked — they’re just hidden by default so you can try first.`,
        },
      ],
      children: [
        {
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
import * as fs from 'node:fs';

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
        },
      ],
    },

    {
      id: 'useful-links',
      title: 'Useful links',
      summary: 'Docs, API reference, best practices',
      badge: 'Links',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Useful links' },
        {
          type: 'links',
          links: [
            { label: 'Playwright Docs', url: 'https://playwright.dev/docs/intro' },
            { label: 'Locators', url: 'https://playwright.dev/docs/locators' },
            { label: 'Assertions', url: 'https://playwright.dev/docs/test-assertions' },
            { label: 'Trace Viewer', url: 'https://playwright.dev/docs/trace-viewer' },
          ],
        },
      ],
    },

    {
      id: 'repo',
      title: 'Course repository',
      summary: 'Open repository in a new tab',
      badge: 'External',
      type: 'external',
      externalUrl: 'https://github.com/TestHusetQI/playwright-course-exercises',
    },

    {
      id: 'downloads',
      title: 'Downloads',
      summary: 'Handouts and downloadable material',
      badge: 'Files',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Downloads' },
        {
          type: 'downloads',
          downloads: [
            {
              label: 'Cheat Sheet (PDF)',
              url: '/assets/files/playwright-cheatsheet.pdf',
              meta: 'PDF',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          text: 'If the file doesn’t exist yet, either remove the entry or add the file under /src/assets.',
        },
      ],
    },
  ],
};
