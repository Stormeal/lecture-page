import { CourseGroupItem } from '../../course.model';

export const LOOP_SECTION_01: CourseGroupItem = {
  id: 'while-loops', title: 'Section 1: while Loops', summary: 'Repeat while a condition is true', type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Iteration and while Loops' },
    { type: 'p', text: 'Iteration means repeating instructions. A while loop checks a condition, runs its block while that condition remains True, then stops when it becomes False.' },
    { type: 'image', src: 'assets/chapter7-loops.png', alt: 'Hand-drawn illustration of a repeating loop', caption: 'Course artwork from the Loops section.' },
    { type: 'code', language: 'python', filename: 'count.py', code: `number = 1\n\nwhile number <= 10:\n    print(number)\n    number = number + 1` },
    { type: 'callout', variant: 'warning', text: 'A while loop needs something inside its block that eventually makes the condition False. Without it, the program loops forever. Press Ctrl + C in a terminal to stop an accidental infinite loop.' },
  ],
  children: [{
    id: 'while-loops-exercise', title: 'Exercise', summary: 'Practise controlled repetition', type: 'content', blocks: [
      { type: 'h2', text: 'Exercise: Count to Ten' },
      { type: 'labelValue', label: 'Try these steps:', list: { ordered: true, items: ['Use a while loop to print 1 through 10.', 'Remove the line that updates the number, observe the loop, then stop it with Ctrl + C.', 'Restore the update and explain why the loop now stops.'] } },
    ],
  }],
};

export const LOOP_SECTION_02: CourseGroupItem = {
  id: 'lists-for-range', title: 'Section 2: Lists, for-in, and range()', summary: 'Repeat over collections and numbers', type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Lists and for-in Loops' },
    { type: 'p', text: 'A list stores several values in one variable. A for-in loop runs once for every item in a collection, then stops when no items remain.' },
    { type: 'code', language: 'python', filename: 'names.py', code: `names = ['Ada', 'Linus', 'Grace']\n\nfor name in names:\n    print(f'Hello {name}')` },
    { type: 'h3', text: 'Counting with range()' },
    { type: 'p', text: 'range() produces a sequence of numbers. range(5) gives 0 through 4. range(1, 6) gives 1 through 5 because Python stops before the final number.' },
    { type: 'code', language: 'python', filename: 'table.py', code: `for number in range(7, 71, 7):\n    print(number)` },
  ],
  children: [{
    id: 'lists-for-range-exercise', title: 'Exercise', summary: 'Loop through lists and ranges', type: 'content', blocks: [
      { type: 'h2', text: 'Exercise: Collections and Counting' },
      { type: 'labelValue', label: 'Complete these tasks:', list: { ordered: true, items: ['Create a list of three favourite foods and print the first item.', 'Create a list of three names and greet each one with a for-in loop.', 'Use range() to print the 7 times table from 7 to 70.'] } },
    ],
  }],
};

export const LOOP_SECTION_03: CourseGroupItem = {
  id: 'accumulators-and-guessing-game', title: 'Section 3: Accumulators and the Guessing Game', summary: 'Build a loop-based program', type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Accumulators, break, and continue' },
    { type: 'p', text: 'An accumulator starts before a loop and changes a little during each iteration to build a result. break ends a loop immediately. continue skips the rest of the current iteration.' },
    { type: 'code', language: 'python', filename: 'total.py', code: `total = 0\n\nfor number in range(1, 101):\n    total = total + number\n\nprint(total)` },
    { type: 'h3', text: 'Capstone: Guessing Game' },
    { type: 'p', text: 'Build a game where the computer picks a number from 1 to 20 and the player keeps guessing until they find it. Tell the player whether the secret number is higher or lower, and count their attempts.' },
  ],
  children: [{
    id: 'guessing-game-exercise', title: 'Exercise: Guessing Game', summary: 'Combine loops, conditions, and input', type: 'content', blocks: [
      { type: 'h2', text: 'Number Guessing Game' },
      { type: 'labelValue', label: 'Your program should:', list: { ordered: true, items: ['Import random and choose a secret number from 1 to 20.', 'Keep asking for guesses until the player is correct.', 'Print “Higher” or “Lower” after an incorrect guess.', 'Count the guesses and congratulate the player when they win.'] } },
      { type: 'hint', id: 'guessing-game-hint', title: 'Hint: Start the game loop', blocks: [{ type: 'code', language: 'python', filename: 'guessing_game.py', code: `import random\n\nsecret = random.randint(1, 20)\nattempts = 0\n\nwhile True:\n    guess = int(input('Your guess: '))\n    attempts = attempts + 1\n\n    if guess == secret:\n        break` }] },
    ],
  }],
};
