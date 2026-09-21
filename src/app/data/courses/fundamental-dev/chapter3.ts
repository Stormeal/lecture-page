import { CourseGroupItem } from '../../course.model';

export const PROGRAMMING_SECTION_01: CourseGroupItem = {
  id: 'what-is-coding',
  title: 'Section 1: What Is Coding?',
  summary: 'Giving exact instructions to a computer',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'What Is Coding?' },
    {
      type: 'p',
      text: 'Coding means writing instructions that tell a computer to perform a task. A program is a sequence of commands that the computer executes in order.',
    },
    {
      type: 'p',
      text: 'Computers do not guess what you meant. One missing or incorrect instruction can make a program produce the wrong result or stop with an error. Finding and fixing those mistakes is a normal part of programming.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Exact Means Exact' },
    {
      type: 'p',
      text: 'A computer has no common sense. A person can fill in missing details when asked to get a drink. A computer needs every relevant step expressed precisely and in the correct order.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'hello.py',
      code: `print('Hello, world!')`,
    },
    {
      type: 'p',
      text: 'print is a command that shows text on the screen. Python recognises the lowercase spelling exactly. Print with a capital P is a different name and causes an error.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Errors are useful feedback. They show that the computer could not follow the instructions as written.',
    },
  ],
  children: [
    {
      id: 'what-is-coding-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of precise instructions',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
        {
          id: 'coding-definition',
          prompt: 'Why does a computer need precise instructions?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It executes the instructions it receives without guessing the intended meaning.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Computers follow the instructions and rules that are explicitly provided.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It can infer missing steps from common sense.',
              wrongExplanation:
                'Computers do not fill in missing steps with common sense or human context.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Precise code always runs faster.',
              wrongExplanation: 'Precision supports correct behaviour. It does not automatically improve speed.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It rewrites incorrect commands automatically.',
              wrongExplanation: 'The computer can report an error, but it does not know what you intended to write.',
            },
          ],
        },
      ],
    },
  ],
};

export const PROGRAMMING_SECTION_02: CourseGroupItem = {
  id: 'program-as-recipe',
  title: 'Section 2: A Program as a Recipe',
  summary: 'Variables, instructions, and output',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'A Program Is Like a Recipe' },
    {
      type: 'p',
      text: 'A recipe offers a simple way to understand the parts of a program. Ingredients map to variables, recipe steps map to instructions, and the finished dish maps to output.',
    },
    {
      type: 'image',
      src: 'assets/chapter3-recipe.png',
      alt: 'Hand-drawn recipe ingredients illustration',
      caption: 'Course artwork from the Programming Foundations section.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Ingredients Become Variables' },
    {
      type: 'p',
      text: 'An ingredient has a name and an amount. A variable works the same way: it has a name and stores a value that the program can use later.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'recipe.py',
      code: `salmon_fillets = 4\npepper = '1 tsp'\nlemon = 1`,
    },
    { type: 'divider' },
    { type: 'h3', text: 'Steps Become Instructions' },
    {
      type: 'p',
      text: 'A recipe performs steps in order. A program executes its instructions in order too. Those instructions can use the variables defined earlier.',
    },
    { type: 'h3', text: 'The Dish Becomes Output' },
    {
      type: 'p',
      text: 'Following the same recipe with the same ingredients gives the same dish. Running the same program with the same values gives the same output. Changing an ingredient or a step changes the result.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Variables hold values, instructions describe the work, and output is the result the program produces.',
    },
  ],
  children: [
    {
      id: 'program-as-recipe-exercise',
      title: 'Exercise',
      summary: 'Translate a recipe into program parts',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Recipe to Program' },
        {
          type: 'p',
          text: 'Think about making a cup of tea. Describe it as a simple program.',
        },
        {
          type: 'labelValue',
          label: 'Write down:',
          list: {
            ordered: false,
            items: [
              'Two variables and the values they would store.',
              'Three instructions in the order they should run.',
              'The output that the program should produce.',
            ],
          },
        },
      ],
    },
  ],
};

export const PROGRAMMING_SECTION_03: CourseGroupItem = {
  id: 'programming-languages',
  title: 'Section 3: Programming Languages',
  summary: 'From readable code to machine code',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Programming Languages' },
    {
      type: 'p',
      text: 'A programming language provides keywords and syntax for writing instructions. Keywords include words such as print, if, and while. Syntax defines how those words must be combined.',
    },
    {
      type: 'p',
      text: 'Python, JavaScript, and C# have different syntax and serve different needs, but each helps people express instructions that a computer can eventually execute. This course uses Python.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Machine Code and Translators' },
    {
      type: 'p',
      text: 'A CPU cannot directly understand Python or C#. It executes machine code, which consists of hardware-specific instructions represented as numbers.',
    },
    {
      type: 'p',
      text: 'A compiler or interpreter translates readable source code into instructions the hardware can execute. This lets developers focus on the problem instead of writing a different program for every CPU.',
    },
    {
      type: 'labelValue',
      label: 'Useful distinction:',
      list: {
        ordered: false,
        items: [
          'High-level languages stay close to how people think and write.',
          'Low-level code stays close to the hardware.',
        ],
      },
    },
  ],
  children: [
    {
      id: 'programming-languages-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of languages and translation',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
        {
          id: 'translator-purpose',
          prompt: 'What does a compiler or interpreter do?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It gives the CPU common sense.',
              wrongExplanation: 'A CPU follows executable instructions. It does not gain human-style understanding.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It replaces the need for programming languages.',
              wrongExplanation: 'A translator works with programming languages. It does not replace them.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It makes every language use identical syntax.',
              wrongExplanation: 'Languages have their own keywords and syntax rules.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It turns readable source code into instructions the hardware can execute.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Translators bridge high-level code and the machine code a CPU can run.',
            },
          ],
        },
      ],
    },
  ],
};
