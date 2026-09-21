import { CourseGroupItem } from '../../course.model';

export const FUNCTION_SECTION_01: CourseGroupItem = {
  id: 'defining-functions', title: 'Section 1: Defining and Calling Functions', summary: 'Name work you want to reuse', type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Why Functions?' },
    { type: 'p', text: 'Functions prevent repeated code. Give each function one job and a clear name, then fix or change that job in one place.' },
    { type: 'image', src: 'assets/chapter8-functions.png', alt: 'Hand-drawn illustration of labelled function containers', caption: 'Course artwork from the Functions section.' },
    { type: 'p', text: 'Use def to define a function. Defining it does not run it. Calling the function name followed by brackets runs the code inside it.' },
    { type: 'code', language: 'python', filename: 'functions.py', code: `def cheer():\n    print('Go team!')\n    print('Go team!')\n\ncheer()\ncheer()\ncheer()` },
  ],
  children: [{ id: 'defining-functions-exercise', title: 'Exercise', summary: 'Define and call a function', type: 'content', blocks: [
    { type: 'h2', text: 'Exercise: cheer()' },
    { type: 'p', text: 'Write a function named cheer that prints “Go team!” twice. Call it three times.' },
  ] }],
};

export const FUNCTION_SECTION_02: CourseGroupItem = {
  id: 'parameters-and-returns', title: 'Section 2: Parameters and Return Values', summary: 'Give functions values and get results back', type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Parameters and Arguments' },
    { type: 'p', text: 'A parameter is a placeholder in a function definition. An argument is the real value supplied when you call the function.' },
    { type: 'code', language: 'python', filename: 'welcome.py', code: `def welcome(city):\n    print(f'Welcome to {city}')\n\nwelcome('Copenhagen')\nwelcome('Aarhus')` },
    { type: 'h3', text: 'return and print' },
    { type: 'p', text: 'print shows a value on screen. return sends a value back to the caller so the program can store it or use it in further calculations.' },
    { type: 'code', language: 'python', filename: 'double.py', code: `def double(number):\n    return number * 2\n\nresult = double(8)\nprint(result)` },
  ],
  children: [{ id: 'parameters-and-returns-exercise', title: 'Exercise', summary: 'Use parameters and return', type: 'content', blocks: [
    { type: 'h2', text: 'Exercise: Reusable Calculations' },
    { type: 'labelValue', label: 'Write these functions:', list: { ordered: true, items: ['welcome(city), then call it with two cities.', 'double(number), return the number multiplied by two, then print double(8).', 'rectangle_area(width, height), return the area, then print the area of a 4 by 6 rectangle.'] } },
  ] }],
};

export const FUNCTION_SECTION_03: CourseGroupItem = {
  id: 'default-parameters-and-refactoring', title: 'Section 3: Default Parameters and Refactoring', summary: 'Organise the guessing game with functions', type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Default Parameters' },
    { type: 'p', text: 'A default parameter provides a value when the caller leaves that argument out. A supplied argument replaces the default.' },
    { type: 'code', language: 'python', filename: 'power.py', code: `def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(5))\nprint(power(2, 3))` },
    { type: 'h3', text: 'Capstone: Refactor the Guessing Game' },
    { type: 'p', text: 'Reshape the guessing game from Chapter 7 so each function has a clear, reusable responsibility.' },
  ],
  children: [{ id: 'refactor-guessing-game-exercise', title: 'Exercise: Refactor the Guessing Game', summary: 'Build a program from focused functions', type: 'content', blocks: [
    { type: 'h2', text: 'Refactor the Guessing Game' },
    { type: 'labelValue', label: 'Aim for these functions:', list: { ordered: false, items: ['pick_secret() returns a random number from 1 to 20.', 'get_guess() asks the player and returns a number.', 'check_guess(guess, secret) prints Higher or Lower and returns True for a correct guess.', 'play_game() combines the functions, loops until the player wins, and counts attempts.'] } },
    { type: 'hint', id: 'refactor-guessing-game-hint', title: 'Hint: Start with one focused function', blocks: [{ type: 'code', language: 'python', filename: 'functions_game.py', code: `import random\n\ndef pick_secret():\n    return random.randint(1, 20)\n\ndef get_guess():\n    return int(input('Your guess: '))` }] },
  ] }],
};
