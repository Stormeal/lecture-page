import { CourseGroupItem } from '../../course.model';

export const FUNCTION_SECTION_01: CourseGroupItem = {
  id: 'why-functions',
  title: 'Section 1: Why Functions?',
  summary: 'Write the logic once and reuse it by name',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Why Functions?' },
    {
      type: 'image',
      src: 'assets/chapter8-functions.png',
      alt: 'Hand-drawn illustration of labelled function containers',
      caption: 'Course artwork from the Functions section.',
    },
    {
      type: 'p',
      text: 'A function is a named block of code you can run whenever you want, as many times as you want. You write it once, then call it by name instead of repeating yourself.',
    },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Without functions, code you need twice gets copied twice. Fix a bug, and you have to fix it in every copy.',
          'Functions let you write the logic once and reuse it everywhere by name.',
          'They also give messy code a clear shape: each function does one job, with a name that says what it is.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `# Repeated work, copied three times
print("Welcome, please sign in")
print("Welcome, please sign in")
print("Welcome, please sign in")`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Two wins: less repetition, and one place to change things. Anyone who has copy-pasted something and then had to update every copy knows why that matters.',
    },
  ],
  children: [
    {
      id: 'why-functions-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of why functions matter',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'copied-code',
          prompt: 'What is the problem with copying the same code into several places?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Python refuses to run repeated lines.',
              wrongExplanation: 'Python runs repeated lines without complaint.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Fix a bug, and you have to fix it in every copy.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Miss one copy and the bug is still there.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It makes the program run slower.',
              wrongExplanation: 'Speed is not the issue. Changing and fixing the code is.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'There is no problem with it.',
              wrongExplanation: 'Every copy is one more place to change when something changes.',
            },
          ],
        },
        {
          id: 'function-benefit',
          prompt: 'What is the main benefit of a function?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It makes code shorter by removing all variables.',
              wrongExplanation: 'Functions still use variables.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It runs code automatically when the program starts.',
              wrongExplanation: 'A function only runs when you call it.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It hides the code from other people.',
              wrongExplanation: 'Functions are about reuse and structure, not hiding.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'You write the logic once and reuse it everywhere by name.',
              wrongExplanation: '',
              correctExplanation: 'Correct. And there is only one place to change it.',
            },
          ],
        },
        {
          id: 'lines-to-edit',
          prompt:
            'In the example, the welcome message is copied three times. If the message changes, how many lines do you edit?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '3',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Every copy has to change. With a function, it would be one.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '1',
              wrongExplanation: 'That is how it would be with a function. Here there are three copies.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '0',
              wrongExplanation: 'The text is written out in each line, so each line must change.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '4, including the comment',
              wrongExplanation: 'The comment does not contain the message.',
            },
          ],
        },
        {
          id: 'good-function',
          prompt: 'What makes a good function?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It does as many jobs as possible.',
              wrongExplanation: 'A function that does everything is hard to name, read, and change.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It has a short, random name such as f1.',
              wrongExplanation: 'The name should say what the function does.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It does one job, with a name that says what it is.',
              wrongExplanation: '',
              correctExplanation: 'Correct. That gives messy code a clear shape.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It contains the whole program.',
              wrongExplanation: 'Functions split a program into clear, named pieces.',
            },
          ],
        },
        {
          id: 'function-one-place',
          prompt: 'The welcome message lives in a function that is called three times. The message changes. What do you edit?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'All three calls.',
              wrongExplanation: 'The calls only run the function. The message is inside it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only the one line inside the function.',
              wrongExplanation: '',
              correctExplanation: 'Correct. One place to change, and every call picks it up.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Nothing; the function updates itself.',
              wrongExplanation: 'You still change the message, just in one place.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'You have to delete the function and start again.',
              wrongExplanation: 'Changing the function body is enough.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-functions-exercise',
      title: 'Exercise 1: How Many Lines?',
      summary: 'Spot the cost of copied code',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 1: How Many Lines?' },
        {
          type: 'p',
          text: 'Look at the example on the topic page. If that welcome message had to change, how many lines would you edit?',
        },
        {
          type: 'hint',
          id: 'why-functions-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Count every line where the text of the message is written out.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'why-functions-exercise-solution',
          title: 'Show the answer',
          blocks: [
            {
              type: 'p',
              text: 'Three. The message is copied into three lines, so every copy has to change, and missing one leaves the old text behind. With a function, you would edit one line.',
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Peek ahead to the next section and rewrite the example with a function called welcome_message(), so the text is only written once. Call the function three times. Then change the message and check that all three lines change.',
        },
        {
          type: 'hint',
          id: 'why-functions-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Start with def welcome_message(): and put the print line indented underneath. Call it by writing its name followed by brackets.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'why-functions-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1_advanced.py',
              code: `def welcome_message():
    print("Welcome, please sign in")

welcome_message()
welcome_message()
welcome_message()`,
            },
          ],
        },
      ],
    },
  ],
};

export const FUNCTION_SECTION_02: CourseGroupItem = {
  id: 'defining-functions',
  title: 'Section 2: Defining and Calling',
  summary: 'Write a function, then run it by name',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Defining and Calling' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'You define a function with def, a name, and a block of code. Defining it does not run it.',
          'You run it by calling it: the name followed by brackets.',
          'Define is writing the recipe. Calling is actually cooking it.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `def greet():                    # define
    print("Hello there!")
    print("Welcome along.")

greet()                         # call: runs the block
greet()                         # call again`,
    },
    {
      type: 'p',
      text: 'Writing the recipe down does nothing to dinner; you have to actually cook it. Notice the colon and the indented block: the same rules as if and loops. Calling greet() twice proves the reuse.',
    },
  ],
  children: [
    {
      id: 'defining-functions-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of def and calling',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'def-keyword',
          prompt: 'Which keyword defines a function in Python?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'function',
              wrongExplanation: 'Some languages use function, but Python uses def.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'define',
              wrongExplanation: 'Close, but Python uses the short form: def.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'def',
              wrongExplanation: '',
              correctExplanation: 'Correct. def, then the name, brackets, and a colon.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'func',
              wrongExplanation: 'Python uses def.',
            },
          ],
        },
        {
          id: 'define-runs',
          prompt: 'Does defining a function run its code?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'No. It only runs when you call it.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Writing the recipe is not the same as cooking it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Yes, once, when it is defined.',
              wrongExplanation: 'Defining only stores the function. Nothing is printed yet.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Yes, every time Python reads the file.',
              wrongExplanation: 'The body only runs when the function is called.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only if it has a print inside.',
              wrongExplanation: 'What is inside does not matter. Only a call runs it.',
            },
          ],
        },
        {
          id: 'how-to-call',
          prompt: 'How do you call a function named greet?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'greet',
              wrongExplanation: 'Without brackets, the function is not run.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'def greet()',
              wrongExplanation: 'def is for defining, not calling.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'call greet',
              wrongExplanation: 'There is no call keyword in Python.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'greet()',
              wrongExplanation: '',
              correctExplanation: 'Correct. The name followed by brackets.',
            },
          ],
        },
        {
          id: 'greet-output',
          prompt: 'How many lines does the example print?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '2',
              wrongExplanation: 'The function is called twice, and each call prints two lines.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '4',
              wrongExplanation: '',
              correctExplanation: 'Correct. Hello there! and Welcome along., twice.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '6',
              wrongExplanation: 'Defining the function does not print anything.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '0',
              wrongExplanation: 'The two calls run the block.',
            },
          ],
        },
        {
          id: 'recipe-analogy',
          prompt: 'In the recipe analogy, what is calling a function?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Writing the recipe down.',
              wrongExplanation: 'That is defining the function.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Buying the ingredients.',
              wrongExplanation: 'The analogy compares defining with writing and calling with cooking.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Actually cooking the dish.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Define is writing the recipe; calling is cooking it.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Throwing the recipe away.',
              wrongExplanation: 'You can call a function as many times as you like.',
            },
          ],
        },
        {
          id: 'def-syntax',
          prompt: 'What must come after def greet()?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A semicolon, then the code on the same line.',
              wrongExplanation: 'Python uses a colon and an indented block.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Curly braces around the code.',
              wrongExplanation: 'Python uses indentation instead of braces.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Nothing; the next lines belong to it automatically.',
              wrongExplanation: 'Without a colon and indentation, Python reports an error.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A colon, then an indented block.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The same rules as if and loops.',
            },
          ],
        },
      ],
    },
    {
      id: 'defining-functions-exercise',
      title: 'Exercise 2: cheer()',
      summary: 'Define a function and call it',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 2: cheer()' },
        {
          type: 'p',
          text: 'Write a function called cheer that prints "Go team!" twice, then call it three times.',
        },
        {
          type: 'hint',
          id: 'defining-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The two print lines go inside the function, indented. The three calls go after it, back at the left edge. You should see Go team! six times.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'defining-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2.py',
              code: `def cheer():
    print("Go team!")
    print("Go team!")

cheer()
cheer()
cheer()`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Write a function called countdown that uses a while loop to count down from 3 to 1, then prints "Go!". Call it twice, with a line saying "Round two:" in between.',
        },
        {
          type: 'hint',
          id: 'defining-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The whole loop goes inside the function, so it is indented one level, and the loop body is indented two levels. Start the counter inside the function so every call counts down from 3 again.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'defining-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2_advanced.py',
              code: `def countdown():
    count = 3
    while count >= 1:
        print(count)
        count = count - 1
    print("Go!")

countdown()
print("Round two:")
countdown()`,
            },
          ],
        },
      ],
    },
  ],
};

