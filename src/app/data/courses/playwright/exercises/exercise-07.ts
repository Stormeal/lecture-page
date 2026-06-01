import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_07: CourseGroupItem = {
  id: 'ex7',
  title: 'Exercise 7: Selecting Candidates',
  summary: '',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `With this exercise we are now learning about how to select test cases that are the best possible automation candidates. You will view various manual test cases and select the best possible candidates for automation. `,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex7-theory',
      title: 'Theory',
      summary: 'Choosing the best candidate for automation',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Theory: Selecting manual test cases for automation' },

        {
          type: 'p',
          text: `Not every manual test case is a good automation target. Strong candidates are stable and deterministic, and they give fast feedback when something breaks. Your goal is to pick tests worth maintaining over time, not just tests that happen to be automatable.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Automation is an investment. The best candidates give frequent value with low maintenance cost.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'What makes a test a good automation candidate?' },

        {
          type: 'p',
          text: `A good automation candidate has clear expectations, stable steps, and reliable assertions. It should fail for meaningful reasons and be easy to diagnose when it fails.`,
        },

        {
          type: 'labelValue',
          label: 'Core selection criteria:',
          list: {
            ordered: false,
            items: [
              'Business value: protects a critical user journey or revenue path.',
              'Repeat frequency: performed often (for example each release or daily).',
              'Determinism: produces the same result every run with the same input.',
              'Stable UI contracts: selectors and page structure do not change frequently.',
              'Clear assertions: you can verify outcomes without subjective judgement.',
              'Fast feedback: runs quickly and fails close to the root cause.',
            ],
          },
          testId: 'ex7-theory-core-selection-criteria',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Warning signs: tests that are expensive to automate' },

        {
          type: 'p',
          text: `Some tests are technically automatable but create noisy failures and high maintenance. These tests often depend on content that changes, third-party systems, or visual judgement.`,
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `If you cannot explain what should be asserted in a single sentence, the test is probably not a strong automation candidate.`,
        },

        {
          type: 'labelValue',
          label: 'Common warning signs:',
          list: {
            ordered: false,
            items: [
              'Subjective validation (for example “looks correct” or “feels right”).',
              'Frequently changing content (news feeds, rotating banners, campaigns).',
              'Third-party dependencies (payments, embedded widgets, external auth).',
              'Unstable timing (animations, delayed rendering, polling, real-time updates).',
              'Hard-to-observe outcomes (no visible confirmation, no stable state change).',
              'High setup cost (complex data prerequisites or long multi-step flows).',
            ],
          },
          testId: 'ex7-theory-warning-signs',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Turning a manual test case into an automation-ready test' },

        {
          type: 'p',
          text: `Manual test cases are often written for humans. To automate them, you need to make the steps and expected results precise. This usually means removing ambiguity and replacing human judgement with measurable checks.`,
        },

        {
          type: 'labelValue',
          label: 'Automation-ready rewriting rules:',
          list: {
            ordered: false,
            items: [
              'Rewrite vague expectations into measurable outcomes (text, URL, state, count).',
              'Prefer stable identifiers (data-testid) over CSS or text when possible.',
              'Assert state, not motion (end state instead of animations or transitions).',
              'Minimize scope: test one behavior per test case.',
              'Avoid coupling to dynamic data unless the data is controlled by the test.',
            ],
          },
          testId: 'ex7-theory-rewriting-rules',
        },

        { type: 'divider' },

        { type: 'h3', text: 'A simple scoring model' },

        {
          type: 'p',
          text: `A practical way to choose between candidates is to score each test case using the same criteria. The goal is not mathematical precision. The goal is consistent decision-making.`,
        },

        {
          type: 'labelValue',
          label: 'Suggested scoring categories (1 to 5):',
          list: {
            ordered: false,
            items: [
              'Value: how important is this user journey?',
              'Stability: how often will the UI or content change?',
              'Determinism: will the result be consistent every run?',
              'Observability: can you assert the outcome reliably?',
              'Maintenance cost: how hard will this be to keep healthy?',
            ],
          },
          testId: 'ex7-theory-scoring-categories',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `A high-value test is not automatically the best candidate. If it is unstable and expensive to maintain, you may get better ROI by automating a slightly smaller but more reliable slice of the journey.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'What to automate first' },

        {
          type: 'p',
          text: `When you are building a suite, start with tests that are stable and cover critical paths. This builds trust in the test suite and reduces “noise fatigue”.`,
        },

        {
          type: 'labelValue',
          label: 'A common prioritization order:',
          list: {
            ordered: false,
            items: [
              'Smoke tests: can the user reach key pages and perform core actions?',
              'Critical happy paths: key conversions or sign-up flows.',
              'High-risk areas: recently changed features or frequent regressions.',
              'API or contract checks: stable validations that run fast.',
              'Edge cases: negative scenarios once the suite is trusted.',
            ],
          },
          testId: 'ex7-theory-prioritization-order',
        },
      ],
    },

    {
      id: 'ex7-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of choosing the best candidates for automation.',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'What is the main goal when selecting manual test cases for automation?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Automate every test case that is possible to automate.',
              wrongExplanation: 'Automation is not about automating everything that is possible.',
              wrongExplainFurther:
                'The goal is to pick tests that are worth maintaining and provide frequent value with low maintenance cost.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Pick tests that are worth maintaining over time and provide fast, reliable feedback when something breaks.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The goal is to choose stable, deterministic tests with clear assertions that provide valuable, fast feedback and are not expensive to maintain.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only automate tests that validate UI animations and transitions.',
              wrongExplanation:
                'Animations and transitions are often unstable targets and not the core value of automation.',
              wrongExplainFurther:
                'Prefer asserting end state instead of motion, and prioritize stable, meaningful checks.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Choose tests that require the most human judgement, because that proves quality.',
              wrongExplanation: 'Subjective validation is a warning sign for automation.',
              wrongExplainFurther:
                'If it relies on “looks right” or “feels right”, it is likely expensive and noisy to automate.',
            },
          ],
        },

        {
          id: 'q2',
          prompt:
            'Which set best matches the core selection criteria for a good automation candidate?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'High number of steps, heavy visual judgement, and many external dependencies.',
              wrongExplanation:
                'Those are warning signs that typically increase maintenance cost and noise.',
              wrongExplainFurther:
                'Good candidates tend to be stable, deterministic, and easy to assert.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Mostly subjective validation, frequently changing content, and long setup flows.',
              wrongExplanation: 'These are common warning signs of expensive automation.',
              wrongExplainFurther: 'They tend to produce flaky tests and high maintenance.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Randomized inputs, unstable timing, and hard-to-observe outcomes.',
              wrongExplanation:
                'These reduce determinism and observability, making tests unreliable.',
              wrongExplainFurther:
                'Strong candidates should fail for meaningful reasons and be easy to diagnose.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Business value, repeat frequency, determinism, stable UI contracts, clear assertions, and fast feedback.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Strong candidates protect valuable journeys, are run often, behave deterministically, have stable contracts/selectors, have clear assertions, and provide fast feedback.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'Which statement best reflects the “warning sign” rule of thumb from the theory?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'If you cannot explain what should be asserted in a single sentence, the test is probably not a strong automation candidate.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. If expected outcomes are ambiguous or subjective, automation becomes noisy and expensive because failures are hard to interpret and assertions are unstable.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'If a test is valuable, it is always the best candidate to automate first.',
              wrongExplanation: 'High value alone does not guarantee good ROI.',
              wrongExplainFurther:
                'If it is unstable or expensive to maintain, you may get better ROI by automating a smaller but more reliable slice first.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The best candidates are the ones with the most third-party dependencies, because they test integrations.',
              wrongExplanation:
                'Third-party dependencies are a common warning sign for flakiness and maintenance.',
              wrongExplainFurther:
                'They can be tested, but they are often expensive and noisy compared to stable contract checks.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Tests should assert motion (animations) because end state is less important.',
              wrongExplanation:
                'The recommended approach is the opposite: assert end state, not motion.',
              wrongExplainFurther:
                'Animations and transitions tend to introduce timing instability.',
            },
          ],
        },

        {
          id: 'q4',
          prompt:
            'Which of the following is a common warning sign that a test will be expensive to automate?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Clear expectations with measurable outcomes.',
              wrongExplanation: 'Clear, measurable outcomes are a positive sign for automation.',
              wrongExplainFurther: 'They make assertions stable and failures easy to diagnose.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Stable UI contracts and selectors that rarely change.',
              wrongExplanation: 'Stable UI contracts reduce maintenance cost and flakiness.',
              wrongExplainFurther: 'They are a strong indicator of a good automation candidate.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Subjective validation like “looks correct” or “feels right”.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Subjective validation is hard to assert reliably, often leads to noisy failures, and increases maintenance cost.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A test that runs quickly and fails close to the root cause.',
              wrongExplanation:
                'Fast feedback and close-to-root-cause failures are desirable traits.',
              wrongExplainFurther: 'They make the suite trustworthy and reduce debugging time.',
            },
          ],
        },

        {
          id: 'q5',
          prompt:
            'Which rewriting rule best helps turn a manual test case into an automation-ready test?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Make expectations more human-friendly, even if they are vague.',
              wrongExplanation: 'Vagueness is the enemy of stable automation.',
              wrongExplainFurther:
                'Automation needs measurable outcomes like text, URL, state, or count.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Rewrite vague expectations into measurable outcomes (text, URL, state, count).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. To automate reliably, replace subjective or vague expectations with measurable checks you can assert consistently.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Prefer asserting animations and transitions, because they are the most visible.',
              wrongExplanation: 'Animations are often unstable and timing-sensitive.',
              wrongExplainFurther: 'The guidance is to assert end state instead of motion.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Couple the test to dynamic data like campaigns and rotating banners to increase coverage.',
              wrongExplanation: 'Dynamic data increases flakiness and maintenance.',
              wrongExplainFurther: 'Avoid coupling to dynamic data unless the test controls it.',
            },
          ],
        },

        {
          id: 'q6',
          prompt: 'Which categories are included in the suggested 1-to-5 scoring model?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Speed, style, colors, animations, and screenshots.',
              wrongExplanation:
                'These are not the suggested scoring categories for automation candidacy.',
              wrongExplainFurther:
                'The scoring model focuses on value, stability, determinism, observability, and maintenance cost.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Browser type, device type, viewport size, geolocation, and locale.',
              wrongExplanation:
                'Those are test configuration concerns, not candidate scoring categories.',
              wrongExplainFurther:
                'Candidate scoring is about ROI and reliability characteristics.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Coverage, randomness, number of steps, number of assertions, and number of clicks.',
              wrongExplanation: 'Those are not the suggested categories in the theory.',
              wrongExplainFurther:
                'The goal is consistent decision-making using stability and ROI oriented criteria.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Value, Stability, Determinism, Observability, and Maintenance cost.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The suggested categories are Value, Stability, Determinism, Observability, and Maintenance cost (each scored 1 to 5).',
            },
          ],
        },

        {
          id: 'q7',
          prompt: 'What is a common prioritization order when building an automation suite?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Start with smoke tests and stable critical paths, then expand into higher-risk areas and edge cases once the suite is trusted.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The recommended approach is to build trust first with stable smoke tests and critical happy paths, then add high-risk areas, fast contract checks, and finally edge cases.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Start with edge cases first, then add smoke tests later.',
              wrongExplanation:
                'Edge cases can be valuable, but they are typically added after the suite is trusted.',
              wrongExplainFurther:
                'Starting with unstable or complex tests early can create noise fatigue and reduce trust in the suite.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Start with the longest multi-step flows first, because they give maximum coverage.',
              wrongExplanation:
                'Long flows often have high setup cost and can be expensive to maintain early on.',
              wrongExplainFurther:
                'Start with stable, high-signal tests that fail close to the root cause.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Start with tests that rely on third-party systems, then move to internal flows.',
              wrongExplanation:
                'Third-party dependencies are often warning signs for flakiness and maintenance.',
              wrongExplainFurther:
                'Internal stable checks and contract validations usually provide better early ROI.',
            },
          ],
        },
      ],
    },

    {
      id: 'ex7_1-exercise',
      title: 'Exercise',
      summary: `Select the Gold Medal automation candidate (testhuset.dk)`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Winter Olympics Qualification Round – Automation Trials' },

        { type: 'labelValue', label: 'Event', text: `Automation Qualification Trials` },
        { type: 'labelValue', label: 'Arena', text: `testhuset.dk` },
        { type: 'labelValue', label: 'Committee Role', text: `Automation Judge` },
        { type: 'labelValue', label: 'Evaluation Window', text: `20–30 minutes` },

        { type: 'divider' },

        { type: 'h3', text: 'Qualification Briefing' },

        { type: 'p', text: `Judge,` },
        {
          type: 'p',
          text: `Four competitors have entered the Winter Automation Trials. Each competitor represents a manual test case targeting testhuset.dk. Only one will advance to the finals and earn the Gold Medal position as the first automation candidate.`,
        },
        {
          type: 'p',
          text: `Peak performance once is not enough. Olympic qualification requires consistency, measurable results, and low risk under pressure.`,
        },
        {
          type: 'p',
          text: `Your responsibility is to evaluate the competitors objectively using a structured scoring model and select the single strongest candidate for automation.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Evaluation Objectives' },

        {
          type: 'labelValue',
          label: 'Your role is to:',
          list: {
            ordered: false,
            items: [
              'Review all four competitors (manual test cases)',
              'Score each competitor using the official evaluation rubric',
              'Select exactly one competitor to advance',
              'Provide a structured justification for your decision',
              'Identify performance risks (flakiness factors) and mitigation strategies',
            ],
          },
          testId: 'ex7-1-evaluation-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Official Scoring Rubric' },

        {
          type: 'p',
          text: `Each competitor must be scored from 1 (poor) to 5 (excellent) in every category. Use the same criteria for all competitors.`,
        },

        {
          type: 'labelValue',
          label: 'Scoring Categories:',
          list: {
            ordered: false,
            items: [
              'Value: Protects a critical user journey or business objective.',
              'Stability: Page structure and content are unlikely to change frequently.',
              'Determinism: Produces the same result across repeated runs.',
              'Observability: Expected outcome can be asserted objectively.',
              'Maintenance Cost: Low long-term effort required to keep the test reliable.',
            ],
          },
          testId: 'ex7-1-scoring-rubric',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `High visibility does not equal high suitability. A competitor with consistent performance often outperforms one with dramatic but unstable results.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Trial Instructions' },

        {
          type: 'labelValue',
          label: 'Follow this evaluation process:',
          list: {
            ordered: true,
            items: [
              'Study Competitor 1 to Competitor 4 carefully.',
              'Score each competitor in all rubric categories.',
              'Calculate a total score per competitor.',
              'Select one competitor to advance to automation finals.',
              'Write a structured justification covering:',
              'Why this competitor has the strongest automation ROI.',
              'Why the behavior is measurable and assertable.',
              'Why it will likely remain stable over time.',
              'At least two potential flakiness risks.',
              'At least two concrete mitigation strategies.',
            ],
          },
          testId: 'ex7-1-trial-instructions',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Advancement Criteria (Definition of Done)' },

        {
          type: 'labelValue',
          label: 'Qualification is complete when:',
          list: {
            ordered: false,
            items: [
              'All four competitors have been scored using the rubric.',
              'Exactly one competitor is selected to advance.',
              'The selection includes structured reasoning tied to rubric categories.',
              'At least two flakiness risks are identified.',
              'At least two mitigation strategies are proposed.',
            ],
          },
          testId: 'ex7-1-advancement-criteria',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Competitors' },

        {
          type: 'labelValue',
          label: 'Competitor 1',
          text: 'Primary navigation to a stable service page: From the homepage, navigate via the main menu to a specific service page (for example “Testautomatisering”) and verify the correct page content loads.',
          testId: 'ex7-1-competitor-1',
        },

        {
          type: 'labelValue',
          label: 'Competitor 2',
          text: 'Language switch: From the Danish site, switch to English and verify you land on the English version with English hero content. Switch back to Danish and verify the Danish version loads again.',
          testId: 'ex7-1-competitor-2',
        },

        {
          type: 'labelValue',
          label: 'Competitor 3',
          text: 'Course calendar downloads: Navigate to the course calendar page and verify seasonal sections are present and that each has a working download link (PDF download or in-browser PDF open).',
          testId: 'ex7-1-competitor-3',
        },

        {
          type: 'labelValue',
          label: 'Competitor 4',
          text: 'Latest news correctness: Verify the “Latest news” list is correct and up-to-date (titles, order, and recency match expectations today).',
          testId: 'ex7-1-competitor-4',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Judge Guidance' },

        {
          type: 'hint',
          id: 'ex7-1-hint-measurable-outcomes',
          title: 'Hint 0: Olympic judging requires measurable outcomes',
          blocks: [
            {
              type: 'p',
              text: `Strong competitors produce results you can measure objectively: URL changes, visible headings, stable sections, or deterministic state transitions. Weak competitors depend on human interpretation.`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex7-1-hint-dynamic-performance',
          title: 'Hint 1: Beware of dynamic performance conditions',
          blocks: [
            {
              type: 'p',
              text: `News feeds and frequently updated content may change without representing a regression. This increases noise and reduces trust in the suite.`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex7-1-hint-download-discipline',
          title: 'Hint 2: Downloads require controlled assertions',
          blocks: [
            {
              type: 'p',
              text: `Download tests are viable if you assert the correct behavior (download event or content-type). They become brittle if you assert exact filenames or content that changes seasonally.`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex7-1-hint-first-gold',
          title: 'Hint 3: The first Gold Medal builds trust',
          blocks: [
            {
              type: 'p',
              text: `The first automated test should be reliable and signal real regressions. A flaky first test weakens confidence in the entire suite.`,
            },
          ],
        },
      ],
    },
  ],
};
