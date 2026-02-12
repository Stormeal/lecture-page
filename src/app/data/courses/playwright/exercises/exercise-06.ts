import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_06: CourseGroupItem = {
  id: 'ex6',
  title: 'Exercise 6: API Testing',
  summary: '',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `With this exercise we are now learning about how to integrate API testing with our Playwright project. `,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex6-theory',
      title: 'Theory',
      summary: 'Fundamental API Testing with Playwright',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Theory: API testing with APIRequestContext' },

        {
          type: 'p',
          text: `Playwright allows you to test APIs directly using APIRequestContext. This means you can validate backend behavior without interacting with the UI. API testing is useful for validating server logic, preparing test data, and verifying system state independently of the browser.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `API tests should focus on contracts and behavior: validate status codes, required fields, and important headers instead of asserting entire payloads.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'What is APIRequestContext?' },

        {
          type: 'p',
          text: `APIRequestContext is Playwright’s built-in HTTP client. It supports standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE. It integrates with the Playwright Test runner and can share cookies with the browser context when needed.`,
        },

        {
          type: 'labelValue',
          label: 'Common usage patterns:',
          list: {
            ordered: false,
            items: [
              'Run API-only tests without launching a browser UI.',
              'Prepare test data before executing UI tests.',
              'Verify backend state after performing UI interactions.',
              'Chain multiple requests together in a single test flow.',
            ],
          },
          testId: 'ex6-theory-usage-patterns',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Sending requests' },

        {
          type: 'p',
          text: `Using APIRequestContext, you can send HTTP requests by specifying a URL and optionally providing headers and payload data. For REST APIs, JSON payloads are the most common format.`,
        },

        {
          type: 'labelValue',
          label: 'Typical request components:',
          list: {
            ordered: false,
            items: [
              'HTTP method (GET, POST, PUT, PATCH, DELETE)',
              'URL or baseURL + endpoint path',
              'Headers (for example Content-Type or Authorization)',
              'Body payload (JSON or form data)',
            ],
          },
          testId: 'ex6-theory-request-components',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Reading the response' },

        {
          type: 'p',
          text: `After sending a request, Playwright returns an APIResponse object. You can extract the response body in different formats depending on the API behavior.`,
        },

        {
          type: 'labelValue',
          label: 'Response helpers:',
          list: {
            ordered: false,
            items: [
              'json() for REST APIs returning JSON objects.',
              'text() for HTML pages, logs, or plain text responses.',
              'body() for binary responses such as images or files.',
            ],
          },
          testId: 'ex6-theory-response-helpers',
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `Large response bodies remain in memory until disposed or until the request context closes. Be mindful of memory usage when working with large or repeated responses.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Validating API responses' },

        {
          type: 'p',
          text: `Good API tests validate the most important aspects of a response instead of asserting the entire payload. Focus on stable and meaningful fields.`,
        },

        {
          type: 'labelValue',
          label: 'A reliable validation strategy:',
          list: {
            ordered: false,
            items: [
              'Assert the HTTP status code first.',
              'Parse the response body only after confirming success.',
              'Validate required JSON fields and critical values.',
              'Optionally verify important headers such as Content-Type.',
              'Add negative tests for invalid input or missing authentication.',
            ],
          },
          testId: 'ex6-theory-validation-strategy',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Authentication and request chaining' },

        {
          type: 'p',
          text: `Many APIs require authentication. A common pattern is logging in to receive a token, then including that token in subsequent requests as a header. This pattern allows you to test protected endpoints in a realistic way.`,
        },

        {
          type: 'labelValue',
          label: 'Chaining mindset:',
          list: {
            ordered: false,
            items: [
              'Send a login request to obtain a token.',
              'Extract the token from the response body.',
              'Attach the token as a header in protected requests.',
              'Use returned IDs from one request in the next request.',
            ],
          },
          testId: 'ex6-theory-chaining-mindset',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Reliability tips' },

        {
          type: 'labelValue',
          label: 'Best practices:',
          list: {
            ordered: false,
            items: [
              'Avoid asserting dynamic values such as timestamps unless required.',
              'Generate unique test data to prevent collisions with other users.',
              'Keep tests self-contained and independent.',
              'Treat hosted practice APIs as real-world systems that may have latency.',
            ],
          },
          testId: 'ex6-theory-reliability-tips',
        },
      ],
    },

    {
      id: 'ex6_1-exercise',
      title: 'Exercise 6.1: Red Team Recon',
      summary: `Health endpoint probe (APIRequestContext)`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Red Team Simulation – Infrastructure Recon' },

        { type: 'labelValue', label: 'System', text: `Public API Surface` },
        { type: 'labelValue', label: 'Division', text: `Internal Red Team` },
        { type: 'labelValue', label: 'Operation Status', text: `Recon Phase Initiated` },
        { type: 'labelValue', label: 'Mission Duration', text: `20–30 minutes` },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },

        { type: 'p', text: `Engineer,` },
        {
          type: 'p',
          text: `You have been assigned a controlled reconnaissance task against the company’s public API surface. Before we validate authentication and protected resources, you must confirm the system is operational and responding according to contract.`,
        },
        { type: 'p', text: `Your objective is not exploitation. Your objective is validation.` },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Objectives' },

        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Create a pure API test using Playwright (no browser UI involved)',
              'Send a request to the health-check endpoint',
              'Assert that the API responds successfully',
              'Validate the response body contract (stable fields only)',
              'Validate the Content-Type header',
            ],
          },
          testId: 'ex6-1-mission-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Operational Instructions' },

        {
          type: 'labelValue',
          label: 'Follow these steps:',
          list: {
            ordered: true,
            items: [
              'Create a new test file for Exercise 6.1.',
              'Write a pure API test using the Playwright Test runner request fixture (do not use page).',
              'Send a GET request to: https://practice.expandtesting.com/api/health-check',
              'Assert that the HTTP status indicates success.',
              'Parse the response as JSON.',
              'Assert that the response contains stable fields that prove system health (for example: success, status, message).',
              'Assert that the Content-Type header indicates JSON.',
              'Structure the test clearly so failures are easy to understand in the report.',
            ],
          },
          testId: 'ex6-1-operational-instructions',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Completion Criteria (Definition of Done)' },

        {
          type: 'labelValue',
          label: 'The mission is considered successful when:',
          list: {
            ordered: false,
            items: [
              'The test runs without launching a browser UI',
              'A GET request is sent to the correct health endpoint',
              'The HTTP status is explicitly asserted',
              'The response body is parsed and validated',
              'Stable response fields are verified (no full-payload assertion)',
              'The Content-Type header is asserted',
              'The test output is readable and well-structured in the Playwright report',
            ],
          },
          testId: 'ex6-1-definition-of-done',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Test Cases' },

        {
          type: 'labelValue',
          label: 'TC-601',
          text: 'Health endpoint is reachable and responds successfully (2xx).',
          testId: 'ex6-1-tc-601',
        },
        {
          type: 'labelValue',
          label: 'TC-602',
          text: 'Health endpoint response body is valid JSON and contains stable contract fields that indicate system health.',
          testId: 'ex6-1-tc-602',
        },
        {
          type: 'labelValue',
          label: 'TC-603',
          text: 'Health endpoint response includes a Content-Type header indicating a JSON payload (application/json).',
          testId: 'ex6-1-tc-603',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Hints' },

        {
          type: 'hint',
          id: 'ex6-1-hint-spec-structure',
          title: 'Hint 0: Structuring a pure API spec',
          blocks: [
            {
              type: 'p',
              text: `A pure API test uses the Playwright Test runner request fixture and does not use page at all. Keep the spec focused: one test, one endpoint, clear assertions (status, body contract, headers).`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'api spec structure example',
              code: `import { test, expect } from '@playwright/test';

test('Health check responds successfully', async ({ request }) => {
  const response = await request.get('https://example.com/api/health');
  expect(response.ok()).toBeTruthy();
});`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-1-hint-basic-request',
          title: 'Hint 1: Basic API request shape',
          blocks: [
            {
              type: 'p',
              text: `A pure API test can use the built-in request fixture from Playwright Test. Focus on sending one request and asserting the status.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'basic request example',
              code: `const response = await request.get('https://example.com/api/health');
expect(response.status()).toBe(200);`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-1-hint-parse-json',
          title: 'Hint 2: Parse JSON and assert stable fields',
          blocks: [
            {
              type: 'p',
              text: `Validate only stable fields. Avoid asserting the entire payload or formatting.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'parse + shape example',
              code: `const body = await response.json();
expect(body).toHaveProperty('status');`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-1-hint-headers',
          title: 'Hint 3: Validate Content-Type',
          blocks: [
            {
              type: 'p',
              text: `Content-Type is a stable way to confirm the server claims it returned JSON.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'header example',
              code: `const headers = response.headers();
expect(headers['content-type']).toContain('application/json');`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-1-hint-assert-order',
          title: 'Hint 4: Keep assertions ordered',
          blocks: [
            {
              type: 'p',
              text: `Fail fast on status, then parse, then assert fields. This makes failures easier to interpret.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'assertion order example',
              code: `expect(response.ok()).toBeTruthy();
const body = await response.json();
expect(body).toHaveProperty('status');`,
            },
          ],
        },
      ],
    },

    {
      id: 'ex6_1-solution',
      title: 'Solution 6.1: Red Team Recon',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        { type: 'divider' },

        { type: 'h3', text: 'Playwright Test solution (recommended)' },

        {
          type: 'callout',
          variant: 'info',
          text: `This solution demonstrates the expected structure for a pure API test using the request fixture. It validates status, a stable response contract, and the Content-Type header.`,
        },

        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_6_1.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Exercise 6.1 - Red Team Recon (Health Check)', async ({ request }) => {
  const response = await request.get('https://practice.expandtesting.com/api/health-check');

  await test.step('Assert status is successful', async () => {
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBeGreaterThanOrEqual(200);
    expect(response.status()).toBeLessThan(300);
  });

  await test.step('Assert Content-Type indicates JSON', async () => {
    const headers = response.headers();
    expect(headers['content-type']).toContain('application/json');
  });

  await test.step('Parse JSON and validate stable contract fields', async () => {
    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        status: expect.any(String),
        message: expect.any(String),
      }),
    );
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },

        {
          type: 'p',
          text:
            '• Pure API test: uses the request fixture and does not rely on page/UI\n' +
            '• Fails fast: asserts status before parsing JSON\n' +
            '• Validates a stable contract: checks for key fields without asserting the full payload\n' +
            '• Includes header validation: verifies Content-Type for correct response format\n' +
            '• Uses test.step(): keeps the report readable and failures easy to locate',
        },
      ],
    },
  ],
};
