import { CourseGroupItem } from '../../course.model';

export const CONDITION_SECTION_01: CourseGroupItem = {
  id: 'comparisons-and-if',
  title: 'Section 1: Comparisons and if Statements',
  summary: 'Ask questions in code',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Comparisons' },
    {
      type: 'p',
      text: 'A comparison checks two values and returns True or False. Conditions use those Boolean results to decide whether a block of code should run.',
    },
    {
      type: 'image',
      src: 'assets/chapter6-conditions.png',
      alt: 'Hand-drawn zoo decision-flow illustration',
      caption: 'Course artwork from the Conditions section.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'temperature.py',
      code: `temperature = 25\nprint(temperature > 20)\nprint(temperature == 30)`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: '= assigns a value to a variable. == compares two values. Check this distinction first if a condition behaves unexpectedly.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Conditional Code with if' },
    {
      type: 'p',
      text: 'An if statement runs its indented block only when its condition is True. The colon after the condition and the indentation of the block are both required.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'big_number.py',
      code: `number = int(input('Enter a number: '))\n\nif number > 100:\n    print('That is a big number')\n\nprint('Program finished')`,
    },
  ],
  children: [
    {
      id: 'comparisons-and-if-exercise',
      title: 'Exercise',
      summary: 'Write your first conditions',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Comparisons and Code Blocks' },
        {
          type: 'labelValue',
          label: 'Complete these tasks:',
          list: {
            ordered: true,
            items: [
              'Create temperature = 25 and print whether it is above 20 and exactly 30.',
              'Ask the user for a number and print “That is a big number” only when it is greater than 100.',
              'Create an if block with three print lines, followed by one line outside the block that always runs.',
            ],
          },
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_02: CourseGroupItem = {
  id: 'else-elif-logical-operators',
  title: 'Section 2: else, elif, and Logical Operators',
  summary: 'Choose between several paths',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'else and elif' },
    {
      type: 'p',
      text: 'else provides a second path when an if condition is False. Exactly one of the if or else blocks runs. elif lets a program test several conditions in order and run the first matching block.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'temperature.py',
      code: `temperature = int(input('Temperature: '))\n\nif temperature < 0:\n    print('Freezing')\nelif temperature <= 20:\n    print('Cool')\nelse:\n    print('Warm')`,
    },
    { type: 'divider' },
    { type: 'h3', text: 'Logical Operators' },
    {
      type: 'labelValue',
      label: 'Combine or change Boolean results:',
      list: {
        ordered: false,
        items: [
          'and is True only when both conditions are True.',
          'or is True when at least one condition is True.',
          'not reverses a Boolean result.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'teenager.py',
      code: `age = int(input('Age: '))\n\nif age >= 13 and age < 20:\n    print('Teenager')`,
    },
  ],
  children: [
    {
      id: 'else-elif-logical-operators-exercise',
      title: 'Exercise',
      summary: 'Practise multiple decision paths',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Decisions' },
        {
          type: 'labelValue',
          label: 'Build each short program:',
          list: {
            ordered: true,
            items: [
              'Ask for a password. Print “Welcome” for secret123, otherwise print “Access denied”.',
              'Ask for a temperature. Print Freezing below 0, Cool up to 20, and Warm above 20.',
              'Ask for an age. Print “Teenager” only when the age is at least 13 and below 20.',
            ],
          },
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_03: CourseGroupItem = {
  id: 'nested-conditions-capstone',
  title: 'Section 3: Nested Conditions and the Zoo Entry System',
  summary: 'Make decisions that depend on earlier answers',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Nested Conditions' },
    {
      type: 'p',
      text: 'A nested condition places one if statement inside another. Use it when the second question only makes sense after the first condition passes. When you only need to combine requirements, and is often clearer.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'umbrella.py',
      code: `has_umbrella = input('Do you have an umbrella? ') == 'yes'\n\nif has_umbrella:\n    raining = input('Is it raining? ') == 'yes'\n    if raining:\n        print('You stay dry')`,
    },
    { type: 'divider' },
    { type: 'h3', text: 'Capstone: Zoo Entry System' },
    {
      type: 'p',
      text: 'Combine comparisons, if statements, elif, logical operators, and nesting to calculate a ticket price and guide a zoo visitor.',
    },
  ],
  children: [
    {
      id: 'zoo-entry-system-exercise',
      title: 'Exercise: Zoo Entry System',
      summary: 'Build a complete decision-making program',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Zoo Entry System' },
        {
          type: 'labelValue',
          label: 'Your program should:',
          list: {
            ordered: true,
            items: [
              'Ask for the visitor’s age and set the ticket price: free under 3, 50 DKK from 3 to 12, 120 DKK from 13 to 64, and 80 DKK from 65 onwards.',
              'Ask whether the visitor is a member. Members receive 20 DKK off unless the ticket is already free.',
              'Ask which animal the visitor wants to see. Suggest tigers if they choose the closed lion exhibit.',
              'For visitors under 13, ask whether an adult is with them. Refuse entry when no adult is present.',
              'Print a ticket summary with the final price.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'zoo-entry-system-hint',
          title: 'Hint: Start by choosing the base ticket price',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'zoo_entry.py',
              code: `age = int(input('Visitor age: '))\n\nif age < 3:\n    price = 0\nelif age <= 12:\n    price = 50\nelif age <= 64:\n    price = 120\nelse:\n    price = 80`,
            },
          ],
        },
      ],
    },
  ],
};