export const FUNCTION_SECTION_03: CourseGroupItem = {
  id: 'parameters-and-arguments',
  title: 'Section 3: Parameters and Arguments',
  summary: 'Let one function work on different values',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Parameters and Arguments' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A parameter is a placeholder you put in the brackets when you define a function.',
          'An argument is the real value you give when you call it.',
          'This lets one function do its job on different values.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `def greet(name):                 # name is a parameter
    print("Hello,", name)

greet("Alex")                    # "Alex" is an argument
greet("Charlotte")`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The two words confuse people, so keep it simple: the parameter is the empty slot in the definition, and the argument is what you drop into the slot when calling. The same greet now works for any name.',
    },
  ],
  children: [
    {
      id: 'parameters-and-arguments-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of parameters and arguments',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'parameter-definition',
          prompt: 'What is a parameter?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A placeholder in the brackets when you define a function.',
              wrongExplanation: '',
              correctExplanation: 'Correct. It is the empty slot, like name in def greet(name):.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The real value you give when you call a function.',
              wrongExplanation: 'That is an argument.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The name of the function.',
              wrongExplanation: 'The name comes before the brackets. Parameters go inside them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The value the function prints.',
              wrongExplanation: 'A parameter receives a value; it is not the output.',
            },
          ],
        },
        {
          id: 'argument-definition',
          prompt: 'What is an argument?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A disagreement between two functions.',
              wrongExplanation: 'In programming, an argument is a value you pass in.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The placeholder in the definition.',
              wrongExplanation: 'That is a parameter.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The real value you give when you call the function.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Like "Alex" in greet("Alex").',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A comment explaining the function.',
              wrongExplanation: 'Comments start with #.',
            },
          ],
        },
        {
          id: 'greet-alex',
          prompt: 'What does greet("Alex") print?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Hello, name',
              wrongExplanation: 'name has no quotes, so its value is printed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Hello, Alex',
              wrongExplanation: '',
              correctExplanation: 'Correct. The argument "Alex" fills the name slot.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Alex',
              wrongExplanation: 'The function prints "Hello," before the name.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'greet expects one value, and it gets one.',
            },
          ],
        },
        {
          id: 'which-is-parameter',
          prompt: 'In def welcome(city): and welcome("Aarhus"), which one is the parameter?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '"Aarhus"',
              wrongExplanation: '"Aarhus" is the argument: the real value in the call.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'welcome',
              wrongExplanation: 'welcome is the name of the function.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'def',
              wrongExplanation: 'def is the keyword that defines the function.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'city',
              wrongExplanation: '',
              correctExplanation: 'Correct. It is the placeholder in the definition.',
            },
          ],
        },
        {
          id: 'why-parameters',
          prompt: 'Why give a function a parameter?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'To make it run faster.',
              wrongExplanation: 'Parameters are about flexibility, not speed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'So one function can do its job on different values.',
              wrongExplanation: '',
              correctExplanation: 'Correct. One greet works for any name.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because every function must have one.',
              wrongExplanation: 'cheer() has no parameters and works fine.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'To stop the function from being called.',
              wrongExplanation: 'Parameters do not prevent calls.',
            },
          ],
        },
      ],
    },
    {
      id: 'parameters-and-arguments-exercise',
      title: 'Exercise 3: welcome(city)',
      summary: 'Pass different values into one function',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 3: welcome(city)' },
        {
          type: 'p',
          text: 'Write a function welcome(city) that prints "Welcome to" followed by the city. Call it with two different cities.',
        },
        {
          type: 'hint',
          id: 'parameters-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'city is the parameter. Inside the function, print "Welcome to" and city with a comma between them. Each call passes a city name in quotes.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'parameters-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3.py',
              code: `def welcome(city):
    print("Welcome to", city)

welcome("Copenhagen")
welcome("Aarhus")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Write a function show_animal(animal) that prints "The zoo has a" followed by the animal. Then make a list of three animals and use a for-in loop to call the function once for each animal.',
        },
        {
          type: 'hint',
          id: 'parameters-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The loop variable holds one animal on each round. Pass it to the function as the argument.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'parameters-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3_advanced.py',
              code: `def show_animal(animal):
    print("The zoo has a", animal)

animals = ["lion", "tiger", "bear"]

for animal in animals:
    show_animal(animal)`,
            },
          ],
        },
      ],
    },
  ],
};

