import { CourseContentItem, CourseQuizItem } from '../../course.model';

export const PROGRAMMING_SECTION_01: CourseContentItem = {
  id: 'what-is-coding',
  title: 'Section 1: What Is Coding?',
  summary: 'Giving exact instructions to a computer',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'What Is Coding?' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Coding means instructing a computer to carry out a specific task.',
          'Every program is a sequence of commands (instructions) that the computer runs in order.',
          'You write those instructions in a programming language: a set of words and rules the computer can follow.',
          'The computer does exactly what you say. No guessing, no “you know what I mean”.',
          'Get one instruction wrong and the program does the wrong thing, or stops. That is normal, and fixing it is part of the job.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Errors do not mean you have failed. Every programmer runs into them every day. Reading the error and fixing it is simply part of the work.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'The Computer Is Not Smart, Just Fast' },
    {
      type: 'p',
      text: 'A computer has no common sense. It does only what it is told, in the exact order it is told.',
    },
    {
      type: 'p',
      text: 'Tell a person “Get me a drink” and they fill in the gaps. A computer needs every step spelled out. One missing or wrong step and it stops, or it does the wrong thing perfectly.',
    },
    {
      type: 'p',
      text: 'This is the most important mindset shift for a beginner. The computer’s speed makes it feel smart, but it has zero judgement. Programming is the skill of being precise enough that a machine with no judgement still gets it right.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'How We Talk to a Computer' },
    {
      type: 'p',
      text: 'Humans speak English, Norwegian, or use gestures. Computers ultimately understand only 1s and 0s, called machine code.',
    },
    {
      type: 'p',
      text: 'A programming language sits in the middle. It is readable enough for humans to write and strict enough for machines to run. Examples include Python, JavaScript, and C#. In this course we use Python.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Your First Instruction' },
    { type: 'p', text: 'Here is a complete, working program:' },
    { type: 'code', language: 'python', filename: 'main.py', code: `print("Hello, world!")` },
    {
      type: 'p',
      text: 'print is a command. It means “show this text on the screen”. That is it: the computer runs the line, shows the text, and is done. A big program is just many small instructions like this, stacked up.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Exact Means Exact' },
    { type: 'p', text: 'This works:' },
    { type: 'code', language: 'python', filename: 'main.py', code: `print("Hello")` },
    { type: 'p', text: 'This does not:' },
    { type: 'code', language: 'python', filename: 'main.py', code: `Print("Hello")` },
    {
      type: 'p',
      text: 'The only difference is a capital P. The computer will not guess what you meant. It reports an error and stops.',
    },
  ],
};

