import { CourseGroupItem } from '../../course.model';

export const LOOP_SECTION_01: CourseGroupItem = {
  id: 'while-loops',
  title: 'Section 1: Iteration and while',
  summary: 'Repeat a block while a condition stays True',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Doing It Again: Iteration' },
    {
      type: 'image',
      src: 'assets/chapter7-loops.png',
      alt: 'Hand-drawn illustration of a repeating loop',
      caption: 'Course artwork from the Loops section.',
    },
    {
      type: 'p',
      text: 'So far, every line runs once. But real programs often need to repeat something many times. Imagine printing the numbers 1 to 100: you would not write 100 print lines.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `# Without a loop (tedious)
print("Hello")
print("Hello")
print("Hello")`,
    },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Iteration means repeating a set of instructions. Each repeat is called one iteration.',
          'A loop keeps repeating as long as it is told to, then stops.',
          'Two questions every loop answers: what do I repeat, and when do I stop?',
        ],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'Repeat While True: while' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A while loop repeats its block as long as a condition stays True.',
          'It checks the condition, runs the block, checks again, and so on.',
          'Something inside the loop must eventually make the condition False, or it never stops.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `count = 1

while count <= 5:
    print(count)
    count = count + 1     # this line is what ends the loop

print("Done")`,
    },
    {
      type: 'p',
      text: 'Trace it out loud: count is 1, the condition is True, print, count becomes 2, and so on until count is 6 and the condition is False. Then the loop stops and Done is printed.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'count = count + 1 is the single line that makes the difference between a loop that ends and one that runs forever.',
    },
  ],
  children: [
    {
      id: 'while-loops-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of while',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'iteration-meaning',
          prompt: 'What does iteration mean?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Making a decision between two paths.',
              wrongExplanation: 'That is what if and else do.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Repeating a set of instructions. Each repeat is one iteration.',
              wrongExplanation: '',
              correctExplanation: 'Correct. A loop is how you make a program iterate.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Storing several values in one variable.',
              wrongExplanation: 'That is a list.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Fixing an error in the code.',
              wrongExplanation: 'That is debugging.',
            },
          ],
        },
        {
          id: 'loop-two-questions',
          prompt: 'Which two questions does every loop answer?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Who wrote it, and when?',
              wrongExplanation: 'Those are questions for a comment, not for the loop.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'How fast, and how big?',
              wrongExplanation: 'A loop is about repetition, not speed or size.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Which file, and which line?',
              wrongExplanation: 'Think about what the loop itself needs to know.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'What do I repeat, and when do I stop?',
              wrongExplanation: '',
              correctExplanation: 'Correct. This is the mental model for both kinds of loop.',
            },
          ],
        },
        {
          id: 'while-repeats-when',
          prompt: 'How long does a while loop keep repeating?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'As long as its condition stays True.',
              wrongExplanation: '',
              correctExplanation: 'Correct. It checks the condition before every round.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Exactly ten times.',
              wrongExplanation: 'There is no fixed number. The condition decides.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Until the condition becomes True.',
              wrongExplanation: 'It is the other way around: it stops when the condition becomes False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only once.',
              wrongExplanation: 'Running once would not be a loop.',
            },
          ],
        },
        {
          id: 'while-output',
          prompt: 'What does the example print?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '1 2 3 4 5 6 and then Done',
              wrongExplanation: 'When count is 6, the condition count <= 5 is False, so 6 is not printed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only Done',
              wrongExplanation: 'count starts at 1, so the condition is True at first.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '1 2 3 4 5 and then Done',
              wrongExplanation: '',
              correctExplanation: 'Correct. Each number on its own line, then Done once the loop ends.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '1 forever',
              wrongExplanation: 'count = count + 1 moves the condition towards False, so it stops.',
            },
          ],
        },
        {
          id: 'what-ends-loop',
          prompt: 'Which line makes the example loop stop eventually?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'count = count + 1',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Without it, count stays 1 and the condition never becomes False.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'print(count)',
              wrongExplanation: 'Printing does not change count, so it cannot end the loop.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'print("Done")',
              wrongExplanation: 'This runs after the loop has already ended.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'count = 1',
              wrongExplanation: 'This sets the starting value before the loop.',
            },
          ],
        },
      ],
    },
    {
      id: 'while-loops-exercise',
      title: 'Exercise 1: Count to Ten',
      summary: 'Your first while loop',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 1: Count to Ten' },
        { type: 'p', text: 'Use a while loop to print the numbers from 1 to 10.' },
        {
          type: 'hint',
          id: 'while-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Start from the example on the topic page. You only need to change the number in the condition.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'while-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1.py',
              code: `count = 1

while count <= 10:
    print(count)
    count = count + 1`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Make a rocket countdown. Use a while loop to count down from 10 to 1, then print "Lift off!" once the loop has finished.',
        },
        {
          type: 'hint',
          id: 'while-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Start count at 10 and make it smaller each time. The condition has to flip too: keep going while count is at least 1. Lift off! goes after the loop, not inside it.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'while-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1_advanced.py',
              code: `count = 10

while count >= 1:
    print(count)
    count = count - 1

print("Lift off!")`,
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_02: CourseGroupItem = {
  id: 'infinite-loops',
  title: 'Section 2: Avoiding Infinite Loops',
  summary: 'Recognise, stop, and fix a loop that never ends',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Avoiding Infinite Loops' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'An infinite loop is a loop whose condition never becomes False. The program freezes and keeps going forever.',
          'Most often the cause is forgetting to change the variable the condition checks.',
          'If your program hangs, you can stop it with Ctrl + C in the terminal.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `count = 1

while count <= 5:
    print(count)
    # forgot count = count + 1, so count stays 1 forever`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Everyone triggers an infinite loop sooner or later. It is much less scary once you have done it on purpose and recovered. The fix is always the same: make sure something moves the condition towards False.',
    },
  ],
  children: [
    {
      id: 'infinite-loops-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of infinite loops',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'infinite-definition',
          prompt: 'What is an infinite loop?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A loop that runs exactly 1000 times.',
              wrongExplanation: 'Any fixed number of rounds eventually ends.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A loop that never runs.',
              wrongExplanation: 'That happens when the condition is False from the start.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A loop whose condition never becomes False, so it keeps going forever.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The program freezes and keeps repeating.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A loop that uses a list.',
              wrongExplanation: 'Looping over a list stops when the items run out.',
            },
          ],
        },
        {
          id: 'infinite-cause',
          prompt: 'What is the most common cause of an infinite loop?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Forgetting to change the variable the condition checks.',
              wrongExplanation: '',
              correctExplanation: 'Correct. If the variable never changes, the condition never changes either.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Using print inside a loop.',
              wrongExplanation: 'Printing is fine. It does not affect when the loop stops.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Writing the loop in VS Code.',
              wrongExplanation: 'The editor does not cause infinite loops.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Using a number in the condition.',
              wrongExplanation: 'Numbers in conditions are normal and fine.',
            },
          ],
        },
        {
          id: 'stop-program',
          prompt: 'Your program is stuck in an infinite loop. How do you stop it?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Type stop and press Enter.',
              wrongExplanation: 'The program is not reading your input. It is busy looping.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Wait for it to finish.',
              wrongExplanation: 'An infinite loop never finishes on its own.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Restart the computer.',
              wrongExplanation: 'There is a much quicker way.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Press Ctrl + C in the terminal.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Ctrl + C interrupts the running program.',
            },
          ],
        },
        {
          id: 'broken-loop-output',
          prompt: 'What does the broken example do when you run it?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Prints 1 2 3 4 5 and stops.',
              wrongExplanation: 'count is never increased, so it stays 1.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Prints 1 over and over, forever.',
              wrongExplanation: '',
              correctExplanation: 'Correct. count stays 1, so count <= 5 is always True.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Prints nothing.',
              wrongExplanation: 'The condition is True from the start, so it prints.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Shows an error straight away.',
              wrongExplanation: 'The code is valid Python. It just never stops.',
            },
          ],
        },
        {
          id: 'fix-broken-loop',
          prompt: 'How do you fix the broken example?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Change the condition to count <= 500.',
              wrongExplanation: 'count still stays 1, so it still loops forever.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Add count = count + 1 after the loop.',
              wrongExplanation: 'After the loop is too late. Python never gets there.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Add count = count + 1 inside the loop, indented under print.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Now each round moves count towards making the condition False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Remove the print line.',
              wrongExplanation: 'Then it loops forever and silently.',
            },
          ],
        },
      ],
    },
    {
      id: 'infinite-loops-exercise',
      title: 'Exercise 2: Break It, Then Fix It',
      summary: 'Trigger an infinite loop on purpose and recover',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 2: Break It, Then Fix It' },
        {
          type: 'p',
          text: 'Run the broken loop from the topic page on purpose. Watch it spam, stop it with Ctrl + C, then add the missing line to fix it.',
        },
        {
          type: 'hint',
          id: 'infinite-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Run it from a terminal so Ctrl + C reaches the program. The missing line belongs inside the loop, indented to line up with print.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'infinite-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2.py',
              code: `count = 1

while count <= 5:
    print(count)
    count = count + 1`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'This loop should count down from 10 to 1, but it never stops. Before you run it, find the bug. Then run it, stop it with Ctrl + C, and fix it.',
        },
        {
          type: 'code',
          language: 'python',
          filename: 'exercise_2_advanced.py',
          code: `count = 10

while count > 0:
    print(count)
    count = count + 1`,
        },
        {
          type: 'hint',
          id: 'infinite-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The variable does change this time. Ask yourself: does the change move the condition towards False, or away from it?',
            },
          ],
        },
        {
          type: 'hint',
          id: 'infinite-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2_advanced.py',
              code: `count = 10

while count > 0:
    print(count)
    count = count - 1`,
            },
            {
              type: 'p',
              text: 'count was going up, so count > 0 stayed True forever. Counting down moves it towards False.',
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_03: CourseGroupItem = {
  id: 'python-lists',
  title: 'Section 3: Holding Many Values: Lists',
  summary: 'Store several values in one variable',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Holding Many Values: Lists' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A list stores several values in one variable, written in square brackets.',
          'The values can be text, numbers, anything. They keep their order.',
          'We need lists because the next loop, for-in, loves to walk through them.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `animals = ["lion", "tiger", "bear"]

print(animals)        # the whole list
print(animals[0])     # "lion"  (counting starts at 0)`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The one surprise: counting starts at 0, so the first item is index 0, the second is index 1, and so on.',
    },
  ],
  children: [
    {
      id: 'python-lists-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of lists',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'list-brackets',
          prompt: 'How do you write a list in Python?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'animals = ("lion", "tiger", "bear")',
              wrongExplanation: 'Round brackets make something else. Lists use square brackets.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'animals = ["lion", "tiger", "bear"]',
              wrongExplanation: '',
              correctExplanation: 'Correct. Square brackets, with the values separated by commas.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'animals = "lion", "tiger", "bear"',
              wrongExplanation: 'A list needs square brackets around the values.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'animals = lion + tiger + bear',
              wrongExplanation: 'Without quotes these are names, and + does not build a list.',
            },
          ],
        },
        {
          id: 'first-index',
          prompt: 'Which index gives you the first item in a list?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '0',
              wrongExplanation: '',
              correctExplanation: 'Correct. Counting starts at 0, so animals[0] is "lion".',
            },
            {
              id: 'b',
              label: 'b)',
              text: '1',
              wrongExplanation: 'Index 1 is the second item. Counting starts at 0.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'first',
              wrongExplanation: 'You use a number in square brackets.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '-0',
              wrongExplanation: 'The first index is simply 0.',
            },
          ],
        },
        {
          id: 'second-item',
          prompt: 'animals = ["lion", "tiger", "bear"]. What does print(animals[1]) show?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'lion',
              wrongExplanation: 'lion is at index 0.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'bear',
              wrongExplanation: 'bear is at index 2.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error.',
              wrongExplanation: 'Index 1 exists in a list of three items.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'tiger',
              wrongExplanation: '',
              correctExplanation: 'Correct. Index 1 is the second item, because counting starts at 0.',
            },
          ],
        },
        {
          id: 'print-whole-list',
          prompt: 'What does print(animals) show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only lion.',
              wrongExplanation: 'Without an index, you get the whole list.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'animals',
              wrongExplanation: 'There are no quotes around animals, so its value is shown.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The whole list: [\'lion\', \'tiger\', \'bear\']',
              wrongExplanation: '',
              correctExplanation: 'Correct. Python prints the list with its brackets and quotes.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error, because a list cannot be printed.',
              wrongExplanation: 'You can print a whole list.',
            },
          ],
        },
        {
          id: 'list-contents',
          prompt: 'Which statement about lists is true?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A list can only hold numbers.',
              wrongExplanation: 'The values can be text, numbers, anything.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A list can hold text, numbers, anything, and keeps the order.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The order you write them in is the order they stay in.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A list sorts its values alphabetically.',
              wrongExplanation: 'A list keeps the order you gave it.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A list can only hold one value.',
              wrongExplanation: 'The whole point is to hold several values in one variable.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-lists-exercise',
      title: 'Exercise 3: Favourite Foods',
      summary: 'Make a list and pick out an item',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 3: Favourite Foods' },
        {
          type: 'p',
          text: 'Make a list of three of your favourite foods and print the first one.',
        },
        {
          type: 'hint',
          id: 'lists-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Each food is text, so it needs quotes. Separate them with commas inside square brackets. The first item is index 0.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'lists-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3.py',
              code: `foods = ["pizza", "sushi", "lasagne"]
print(foods[0])`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Print the last food in your list. Then replace the second food with something new and print the whole list to check that it changed.',
        },
        {
          type: 'hint',
          id: 'lists-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'With three items, the last one is index 2. You can put a new value into a position the same way you put a value into a variable: foods[1] = "...".',
            },
          ],
        },
        {
          type: 'hint',
          id: 'lists-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3_advanced.py',
              code: `foods = ["pizza", "sushi", "lasagne"]
print(foods[2])

foods[1] = "tacos"
print(foods)`,
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_04: CourseGroupItem = {
  id: 'for-in-loops',
  title: 'Section 4: The for-in Loop',
  summary: 'Run a block once for every item',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'The for-in Loop' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A for-in loop runs its block once for every item in a collection.',
          'Each time around, the loop variable holds the next item.',
          'No counter to manage, and no risk of an infinite loop. It stops when the items run out.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `animals = ["lion", "tiger", "bear"]

for animal in animals:
    print("The zoo has a", animal)`,
    },
    {
      type: 'p',
      text: 'Read it as plain English: “for each animal in animals”. Unlike while, you do not write a condition or a counter; the loop handles stopping for you. for-in is the loop you reach for when you have a collection to go through.',
    },
  ],
  children: [
    {
      id: 'for-in-loops-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of for-in',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'for-runs-how-often',
          prompt: 'How many times does a for-in loop run its block?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Once for every item in the collection.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Three animals means three rounds.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Until a condition becomes False.',
              wrongExplanation: 'That describes while. for-in has no condition.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Exactly ten times.',
              wrongExplanation: 'It depends on how many items there are.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Forever.',
              wrongExplanation: 'for-in stops when the items run out.',
            },
          ],
        },
        {
          id: 'loop-variable',
          prompt: 'In for animal in animals:, what does animal hold?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The whole list every time.',
              wrongExplanation: 'animals is the whole list. animal holds one item.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The number of items.',
              wrongExplanation: 'It holds an item, not a count.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The next item each time around.',
              wrongExplanation: '',
              correctExplanation: 'Correct. First "lion", then "tiger", then "bear".',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Always "lion".',
              wrongExplanation: 'It moves on to the next item on each round.',
            },
          ],
        },
        {
          id: 'for-first-line',
          prompt: 'What is the first line the example prints?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The zoo has a animal',
              wrongExplanation: 'animal has no quotes, so its value is printed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The zoo has a bear',
              wrongExplanation: 'The loop goes through the list in order, starting with lion.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The zoo has a [\'lion\', \'tiger\', \'bear\']',
              wrongExplanation: 'Each round prints one item, not the whole list.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The zoo has a lion',
              wrongExplanation: '',
              correctExplanation: 'Correct. Then tiger, then bear.',
            },
          ],
        },
        {
          id: 'for-no-infinite',
          prompt: 'Why can a for-in loop over a list not run forever?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Python stops every loop after 100 rounds.',
              wrongExplanation: 'There is no such limit.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It stops when the items run out.',
              wrongExplanation: '',
              correctExplanation: 'Correct. There is no counter or condition for you to forget.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'You must press Ctrl + C to end it.',
              wrongExplanation: 'It ends on its own.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It only ever runs once.',
              wrongExplanation: 'It runs once per item.',
            },
          ],
        },
        {
          id: 'for-or-while',
          prompt: 'When should you reach for for-in rather than while?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When you have a collection to go through.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. while is for “keep going until something changes”.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'When you want the loop to run forever.',
              wrongExplanation: 'for-in over a list always ends.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Never; while is always better.',
              wrongExplanation: 'for-in is simpler when you have a collection.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only when the list is empty.',
              wrongExplanation: 'An empty list would make the loop run zero times.',
            },
          ],
        },
      ],
    },
    {
      id: 'for-in-loops-exercise',
      title: 'Exercise 4: Hello, Everyone',
      summary: 'Greet every name in a list',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 4: Hello, Everyone' },
        {
          type: 'p',
          text: 'Make a list of three names and use a for-in loop to print "Hello" to each one.',
        },
        {
          type: 'hint',
          id: 'for-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Pick a loop variable name that reads well, such as name for a list called names. Inside the loop, print "Hello" together with name.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'for-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4.py',
              code: `names = ["Ada", "Linus", "Grace"]

for name in names:
    print("Hello", name)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Combine a loop with decisions. Make a list of temperatures, such as [12, 25, -3, 30, 0]. Loop through it and print each temperature with "Freezing" below 0, "Cool" from 0 to 20, and "Warm" above 20.',
        },
        {
          type: 'hint',
          id: 'for-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'This is Exercise 5 from Conditionals, put inside a loop. The if / elif / else goes inside the for block, so it is indented one level further.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'for-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4_advanced.py',
              code: `temperatures = [12, 25, -3, 30, 0]

for temperature in temperatures:
    if temperature < 0:
        print(temperature, "Freezing")
    elif temperature <= 20:
        print(temperature, "Cool")
    else:
        print(temperature, "Warm")`,
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_05: CourseGroupItem = {
  id: 'python-range',
  title: 'Section 5: Counting with range()',
  summary: 'Loop over a sequence of numbers',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Counting with range()' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'range() produces a sequence of numbers to loop over.',
          'range(5) gives 0, 1, 2, 3, 4. It starts at 0 and stops before the number you give.',
          'You can also give a start and an end: range(1, 6) gives 1, 2, 3, 4, 5.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `for i in range(5):
    print(i)          # 0 1 2 3 4

for i in range(1, 6):
    print(i)          # 1 2 3 4 5`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The “stops before the end number” rule trips everyone up at first. range(5) does not include 5.',
    },
  ],
  children: [
    {
      id: 'python-range-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of range()',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'range-five',
          prompt: 'Which numbers does range(5) give?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '1, 2, 3, 4, 5',
              wrongExplanation: 'range starts at 0 unless you give a start.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '0, 1, 2, 3, 4, 5',
              wrongExplanation: 'range stops before the number you give, so 5 is not included.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '0, 1, 2, 3, 4',
              wrongExplanation: '',
              correctExplanation: 'Correct. Five numbers, starting at 0 and stopping before 5.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only 5',
              wrongExplanation: 'range gives a sequence of numbers, not a single one.',
            },
          ],
        },
        {
          id: 'range-start-end',
          prompt: 'Which numbers does range(1, 6) give?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '1, 2, 3, 4, 5',
              wrongExplanation: '',
              correctExplanation: 'Correct. It starts at 1 and stops before 6.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '1, 2, 3, 4, 5, 6',
              wrongExplanation: 'The end number, 6, is not included.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '0, 1, 2, 3, 4, 5',
              wrongExplanation: 'With a start of 1, the sequence begins at 1.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '1 and 6',
              wrongExplanation: 'range gives every whole number in between, not just the two ends.',
            },
          ],
        },
        {
          id: 'range-includes-end',
          prompt: 'Does range(5) include the number 5?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Yes, always.',
              wrongExplanation: 'range stops before the number you give.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only if you print it.',
              wrongExplanation: 'Printing does not change which numbers range gives.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only on Windows.',
              wrongExplanation: 'range behaves the same everywhere.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'No. It stops before the number you give.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Say it twice: range(5) does not include 5.',
            },
          ],
        },
        {
          id: 'range-times',
          prompt: 'How many times does for i in range(3): run its block?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '2',
              wrongExplanation: 'range(3) gives 0, 1, 2: that is three numbers.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '3',
              wrongExplanation: '',
              correctExplanation: 'Correct. Once for 0, once for 1, once for 2.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '4',
              wrongExplanation: '3 itself is not included.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Forever.',
              wrongExplanation: 'A for loop over range stops when the numbers run out.',
            },
          ],
        },
        {
          id: 'range-last-number',
          prompt: 'What is the last number in range(1, 10)?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '10',
              wrongExplanation: 'The end number is not included.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '1',
              wrongExplanation: '1 is the first number.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '11',
              wrongExplanation: 'range never goes past the end number.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '9',
              wrongExplanation: '',
              correctExplanation: 'Correct. It stops before 10.',
            },
          ],
        },
        {
          id: 'range-seven-table',
          prompt: 'Which loop prints the 7 times table from 7 up to 70?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'for i in range(10): print(i * 7)',
              wrongExplanation: 'range(10) starts at 0, so this prints 0 to 63.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'for i in range(1, 10): print(i * 7)',
              wrongExplanation: 'This stops before 10, so it ends at 63.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'for i in range(1, 11): print(i * 7)',
              wrongExplanation: '',
              correctExplanation: 'Correct. i goes from 1 to 10, so the results are 7 to 70.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'for i in range(7, 70): print(i)',
              wrongExplanation: 'This prints every number from 7 to 69, not the times table.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-range-exercise',
      title: 'Exercise 5: The 7 Times Table',
      summary: 'Combine range() with maths',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 5: The 7 Times Table' },
        { type: 'p', text: 'Use range() to print the 7 times table from 7 up to 70.' },
        {
          type: 'hint',
          id: 'range-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Loop i over the numbers 1 to 10, and print i * 7 each time. Remember that range stops before the end number.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'range-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5.py',
              code: `for i in range(1, 11):
    print(i * 7)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user which times table they want. Print it as full sentences, from 1 up to 10, such as 3 x 7 = 21.',
        },
        {
          type: 'hint',
          id: 'range-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Convert the answer with int(). An f-string can show i, the table number, and the result of the multiplication in one line.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'range-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5_advanced.py',
              code: `table = int(input("Which times table? "))

for i in range(1, 11):
    print(f"{i} x {table} = {i * table}")`,
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_06: CourseGroupItem = {
  id: 'accumulator-pattern',
  title: 'Section 6: The Accumulator Pattern',
  summary: 'Build up a result one iteration at a time',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'The Accumulator Pattern' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'An accumulator is a variable you update a little on each iteration to build up a result.',
          'Start it before the loop, change it inside the loop, use it after.',
          'This is how you total, count, or average a series of values.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `total = 0                     # start before the loop

for number in [10, 20, 30]:
    total = total + number    # add each one

print(total)                  # 60`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Start, update, use. This pattern appears constantly: shopping carts, scores, statistics. The guessing game at the end of this chapter uses one to count guesses.',
    },
  ],
  children: [
    {
      id: 'accumulator-pattern-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of accumulators',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'accumulator-definition',
          prompt: 'What is an accumulator?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A list that holds every value.',
              wrongExplanation: 'An accumulator is a single variable that builds up a result.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A variable you update a little on each iteration to build up a result.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Like a running total.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A loop that never ends.',
              wrongExplanation: 'That is an infinite loop.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A way to stop a loop early.',
              wrongExplanation: 'That is break.',
            },
          ],
        },
        {
          id: 'accumulator-steps',
          prompt: 'What are the three steps of the accumulator pattern?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Print, loop, stop.',
              wrongExplanation: 'Think about where the variable is created, changed, and used.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Ask, convert, compare.',
              wrongExplanation: 'Those describe working with input, not an accumulator.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Start inside the loop, update after it, use before it.',
              wrongExplanation: 'The order is the other way around.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Start it before the loop, update it inside, use it after.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Start, update, use.',
            },
          ],
        },
        {
          id: 'accumulator-output',
          prompt: 'What does the example print?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '60',
              wrongExplanation: '',
              correctExplanation: 'Correct. 0 + 10 + 20 + 30.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '30',
              wrongExplanation: 'That is only the last number. The total adds all three.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '10, 20, 30 on three lines',
              wrongExplanation: 'print(total) is after the loop, so it runs once.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '0',
              wrongExplanation: 'total is updated inside the loop before it is printed.',
            },
          ],
        },
        {
          id: 'accumulator-reset',
          prompt: 'Someone moves total = 0 inside the loop, above the addition. What is printed now?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '60',
              wrongExplanation: 'total is reset to 0 at the start of every round.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '0',
              wrongExplanation: 'The last round still adds 30 after resetting.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '30',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Each round starts over from 0, so only the last number is left. That is why you start before the loop.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'The code runs; it just gives the wrong answer.',
            },
          ],
        },
        {
          id: 'accumulator-hundred',
          prompt: 'Which range should you loop over to add up all numbers from 1 to 100?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'range(100)',
              wrongExplanation: 'This gives 0 to 99, so 100 is missing.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'range(1, 101)',
              wrongExplanation: '',
              correctExplanation: 'Correct. It starts at 1 and stops before 101, so 100 is included.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'range(1, 100)',
              wrongExplanation: 'This stops before 100, so 100 is missing.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'range(101, 1)',
              wrongExplanation: 'The start must be smaller than the end, or the range is empty.',
            },
          ],
        },
      ],
    },
    {
      id: 'accumulator-pattern-exercise',
      title: 'Exercise 6: Add Up 1 to 100',
      summary: 'Use a loop and an accumulator',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 6: Add Up 1 to 100' },
        {
          type: 'p',
          text: 'Use a loop and an accumulator to add up all the numbers from 1 to 100.',
        },
        {
          type: 'hint',
          id: 'accumulator-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Start total at 0 before the loop. Loop over range(1, 101) and add each number to total. Print total after the loop.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'accumulator-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6.py',
              code: `total = 0

for n in range(1, 101):
    total = total + n

print(total)`,
            },
            { type: 'p', text: 'The answer is 5050.' },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user for five numbers, one at a time, inside a loop. Afterwards, print the total and the average.',
        },
        {
          type: 'hint',
          id: 'accumulator-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'range(5) runs the loop five times. Put the input() inside the loop and add each answer to the total. The average is the total divided by 5.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'accumulator-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6_advanced.py',
              code: `total = 0

for i in range(5):
    number = float(input("Enter a number: "))
    total = total + number

print("Total:", total)
print("Average:", total / 5)`,
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_07: CourseGroupItem = {
  id: 'break-and-continue',
  title: 'Section 7: Steering a Loop: break and continue',
  summary: 'Stop a loop early or skip ahead',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Steering a Loop: break and continue' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'break stops the loop immediately and moves on, even if there is more to do.',
          'continue skips the rest of this iteration and jumps to the next one.',
          'break is the clean way to end a while True loop when something happens, like the user typing "quit".',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `while True:                               # looks infinite, but...
    command = input("Type a command (or 'quit'): ")
    if command == "quit":
        break                                 # ...break gives us the exit
    print("You said:", command)`,
    },
    {
      type: 'p',
      text: 'while True plus break is a real and common pattern, and it is the structure the guessing game uses. continue does not stop the loop; it just skips ahead to the next round. You will use break far more often than continue.',
    },
  ],
  children: [
    {
      id: 'break-and-continue-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of break and continue',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'break-meaning',
          prompt: 'What does break do?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Stops the loop immediately and moves on.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Python continues with the first line after the loop.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Pauses the loop for a second.',
              wrongExplanation: 'break ends the loop completely.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Skips to the next round.',
              wrongExplanation: 'That is continue.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Ends the whole program with an error.',
              wrongExplanation: 'Only the loop ends, and there is no error.',
            },
          ],
        },
        {
          id: 'continue-meaning',
          prompt: 'What does continue do?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Stops the loop.',
              wrongExplanation: 'That is break.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Runs the current round again.',
              wrongExplanation: 'It moves on to the next round, not the same one.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Skips the rest of this round and jumps to the next one.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The loop keeps going; it just skips ahead.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing; it is just a comment.',
              wrongExplanation: 'continue is a real keyword that changes how the loop runs.',
            },
          ],
        },
        {
          id: 'while-true-exit',
          prompt: 'How does a while True loop normally end?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When the condition becomes False.',
              wrongExplanation: 'True is always True. It never becomes False by itself.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'After ten rounds.',
              wrongExplanation: 'There is no built-in limit.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'With continue.',
              wrongExplanation: 'continue only skips ahead. The loop keeps going.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'With break, when something happens.',
              wrongExplanation: '',
              correctExplanation: 'Correct. For example, when the user types quit.',
            },
          ],
        },
        {
          id: 'quit-output',
          prompt: 'In the example, the user types hello and then quit. What is printed?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'You said: hello and You said: quit',
              wrongExplanation: 'break runs before the print line, so quit is never printed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only You said: hello',
              wrongExplanation: '',
              correctExplanation: 'Correct. On quit, break ends the loop before reaching print.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Nothing.',
              wrongExplanation: 'hello is not quit, so it is printed.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'hello forever.',
              wrongExplanation: 'The loop asks again each round and stops on quit.',
            },
          ],
        },
        {
          id: 'continue-output',
          prompt:
            'for i in range(5): if i == 2, continue; otherwise print(i). Which numbers are printed?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '0, 1, 3, 4',
              wrongExplanation: '',
              correctExplanation: 'Correct. continue skips printing 2, and the loop carries on.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '0, 1',
              wrongExplanation: 'That would be break. continue keeps the loop going.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '0, 1, 2, 3, 4',
              wrongExplanation: 'When i is 2, continue skips the print.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only 2',
              wrongExplanation: 'It is the other way around: 2 is the one that is skipped.',
            },
          ],
        },
        {
          id: 'break-output',
          prompt: 'Now break is used instead of continue. Which numbers are printed?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '0, 1, 3, 4',
              wrongExplanation: 'That is what continue does. break ends the loop.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '0, 1, 2',
              wrongExplanation: 'break runs before 2 is printed.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Nothing.',
              wrongExplanation: '0 and 1 are printed before i reaches 2.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '0, 1',
              wrongExplanation: '',
              correctExplanation: 'Correct. When i is 2, break stops the loop completely.',
            },
          ],
        },
      ],
    },
    {
      id: 'break-and-continue-exercise',
      title: 'Exercise 7: Stop on Command',
      summary: 'Loop forever until the user says stop',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 7: Stop on Command' },
        {
          type: 'p',
          text: 'Loop forever asking for a word. Print each word, but stop the loop when the user types "stop".',
        },
        {
          type: 'hint',
          id: 'break-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Use while True. Check for "stop" straight after input() and break if it matches, so the word stop is never printed.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'break-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_7.py',
              code: `while True:
    word = input("Type a word: ")
    if word == "stop":
        break
    print(word)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Extend your program. If the user just presses Enter without typing anything, skip it with continue. Count the words that were printed, and when the user types "stop", print how many words they typed.',
        },
        {
          type: 'hint',
          id: 'break-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Pressing Enter on its own gives an empty string: "". Use an accumulator for the count: start it at 0 before the loop, add 1 after printing a word, and use it after the loop.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'break-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_7_advanced.py',
              code: `count = 0

while True:
    word = input("Type a word (or 'stop'): ")
    if word == "stop":
        break
    if word == "":
        continue
    print(word)
    count = count + 1

print("You typed", count, "words")`,
            },
          ],
        },
      ],
    },
  ],
};

export const LOOP_SECTION_08: CourseGroupItem = {
  id: 'guessing-game',
  title: 'Section 8: Capstone: Guessing Game',
  summary: 'Combine everything from the chapter',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Capstone: Guessing Game' },
    {
      type: 'p',
      text: 'The computer picks a secret number and the player tries to guess it. Everything you need is now on the table: a while loop to keep guessing, break or a condition to stop on a win, comparisons for higher and lower, and an accumulator to count attempts.',
    },
    {
      type: 'labelValue',
      label: 'Your program should:',
      list: {
        ordered: true,
        items: [
          'Pick a random secret number between 1 and 20.',
          'Keep asking the player to guess until they get it right.',
          'After each guess, say whether the real number is higher or lower.',
          'Count how many guesses they used.',
          'When they win, congratulate them and show the number of guesses.',
        ],
      },
    },
    { type: 'p', text: 'One new tool: to get a random number, add this at the top:' },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `import random
secret = random.randint(1, 20)   # a random whole number, 1 to 20`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Give yourself 20 to 30 minutes and try not to look at the solution early.',
    },
  ],
  children: [
    {
      id: 'guessing-game-quiz',
      title: 'Quiz',
      summary: 'Check you are ready for the capstone',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'randint-range',
          prompt: 'Which numbers can random.randint(1, 20) give?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '1 to 19, like range().',
              wrongExplanation: 'Unlike range, randint includes both ends.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '0 to 20.',
              wrongExplanation: 'It starts at the first number you give: 1.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Any whole number from 1 to 20, including both.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Both 1 and 20 are possible.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Always 20.',
              wrongExplanation: 'It picks a different random number each time you run the program.',
            },
          ],
        },
        {
          id: 'game-loop-choice',
          prompt: 'Which loop fits the game best?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'while True, with break when the guess is correct.',
              wrongExplanation: '',
              correctExplanation: 'Correct. You do not know in advance how many guesses it will take.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'for i in range(20).',
              wrongExplanation: 'That runs exactly 20 times, whether or not the player has won.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A for-in loop over a list of guesses.',
              wrongExplanation: 'The guesses do not exist yet; the player types them one by one.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'No loop; one if is enough.',
              wrongExplanation: 'The player needs to keep guessing until they get it right.',
            },
          ],
        },
        {
          id: 'higher-or-lower',
          prompt: 'The secret is 12 and the player guesses 8. What should the program say?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Lower!',
              wrongExplanation: '8 is below 12, so the real number is higher.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Higher!',
              wrongExplanation: '',
              correctExplanation: 'Correct. guess < secret, so the player should go higher.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Correct!',
              wrongExplanation: '8 is not 12.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Game over.',
              wrongExplanation: 'The player keeps guessing until they get it right.',
            },
          ],
        },
        {
          id: 'attempts-counter',
          prompt: 'How should the program count the guesses?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Ask the player how many guesses they used.',
              wrongExplanation: 'The program can count them itself.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Set attempts = 0 inside the loop.',
              wrongExplanation: 'That would reset the count every round.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Use random.randint to pick it.',
              wrongExplanation: 'The count must be real, not random.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An accumulator: attempts = 0 before the loop, + 1 after each guess.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Start, update, use: the accumulator pattern.',
            },
          ],
        },
        {
          id: 'import-placement',
          prompt: 'Where does import random go?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Inside the loop.',
              wrongExplanation: 'You only need to import it once.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'At the very end of the file.',
              wrongExplanation: 'It must come before you use random.randint.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'At the top of the file.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Imports go at the top, before anything uses them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It is not needed.',
              wrongExplanation: 'Without it, Python does not know what random is.',
            },
          ],
        },
      ],
    },
    {
      id: 'guessing-game-exercise',
      title: 'Exercise: Guessing Game',
      summary: 'Build a complete loop-based game',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Guessing Game' },
        {
          type: 'labelValue',
          label: 'Build a program that:',
          list: {
            ordered: true,
            items: [
              'Picks a random secret number between 1 and 20.',
              'Keeps asking the player to guess until they get it right.',
              'After each guess, says whether the real number is higher or lower.',
              'Counts how many guesses they used.',
              'When they win, congratulates them and shows the number of guesses.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'guessing-exercise-hint-1',
          title: 'Hint 1: The structure',
          blocks: [
            {
              type: 'p',
              text: 'Pick the secret and set attempts = 0 before the loop. Inside a while True loop: ask for a guess, convert it with int(), and add 1 to attempts.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'guessing-exercise-hint-2',
          title: 'Hint 2: Higher, lower, or correct',
          blocks: [
            {
              type: 'p',
              text: 'Use if / elif / else to compare guess with secret. In the else (the correct guess), print the congratulations and then break.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'guessing-exercise-solution',
          title: 'Show the solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'guessing_game.py',
              code: `import random

secret = random.randint(1, 20)
attempts = 0

while True:
    guess = int(input("Guess a number (1-20): "))
    attempts = attempts + 1

    if guess < secret:
        print("Higher!")
    elif guess > secret:
        print("Lower!")
    else:
        print(f"Correct! You got it in {attempts} guesses.")
        break`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'labelValue',
          label: 'Extend the game so that:',
          list: {
            ordered: true,
            items: [
              'The player chooses the range: ask for the highest number before the game starts.',
              'The player only gets 5 guesses. If they run out, reveal the secret number.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'guessing-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Use random.randint(1, highest) with the player’s number. Instead of while True, loop while attempts < 5. After the loop, check whether the last guess was wrong to decide whether to reveal the secret.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'guessing-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'guessing_game_advanced.py',
              code: `import random

highest = int(input("Guess numbers from 1 up to what? "))
max_attempts = 5
secret = random.randint(1, highest)
attempts = 0

while attempts < max_attempts:
    guess = int(input(f"Guess a number (1-{highest}): "))
    attempts = attempts + 1

    if guess < secret:
        print("Higher!")
    elif guess > secret:
        print("Lower!")
    else:
        print(f"Correct! You got it in {attempts} guesses.")
        break

if guess != secret:
    print(f"Out of guesses! The number was {secret}.")`,
            },
          ],
        },
      ],
    },
  ],
};