export const FUNCTION_SECTION_04: CourseGroupItem = {
  id: 'return-vs-print',
  title: 'Section 4: return vs print',
  summary: 'Hand a value back instead of just showing it',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'return vs print' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'print shows something on the screen. That is all it does.',
          'return hands a value back to whoever called the function, so it can be stored and reused.',
          'A printed value is gone after it appears. A returned value you can keep working with.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `def add(a, b):
    return a + b              # hands the result back

total = add(2, 3)             # store what came back
print(total)                  # 5
print(add(10, 4))             # use it directly: 14`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'This is the most important idea in the chapter. The trap: you write print inside a function, see a number, and think you are done. But a printed value cannot be reused. When a function produces a value, return it.',
    },
  ],
  children: [
    {
      id: 'return-vs-print-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of return and print',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'print-in-function',
          prompt: 'What does print do inside a function?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Hands the value back to the caller.',
              wrongExplanation: 'That is return.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Stores the value in a variable.',
              wrongExplanation: 'print does not store anything.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Shows something on the screen. That is all.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The value is gone after it appears.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Ends the program.',
              wrongExplanation: 'The program carries on after printing.',
            },
          ],
        },
        {
          id: 'return-does',
          prompt: 'What does return do?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Hands a value back to whoever called the function.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The caller can store it and keep working with it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Shows the value on the screen.',
              wrongExplanation: 'return shows nothing. You print the value yourself if you want to see it.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Restarts the function.',
              wrongExplanation: 'return ends the function and sends a value back.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Goes back to the top of the file.',
              wrongExplanation: 'It goes back to the line that called the function.',
            },
          ],
        },
        {
          id: 'add-total',
          prompt: 'In the example, what does print(total) show?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'add(2, 3)',
              wrongExplanation: 'The call runs, and total stores the value that came back.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '23',
              wrongExplanation: '2 and 3 are numbers, so they are added.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Nothing.',
              wrongExplanation: 'total holds the returned value, and print shows it.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '5',
              wrongExplanation: '',
              correctExplanation: 'Correct. add returns 5, which is stored in total.',
            },
          ],
        },
        {
          id: 'add-direct',
          prompt: 'What does print(add(10, 4)) show?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'add(10, 4)',
              wrongExplanation: 'Python runs the call first, then prints what it returned.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '14',
              wrongExplanation: '',
              correctExplanation: 'Correct. You can use a returned value directly, without storing it first.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '104',
              wrongExplanation: 'These are numbers, so + adds them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'Putting a call inside print is fine.',
            },
          ],
        },
        {
          id: 'printed-not-returned',
          prompt:
            'A function prints its result instead of returning it. You write result = my_function() and then result + 1. What happens?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It works, because the number was printed.',
              wrongExplanation: 'Seeing the number on screen does not hand it back to your code.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'result + 1 prints the number plus one.',
              wrongExplanation: 'Nothing was returned, so there is no number to add to.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because nothing came back: result holds None.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A function without return gives back None, and Python cannot add 1 to None.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Python converts the printed text into a number.',
              wrongExplanation: 'Python never does that for you.',
            },
          ],
        },
        {
          id: 'return-habit',
          prompt: 'A function calculates a value that the rest of the program needs. What should it do?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'return the value.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The caller can then print it, store it, or use it in further calculations.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'print the value.',
              wrongExplanation: 'A printed value cannot be reused by the rest of the program.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Neither; the value is shared automatically.',
              wrongExplanation: 'Values inside a function stay there unless you return them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Ask the user to type it in again.',
              wrongExplanation: 'The function already has the value. It just needs to hand it back.',
            },
          ],
        },
      ],
    },
    {
      id: 'return-vs-print-exercise',
      title: 'Exercise 4: double(number)',
      summary: 'Return a value and store it',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 4: double(number)' },
        {
          type: 'p',
          text: 'Write a function double(number) that returns the number times two. Store the result of double(8) in a variable and print it.',
        },
        {
          type: 'hint',
          id: 'return-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Inside the function, use return rather than print. Outside, store the call in a variable with =, then print that variable.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'return-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4.py',
              code: `def double(number):
    return number * 2

result = double(8)
print(result)`,
            },
            { type: 'p', text: 'This prints 16.' },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'See the difference for yourself. Write two functions: triple_print(number), which prints the number times three, and triple_return(number), which returns it. Then try print(triple_return(4) + 1) and print(triple_print(4) + 1). Before you run it, predict what each line does.',
        },
        {
          type: 'hint',
          id: 'return-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Only one of the two lines works. The other shows 12 and then an error. Read the error message: it mentions NoneType, which is Python’s way of saying “nothing came back”.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'return-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4_advanced.py',
              code: `def triple_print(number):
    print(number * 3)

def triple_return(number):
    return number * 3

print(triple_return(4) + 1)   # 13
print(triple_print(4) + 1)    # shows 12, then an error`,
            },
            {
              type: 'p',
              text: 'triple_return(4) hands back 12, so adding 1 gives 13. triple_print(4) only shows 12 on the screen and hands back nothing (None), so Python cannot add 1 to it. Only the returned value can be used in further maths.',
            },
          ],
        },
      ],
    },
  ],
};

