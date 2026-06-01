import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_08: CourseGroupItem = {
  id: 'ex8',
  title: 'Exercise 8: Behavior-Driven Development',
  summary: '',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `With this exercise we are now learning about how to use the BDD framework alongside Playwright, we will rewrite a previous exercise into executable BDD scripts using the Gherkin language. `,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex8-theory',
      title: 'Theory: BDD in General',
      summary: 'Understanding Behavior-Driven Development (BDD)',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Theory: Behavior-Driven Development (BDD)' },

        {
          type: 'p',
          text: `Behavior-Driven Development (BDD) is a way of describing system behavior using structured, business-readable language. Instead of starting with technical implementation details, BDD begins with observable behavior and shared understanding between business and engineering.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `BDD is not about tools. It is about shared language and clear expectations.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'What problem does BDD solve?' },

        {
          type: 'p',
          text: `Traditional test cases are often written either too technically or too vaguely. Business stakeholders struggle to read them, and engineers struggle to implement them consistently. BDD introduces a structured format that reduces ambiguity and improves collaboration.`,
        },

        {
          type: 'labelValue',
          label: 'Common problems without BDD:',
          list: {
            ordered: false,
            items: [
              'Requirements written in long paragraphs with hidden assumptions.',
              'Test cases tightly coupled to UI interactions instead of behavior.',
              'Misalignment between business expectations and automated tests.',
              'Ambiguous acceptance criteria.',
              'Test steps describing clicks instead of outcomes.',
            ],
          },
          testId: 'ex8-theory-problems-without-bdd',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Core principle: Describe behavior, not implementation' },

        {
          type: 'p',
          text: `BDD scenarios describe what the system does from the perspective of a user or actor. They do not describe how the UI is structured or which selectors are used. The focus is on outcomes and rules.`,
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `If your scenario mentions CSS classes, button colors, or DOM structure, it is no longer behavior-focused.`,
        },

        {
          type: 'labelValue',
          label: 'Behavior-focused examples:',
          list: {
            ordered: false,
            items: [
              'When a user registers with valid credentials, the account is created.',
              'When a locked user attempts to log in, access is denied.',
              'When a filter is applied, only matching records are displayed.',
            ],
          },
          testId: 'ex8-theory-behavior-examples',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Gherkin structure' },

        {
          type: 'p',
          text: `BDD commonly uses Gherkin syntax to structure scenarios. Gherkin uses a small set of keywords to make scenarios consistent and readable.`,
        },

        {
          type: 'labelValue',
          label: 'Core keywords:',
          list: {
            ordered: false,
            items: [
              'Feature: describes the high-level capability.',
              'Scenario: describes one concrete behavior example.',
              'Given: describes the initial state or context.',
              'When: describes the action or event.',
              'Then: describes the expected observable outcome.',
              'And / But: extend previous steps.',
            ],
          },
          testId: 'ex8-theory-gherkin-keywords',
        },

        {
          type: 'divider',
        },

        {
          type: 'h3',
          text: 'Given / When / Then explained',
        },

        {
          type: 'labelValue',
          label: 'Given',
          text: 'Describes the system state before the action happens. Preconditions and context belong here.',
          testId: 'ex8-theory-given',
        },
        {
          type: 'labelValue',
          label: 'When',
          text: 'Describes a single meaningful action. It should represent intent, not mechanical steps.',
          testId: 'ex8-theory-when',
        },
        {
          type: 'labelValue',
          label: 'Then',
          text: 'Describes observable outcomes. The result must be measurable and verifiable.',
          testId: 'ex8-theory-then',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `A strong Then step can be translated into a clear assertion without interpretation.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'What BDD is not' },

        {
          type: 'p',
          text: `BDD is not a test automation framework, and it does not replace good engineering practices. It is also not just a matter of writing UI steps in a different format.`,
        },

        {
          type: 'labelValue',
          label: 'Common misconceptions:',
          list: {
            ordered: false,
            items: [
              'BDD means writing tests in plain English only.',
              'BDD replaces technical design.',
              'BDD eliminates the need for assertions.',
              'BDD automatically improves quality without discipline.',
            ],
          },
          testId: 'ex8-theory-misconceptions',
        },

        { type: 'divider' },

        { type: 'h3', text: 'From scenario to automation' },

        {
          type: 'p',
          text: `In practice, each Gherkin step is mapped to executable code. The scenario remains readable, while the underlying implementation uses tools like Playwright to interact with the system.`,
        },

        {
          type: 'labelValue',
          label: 'Mapping flow:',
          list: {
            ordered: false,
            items: [
              'Write the feature and scenarios first.',
              'Identify reusable steps.',
              'Implement step definitions in code.',
              'Keep technical details inside the step implementation, not in the feature file.',
              'Refactor scenarios to remain business-readable over time.',
            ],
          },
          testId: 'ex8-theory-mapping-flow',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Well-written BDD scenarios become living documentation. Poorly written ones become noisy duplicates of UI scripts.`,
        },
      ],
    },

    {
      id: 'ex8-theory-playwright',
      title: 'Theory: BDD in Playwright',
      summary: 'Translating scenarios into stable, maintainable Playwright tests',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Theory: BDD in Playwright' },

        {
          type: 'p',
          text: `BDD becomes practical when scenarios can be executed. In Playwright, you express the same Given/When/Then intent using clean test structure, reusable helpers, and stable selectors. You are not trying to force your tests into Gherkin; you are trying to keep behavior readable while the implementation stays maintainable.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `In Playwright, your “feature file” can be your test suite description. Your “steps” can be functions that encode behavior.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'A BDD mindset in Playwright' },

        {
          type: 'labelValue',
          label: 'Given',
          text: 'Set up state and navigate to the right context. Keep it minimal and deterministic.',
          testId: 'ex8-theory-pw-given',
        },
        {
          type: 'labelValue',
          label: 'When',
          text: 'Perform one meaningful user intent (submit form, apply filter, delete record). Avoid multi-action step chains unless they represent a single intent.',
          testId: 'ex8-theory-pw-when',
        },
        {
          type: 'labelValue',
          label: 'Then',
          text: 'Assert observable outcomes with stable locators and meaningful assertions. Prefer end state over intermediate motion.',
          testId: 'ex8-theory-pw-then',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Write scenarios as test titles' },

        {
          type: 'p',
          text: `A simple and effective approach is to treat each Playwright test as a BDD scenario. Use the test title to describe behavior in business terms, and structure the body into clear Given/When/Then sections.`,
        },

        {
          type: 'labelValue',
          label: 'Guideline',
          text: 'If the test title cannot be understood by a non-engineer, the scenario is probably too technical.',
          testId: 'ex8-theory-pw-test-titles-guideline',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Step functions: encapsulate intent' },

        {
          type: 'p',
          text: `To keep tests readable, represent steps as functions that encode intent. This reduces duplication and keeps selectors inside one place. The test reads like a scenario, while the implementation stays flexible.`,
        },

        {
          type: 'labelValue',
          label: 'Good step function characteristics:',
          list: {
            ordered: false,
            items: [
              'Named by intent (for example “registerUser”, “applyRoleFilter”, “deleteAccount”).',
              'Accepts domain-level inputs, not raw selectors.',
              'Performs only what is necessary for the behavior.',
              'Contains assertions only when the assertion is part of the step’s meaning.',
            ],
          },
          testId: 'ex8-theory-pw-step-functions-characteristics',
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `Avoid “clickAndTypeAndWait” helper functions. They hide meaning and create brittle tests.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Use stable selectors to keep behavior stable' },

        {
          type: 'p',
          text: `BDD scenarios should survive UI refactors. In Playwright that usually means selecting elements by stable attributes (data-testid) and asserting outcomes that reflect behavior, not layout.`,
        },

        {
          type: 'labelValue',
          label: 'Preferred locator strategy:',
          list: {
            ordered: false,
            items: [
              'data-testid for critical controls and outputs.',
              'role-based selectors when semantics are strong and stable.',
              'avoid brittle CSS chains and text that changes frequently.',
            ],
          },
          testId: 'ex8-theory-pw-locator-strategy',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Assert outcomes, not implementation details' },

        {
          type: 'p',
          text: `BDD is only as strong as the “Then”. In Playwright, this means using assertions that describe what changed in a user-visible way: a message appears, a row count changes, a value updates, navigation succeeds, or access is denied.`,
        },

        {
          type: 'labelValue',
          label: 'Examples of strong “Then” assertions:',
          list: {
            ordered: false,
            items: [
              'A success banner is visible with the expected text.',
              'The URL matches the expected route after navigation.',
              'A table shows only rows that match the applied filter.',
              'An empty state appears when no results match.',
              'A deleted record is no longer discoverable.',
            ],
          },
          testId: 'ex8-theory-pw-strong-assertions',
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `If your assertion checks pixel positions, CSS classes, or timing assumptions, you are testing implementation, not behavior.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Make scenarios deterministic with controlled data' },

        {
          type: 'p',
          text: `Flaky scenarios destroy trust. In Playwright, reliability often depends on controlling test data. Prefer creating data via API or fixtures rather than relying on whatever happens to exist in the environment.`,
        },

        {
          type: 'labelValue',
          label: 'Determinism checklist:',
          list: {
            ordered: false,
            items: [
              'Set up required data explicitly (API seeding or dedicated fixtures).',
              'Avoid depending on ordering unless you control sorting.',
              'Use unique test data to prevent collisions between runs.',
              'Clean up data when the environment persists state.',
            ],
          },
          testId: 'ex8-theory-pw-determinism-checklist',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Organize tests like features' },

        {
          type: 'p',
          text: `Even without Gherkin, you can structure Playwright suites like BDD features. Group related scenarios under a describe block and use a shared setup that mirrors a Background section.`,
        },

        {
          type: 'labelValue',
          label: 'Suite structure guidance:',
          list: {
            ordered: false,
            items: [
              'Use describe blocks as Features (one capability per describe).',
              'Use beforeEach as Background only when it applies to all scenarios.',
              'Keep each test focused on one behavior (one primary assertion theme).',
              'Avoid building long “end-to-end everything” tests.',
            ],
          },
          testId: 'ex8-theory-pw-suite-structure-guidance',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `A good BDD-style suite reads like documentation and fails like a diagnostic tool.`,
        },
      ],
    },

    {
      id: 'ex8-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of BDD and how to apply the mindset in Playwright.',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'What is the core idea of Behavior-Driven Development (BDD)?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'BDD is mainly a tool for converting UI clicks into automated scripts.',
              wrongExplanation: 'BDD is not about tools or scripting UI actions.',
              wrongExplainFurther:
                'BDD focuses on describing observable behavior in a shared language that business and engineering can align on.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'BDD describes system behavior in business-readable language to create shared understanding between business and engineering.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. BDD starts from observable behavior and shared understanding, not technical implementation details.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'BDD replaces the need for technical design and engineering discipline.',
              wrongExplanation: 'BDD is not a replacement for good engineering practices.',
              wrongExplainFurther:
                'BDD helps clarify expectations, but implementation quality still requires discipline and good design.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'BDD means writing tests in plain English without assertions.',
              wrongExplanation: 'Assertions are still needed to verify outcomes.',
              wrongExplainFurther:
                'BDD scenarios should lead to clear, measurable Then steps that translate into assertions.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'What problem does BDD primarily solve?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It makes browsers faster and removes the need for waiting.',
              wrongExplanation: 'BDD is about communication and clarity, not browser performance.',
              wrongExplainFurther:
                'Playwright’s waiting and assertions are separate technical concerns.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It guarantees zero defects if scenarios are written.',
              wrongExplanation: 'BDD does not automatically improve quality without discipline.',
              wrongExplainFurther:
                'BDD reduces ambiguity and misalignment, which helps quality, but it is not a magic guarantee.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It reduces ambiguity and misalignment by making behavior and expectations clear and readable for both business and engineers.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. BDD provides a structured way to describe behavior so stakeholders can align and engineers can implement consistently.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It replaces UI tests with API-only checks.',
              wrongExplanation: 'BDD is not about replacing test types.',
              wrongExplainFurther:
                'BDD can be applied to UI tests, API tests, or other types, as long as behavior and outcomes are clear.',
            },
          ],
        },

        {
          id: 'q3',
          prompt:
            'Which statement best reflects the BDD principle “describe behavior, not implementation”?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Scenarios should focus on outcomes and rules from the user’s perspective, not DOM structure or selectors.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Behavior-focused scenarios describe what the system does and what should be observable, without coupling to UI structure.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Scenarios should mention CSS classes and DOM structure to be precise.',
              wrongExplanation: 'That couples scenarios to implementation details.',
              wrongExplainFurther:
                'If your scenario mentions CSS classes, button colors, or DOM structure, it is no longer behavior-focused.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Scenarios should list every click and selector so engineers can implement faster.',
              wrongExplanation:
                'That turns scenarios into UI scripts rather than behavior descriptions.',
              wrongExplainFurther:
                'BDD aims to keep scenarios readable and stable across UI refactors.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Scenarios should avoid measurable checks to stay flexible.',
              wrongExplanation: 'Then steps must be measurable and verifiable.',
              wrongExplainFurther:
                'A strong Then step can be translated into a clear assertion without interpretation.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'In Gherkin, what is the purpose of the Then step?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Describe the initial system state before anything happens.',
              wrongExplanation: 'That is the role of Given.',
              wrongExplainFurther: 'Given sets preconditions and context.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Describe a single meaningful action the user performs.',
              wrongExplanation: 'That is the role of When.',
              wrongExplainFurther: 'When represents intent, not mechanical steps.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'List the UI selectors needed for the scenario.',
              wrongExplanation:
                'Selectors are implementation details and do not belong in behavior steps.',
              wrongExplainFurther:
                'BDD scenarios should remain readable and stable even if the UI changes.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Describe the expected observable outcome in a measurable, verifiable way.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Then describes the observable outcome. A strong Then step maps to a clear assertion without interpretation.',
            },
          ],
        },

        {
          id: 'q5',
          prompt:
            'How can you apply a BDD mindset in Playwright without using Gherkin feature files?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Force every test to parse a .feature file at runtime.',
              wrongExplanation: 'The goal is not to force a tool choice.',
              wrongExplainFurther:
                'BDD is about readable behavior and maintainable implementation, not mandatory feature files.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Write scenario-like test titles and structure tests into clear Given/When/Then sections.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A practical approach is to treat each test as a scenario: business-readable title, then clear Given/When/Then structure in the test body.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Write tests as long end-to-end scripts to cover everything at once.',
              wrongExplanation: 'Long “everything” tests are harder to maintain and diagnose.',
              wrongExplainFurther:
                'BDD-style suites prefer focused scenarios that fail close to the root cause.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Avoid reusable helpers so every test shows all details.',
              wrongExplanation:
                'Reusability helps keep tests readable and maintainable when done by intent.',
              wrongExplainFurther:
                'Encapsulate intent in step functions, but avoid “clickAndTypeAndWait” helpers that hide meaning.',
            },
          ],
        },

        {
          id: 'q6',
          prompt: 'What is a key characteristic of a good BDD-style step function in Playwright?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It is named by intent and accepts domain-level inputs, keeping selectors and technical details inside the implementation.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Good step functions encode behavior (intent), accept domain inputs, and keep selectors inside one place so tests stay readable through UI refactors.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It bundles many unrelated actions into one helper to reduce the number of lines in a test.',
              wrongExplanation: 'That hides meaning and often creates brittle tests.',
              wrongExplainFurther:
                'Avoid “clickAndTypeAndWait” style helpers that mix actions without a clear behavioral intent.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It uses raw CSS chains everywhere to be more explicit.',
              wrongExplanation:
                'Raw CSS chains are often brittle and tightly coupled to UI structure.',
              wrongExplainFurther:
                'Prefer stable selectors like data-testid or strong semantics like roles.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It avoids assertions entirely to keep steps reusable.',
              wrongExplanation:
                'Assertions may belong inside a step when they are part of the step’s meaning.',
              wrongExplainFurther:
                'BDD strength comes from strong Then steps that translate into clear assertions.',
            },
          ],
        },

        {
          id: 'q7',
          prompt: 'Which locator and assertion approach best matches a BDD mindset in Playwright?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Prefer pixel-based assertions and CSS class checks to confirm layout.',
              wrongExplanation: 'That tests implementation details rather than behavior.',
              wrongExplainFurther:
                'BDD emphasizes observable outcomes, not layout or styling internals.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Prefer brittle CSS chains and text selectors because they are easy to write.',
              wrongExplanation: 'Easy-to-write is not the same as stable over time.',
              wrongExplainFurther:
                'BDD scenarios should survive UI refactors, which usually means stable selectors like data-testid.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Prefer stable selectors (data-testid or strong roles) and assert user-visible outcomes (messages, URL, counts, state changes).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A BDD mindset favors stable selectors and assertions that reflect behavior: end state changes that a user or system actor can observe and verify.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Avoid controlling test data so tests reflect real-world randomness.',
              wrongExplanation: 'Randomness reduces determinism and increases flakiness.',
              wrongExplainFurther:
                'To keep scenarios reliable, prefer controlled data setup (API seeding/fixtures), unique test data, and cleanup when needed.',
            },
          ],
        },
      ],
    },

    {
      id: 'ex8_1-exercise',
      title: 'Exercise',
      summary: `Rewrite an existing Playwright test using Gherkin + step definitions`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Day 2 – Exercise 8.1: Introduction to Cucumber with Playwright' },

        { type: 'labelValue', label: 'Topic', text: `BDD with Cucumber + Playwright` },
        {
          type: 'labelValue',
          label: 'Goal',
          text: `Convert an existing Playwright test into a Gherkin scenario with step definitions`,
        },
        { type: 'labelValue', label: 'Recommended time', text: `25–40 minutes` },
        { type: 'labelValue', label: 'Difficulty', text: `Intermediate` },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },

        {
          type: 'p',
          text: `You have already automated a user flow using Playwright. Now you will rewrite that same behavior using Cucumber and Gherkin. Instead of expressing the test directly in TypeScript, you will describe the behavior in a feature file and connect each step to Playwright code.`,
        },
        {
          type: 'p',
          text: `Your feature file must be readable by a non-technical stakeholder. Your step definitions must contain the technical implementation. The goal is clean separation between behavior and mechanics.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Prerequisites' },

        {
          type: 'labelValue',
          label: 'Before you start, make sure you have:',
          list: {
            ordered: false,
            items: [
              'Cucumber extension installed in VS Code.',
              'Completed the earlier UI test exercise (the Playwright scenario you will convert).',
              'Basic understanding of Playwright tests, Page Objects, and Flows.',
            ],
          },
          testId: 'ex8-1-prerequisites',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Learning Objectives' },

        {
          type: 'labelValue',
          label: 'By the end, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Write a readable `.feature` file using Gherkin.',
              'Understand the relationship between Feature files and step definitions.',
              'Use a Custom World to access the Playwright `page`.',
              'Reuse existing Page Objects and Flows inside step definitions.',
              'Use hooks for setup and teardown, not step files.',
            ],
          },
          testId: 'ex8-1-learning-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Exercise Instructions' },

        {
          type: 'labelValue',
          label: '1) Create a feature file',
          list: {
            ordered: true,
            items: [
              'Create a new feature file (for example `exercise8.feature`).',
              'Write one `Feature` with one `Scenario`.',
              'Use `Given`, `When`, `Then`.',
              'Describe the same user flow you automated in the earlier Playwright exercise.',
              'Keep wording high-level and behavior-focused.',
            ],
          },
          testId: 'ex8-1-step-1-feature-file',
        },

        {
          type: 'labelValue',
          label: '2) Write step definitions',
          list: {
            ordered: true,
            items: [
              'Create a step definition file (for example `exercise8.steps.ts`).',
              'Map each Gherkin step to TypeScript code.',
              'Keep steps readable and intention-revealing.',
              'Avoid implementation details in the `.feature` file.',
            ],
          },
          testId: 'ex8-1-step-2-step-definitions',
        },

        {
          type: 'labelValue',
          label: '3) Use the Custom World',
          list: {
            ordered: true,
            items: [
              'Use the provided Custom World to access the Playwright `page`.',
              'Share state between steps through the World when needed.',
              'Do not create a browser or page manually inside steps.',
            ],
          },
          testId: 'ex8-1-step-3-custom-world',
        },

        {
          type: 'labelValue',
          label: '4) Reuse existing code',
          list: {
            ordered: true,
            items: [
              'Reuse your existing Page Objects.',
              'Reuse your existing Flows.',
              'Do not duplicate selectors in step definitions.',
              'Do not re-implement logic that already exists in a Flow or Page Object.',
            ],
          },
          testId: 'ex8-1-step-4-reuse-code',
        },

        {
          type: 'labelValue',
          label: '5) Hooks and setup',
          list: {
            ordered: true,
            items: [
              'Use Cucumber hooks to launch the browser.',
              'Create and close the Playwright page in hooks.',
              'Perform cleanup in hooks if the flow creates state.',
              'Keep step files focused on behavior implementation.',
            ],
          },
          testId: 'ex8-1-step-5-hooks',
        },

        {
          type: 'labelValue',
          label: '6) Run the scenario',
          list: {
            ordered: true,
            items: [
              'Run the Cucumber scenario using the provided npm command.',
              'Ensure the scenario passes from start to finish.',
              'If it fails, improve step wording and reuse more from your Flows.',
            ],
          },
          testId: 'ex8-1-step-6-run',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Definition of Done' },

        {
          type: 'labelValue',
          label: 'You are done when:',
          list: {
            ordered: false,
            items: [
              'A `.feature` file exists and is readable by non-technical users.',
              'Step definitions correctly map to the Gherkin steps.',
              'Existing Page Objects and Flows are reused.',
              'The scenario runs successfully using Cucumber.',
              'No browser or page setup happens inside step definition files.',
            ],
          },
          testId: 'ex8-1-definition-of-done',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Hints' },

        {
          type: 'hint',
          id: 'ex8-1-hint-what-not-how',
          title: 'Hint 0: Feature files describe what, not how',
          blocks: [
            {
              type: 'p',
              text: `If your feature file mentions selectors, DOM structure, or implementation details, move that detail into the step definition or into a Flow/Page Object.`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex8-1-hint-keep-steps-reusable',
          title: 'Hint 1: Keep steps reusable and generic',
          blocks: [
            {
              type: 'p',
              text: `Prefer steps like “When I register with valid credentials” over “When I click the Register button and fill the form”. If a step becomes too technical, it likely belongs in a Flow.`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex8-1-hint-hooks-not-steps',
          title: 'Hint 2: Use hooks for setup and teardown',
          blocks: [
            {
              type: 'p',
              text: `Browser and page lifecycle should be managed in hooks. Steps should assume the world is ready and focus on the behavior being executed.`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex8-1-hint-world-state',
          title: 'Hint 3: Use World to share state safely',
          blocks: [
            {
              type: 'p',
              text: `If you need to store generated data (for example a created username), store it on the World object so later steps can use it without global variables.`,
            },
          ],
        },

        { type: 'divider' },

        { type: 'h3', text: 'Hard Challenge (optional)' },

        {
          type: 'labelValue',
          label: 'If you finish early, try one or more:',
          list: {
            ordered: false,
            items: [
              'Add a second scenario to the same feature file.',
              'Use a Scenario Outline to parameterize input data.',
              'Add tags (for example `@smoke` or `@regression`) and run selectively.',
              'Refactor step definitions to reduce duplication.',
              'Generalize wording to improve reusability without losing clarity.',
            ],
          },
          testId: 'ex8-1-hard-challenge',
        },
      ],
    },

    {
      id: 'ex8_1-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'divider' },

        { type: 'h3', text: 'Cucumber + Playwright solution (recommended)' },

        {
          type: 'callout',
          variant: 'info',
          text: `This solution shows a clean BDD setup using Gherkin for behavior, step definitions for execution, and a Flow + Page Object for reusability. The feature stays readable, while selectors and mechanics live in the Page Object and Flow.`,
        },

        { type: 'h3', text: 'Feature file' },

        {
          type: 'code',
          language: 'gherkin',
          filename: 'exercise8.feature',
          code: `Feature: Exercise 8 - Validate Playwright Course
    As a great Playwright practioneer
    I want to navigate to the Playwright Course
    So I can validate that it has the correct price and title

  Background:
    Given the user is on the Testhuset homepage
    And the user has accepted the dialog button if it appears

  Scenario: Validate Playwright course information
    When the user presses the Kursus button
    And the user clicks the course Automatisering med Playwright
    Then the title should be Automatisering med Playwright
    And the price should be 10.499 kr.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Step definitions' },

        {
          type: 'code',
          language: 'ts',
          filename: 'exercise8.steps.ts',
          code: `// steps/testhuset.steps.ts
import { Given, When, Then } from "@cucumber/cucumber";
import type { CustomWorld } from "../../support/world";
import { TestHusetFlow } from "../flows/testhuset.flow";

Given("the user is on the Testhuset homepage", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.gotoHome();
});

Given("the user has accepted the dialog button if it appears", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.acceptCookiesIfPresent();
});

When("the user presses the Kursus button", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.openCourseMenu();
});

When("the user clicks the course Automatisering med Playwright", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.openPlaywrightCourse();
});

Then("the title should be Automatisering med Playwright", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.expectCourseTitle("Automatisering med Playwright");
});

Then("the price should be 10.499 kr.", async function (this: CustomWorld) {
  const flow = new TestHusetFlow(this.page);
  await flow.expectPrice("10.499 kr.");
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Flow (reusable behavior)' },

        {
          type: 'code',
          language: 'ts',
          filename: 'testhuset.flow.ts',
          code: `// flows/testhuset.flow.ts
import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import TestHusetPage from "../pages/testhuset.page";
import { logger } from "../../../../utils/logger";

const BASE_URL = "https://testhuset.dk";

export class TestHusetFlow {
  private testhusetPage: TestHusetPage;

  constructor(private page: Page) {
    this.testhusetPage = new TestHusetPage(page);
  }

  // ------ ACTIONS ------
  async gotoHome() {
    await this.page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
  }

  async acceptCookiesIfPresent() {
    const header = this.testhusetPage.cookieBotDialogHeader();
    if (await header.isVisible().catch(() => false)) {
      logger.info("Handling cookie dialog…");
      await this.testhusetPage.cookieDialogAcceptBtn().click();
    }
  }

  async openCourseMenu() {
    await this.testhusetPage.courseMenuBtn().click();
  }

  async openPlaywrightCourse() {
    await this.testhusetPage.playwrightCourseItem().click();
  }

  // ------ EXPECTS ------
  async expectCourseTitle(expected: string) {
    await expect(this.testhusetPage.courseTitle()).toHaveText(expected);
  }

  async expectPrice(expected: string) {
    await expect(this.testhusetPage.price()).toHaveText(expected);
  }
}`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Page Object (selectors only)' },

        {
          type: 'code',
          language: 'ts',
          filename: 'testhuset.page.ts',
          code: `import type { Page } from "@playwright/test";

export default class TestHusetPage {
  constructor(private page: Page) {}

  cookieBotDialogHeader = () => this.page.locator("#CybotCookiebotDialogHeader");
  cookieDialogAcceptBtn = () => this.page.getByRole("button", { name: "Tillad valgte" });
  playwrightCourseItem = () => this.page.locator('a:has-text("Automatisering med Playwright")');
  courseTitle = () => this.page.locator("h1.hero-title");
  pricingContainer = () => this.page.locator("div.pricing-part");
  price = () => this.pricingContainer().locator("span[data-variation-price]");
  courseMenuBtn = () => this.page.getByRole("link", { name: "Kursus", exact: true });
}`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },

        {
          type: 'p',
          text:
            '• Business-readable scenario: the feature describes intent and outcomes\n' +
            '• Background used correctly: shared preconditions live outside the scenario\n' +
            '• Stable separation of concerns: selectors in Page Object, behavior in Flow\n' +
            '• Step definitions stay thin: they map steps to existing Flow methods\n' +
            '• Cookie dialog handled safely: conditional logic avoids unnecessary failures\n' +
            '• Assertions are outcome-based: title and price are verified via expects',
        },
      ],
    },
  ],
};
