import { Course } from '../course.model';

export const FUNDAMENTAL_DEV_COURSE: Course = {
  slug: 'fundamental-dev',
  title: 'Fundamental Development',
  description:
    'New to programming? Start here. Programming Fundamentals introduces the core ideas behind coding using Java, C#, TypeScript, and Python—no experience required. Build confidence, write real code, and learn skills that transfer to any language.',
  imageUrl: 'assets/fundamental-development-img.jpg',
  tags: ['development', 'beginner'],
  disabled: false,
  disabledReason: 'Under development',
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
              url: 'https://github.com/Stormeal/playwright-course/releases/latest',
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
  ],
};