export const FUNCTION_SECTION_05: CourseGroupItem = {
  id: 'multiple-parameters',
  title: 'Section 5: Multiple Parameters',
  summary: 'Pass several values, in the right order',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Multiple Parameters' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A function can take several parameters, separated by commas.',
          'The arguments you pass line up with the parameters in order.',
          'Get the order wrong and the function still runs, just with the values in the wrong places.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `def describe(animal, age):
    print(f"The {animal} is {age} years old")

describe("lion", 5)       # lion, 5
describe(5, "lion")       # 5, lion  (order matters!)`,
    },
    {
      type: 'p',
      text: 'Both calls run without an error, but the second prints “The 5 is lion years old”. Position decides meaning.',
    },
  ],
  children: [
    {
      id: 'multiple-parameters-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of multiple parameters',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'parameter-separator',
          prompt: 'How do you separate several parameters?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'With spaces.',
              wrongExplanation: 'Spaces alone are not enough. Python needs commas.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'With commas.',
              wrongExplanation: '',
              correctExplanation: 'Correct. def describe(animal, age):',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'With the word and.',
              wrongExplanation: 'and is for combining conditions.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'With a new line for each.',
              wrongExplanation: 'Parameters go inside the brackets, separated by commas.',
            },
          ],
        },
        {
          id: 'arguments-order',
          prompt: 'How does Python decide which argument goes to which parameter?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'By the type of value: text goes to text parameters.',
              wrongExplanation: 'Python does not check types here. That is why the wrong order still runs.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Alphabetically.',
              wrongExplanation: 'The names of the values do not matter.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'At random.',
              wrongExplanation: 'Python is always predictable.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'By position: the first argument goes to the first parameter, and so on.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Position decides meaning.',
            },
          ],
        },
        {
          id: 'wrong-order',
          prompt: 'What does describe(5, "lion") print?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The 5 is lion years old',
              wrongExplanation: '',
              correctExplanation: 'Correct. It runs, but the values are in the wrong places.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The lion is 5 years old',
              wrongExplanation: 'Python does not reorder the arguments for you.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error.',
              wrongExplanation: 'The function still runs. That is what makes this bug sneaky.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'The call runs the print inside the function.',
            },
          ],
        },
        {
          id: 'rectangle-area-value',
          prompt: 'rectangle_area(width, height) returns width * height. What does print(rectangle_area(4, 6)) show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '10',
              wrongExplanation: 'That is 4 + 6. The area multiplies.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '46',
              wrongExplanation: 'These are numbers, so they are multiplied, not joined.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '24',
              wrongExplanation: '',
              correctExplanation: 'Correct. 4 times 6.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing, because the function returns instead of printing.',
              wrongExplanation: 'The returned value is passed straight to print, which shows it.',
            },
          ],
        },
        {
          id: 'return-area',
          prompt: 'Why should rectangle_area return the area rather than print it?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Functions with two parameters cannot print.',
              wrongExplanation: 'They can. It is about what the caller can do with the result.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'So the caller can use the area in further calculations.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Make returning, not printing, a habit when a function produces a value.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because return is faster than print.',
              wrongExplanation: 'Speed is not the reason.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It does not matter.',
              wrongExplanation: 'A printed area is gone; a returned area can be reused.',
            },
          ],
        },
      ],
    },
    {
      id: 'multiple-parameters-exercise',
      title: 'Exercise 5: rectangle_area(width, height)',
      summary: 'Return a result from two parameters',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 5: rectangle_area(width, height)' },
        {
          type: 'p',
          text: 'Write a function rectangle_area(width, height) that returns width times height. Print the area of a 4 by 6 rectangle.',
        },
        {
          type: 'hint',
          id: 'multiple-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Separate the two parameters with a comma. Return the result inside the function, and print the call outside it.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'multiple-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5.py',
              code: `def rectangle_area(width, height):
    return width * height

print(rectangle_area(4, 6))`,
            },
            { type: 'p', text: 'This prints 24.' },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Write a second function paint_needed(width, height, coats) that returns how many square metres of paint you need for a wall: the area times the number of coats. Use rectangle_area inside it instead of repeating the calculation. Print the result for a 4 by 6 wall with 2 coats.',
        },
        {
          type: 'hint',
          id: 'multiple-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'A function can call another function. Because rectangle_area returns its result, you can multiply that result by coats directly.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'multiple-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5_advanced.py',
              code: `def rectangle_area(width, height):
    return width * height

def paint_needed(width, height, coats):
    return rectangle_area(width, height) * coats

print(paint_needed(4, 6, 2))`,
            },
            {
              type: 'p',
              text: 'This prints 48. It only works because rectangle_area returns its value; if it printed instead, there would be nothing to multiply.',
            },
          ],
        },
      ],
    },
  ],
};