export const PROGRAMMING_SECTION_02: CourseContentItem = {
  id: 'program-as-recipe',
  title: 'Section 2: A Program Is Like a Recipe',
  summary: 'Variables, instructions, and output',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'A Program Is Like a Recipe' },
    {
      type: 'p',
      text: 'A recipe is a simple way to understand the parts of a program. Ingredients are variables, the steps are the instructions, and the finished dish is the output.',
    },
    {
      type: 'image',
      src: 'assets/chapter3-recipe.png',
      alt: 'Hand-drawn recipe ingredients illustration',
      caption: 'Course artwork from the Programming Foundations section.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Ingredients Are Variables' },
    {
      type: 'p',
      text: 'In a recipe, each ingredient has a name and an amount. In code, that is a variable (the name) and its value (the amount). The label tells you what it is. The value tells you how much.',
    },
    {
      type: 'labelValue',
      label: 'The ingredients on the labels:',
      list: {
        ordered: false,
        items: [
          'salmon: 4',
          'tomatoes: 10',
          'asparagus: 16',
          'pepper: 1 tsp',
          'garlic: 3',
          'mustard: 2 tbsp',
          'olive_oil: 1 tbsp',
          'lemon: 1',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'A variable is just a named box that holds something. You give it a name once, then refer to it by that name instead of repeating the value everywhere.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Steps Are the Instructions' },
    {
      type: 'p',
      text: 'A recipe is a list of steps, done in order. A program is a list of instructions, run in order. Each numbered step is one instruction: the computer does step 1, then step 2, then step 3, and so on.',
    },
    {
      type: 'p',
      text: 'The steps use the ingredients you defined. The code uses the variables you defined.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'The Dish Is the Output' },
    {
      type: 'p',
      text: 'Follow the recipe and you get a finished dish. Run the program and you get an output.',
    },
    {
      type: 'p',
      text: 'The same ingredients and the same steps give the same result every time. That is what “the computer does exactly what you say” means in practice. Change an ingredient or a step, and the output changes.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'The Same Idea, Written as Real Code' },
    {
      type: 'p',
      text: 'Everything you just saw as a recipe is real programming. Here it is as Python. You do not need to read the syntax yet; just recognise the parts.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `salmon    = 4
tomatoes  = 10
asparagus = 16
pepper    = "1 tsp"
garlic    = 3
mustard   = "2 tbsp"
olive_oil = "1 tbsp"
lemon     = 1

paste = mix(lemon, garlic, mustard, olive_oil, pepper)
coat(salmon, paste)
bake(tray, minutes=11)

print("Dinner is ready!")`,
    },
    {
      type: 'labelValue',
      label: 'Recipe to code:',
      list: {
        ordered: false,
        items: [
          'Ingredients become variables: salmon, tomatoes, pepper, and so on.',
          'Steps become instructions: mix the paste, coat the salmon, bake it.',
          'The finished dish becomes the output: “Dinner is ready!”',
        ],
      },
    },
  ],
};

export const PROGRAMMING_SECTION_03: CourseContentItem = {
  id: 'programming-languages',
  title: 'Section 3: Programming Languages',
  summary: 'From readable code to machine code',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Programming Languages' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A programming language is a collection of keywords and rules for instructing a computer.',
          'The keywords are the words the language understands, such as if, while, and print.',
          'The rules, called syntax, decide how those words must be put together. Break a rule and the program will not run.',
          'Different languages exist for different jobs, but they share the same purpose: telling the computer what to do in a way that can be translated for it to follow.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Compare it to a human language. English has words (vocabulary) and grammar (rules). A programming language is the same idea, just far stricter. As you saw with Print and print, the rules are not suggestions.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Same Task, Different Languages' },
    { type: 'p', text: 'Convert a temperature from Fahrenheit to Celsius in C#:' },
    {
      type: 'code',
      language: 'csharp',
      filename: 'temperature_controller.cs',
      code: `double fahrenheit = 98.6;
double celsius = (fahrenheit - 32) * 5 / 9;

Console.WriteLine(celsius);
// Output: 37`,
    },
    { type: 'p', text: 'The same task in Python:' },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `fahrenheit = 98.6
celsius = (fahrenheit - 32) * 5 / 9

print(celsius)
# Output: 37.0`,
    },
    {
      type: 'p',
      text: 'Same formula, same result, different words and rules. Python needs less ceremony: no double and no semicolons. The idea is identical; the languages just spell it differently. That is why learning a second language later is much easier than the first.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Does the CPU Understand Python or C#?' },
    {
      type: 'p',
      text: 'No. The CPU does not understand Python, C#, or any other high-level language. A CPU can only execute machine code: raw instructions made of numbers, specific to that exact type of hardware.',
    },
    {
      type: 'p',
      text: 'Machine code is not one universal thing. An Intel chip and a phone’s ARM chip speak different machine code. So how does our Python or C# ever run?',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Why We Use High-Level Languages' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A translator program does the hard part for us. A compiler or an interpreter turns our code into the right machine code for the hardware it runs on.',
          'We write one readable version. The translator handles the messy, hardware-specific details.',
          'We do not have to rewrite our program for every different CPU. The same Python or C# can run on a laptop, a server, or a phone.',
          'High-level means “close to how humans think”. Low-level means “close to the hardware”. We work high so we can focus on the problem, not the chip.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Think of it like writing one letter and having a translator deliver it in whatever language each reader needs. Write once, and let the tooling target the hardware.',
    },
  ],
};

export const PROGRAMMING_RECAP: CourseContentItem = {
  id: 'programming-foundations-recap',
  title: 'Recap: Programming Foundations',
  summary: 'Key points from the chapter',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Recap: Programming Foundations' },
    {
      type: 'labelValue',
      label: 'Remember:',
      list: {
        ordered: false,
        items: [
          'Coding is giving a computer instructions that it runs in order.',
          'The computer is fast, not smart: it does exactly what it is told and never guesses.',
          'A program is like a recipe: variables are ingredients, instructions are steps, output is the dish.',
          'A programming language is a set of keywords and rules, and each language has its own.',
          'The CPU only runs machine code; a compiler or interpreter translates our code.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Key takeaway: be exact. The computer follows your instructions to the letter, in the order you give them.',
    },
  ],
};

export const PROGRAMMING_QUIZ: CourseQuizItem = {
  id: 'programming-foundations-quiz',
  title: 'Quiz: Programming Foundations',
  summary: 'Check your understanding of the whole chapter',
  type: 'quiz',
  intro:
    'These questions cover every section in the chapter. Choose the best answer, then read the explanation.',
  questions: [
    {
      id: 'program-definition',
      prompt: 'What is a program?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'A sequence of instructions that the computer runs in order.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Even a big program is just many small instructions stacked up.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'A description of what the user would like, which the computer interprets.',
          wrongExplanation:
            'The computer does not interpret wishes. It follows exact instructions.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The physical chip inside the computer.',
          wrongExplanation: 'That is the CPU. A program is the set of instructions the CPU runs.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'A list of instructions the computer may run in any order it chooses.',
          wrongExplanation: 'The order matters. The computer runs instructions in the order given.',
        },
      ],
    },
    {
      id: 'get-me-a-drink',
      prompt:
        'A person can follow “Get me a drink” without further explanation. Why can a computer not?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Because computers are too slow to process the request.',
          wrongExplanation: 'Computers are very fast. Speed is not the problem.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Because the sentence is too long.',
          wrongExplanation: 'Length is not the issue. The missing detail is.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Because it has no common sense and needs every step spelled out.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The computer is not smart, just fast. It cannot fill in the gaps like a person can.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Because computers can only understand questions, not commands.',
          wrongExplanation: 'Programs are made of commands. The problem is the lack of detail.',
        },
      ],
    },
    {
      id: 'errors-are-normal',
      prompt: 'Your program stops with an error. What does that usually mean?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'You are not suited to programming.',
          wrongExplanation:
            'Every programmer runs into errors every day. They are a routine part of the job.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'An instruction was not exactly right; reading the error and fixing it is part of the work.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Errors are normal and expected. They tell you where the computer could not follow you.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The computer is broken.',
          wrongExplanation:
            'The computer did exactly what it was told. The instruction itself needs fixing.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The computer guessed what you meant and got it wrong.',
          wrongExplanation: 'The computer never guesses. It follows the instructions as written.',
        },
      ],
    },
    {
      id: 'machine-code',
      prompt: 'What does a computer ultimately understand?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'English.',
          wrongExplanation: 'Humans speak English. Computers need something far more exact.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Python.',
          wrongExplanation:
            'Python is a programming language that must be translated before the computer can run it.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Any language, as long as it is spelled correctly.',
          wrongExplanation: 'Correct spelling matters, but the hardware itself only runs machine code.',
        },
        {
          id: 'd',
          label: 'd)',
          text: '1s and 0s, called machine code.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. A programming language sits between human language and machine code.',
        },
      ],
    },
    {
      id: 'print-does',
      prompt: 'What does print("Hello, world!") do?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Shows the text Hello, world! on the screen.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. print is a command that means “show this text on the screen”.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Sends the text to a printer.',
          wrongExplanation: 'Despite the name, print in Python shows text on the screen.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Saves the text in a file called world.',
          wrongExplanation: 'Nothing is saved. The text is shown on the screen.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Nothing, because one line is not a complete program.',
          wrongExplanation: 'This single line is a complete, working program.',
        },
      ],
    },
    {
      id: 'capital-p',
      prompt: 'Why does Print("Hello") fail when print("Hello") works?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Because the text inside the brackets is too short.',
          wrongExplanation: 'The text is identical in both lines. Only one letter differs.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'It does not fail. Python corrects the capital letter for you.',
          wrongExplanation: 'Python does not correct your code. It reports an error and stops.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Because Print with a capital P is a different name, and the computer will not guess what you meant.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Exact means exact. The only difference is a capital P, and that is enough.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Because capital letters are not allowed anywhere in Python.',
          wrongExplanation:
            'Capital letters are allowed. The problem is that Print is not the command Python knows.',
        },
      ],
    },
    {
      id: 'variable-is',
      prompt: 'In the recipe analogy, what is a variable?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'One of the numbered steps in the recipe.',
          wrongExplanation: 'The steps are the instructions, not the variables.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'An ingredient: a name with a value, stored so you can use it by name later.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The label is the name and the amount is the value, like garlic = 3.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The finished dish.',
          wrongExplanation: 'The finished dish is the output of the program.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The oven.',
          wrongExplanation:
            'The analogy maps ingredients to variables, steps to instructions, and the dish to output.',
        },
      ],
    },
    {
      id: 'steps-in-order',
      prompt: 'How does a program run its instructions?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'In alphabetical order.',
          wrongExplanation: 'The names of the instructions do not decide the order.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'In random order.',
          wrongExplanation: 'Programs are predictable. Random order would give a different result each time.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'All at the same time.',
          wrongExplanation: 'Like recipe steps, instructions are done one after another.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'In order, one after another, like the numbered steps of a recipe.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The computer does step 1, then step 2, then step 3, and so on.',
        },
      ],
    },
    {
      id: 'same-output',
      prompt: 'You run the same program twice with the same values. What happens?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'You get the same output both times.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Same ingredients and same steps give the same dish, every time.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'The output is a little different each time.',
          wrongExplanation:
            'The computer does exactly what you say, so the same instructions give the same result.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The second run improves on the first.',
          wrongExplanation: 'The computer does not learn between runs. It follows the same steps.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The second run fails because the program has already been used.',
          wrongExplanation: 'A program can be run as many times as you like.',
        },
      ],
    },
    {
      id: 'tea-variable',
      prompt: 'You describe making a cup of tea as a program. Which of these is a variable?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Boil the water.',
          wrongExplanation: 'This is a step, so it is an instruction.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'The message “Your tea is ready!”',
          wrongExplanation: 'This is what the program produces at the end, so it is the output.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'water = "300 ml"',
          wrongExplanation: '',
          correctExplanation:
            'Correct. It has a name (water) and a value (300 ml), just like an ingredient.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Pour the water into the cup.',
          wrongExplanation: 'This is a step, so it is an instruction.',
        },
      ],
    },
    {
      id: 'recipe-code-output',
      prompt: 'In the salmon recipe written as Python, which line produces the output?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'salmon = 4',
          wrongExplanation: 'This line creates a variable. It stores a value but shows nothing.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'coat(salmon, paste)',
          wrongExplanation: 'This is one of the instructions (steps), not the output.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'bake(tray, minutes=11)',
          wrongExplanation: 'This is the last instruction before the output, but it is still a step.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'print("Dinner is ready!")',
          wrongExplanation: '',
          correctExplanation:
            'Correct. print shows the result on the screen: the finished dish.',
        },
      ],
    },
    {
      id: 'language-definition',
      prompt: 'What is a programming language made of?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Only numbers.',
          wrongExplanation: 'That describes machine code. Programming languages use readable words.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Keywords and rules (syntax) for how to put them together.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Like vocabulary and grammar in a human language, just far stricter.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Any English words you like, in any order.',
          wrongExplanation:
            'A language understands only its own keywords, and the syntax rules decide the order.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Suggestions the computer may choose to follow.',
          wrongExplanation: 'The rules are not suggestions. Break one and the program will not run.',
        },
      ],
    },
    {
      id: 'same-task-languages',
      prompt:
        'The C# and Python temperature examples both print 37. What is the main difference between them?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'The words and rules differ, but the idea and the formula are the same.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The languages just spell it differently, which is why a second language is easier to learn.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'They use completely different formulas.',
          wrongExplanation: 'Both use (fahrenheit - 32) * 5 / 9.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Only C# can do maths.',
          wrongExplanation: 'Both languages calculate the same result.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Python needs more ceremony, such as double and semicolons.',
          wrongExplanation: 'It is the other way around. C# uses double and semicolons; Python does not.',
        },
      ],
    },
    {
      id: 'cpu-understands',
      prompt: 'Does a CPU understand Python or C# directly?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Yes, every CPU understands every language.',
          wrongExplanation: 'A CPU cannot read high-level languages at all.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'It understands Python, but not C#.',
          wrongExplanation: 'The CPU understands neither. Both must be translated.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Yes, as long as the code has no errors.',
          wrongExplanation: 'Even perfect code must be translated into machine code first.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'No. It only runs machine code, which differs between types of hardware.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. An Intel chip and a phone’s ARM chip even speak different machine code.',
        },
      ],
    },
    {
      id: 'translator-purpose',
      prompt: 'What does a compiler or interpreter do?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'It gives the CPU common sense.',
          wrongExplanation:
            'The CPU still has no judgement. It just receives instructions it can run.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'It makes every language use the same syntax.',
          wrongExplanation: 'Each language keeps its own keywords and rules.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'It turns our readable code into the right machine code for the hardware.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. We write one readable version, and the translator handles the hardware-specific details.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'It rewrites the program by hand for every CPU.',
          wrongExplanation:
            'Avoiding that is exactly the point. The same code can run on a laptop, a server, or a phone.',
        },
      ],
    },
  ],
};
