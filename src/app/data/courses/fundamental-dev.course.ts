import { Course } from '../course.model';

export const FUNDAMENTAL_DEV_COURSE: Course = {
  slug: 'fundamental-dev',
  title: 'Fundamental Development',
  description:
    'New to programming? Start here. Programming Fundamentals introduces the core ideas behind coding using Java, C#, TypeScript, and Python—no experience required. Build confidence, write real code, and learn skills that transfer to any language.',
  imageUrl: 'assets/fundamental-development-img.jpg',
  tags: ['development', 'beginner'],
  disabled: true,
  disabledReason: 'Under development',
  items: [
    {
      id: 'welcome',
      title: 'Welcome',
      summary: 'Overview and expectations',
      type: 'content',
      blocks: [
        { type: 'divider' },
        { type: 'h2', text: 'Welcome to Fundamental Development' },
        {
          type: 'p',
          text: 'This page is your course hub. On the right you will find all topics we will work through together. You can explore them during the course and revisit them afterwards whenever you need a refresher.',
        },
        {
          type: 'callout',
          variant: 'info',
          text: 'Tip: Everything we cover during the physical course is available here, including explanations, comparison examples, and exercises.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'What This Course Is Designed to Do' },
        {
          type: 'p',
          text: 'This is a one-day introduction to the core ideas behind programming. Instead of focusing on a single language, we will explore the shared foundations of Python, JavaScript, C#, and Java.',
        },
        {
          type: 'p',
          text: 'The goal is to help you understand how programs work. Once you understand the fundamentals, learning a specific language becomes much easier.',
        },
        {
          type: 'p',
          text: 'You will see the same concepts expressed in different languages so you can compare structure, readability, and style. This will help you decide which direction feels right for you.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'What You Will Learn' },
        {
          type: 'p',
          text: 'We will cover variables, data types, control flow, loops, functions, and basic object-oriented thinking. These are the building blocks used in almost every programming language.',
        },
        {
          type: 'p',
          text: 'You will also learn how to reason about program behavior, how errors occur, and how to approach debugging in a structured way.',
        },
        {
          type: 'p',
          text: 'By the end of the day, you should feel more confident reading code, understanding program logic, and asking the right questions when learning something new.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'What You Should Expect' },
        {
          type: 'p',
          text: 'You are not expected to master a programming language in one day. Instead, you will gain clarity and a solid mental foundation that you can build on afterwards.',
        },
        {
          type: 'p',
          text: 'This course is interactive. You will compare examples, think through small exercises, and reflect on differences between languages.',
        },
        {
          type: 'p',
          text: 'It is completely normal if some concepts feel challenging at first. Programming is a skill that develops through practice. Today is about understanding the fundamentals so you can move forward with confidence.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'Requirements' },
        {
          type: 'p',
          text: 'No prior programming experience is required. Curiosity and willingness to think logically are far more important.',
        },
        {
          type: 'p',
          text: 'If you already have some experience, this course will help strengthen your foundation and clarify concepts that may previously have felt abstract.',
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
