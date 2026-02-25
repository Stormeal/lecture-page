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
      id: 'ex6-quiz',
      title: 'Quiz',
      summary:
        'Check your understanding of fundamental API testing with Playwright (APIRequestContext).',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, try again and read the explanation.',
      questions: [
        {
          id: 'q1',
          prompt: 'What is APIRequestContext in Playwright?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A browser tab abstraction used for UI interactions.',
              wrongExplanation: 'That describes a Page. APIRequestContext is for HTTP requests.',
              wrongExplainFurther:
                'APIRequestContext is Playwright’s HTTP client for API testing, separate from UI automation.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Playwright’s built-in HTTP client used to send requests like GET/POST/PUT/PATCH/DELETE.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. APIRequestContext is Playwright’s HTTP client that integrates with the Playwright Test runner and supports standard HTTP methods.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A screenshot comparison engine for visual regression testing.',
              wrongExplanation: 'That relates to screenshot assertions, not APIRequestContext.',
              wrongExplainFurther:
                'APIRequestContext is used to test backend behavior by sending HTTP requests and validating responses.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A CLI tool that generates API mocks automatically.',
              wrongExplanation:
                'Playwright does not provide a CLI that auto-generates API mocks as part of APIRequestContext.',
              wrongExplainFurther:
                'APIRequestContext focuses on making real HTTP calls and validating contract and behavior.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'Why is API testing useful alongside UI tests?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because it replaces all UI testing and makes browser tests unnecessary.',
              wrongExplanation:
                'API tests and UI tests cover different risks and complement each other.',
              wrongExplainFurther:
                'API tests validate backend contracts and logic. UI tests validate end-to-end user flows.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because it is only useful for taking screenshots faster.',
              wrongExplanation: 'Screenshots are a UI concern, not an API testing reason.',
              wrongExplainFurther:
                'API testing is about validating backend behavior and system state without UI interaction.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because it can validate backend behavior, prepare test data, and verify system state without using the UI.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. API testing helps validate server logic directly, create or reset data for tests, and confirm backend state independently of the browser.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because APIRequestContext automatically shares state across all tests by default.',
              wrongExplanation:
                'Sharing state across tests is not the goal and is not guaranteed by default.',
              wrongExplainFurther:
                'A key goal is reliable, independent tests that do not leak state between runs.',
            },
          ],
        },

        {
          id: 'q3',
          prompt:
            'Which list best describes the typical components of an API request in APIRequestContext?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'HTTP method, URL (or baseURL + endpoint), headers, and optional body payload.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A typical request includes the method, the URL (or baseURL + path), optional headers (like Content-Type/Authorization), and an optional body (often JSON).',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Selector, locator, assertions, and screenshots.',
              wrongExplanation: 'Those are UI testing concepts, not API request components.',
              wrongExplainFurther:
                'API requests are based on HTTP concepts: method, URL, headers, and body.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Browser, context, page, and route.',
              wrongExplanation:
                'Those are Playwright browser model terms, not API request components.',
              wrongExplainFurther:
                'APIRequestContext is an HTTP client. It does not require a Page to send requests.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Timeout, retries, trace viewer, and screenshots.',
              wrongExplanation: 'Those are test runner/debugging features, not the request itself.',
              wrongExplainFurther:
                'They can affect execution, but they are not part of the request components list.',
            },
          ],
        },

        {
          id: 'q4',
          prompt:
            'After sending a request, Playwright returns an APIResponse. Which helpers can you use to read the body?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'html(), png(), and csv()',
              wrongExplanation: 'Those are not APIResponse helpers.',
              wrongExplainFurther:
                'APIResponse supports json(), text(), and body() depending on the response format.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'innerText(), isVisible(), and click()',
              wrongExplanation: 'Those are Locator/Page UI APIs, not APIResponse helpers.',
              wrongExplainFurther:
                'APIResponse is not a DOM element. Use json(), text(), or body() to read response content.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'parse(), stringify(), and eval()',
              wrongExplanation: 'Those are general JS concepts and not the APIResponse helper set.',
              wrongExplainFurther:
                'Playwright provides explicit helpers: json(), text(), and body().',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'json(), text(), and body()',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Use json() for JSON APIs, text() for plain text/HTML/log output, and body() for binary responses like images or files.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which validation strategy is most reliable for API tests (as taught here)?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Assert the entire payload matches exactly, including timestamps and ordering.',
              wrongExplanation:
                'Full-payload exact matches are often brittle due to dynamic fields and harmless changes.',
              wrongExplainFurther:
                'Prefer stable validations: status code, required fields, and critical values.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Assert status code first, then validate required fields and critical values, and optionally verify important headers.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A stable approach is to check the HTTP status first, then validate required JSON fields and key values, and optionally confirm important headers like Content-Type.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only log the response and assume it is correct if it looks right.',
              wrongExplanation: 'Logs help debugging but do not prove correctness.',
              wrongExplainFurther:
                'API tests should use assertions to validate contracts and behavior.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Skip parsing the body and only assert that the response exists.',
              wrongExplanation:
                'That does not validate behavior. You typically need at least status and key fields.',
              wrongExplainFurther:
                'Parse and validate the response after confirming success (status code).',
            },
          ],
        },

        {
          id: 'q6',
          prompt:
            'What is a common authentication and request chaining pattern for protected endpoints?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Send a login request to get a token, extract it, then include it in headers for subsequent requests.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A common pattern is: login → extract token → attach token in Authorization (or similar) header for protected requests, and reuse returned IDs across requests.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Hover the login button, then click it until you are authenticated.',
              wrongExplanation: 'That describes a UI flow, not API authentication.',
              wrongExplainFurther:
                'For API auth, you typically authenticate via a request and then pass a token/cookie to later requests.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Always use selectOption() to choose the token from a dropdown.',
              wrongExplanation: 'selectOption() is for native <select> elements, not API auth.',
              wrongExplainFurther:
                'API auth tokens are typically returned in response bodies or headers.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Hardcode a token in the test and reuse it forever.',
              wrongExplanation: 'Hardcoded tokens often expire and can be unsafe to store.',
              wrongExplainFurther:
                'Prefer obtaining tokens dynamically via a login request, and never log secrets.',
            },
          ],
        },

        {
          id: 'q7',
          prompt:
            'Which best practice improves reliability for hosted practice APIs that may have latency?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Assert dynamic values like timestamps on every response, even if they are not required.',
              wrongExplanation:
                'Dynamic values tend to make tests brittle unless they are part of the contract you must verify.',
              wrongExplainFurther:
                'Prefer stable and meaningful validations, and avoid asserting timestamps unless required.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Share one global mutable test dataset across all tests to make them faster.',
              wrongExplanation:
                'Shared mutable state creates collisions and order-dependent failures.',
              wrongExplainFurther:
                'Prefer unique test data and independent tests to avoid interference between runs/users.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Generate unique test data and keep tests self-contained and independent.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Unique data reduces collisions, and independent tests are more reliable in shared or hosted environments that may have latency and other users.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Avoid assertions to reduce flakiness.',
              wrongExplanation:
                'Removing assertions does not improve reliability. It removes verification.',
              wrongExplainFurther:
                'Use stable assertions on the contract and critical fields instead.',
            },
          ],
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
      id: 'ex6_2-exercise',
      title: 'Exercise 6.2: Authentication Verification',
      summary: `Register, login, and extract token (APIRequestContext)`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Red Team Simulation – Credential Verification' },

        { type: 'labelValue', label: 'System', text: `Public API Surface` },
        { type: 'labelValue', label: 'Division', text: `Internal Red Team` },
        { type: 'labelValue', label: 'Operation Status', text: `Auth Flow Validation` },
        { type: 'labelValue', label: 'Mission Duration', text: `30–45 minutes` },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },

        { type: 'p', text: `Engineer,` },
        {
          type: 'p',
          text: `Recon confirmed the API is alive. Your next task is to validate the authentication boundary: a legitimate user should be able to register and obtain access, and the API should return an authentication token we can use for controlled probing of protected endpoints.`,
        },
        {
          type: 'p',
          text: `This is not a UI login. This is a direct API authentication verification using Playwright.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Objectives' },

        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Create a pure API test using Playwright (no browser UI involved)',
              'Register a new user via the Notes API',
              'Login with the registered credentials',
              'Validate the login response contract (stable fields only)',
              'Extract the auth token from the response and verify it is present',
            ],
          },
          testId: 'ex6-2-mission-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Operational Instructions' },

        {
          type: 'labelValue',
          label: 'Follow these steps:',
          list: {
            ordered: true,
            items: [
              'Create a new test file for Exercise 6.2.',
              'Write a pure API test using the Playwright Test runner request fixture (do not use page).',
              'Generate unique test data for each run (at minimum: unique email).',
              'Send a registration request to: https://practice.expandtesting.com/notes/api/users/register',
              'Assert that registration succeeded (status + stable response fields).',
              'Send a login request to: https://practice.expandtesting.com/notes/api/users/login using the same email and password.',
              'Assert that login succeeded (status + stable response fields).',
              'Parse the login response body and extract the token from the response payload.',
              'Assert that the token exists and is non-empty.',
              'Store the token in test scope for the next exercise (do not write it to a file, and do not hardcode it).',
            ],
          },
          testId: 'ex6-2-operational-instructions',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Keep your assertions stable. Validate the presence of key fields (success/message/token), not the full response payload.`,
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
              'A user is registered with unique credentials',
              'Login succeeds for the registered user',
              'The login response is validated using stable contract assertions',
              'An auth token is extracted from the response',
              'The token is asserted to be present and non-empty',
              'The test is structured and readable in the Playwright report',
            ],
          },
          testId: 'ex6-2-definition-of-done',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Test Cases' },

        {
          type: 'labelValue',
          label: 'TC-621',
          text: 'Registering a new user succeeds and returns a stable confirmation contract.',
          testId: 'ex6-2-tc-621',
        },
        {
          type: 'labelValue',
          label: 'TC-622',
          text: 'Logging in with the registered credentials succeeds and returns a stable login contract.',
          testId: 'ex6-2-tc-622',
        },
        {
          type: 'labelValue',
          label: 'TC-623',
          text: 'A non-empty authentication token is returned on successful login and can be extracted for later use.',
          testId: 'ex6-2-tc-623',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Hints' },

        {
          type: 'hint',
          id: 'ex6-2-hint-spec-structure',
          title: 'Hint 0: Structuring an auth flow API spec',
          blocks: [
            {
              type: 'p',
              text: `Keep the flow in one test: register first, then login, then extract token. Use test.step() to make each phase readable in reports.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'auth flow structure example',
              code: `test('Register + login returns token', async ({ request }) => {
  // step 1: register
  // step 2: login
  // step 3: extract token
});`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-2-hint-unique-data',
          title: 'Hint 1: Avoid collisions with unique credentials',
          blocks: [
            {
              type: 'p',
              text: `Hosted practice APIs are shared by many users. Use a unique email each run so registration does not fail due to an existing user.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'unique email example',
              code: `const email = \`user+\${Date.now()}@example.com\`;`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-2-hint-post-shape',
          title: 'Hint 2: Sending POST data and headers',
          blocks: [
            {
              type: 'p',
              text: `Most auth endpoints require a POST body and appropriate headers. If the API expects form-encoded input, send it as form data. If it expects JSON, send JSON. Use the API docs to confirm which one applies.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'post examples (choose one)',
              code: `// If the API expects JSON:
await request.post('https://example.com/api/login', {
  data: { email, password },
});

// If the API expects form data:
await request.post('https://example.com/api/login', {
  form: { email, password },
});`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-2-hint-token-extraction',
          title: 'Hint 3: Extracting and validating the token',
          blocks: [
            {
              type: 'p',
              text: `Parse JSON after asserting the response is successful. Extract the token from the response payload and assert it is non-empty.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'token extraction example',
              code: `expect(response.ok()).toBeTruthy();
const body = await response.json();
const token = body?.data?.token;
expect(token).toBeTruthy();`,
            },
          ],
        },
      ],
    },

    {
      id: 'ex6_3-exercise',
      title: 'Exercise 6.3: Authorized Access Validation',
      summary: `Call a protected endpoint with token (APIRequestContext)`,
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Red Team Simulation – Authorized Access Validation' },

        { type: 'labelValue', label: 'System', text: `Public API Surface` },
        { type: 'labelValue', label: 'Division', text: `Internal Red Team` },
        { type: 'labelValue', label: 'Operation Status', text: `Access Boundary Validation` },
        { type: 'labelValue', label: 'Mission Duration', text: `30–45 minutes` },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Briefing' },

        { type: 'p', text: `Engineer,` },
        {
          type: 'p',
          text: `You have confirmed that valid credentials can obtain an authentication token. Your next task is to verify that the token grants access to protected resources and that the API returns data according to contract when properly authorized.`,
        },
        {
          type: 'p',
          text: `This is a controlled validation of authorization behavior. You will call a protected endpoint with a token and verify the response.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Mission Objectives' },

        {
          type: 'labelValue',
          label: 'Your mission is to:',
          list: {
            ordered: false,
            items: [
              'Create a pure API test using Playwright (no browser UI involved)',
              'Authenticate (reuse your Exercise 6.2 logic) to obtain a token',
              'Call a protected endpoint using the token',
              'Assert that the response is successful (authorized)',
              'Validate a stable response contract (avoid full payload assertions)',
            ],
          },
          testId: 'ex6-3-mission-objectives',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Operational Instructions' },

        {
          type: 'labelValue',
          label: 'Follow these steps:',
          list: {
            ordered: true,
            items: [
              'Create a new test file for Exercise 6.3.',
              'Write a pure API test using the Playwright Test runner request fixture (do not use page).',
              'Register and login to obtain a fresh token (reuse your Exercise 6.2 approach).',
              'Call a protected endpoint using the token header: https://practice.expandtesting.com/notes/api/users/profile',
              'Assert that the HTTP status indicates success.',
              'Parse the response as JSON.',
              'Validate stable fields that prove the request was authorized (for example: success/message and a data object).',
              'Validate that the returned profile relates to the authenticated user (for example: email matches the one you registered).',
              'Keep assertions stable and minimal. Avoid asserting timestamps or full response bodies.',
            ],
          },
          testId: 'ex6-3-operational-instructions',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `This exercise is about authorization behavior. Your key signal is that the same endpoint should be successful with a valid token and rejected without it (that rejection is Exercise 6.4).`,
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
              'A token is obtained through a valid authentication flow',
              'A protected endpoint is called with the token',
              'The response indicates authorized access (successful status)',
              'The response body is parsed and validated using stable contract checks',
              'The returned profile is verified to match the authenticated user (for example email)',
              'The test is structured and readable in the Playwright report',
            ],
          },
          testId: 'ex6-3-definition-of-done',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Test Cases' },

        {
          type: 'labelValue',
          label: 'TC-631',
          text: 'Authenticated token is obtained and stored in test scope for authorized requests.',
          testId: 'ex6-3-tc-631',
        },
        {
          type: 'labelValue',
          label: 'TC-632',
          text: 'Calling the protected profile endpoint with a valid token succeeds and returns a stable success contract.',
          testId: 'ex6-3-tc-632',
        },
        {
          type: 'labelValue',
          label: 'TC-633',
          text: 'Returned profile data matches the authenticated user (for example email), proving authorization is applied to the correct identity.',
          testId: 'ex6-3-tc-633',
        },

        { type: 'divider' },

        { type: 'h3', text: 'Hints' },

        {
          type: 'hint',
          id: 'ex6-3-hint-flow-structure',
          title: 'Hint 0: Keep the flow readable',
          blocks: [
            {
              type: 'p',
              text: `Structure the test as: register → login → call protected endpoint. Use test.step() so the report tells you exactly which phase failed.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'flow structure example',
              code: `test('Authorized profile access', async ({ request }) => {
  // step 1: register
  // step 2: login (extract token)
  // step 3: call profile with token
});`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-3-hint-auth-header',
          title: 'Hint 1: Send the token as a header',
          blocks: [
            {
              type: 'p',
              text: `Protected endpoints usually require a token header. Use the token you extracted from login and include it in the request headers.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'auth header example',
              code: `await request.get('https://example.com/api/protected', {
  headers: { 'x-auth-token': token },
});`,
            },
          ],
        },

        {
          type: 'hint',
          id: 'ex6-3-hint-stable-assertions',
          title: 'Hint 2: Validate stable fields only',
          blocks: [
            {
              type: 'p',
              text: `Validate that the request was authorized by asserting success signals and a data object. Then assert one identity field like email to prove you got the right profile.`,
            },
            {
              type: 'code',
              language: 'ts',
              filename: 'stable assertions example',
              code: `expect(response.ok()).toBeTruthy();
const body = await response.json();
expect(body).toHaveProperty('success');
expect(body).toHaveProperty('data');
expect(body.data.email).toBe(email);`,
            },
          ],
        },
      ],
    },

    {
      id: 'ex6_1-solution',
      title: 'Solution 6.1',
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

    {
      id: 'ex6_2-solution',
      title: 'Solution 6.2',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          text: `This solution uses a pure API test with the request fixture. It registers a unique user, logs in with the same credentials, validates a stable response contract, and extracts the token for later exercises.`,
        },

        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_6_2.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Exercise 6.2 - Authentication Verification (Register + Login)', async ({ request }) => {
  const email = \`redteam+\${Date.now()}@example.com\`;
  const password = '123456';
  const name = 'Red Team Analyst';

  await test.step('Register a new user', async () => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/register', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      form: {
        name,
        email,
        password,
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    // Stable contract checks (avoid full payload matching)
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
      }),
    );
  });

  let token = '';

  await test.step('Login and extract token', async () => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/login', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      form: {
        email,
        password,
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    // Stable contract checks
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
        data: expect.any(Object),
      }),
    );

    token = body?.data?.token ?? '';
    expect(token).toBeTruthy();
  });

  await test.step('Token is available for later exercises', async () => {
    expect(token.length).toBeGreaterThan(0);
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a good baseline' },

        {
          type: 'p',
          text:
            '• Pure API test: uses the request fixture and does not rely on page/UI\n' +
            '• Collision-safe: generates a unique email to avoid shared-environment conflicts\n' +
            '• Clear flow: register → login → extract token (ready for Exercise 6.3)\n' +
            '• Stable assertions: validates presence and types of key fields instead of the full payload\n' +
            '• Uses test.step(): keeps the report readable and failures easy to locate',
        },
      ],
    },

    {
      id: 'ex6_3-solution',
      title: 'Solution 6.3',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          text: `This solution obtains a token, calls a protected endpoint, and then removes the created user to keep the shared environment clean.`,
        },

        {
          type: 'code',
          language: 'ts',
          filename: 'exercise_6_3.spec.ts',
          code: `import { test, expect } from '@playwright/test';

test('Exercise 6.3 - Authorized Access Validation (Profile + Cleanup)', async ({ request }) => {
  const email = \`redteam+\${Date.now()}@example.com\`;
  const password = '123456';
  const name = 'Red Team Analyst';

  let token = '';

  await test.step('Register a new user', async () => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/register', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      form: { name, email, password },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
      }),
    );
  });

  await test.step('Login and extract token', async () => {
    const response = await request.post('https://practice.expandtesting.com/notes/api/users/login', {
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
      },
      form: { email, password },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
        data: expect.any(Object),
      }),
    );

    token = body?.data?.token ?? '';
    expect(token).toBeTruthy();
  });

  await test.step('Call protected profile endpoint with token', async () => {
    const response = await request.get('https://practice.expandtesting.com/notes/api/users/profile', {
      headers: {
        accept: 'application/json',
        'x-auth-token': token,
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
        data: expect.any(Object),
      }),
    );

    expect(body?.data?.email).toBe(email);
  });

  await test.step('Cleanup: delete created user', async () => {
    const response = await request.delete('https://practice.expandtesting.com/notes/api/users/delete-account', {
      headers: {
        accept: 'application/json',
        'x-auth-token': token,
      },
    });

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        message: expect.any(String),
      }),
    );
  });
});`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Why this is a stronger baseline' },

        {
          type: 'p',
          text:
            '• Pure API test with no UI involvement\n' +
            '• Clear authentication flow (register → login → authorized call)\n' +
            '• Stable contract validation (no brittle full-payload assertions)\n' +
            '• Verifies identity consistency (email matches authenticated user)\n' +
            '• Includes cleanup step to prevent shared-environment pollution',
        },
      ],
    },
  ],
};