export const FUNCTION_SECTION_06: CourseGroupItem = {
  id: 'default-parameters',
  title: 'Section 6: Default Parameters',
  summary: 'Give a parameter a value to fall back on',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Default Parameters' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'You can give a parameter a default value in the definition.',
          'If the caller leaves it out, the default is used. If they provide one, it wins.',
          'Handy when a value is usually the same but you want to allow exceptions.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Alex")                     # Hello Alex
greet("Charlotte", "Welcome")     # Welcome Charlotte`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Parameters with defaults must come after parameters without them. def greet(greeting="Hello", name): is a syntax error.',
    },
  ],
  children: [
    {
      id: 'default-parameters-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of default parameters',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'default-used-when',
          prompt: 'When is a default value used?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When the caller leaves that argument out.',
              wrongExplanation: '',
              correctExplanation: 'Correct. If the caller provides a value, it wins.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Always, even when the caller gives a value.',
              wrongExplanation: 'A value from the caller replaces the default.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only the first time the function is called.',
              wrongExplanation: 'The default applies to every call that leaves the argument out.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Never; it is just a comment.',
              wrongExplanation: 'The default is a real value Python uses.',
            },
          ],
        },
        {
          id: 'greet-default',
          prompt: 'What does greet("Alex") print?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Alex',
              wrongExplanation: 'The default greeting is printed before the name.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'An error, because greeting is missing.',
              wrongExplanation: 'greeting has a default, so it can be left out.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Hello Alex',
              wrongExplanation: '',
              correctExplanation: 'Correct. greeting falls back to its default, "Hello".',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'greeting Alex',
              wrongExplanation: 'greeting is a parameter, so its value is printed.',
            },
          ],
        },
        {
          id: 'greet-override',
          prompt: 'What does greet("Charlotte", "Welcome") print?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Hello Charlotte',
              wrongExplanation: 'The caller gave a greeting, so the default is not used.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Hello Welcome Charlotte',
              wrongExplanation: 'The given value replaces the default; it is not added to it.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Charlotte Welcome',
              wrongExplanation: 'The function prints greeting first, then name.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Welcome Charlotte',
              wrongExplanation: '',
              correctExplanation: 'Correct. The caller’s value wins over the default.',
            },
          ],
        },
        {
          id: 'power-calls',
          prompt: 'def power(base, exponent=2): returns base ** exponent. What do power(5) and power(2, 3) give?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '10 and 6',
              wrongExplanation: '** means “to the power of”, not multiply.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '25 and 8',
              wrongExplanation: '',
              correctExplanation:
                'Correct. 5 ** 2 uses the default; 2 ** 3 overrides it.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '25 and 9',
              wrongExplanation: 'In power(2, 3), 2 is the base and 3 the exponent: 2 × 2 × 2.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error and 8',
              wrongExplanation: 'exponent has a default, so power(5) works.',
            },
          ],
        },
        {
          id: 'default-order-rule',
          prompt: 'Which definition is valid?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'def greet(greeting="Hello", name):',
              wrongExplanation:
                'A parameter without a default cannot come after one with a default.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'def greet(name="", greeting):',
              wrongExplanation: 'greeting has no default, so it cannot follow name="".',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'def greet(name, greeting="Hello"):',
              wrongExplanation: '',
              correctExplanation: 'Correct. Parameters with defaults come after those without.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'def greet(name, greeting=):',
              wrongExplanation: 'A default needs a value after the =.',
            },
          ],
        },
      ],
    },
    {
      id: 'default-parameters-exercise',
      title: 'Exercise 6: power(base, exponent=2)',
      summary: 'Use a default and then override it',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 6: power(base, exponent=2)' },
        {
          type: 'p',
          text: 'Write a function power(base, exponent=2) that returns base to the exponent. Call it once with just a base, and once with both.',
        },
        {
          type: 'hint',
          id: 'default-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Remember ** from Basic Syntax: it means “to the power of”. Return base ** exponent, then print power(5) and power(2, 3).',
            },
          ],
        },
        {
          type: 'hint',
          id: 'default-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6.py',
              code: `def power(base, exponent=2):
    return base ** exponent

print(power(5))
print(power(2, 3))`,
            },
            {
              type: 'p',
              text: 'power(5) gives 25 using the default; power(2, 3) gives 8 because the 3 overrides it.',
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Turn the zoo pricing from Conditionals into a function: ticket_price(age, is_member=False). It should return the price for the age, minus 20 DKK for members unless the ticket is already free. Print the price for a 30-year-old non-member, a 30-year-old member, and a 2-year-old member.',
        },
        {
          type: 'hint',
          id: 'default-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Most visitors are not members, so is_member defaults to False. Put the if / elif / else price chain and the discount check inside the function, then return the price.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'default-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6_advanced.py',
              code: `def ticket_price(age, is_member=False):
    if age < 3:
        price = 0
    elif age <= 12:
        price = 50
    elif age <= 64:
        price = 120
    else:
        price = 80

    if is_member and price > 0:
        price = price - 20

    return price

print(ticket_price(30))         # 120
print(ticket_price(30, True))   # 100
print(ticket_price(2, True))    # 0`,
            },
          ],
        },
      ],
    },
  ],
};

