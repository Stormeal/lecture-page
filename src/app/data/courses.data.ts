import { Course } from './course.model';

export const COURSES: Course[] = [
  {
    slug: 'playwright',
    title: 'Automatisering med Playwright',
    description:
      'Her kan du finde alle opgaver, nyttige links samt løsninger som du potentielt søger under kurset. Du kan også finde ekstra opgaver, og vejledning til hvordan du kan forsætte din Playwright journey.',
    imageUrl: 'assets/playwright-course-img.jpg',
    tags: ['playwright', 'automatisering', 'beginner'],
    items: [
      {
        id: 'welcome',
        title: 'Welcome',
        summary: 'Overview and expectations',
        type: 'content',
        blocks: [
          { type: 'divider' },
          { type: 'h2', text: 'Let us jump into it!' },
          {
            type: 'p',
            text: 'Think of this page as your own course-hub. To the right you will topics. Each topic will have their own content that you can view.',
          },
          {
            type: 'callout',
            variant: 'info',
            text: 'Tip: This site includes all the exercises, powerpoints and handouts that we will be going through during the physical course.',
          },
          { type: 'divider' },
          { type: 'h2', text: 'Expectations' },
          {
            type: 'p',
            text: `Before we begin the course, it's important that we talk abit about what you should expect of this course.`,
          },
          {
            type: 'p',
            text: `We will be going through the fundamentals of Playwright using TypeScript. We will start with learning about the basics. This includes installation, configuration and everything you need to get started using Playwright. You should not expect to become an expert, but we will deliver you the tools and exercises to begin your journey to intermidiate Technical Tester using Playwright.`,
          },
          {
            type: 'p',
            text: `Then we will go into the navigation and UI interactions. This is where you learn how to locate and interact with elements. You also learn how to use forms and overall control elements.`,
          },
          {
            type: 'p',
            text: `Then we will more or less conclude the UI section of Playwright for Day 1, and dive deeper into how to use Playwrights API tools.`,
          },
          { type: 'h2', text: 'Requirements' },
          {
            type: 'p',
            text: `You should have a basic understanding of development. It's not required, but highly recommended. We will be writing test scripts in TypeScript using Playwrights library, this course will not teach you TypeScript.`,
          },
        ],
      },
      {
        id: 'setup',
        title: 'Setup and Configuration',
        summary: 'Learn how to setup Playwright',
        type: 'content',
        blocks: [
          { type: 'h2', text: 'Setup' },
          {
            type: 'p',
            text: `There's always a lot of things we need to learn about Playwright, but possibly the most important topic that we need to learn otherwise it renders the rest meaningless. We need to learn how to setup our first Playwright project and configure it for what we need.`,
          },
          { type: 'h3', text: 'Step 1: Verify that you have NodeJS installed.' },
          {
            type: 'p',
            text: `Run the below command to verify that NodeJS is installed. It should display the version of Node, if it shows an error message, that means that it's not found, either try to re-install NodeJS or restart the terminal.`,
          },
          {
            type: 'code',
            language: 'bash',
            filename: 'terminal',
            code: `node --version`,
          },
          {
            type: 'p',
            text: `You should then get a response like this (Depending on the version):`,
          },
          {
            type: 'code',
            language: 'bash',
            filename: 'terminal',
            code: `v22.13.0`,
          },
          {
            type: 'p',
            text: `Should it return with an error message saying that Node.js is not installed, simply use the link below and download the LTS build`,
          },
          {
            type: 'links',
            links: [
              {
                label: 'Download Node.js®',
                url: 'https://nodejs.org/en/download',
                description: 'Officiel Node.js download',
              },
            ],
          },

          // ----------------------------------------------
          // ----------------- STEP 1 END -----------------
          // ----------------------------------------------

          { type: 'divider' },
          { type: 'h3', text: 'Step 2: Setting up our IDE' },
          {
            type: 'p',
            text: `We need to install the following extensions into VSCode: 'Playwright Test for VSCode by Microsoft' and 'Cucumber by Cucumber'.`,
          },
          {
            type: 'p',
            text: `Now download the course repository as a release (recommended). The link below always points to the latest release on GitHub.`,
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
            text: `It's recommeneded that we extract the codebase into a "source" folder, but for this course we can simply just extract it directly into the desktop. `,
          },
          {
            type: 'p',
            text: `Open the folder inside Visual Studio Code and make sure that the terminal is pointing to the root. That way we can proceed to the next step.`,
          },
          { type: 'divider' },

          // ----------------------------------------------
          // ----------------- STEP 2 END -----------------
          // ----------------------------------------------

          { type: 'h3', text: 'Step 3: Installing dependencies and Playwright' },
          {
            type: 'p',
            text: `First we need to install our Node packages (dependencies), luckly we can do that very easy with a simple command. Assuming of course that our terminal is pointing to the root of the project folder. Simply execute the command below and wait for the packages to install. `,
          },
          {
            type: 'code',
            language: 'bash',
            filename: 'terminal',
            code: `npm install`,
          },
          {
            type: 'p',
            text: `How do we know that it worked? Well, there a few ways we quickly can determine wether it worked or not. The first sign is that the terminal didn't throw an error and that it shows that it's installing packages. The second is that there now should be a new folder in our root called "node_modules". This is the location where all the dependencies are located.`,
          },
          {
            type: 'p',
            text: `Now that we have all our dependencies installed we need to install playwright globally on our machine. We can do that in the same terminal, let's go ahead and run the command below. `,
          },
          {
            type: 'code',
            language: 'bash',
            filename: 'terminal',
            code: `npx playwright install`,
          },
          {
            type: 'p',
            text: `Assuming that the terminal didn't throw any error, we should be good to conclude the setup section of the course. We now what a project and all the browser binaries from Playwright installed.`,
          },
          { type: 'divider' },
          {
            type: 'links',
            links: [
              {
                label: 'Playwright — Getting Started',
                url: 'https://playwright.dev/docs/intro',
                description: 'Officiel guide for the installation of Playwright',
              },
            ],
          },
        ],
      },
      {
        id: 'tasks',
        title: 'Opgaver',
        summary: 'Liste over øvelser og udfordringer',
        badge: 'Tasks',
        type: 'content',
        blocks: [
          { type: 'h2', text: 'Opgaver' },
          {
            type: 'p',
            text: 'Her kan du lægge dine opgaver ind som punkter, links, eller sektioner. Hvis du vil, kan vi senere udvide med checklists.',
          },
        ],
      },
      {
        id: 'useful-links',
        title: 'Nyttige links',
        summary: 'Docs, API reference, best practices',
        badge: 'Links',
        type: 'content',
        blocks: [
          { type: 'h2', text: 'Nyttige links' },
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
        title: 'Kursus repository',
        summary: 'Åbn repo i ny fane',
        badge: 'External',
        type: 'external',
        externalUrl: 'https://github.com/', // <-- replace with your real repo
      },
      {
        id: 'downloads',
        title: 'Downloads',
        summary: 'Materialer du kan downloade',
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
            text: 'Hvis filen ikke findes endnu, kan du enten fjerne entry eller oprette filen i /src/assets.',
          },
        ],
      },
    ],
  },
  {
    slug: 'fundamental-dev',
    title: 'Fundamental Development',
    description:
      'New to programming? Start here. Programming Fundamentals introduces the core ideas behind coding using Java, C#, TypeScript, and Python—no experience required. Build confidence, write real code, and learn skills that transfer to any language.',
    imageUrl: '/assets/fundamental-development-img.jpg',
    tags: ['development', 'beginner'],
    disabled: true,
    disabledReason: 'Under development',
    items: [],
  },
];
