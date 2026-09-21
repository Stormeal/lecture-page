import { CourseGroupItem } from '../../course.model';

export const SYNTAX_SECTION_01: CourseGroupItem = {
  id: 'print-comments-variables',
  title: 'Section 1: Print, Comments, and Variables',
  summary: 'Show information and store values',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Showing Information with print()' },
    {
      type: 'p',
      text: 'print() displays the value inside its brackets. Put text inside single or double quotes. Numbers do not need quotes.',
    },
    {
      type: 'image',
      src: 'assets/chapter5-syntax.png',
      alt: 'Hand-drawn laptop illustration with basic Python syntax symbols',
      caption: 'Course artwork from the Basic Syntax section.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'basics.py',
      code: `print('Ada')\nprint(28)`,
    },
    { type: 'divider' },
    { type: 'h3', text: 'Comments' },
    {
      type: 'p',
      text: 'A line beginning with # is a comment. Python ignores comments, so they explain code to people without changing what the program does.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'basics.py',
      code: `# Show the user's name\nprint('Ada')`,
    },
    { type: 'divider' },
    { type: 'h3', text: 'Variables' },
    {
      type: 'p',
      text: 'A variable has a name and holds a value. Use = to assign a value, then use the variable name later in your program.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'basics.py',
      code: `city = 'Copenhagen'\nprint('I live in ' + city)`,
    },
  ],
  children: [
    {
      id: 'print-comments-variables-exercise',
      title: 'Exercise',
      summary: 'Write your first variables and output',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Introduce Yourself' },
        {
          type: 'labelValue',
          label: 'Write a short program that:',
          list: {
            ordered: true,
            items: [
              'Prints your name and age on separate lines.',
              'Adds a comment that explains the name output.',
              'Stores your city in a variable.',
              'Prints “I live in” followed by the city variable.',
            ],
          },
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_02: CourseGroupItem = {
  id: 'input-arithmetic-strings',
  title: 'Section 2: Input, Arithmetic, and Strings',
  summary: 'Work with values entered by a user',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Getting Input' },
    {
      type: 'p',
      text: 'input() pauses the program and waits for a user to type something. It always returns text, even when the user enters a number.',
    },
    {
      type: 'p',
      text: 'Use int() to convert text into a whole number and float() to convert text into a decimal number before doing arithmetic.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'sum.py',
      code: `first = int(input('First number: '))\nsecond = int(input('Second number: '))\nprint(first + second)`,
    },
    { type: 'divider' },
    { type: 'h3', text: 'Arithmetic' },
    {
      type: 'labelValue',
      label: 'Useful arithmetic operators:',
      list: {
        ordered: false,
        items: [
          '+ adds and - subtracts.',
          '* multiplies and / divides.',
          '** raises a number to a power.',
          '% returns the remainder after division.',
        ],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'Working with Strings' },
    {
      type: 'p',
      text: 'A string is text. You can join strings with +, but each value must be text first. An f-string makes it easy to insert variables and expressions directly into text.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'future.py',
      code: `name = 'Ada'\nage = 28\nprint(f'In 5 years, {name} will be {age + 5}')`,
    },
  ],
  children: [
    {
      id: 'input-arithmetic-strings-exercise',
      title: 'Exercise',
      summary: 'Use input, arithmetic, and an f-string',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Numbers and Text' },
        {
          type: 'labelValue',
          label: 'Complete each task:',
          list: {
            ordered: true,
            items: [
              'Ask the user for two numbers and print their sum.',
              'Calculate the full weeks and remaining days in 100 days.',
              'Create name and age variables, then use an f-string to show the person’s age in five years.',
            ],
          },
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_03: CourseGroupItem = {
  id: 'indentation-and-capstone',
  title: 'Section 3: Indentation and the Tip Calculator',
  summary: 'Put the basic pieces together',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Indentation Matters' },
    {
      type: 'p',
      text: 'In Python, indentation is part of the language rules. Lines that belong to the same block use the same indentation. Incorrect indentation causes an error.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'mood.py',
      code: `mood = 'happy'\n\nif mood == 'happy':\n    print('Hello')`,
    },
    {
      type: 'p',
      text: 'The indented print line belongs to the if statement. VS Code adds the usual four spaces after you type a colon and press Enter.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Capstone: Tip Calculator' },
    {
      type: 'p',
      text: 'Use the concepts from this chapter to build a program that asks for a bill amount and a tip percentage, then calculates and displays both the tip and total bill.',
    },
  ],
  children: [
    {
      id: 'tip-calculator-exercise',
      title: 'Exercise: Tip Calculator',
      summary: 'Build a complete beginner program',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Tip Calculator' },
        {
          type: 'labelValue',
          label: 'Your program should:',
          list: {
            ordered: true,
            items: [
              'Ask the user for the bill amount.',
              'Ask for the tip percentage.',
              'Calculate the tip amount.',
              'Calculate the total bill.',
              'Display the tip and total using clear labels.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'tip-calculator-hint',
          title: 'Hint: Convert input before calculating',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'tip_calculator.py',
              code: `bill = float(input('Bill amount: '))\ntip_percent = float(input('Tip percentage: '))\ntip = bill * tip_percent / 100\ntotal = bill + tip\n\nprint(f'Tip: {tip}')\nprint(f'Total: {total}')`,
            },
          ],
        },
      ],
    },
  ],
};