export const FUNCTION_SECTION_07: CourseGroupItem = {
  id: 'refactor-guessing-game',
  title: 'Section 7: Capstone: Refactor the Guessing Game',
  summary: 'Rebuild the guessing game out of functions',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Capstone: Refactor the Guessing Game' },
    {
      type: 'p',
      text: 'Take the guessing game from the Loops chapter and reshape it into functions. The game already works, so the challenge is shape, not logic. Each function has one clear job.',
    },
    {
      type: 'labelValue',
      label: 'Aim for these functions:',
      list: {
        ordered: false,
        items: [
          'pick_secret() returns a random number from 1 to 20.',
          'get_guess() asks the player and returns their number.',
          'check_guess(guess, secret) prints "Higher" or "Lower", and returns True if the guess was correct.',
          'play_game() ties it all together: get the secret, loop until the player wins, count the attempts.',
        ],
      },
    },
    { type: 'p', text: 'Then call play_game() to start.' },
    {
      type: 'callout',
      variant: 'info',
      text: 'check_guess is where the return-versus-print lesson pays off: it both tells the player (print) and tells the loop whether to stop (return). Give yourself 25 to 30 minutes, then compare your new version with the old one. Notice how much easier it is to read and change.',
    },
  ],
  children: [
    {
      id: 'refactor-guessing-game-quiz',
      title: 'Quiz',
      summary: 'Check you are ready for the capstone',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'why-refactor',
          prompt: 'The guessing game already works. Why rebuild it out of functions?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'To make it pick better random numbers.',
              wrongExplanation: 'The logic stays the same. Only the shape changes.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'So each part has one clear job, which makes it easier to read and change.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The challenge is shape, not logic.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because programs without functions do not run.',
              wrongExplanation: 'The old version runs fine. Functions make it tidier.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'To make the game harder for the player.',
              wrongExplanation: 'The player experience stays the same.',
            },
          ],
        },
        {
          id: 'check-guess-both',
          prompt: 'Why does check_guess both print and return?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It does not need to; print alone is enough.',
              wrongExplanation: 'The loop needs a value to decide whether to stop. print gives it nothing.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'So the result is shown twice.',
              wrongExplanation: 'return does not show anything on the screen.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because every function must use both.',
              wrongExplanation: 'Many functions only return, or only print.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'print tells the player Higher or Lower; return tells the loop whether to stop.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Two audiences: the person and the program.',
            },
          ],
        },
        {
          id: 'get-guess-returns',
          prompt: 'What should get_guess() do with the number the player types?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Convert it with int() and return it.',
              wrongExplanation: '',
              correctExplanation: 'Correct. play_game needs the number to pass on to check_guess.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Print it.',
              wrongExplanation: 'A printed guess cannot be compared with the secret.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Compare it with the secret.',
              wrongExplanation: 'That is check_guess’s job. Each function does one job.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing; input() shares it automatically.',
              wrongExplanation: 'Values stay inside a function unless you return them.',
            },
          ],
        },
        {
          id: 'start-game',
          prompt: 'All four functions are defined. What actually starts the game?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Defining play_game.',
              wrongExplanation: 'Defining a function does not run it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'import random.',
              wrongExplanation: 'That only makes the random tools available.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Calling play_game() at the bottom of the file.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Define first, then call.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing; Python runs every function automatically.',
              wrongExplanation: 'A function only runs when it is called.',
            },
          ],
        },
        {
          id: 'attempts-location',
          prompt: 'Where should the attempts counter live?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Inside check_guess, starting at 0 each time.',
              wrongExplanation: 'check_guess runs once per guess, so it would reset every time.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Inside play_game: start it at 0 before the loop, add 1 for each guess.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The accumulator pattern, inside the function that owns the loop.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Inside pick_secret.',
              wrongExplanation: 'pick_secret has one job: choosing the secret.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It is not needed any more.',
              wrongExplanation: 'The game still shows how many guesses the player used.',
            },
          ],
        },
      ],
    },
    {
      id: 'refactor-guessing-game-exercise',
      title: 'Exercise: Refactor the Guessing Game',
      summary: 'Build the game from focused functions',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Refactor the Guessing Game' },
        {
          type: 'labelValue',
          label: 'Reshape your guessing game into these functions:',
          list: {
            ordered: true,
            items: [
              'pick_secret() returns a random number from 1 to 20.',
              'get_guess() asks the player and returns their number.',
              'check_guess(guess, secret) prints "Higher" or "Lower", and returns True if the guess was correct.',
              'play_game() ties it all together: get the secret, loop until the player wins, count the attempts.',
              'Then call play_game() to start.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'refactor-exercise-hint-1',
          title: 'Hint 1: Start with the small functions',
          blocks: [
            {
              type: 'p',
              text: 'pick_secret and get_guess are one line each: return random.randint(1, 20) and return int(input(...)). Keep import random at the top of the file.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'refactor-exercise-hint-2',
          title: 'Hint 2: Let check_guess answer a question',
          blocks: [
            {
              type: 'p',
              text: 'Inside play_game, write if check_guess(guess, secret): and break inside it. check_guess returns False for a wrong guess and True for a correct one.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'refactor-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'guessing_game_functions.py',
              code: `import random

def pick_secret():
    return random.randint(1, 20)

def get_guess():
    return int(input("Guess a number (1-20): "))

def check_guess(guess, secret):
    if guess < secret:
        print("Higher!")
        return False
    elif guess > secret:
        print("Lower!")
        return False
    else:
        return True

def play_game():
    secret = pick_secret()
    attempts = 0

    while True:
        guess = get_guess()
        attempts = attempts + 1
        if check_guess(guess, secret):
            print(f"Correct! You got it in {attempts} guesses.")
            break

play_game()`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'labelValue',
          label: 'Now that the game is made of functions, extend it:',
          list: {
            ordered: true,
            items: [
              'Give pick_secret a default parameter, highest=20, so the range can change.',
              'Let play_game take highest and max_attempts (default 5) and return True if the player won.',
              'Ask “Play again? (yes/no)” after each game, and count the wins.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'refactor-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Inside play_game, loop while attempts < max_attempts and use return True as soon as the guess is correct. If the loop finishes, the player ran out of guesses: reveal the secret and return False. Outside, use a while True loop with a wins accumulator.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'refactor-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'guessing_game_functions_advanced.py',
              code: `import random

def pick_secret(highest=20):
    return random.randint(1, highest)

def get_guess(highest):
    return int(input(f"Guess a number (1-{highest}): "))

def check_guess(guess, secret):
    if guess < secret:
        print("Higher!")
        return False
    elif guess > secret:
        print("Lower!")
        return False
    else:
        return True

def play_game(highest=20, max_attempts=5):
    secret = pick_secret(highest)
    attempts = 0

    while attempts < max_attempts:
        guess = get_guess(highest)
        attempts = attempts + 1
        if check_guess(guess, secret):
            print(f"Correct! You got it in {attempts} guesses.")
            return True

    print(f"Out of guesses! The number was {secret}.")
    return False

wins = 0

while True:
    if play_game():
        wins = wins + 1
    again = input("Play again? (yes/no) ")
    if again != "yes":
        break

print(f"Thanks for playing! You won {wins} game(s).")`,
            },
          ],
        },
      ],
    },
  ],
};
