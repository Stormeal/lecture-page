import { CourseGroupItem } from '../../../course.model';

export const EXERCISE_05: CourseGroupItem = {
  id: 'ex5',
  title: 'Exercise 5: Control Elements',
  summary: 'Check() and SelectOption()',
  type: 'group',
  overviewBlocks: [
    {
      type: 'p',
      text: `With this exercise we are talking about two more Playwright functions, check and selectoption. This will assist on for the upcoming exercise. Where we are going to interact with checkboxes, dropdowns and radio buttons.`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: `Start with Theory, then try the Exercise. If you get stuck, reveal the Solution.`,
    },
  ],
  children: [
    {
      id: 'ex5-theory',
      title: 'Theory',
      summary: 'Check() and SelectOption()',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Theory: check() and selectOption()' },

        {
          type: 'p',
          text: `In Playwright, you should prefer intent-based actions when interacting with form controls. Instead of clicking and hoping the state changes, you use APIs that describe the end state you want.`,
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Intent-based actions are more reliable than click() for form controls because Playwright will wait and retry until the element reaches the desired state.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'check() for checkboxes and radio buttons' },

        {
          type: 'p',
          text: `Use locator.check() when you need a checkbox or radio button to become checked. It is different from click() because it ensures the control ends up checked, even if the first attempt is blocked or the page is still updating.`,
        },

        {
          type: 'labelValue',
          label: 'check() is used for:',
          list: {
            ordered: false,
            items: ['Checkbox inputs (toggle on)', 'Radio inputs (select one option in a group)'],
          },
          testId: 'ex5-theory-check-used-for',
        },

        {
          type: 'labelValue',
          label: 'Common patterns:',
          list: {
            ordered: false,
            items: [
              'Use check() to select a checkbox or radio option.',
              'Use uncheck() for checkboxes if you need to ensure it is off.',
              'Assert the result with toBeChecked() or by verifying the UI state/value after the interaction.',
            ],
          },
          testId: 'ex5-theory-check-patterns',
        },

        {
          type: 'callout',
          variant: 'warning',
          text: `check() only works on checkbox and radio inputs. If you try it on other elements, Playwright will fail.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'selectOption() for dropdowns' },

        {
          type: 'p',
          text: `Use locator.selectOption() for native HTML <select> dropdowns. Like check(), it is intent-based: it selects the option you specify, and Playwright waits for the selection to apply.`,
        },

        {
          type: 'labelValue',
          label: 'You can select options by:',
          list: {
            ordered: false,
            items: [
              'Value (usually the most stable)',
              'Label (the visible text)',
              'Index (position in the list)',
            ],
          },
          testId: 'ex5-theory-selectoption-ways',
        },

        {
          type: 'callout',
          variant: 'info',
          text: `Selecting by value is usually the most stable because visible labels are more likely to change due to copy updates or translations.`,
        },

        {
          type: 'p',
          text: `After selecting, you should assert the result. A common assertion is to verify the <select> has the expected value.`,
        },

        { type: 'divider' },

        { type: 'h3', text: 'Reliability tips' },

        {
          type: 'labelValue',
          label: 'Tips:',
          list: {
            ordered: false,
            items: [
              'Prefer stable selectors like data-testid for locating the control.',
              'Interact with the actual input/select element (not just a surrounding container).',
              'Always assert the result after checking/selecting to prove the UI changed as expected.',
            ],
          },
          testId: 'ex5-theory-reliability-tips',
        },
      ],
    },

    {
      id: 'ex5-exercise',
      title: 'Exercise',
      summary: ``,
      type: 'content',
      blocks: [],
    },

    {
      id: 'ex5-solution',
      title: 'Solution',
      summary: 'Reveal if you are stuck',
      type: 'content',
      revealable: true,
      blocks: [],
    },
  ],
};
