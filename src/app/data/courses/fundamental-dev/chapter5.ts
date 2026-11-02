import { CourseGroupItem } from '../../course.model';

export const SYNTAX_SECTION_01: CourseGroupItem = {
  id: 'python-print',
  title: 'Section 1: Showing Things with print()',
  summary: 'Display text and numbers on the screen',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Showing Things: print()' },
    {
      type: 'image',
      src: 'assets/chapter5-syntax.png',
      alt: 'Hand-drawn laptop illustration with basic Python syntax symbols',
      caption: 'Course artwork from the Basic Syntax section.',
    },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'print() displays whatever you put inside the brackets.',
          'Text goes in single or double quotes. Numbers do not need quotes.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `print("Hello!")
print(42)
print("The answer is", 42)`,
    },
    {
      type: 'p',
      text: 'Look at the comma in the third line. print can take several things separated by commas, and it puts a space between them. The output is: The answer is 42.',
    },
  ],
  children: [
    {
      id: 'python-print-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of print()',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'print-purpose',
          prompt: 'What does print() do?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Displays whatever you put inside the brackets on the screen.',
              wrongExplanation: '',
              correctExplanation: 'Correct. print() is how a program shows you something.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Sends the text to a printer.',
              wrongExplanation: 'Despite the name, print() shows text on the screen.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Saves the text in a file.',
              wrongExplanation: 'Nothing is saved. The value is shown on the screen.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Asks the user to type something.',
              wrongExplanation: 'That is what input() does. print() only shows things.',
            },
          ],
        },
        {
          id: 'print-quotes',
          prompt: 'Which line prints the text Hello! correctly?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'print(Hello!)',
              wrongExplanation: 'Text needs quotes around it. Without them, Python does not see it as text.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'print("Hello!")',
              wrongExplanation: '',
              correctExplanation: 'Correct. Text goes inside single or double quotes.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'print["Hello!"]',
              wrongExplanation: 'print uses round brackets ( ), not square brackets.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Print("Hello!")',
              wrongExplanation: 'Exact means exact. The command is print with a lowercase p.',
            },
          ],
        },
        {
          id: 'print-numbers',
          prompt: 'Which statement about printing numbers is true?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Numbers must always be in quotes.',
              wrongExplanation: 'Only text needs quotes. Numbers can be written as they are.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'print() cannot show numbers.',
              wrongExplanation: 'print(42) shows 42 on the screen.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Numbers need square brackets.',
              wrongExplanation: 'No brackets are needed around the number itself.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Numbers do not need quotes: print(42) works.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Text goes in quotes; numbers do not.',
            },
          ],
        },
        {
          id: 'print-comma',
          prompt: 'What does print("The answer is", 42) show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The answer is,42',
              wrongExplanation: 'The comma separates the values. It is not printed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The answer is42',
              wrongExplanation: 'print puts a space between the values for you.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The answer is 42',
              wrongExplanation: '',
              correctExplanation:
                'Correct. print takes several things separated by commas and puts a space between them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error, because you cannot mix text and numbers.',
              wrongExplanation: 'With commas, print can show text and numbers together.',
            },
          ],
        },
        {
          id: 'print-two-lines',
          prompt: 'You want your name on one line and your age on the next. How do you do it?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Use two print() lines, one for each.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Each print() starts on a new line.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Put both inside one print() with a comma.',
              wrongExplanation: 'A comma puts them on the same line, separated by a space.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Press Enter inside the quotes.',
              wrongExplanation: 'A normal string cannot be split over two lines like that.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It is not possible in Python.',
              wrongExplanation: 'It is easy: one print() per line.',
            },
          ],
        },
        {
          id: 'print-no-quotes',
          prompt: 'What happens when you run print(Hello) without quotes?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It shows Hello.',
              wrongExplanation: 'Without quotes, Python does not treat Hello as text.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'An error, because Python looks for something named Hello and cannot find it.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Without quotes, Hello is treated as a name. Python reports a NameError.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It shows "Hello" with the quotes.',
              wrongExplanation: 'Even with quotes, print shows the text without them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing happens.',
              wrongExplanation: 'Python stops and reports an error.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-print-exercise',
      title: 'Exercise 1: Print Your Name and Age',
      summary: 'Your first lines of Python',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 1: Print Your Name and Age' },
        { type: 'p', text: 'Print your own name, then print your age on a second line.' },
        {
          type: 'callout',
          variant: 'info',
          text: 'Create a new file for each exercise so you can come back to it later. Call this one exercise_1.py.',
        },
        {
          type: 'hint',
          id: 'print-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Your name is text, so it needs quotes. Your age is a number, so it does not. Each print() starts a new line.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'print-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1.py',
              code: `print("Alex")
print(32)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Print a small business card. Start and end it with a line of dashes. In between, print your name, a job title, and a city on separate lines. Add one line that combines text and a number with a comma, such as Years of experience: 10.',
        },
        {
          type: 'hint',
          id: 'print-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'A line of dashes is just text: print("--------------------"). For the last line, give print two things separated by a comma: the text and the number.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'print-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1_advanced.py',
              code: `print("--------------------")
print("Alex Storm")
print("Software Engineer")
print("Copenhagen")
print("Years of experience:", 10)
print("--------------------")`,
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_02: CourseGroupItem = {
  id: 'python-comments',
  title: 'Section 2: Comments',
  summary: 'Explain your code to people',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Comments' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A line starting with # is a comment. Python ignores it completely.',
          'Comments explain code to people. They never affect what the program does.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `# This is a comment
print("This runs")   # comments can go at the end of a line too`,
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Think of comments as messages to your future self. Do not comment the obvious: explain why the code does something, not what it does.',
    },
  ],
  children: [
    {
      id: 'python-comments-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of comments',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'comment-symbol',
          prompt: 'Which line is a comment?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'print("This is a comment")',
              wrongExplanation: 'This is code. It prints the text on the screen.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '// This is a comment',
              wrongExplanation: 'Some languages use //, but in Python a comment starts with #.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '# This is a comment',
              wrongExplanation: '',
              correctExplanation: 'Correct. In Python, a comment starts with #.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '"This is a comment"',
              wrongExplanation: 'This is just a piece of text, not a comment.',
            },
          ],
        },
        {
          id: 'comment-effect',
          prompt: 'What does Python do with a comment when the program runs?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Ignores it completely.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Comments never affect what the program does.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Prints it on the screen.',
              wrongExplanation: 'Comments are never shown when the program runs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Runs it as an instruction.',
              wrongExplanation: 'Comments are for people. Python skips them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Reports an error.',
              wrongExplanation: 'Comments are allowed anywhere and cause no error.',
            },
          ],
        },
        {
          id: 'comment-end-of-line',
          prompt: 'What happens when you run: print("This runs")   # a note',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It shows This runs # a note',
              wrongExplanation: 'Everything after # is a comment and is not printed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Nothing, because the whole line is a comment.',
              wrongExplanation: 'Only the part after # is a comment. The print before it still runs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because comments must be on their own line.',
              wrongExplanation: 'Comments can go at the end of a line too.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It shows This runs, and the comment is ignored.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The code runs; the comment after # is skipped.',
            },
          ],
        },
        {
          id: 'comment-why',
          prompt: 'Which is the most useful comment?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '# print the price   (above print(price))',
              wrongExplanation: 'This repeats what the code already says. Avoid commenting the obvious.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '# members get 20 kr off   (above discount = 20)',
              wrongExplanation: '',
              correctExplanation:
                'Correct. It explains why the value is there, which the code alone does not tell you.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '# code   (above every line)',
              wrongExplanation: 'This adds nothing. Comment the why, not the what.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'No comments at all, ever.',
              wrongExplanation:
                'Good comments help your future self and your team. Just do not over-comment.',
            },
          ],
        },
        {
          id: 'comment-audience',
          prompt: 'Who are comments written for?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The computer.',
              wrongExplanation: 'The computer ignores comments completely.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The users of the program.',
              wrongExplanation: 'Users never see comments. They only see what the program prints.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'People reading the code, including your future self.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Comments are messages to whoever reads the code next.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nobody. They are only decoration.',
              wrongExplanation: 'Good comments explain why the code is written the way it is.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-comments-exercise',
      title: 'Exercise 2: Comment Your Code',
      summary: 'Explain what your code does',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 2: Comment Your Code' },
        {
          type: 'p',
          text: 'Add a comment above your name-printing code from Exercise 1 that says what it does.',
        },
        {
          type: 'hint',
          id: 'comments-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Start a new line above print with #, then write your message. Run the program again: the output should be exactly the same as before.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'comments-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2.py',
              code: `# Show my name
print("Alex")
print(32)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        { type: 'p', text: 'Copy this program into a new file:' },
        {
          type: 'code',
          language: 'python',
          filename: 'exercise_2_advanced.py',
          code: `price = 120
discount = 20
print(price - discount)
print("Thank you for shopping!")`,
        },
        {
          type: 'labelValue',
          label: 'Then:',
          list: {
            ordered: true,
            items: [
              'Add comments that explain why the first two values are there, not just what they are.',
              'Add a comment at the end of the line that prints the result.',
              'Turn the last line into a comment and run the program again. What changed?',
            ],
          },
        },
        {
          type: 'hint',
          id: 'comments-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Putting # in front of a line of code “comments it out”. Python skips it, so that line no longer runs. Developers use this to switch code off temporarily.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'comments-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2_advanced.py',
              code: `# Prices are stored in whole kroner
price = 120
# Members get a fixed discount
discount = 20
print(price - discount)  # the price the customer pays
# print("Thank you for shopping!")`,
            },
            {
              type: 'p',
              text: 'The program now only prints 100. The thank-you line is commented out, so Python skips it.',
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_03: CourseGroupItem = {
  id: 'python-variables',
  title: 'Section 3: Variables',
  summary: 'Store values and use them by name',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Variables' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A variable is a named box that holds a value. Use = to put a value in it.',
          'After that, the name stands in for the value.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `name = "Alex"
age = 32

print(name, "is", age)`,
    },
    {
      type: 'p',
      text: 'This prints Alex is 32. Remember the recipe from Chapter 3: the ingredient name is the variable, and the amount is its value.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'In Python, = means “put this value into this name”. It is not “equals” in the maths sense.',
    },
  ],
  children: [
    {
      id: 'python-variables-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of variables',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'variable-definition',
          prompt: 'What is a variable?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A command that shows text on the screen.',
              wrongExplanation: 'That is print().',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A named box that holds a value.',
              wrongExplanation: '',
              correctExplanation: 'Correct. After you create it, the name stands in for the value.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A comment that explains the code.',
              wrongExplanation: 'Comments start with #. Variables store values.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A value that can never be changed.',
              wrongExplanation: 'You can put a new value into a variable at any time.',
            },
          ],
        },
        {
          id: 'equals-meaning',
          prompt: 'What does = mean in city = "Copenhagen"?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Check whether city is equal to Copenhagen.',
              wrongExplanation: 'A single = does not compare. It stores a value.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Print the word Copenhagen.',
              wrongExplanation: 'Nothing is printed. The value is stored.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The same as = in a maths equation.',
              wrongExplanation: 'In Python, = is not “equals” in the maths sense.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Put the value "Copenhagen" into the name city.',
              wrongExplanation: '',
              correctExplanation: 'Correct. = means “put this value into this name”.',
            },
          ],
        },
        {
          id: 'variable-print',
          prompt: 'name = "Alex" and age = 32. What does print(name, "is", age) show?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Alex is 32',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Each name is replaced by its value, with spaces between the parts.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'name is age',
              wrongExplanation: 'Without quotes, name and age are variables, so their values are shown.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Alexis32',
              wrongExplanation: 'The commas make print add a space between each part.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error, because you cannot print variables.',
              wrongExplanation: 'You can print variables. That is how you see their values.',
            },
          ],
        },
        {
          id: 'variable-quotes',
          prompt: 'city = "Copenhagen". What does print("city") show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Copenhagen',
              wrongExplanation: 'The quotes make it text, so the variable is not used.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'An error.',
              wrongExplanation: '"city" is valid text, so it prints without problems.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'city',
              wrongExplanation: '',
              correctExplanation:
                'Correct. In quotes it is just the word city. To use the value, write print(city).',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'city = Copenhagen',
              wrongExplanation: 'print shows only what is inside the brackets: the text city.',
            },
          ],
        },
        {
          id: 'variable-reassign',
          prompt: 'city = "Copenhagen", then city = "Aarhus". What does print(city) show?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Copenhagen',
              wrongExplanation: 'The second line put a new value into the box, replacing the old one.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Aarhus',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A variable holds one value at a time: the most recent one you put in.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Copenhagen Aarhus',
              wrongExplanation: 'The variable does not keep both. The new value replaces the old one.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error, because city already has a value.',
              wrongExplanation: 'You can change a variable’s value whenever you like.',
            },
          ],
        },
        {
          id: 'variable-why',
          prompt: 'Why are variables useful?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'You give a value a name once, then refer to it by name instead of repeating it.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Change the value in one place and every line using the name follows.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'They make the program run faster.',
              wrongExplanation: 'Speed is not the point. Variables make code easier to read and change.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'They hide values from the user.',
              wrongExplanation: 'Variables are about storing values, not hiding them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'They are required on every line of a program.',
              wrongExplanation: 'You use variables when you need them. print("Hello") needs none.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-variables-exercise',
      title: 'Exercise 3: Where Do You Live?',
      summary: 'Store your city in a variable',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 3: Where Do You Live?' },
        {
          type: 'p',
          text: 'Make a variable of your city, then print “I live in” followed by your city.',
        },
        {
          type: 'hint',
          id: 'variables-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Python needs quotes around text, but not around a variable name when you want its value. Give print two things separated by a comma: the text and the variable.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'variables-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3.py',
              code: `city = "Copenhagen"
print("I live in", city)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Store your name, your city, and how many years you have lived there in three variables. Print a sentence such as Alex has lived in Copenhagen for 5 years. Then give the city variable a new value and print the same sentence again, without changing the print line.',
        },
        {
          type: 'hint',
          id: 'variables-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Copy the print line so it appears twice. Between the two copies, put a new value into city with =. The second print uses the new value automatically.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'variables-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3_advanced.py',
              code: `name = "Alex"
city = "Copenhagen"
years = 5
print(name, "has lived in", city, "for", years, "years")

city = "Aarhus"
print(name, "has lived in", city, "for", years, "years")`,
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_04: CourseGroupItem = {
  id: 'python-input',
  title: 'Section 4: Getting Input',
  summary: 'Let the user type values into your program',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Getting Input' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'input() pauses the program and waits for the user to type something.',
          'Important: input() always gives back text, even if the user types a number.',
          'To do maths with it, convert it first: int(...) for whole numbers, float(...) for decimals.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `name = input("What is your name? ")
print("Hello,", name)

age = int(input("Your age? "))   # convert text to a number
print("Next year you will be", age + 1)`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'This is the big gotcha of the chapter. Without int(), age + 1 causes an error, because Python cannot add a number to text. And adding two inputs without converting them glues the text together: 5 and 3 become 53.',
    },
  ],
  children: [
    {
      id: 'python-input-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of input()',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'input-pauses',
          prompt: 'What does input() do?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Shows a value on the screen and ends the program.',
              wrongExplanation: 'Showing values is print(). input() waits for the user.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Reads a value from a file.',
              wrongExplanation: 'input() reads what the user types in the terminal.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Pauses the program and waits for the user to type something.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The program continues once the user has typed an answer and pressed Enter.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Converts text into a number.',
              wrongExplanation: 'That is what int() and float() do.',
            },
          ],
        },
        {
          id: 'input-returns-text',
          prompt: 'The user types 25 at an input() prompt. What does input() give back?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The text "25".',
              wrongExplanation: '',
              correctExplanation: 'Correct. input() always gives back text, even when the user types a number.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The whole number 25.',
              wrongExplanation: 'You only get a number after converting it with int().',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The decimal number 25.0.',
              wrongExplanation: 'You only get a decimal after converting it with float().',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing, because input() only accepts letters.',
              wrongExplanation: 'The user can type anything. It is returned as text.',
            },
          ],
        },
        {
          id: 'input-glue',
          prompt: 'a = input() and b = input(). The user types 5 and then 3. What does print(a + b) show?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '8',
              wrongExplanation: 'a and b are text, not numbers, so + does not add them.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '5 3',
              wrongExplanation: '+ joins text with no space in between.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error.',
              wrongExplanation: 'Two pieces of text can be joined with +, so there is no error.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '53',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Both are text, so + glues them together. Convert with int() to add them.',
            },
          ],
        },
        {
          id: 'int-vs-float',
          prompt: 'Which function converts text into a decimal number, such as 19.99?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'int()',
              wrongExplanation: 'int() is for whole numbers. "19.99" cannot be converted with it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'float()',
              wrongExplanation: '',
              correctExplanation: 'Correct. float() is for decimals; int() is for whole numbers.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'print()',
              wrongExplanation: 'print() shows values. It does not convert them.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'input()',
              wrongExplanation: 'input() gives back text. You convert that text afterwards.',
            },
          ],
        },
        {
          id: 'age-plus-one',
          prompt: 'What happens with: age = input("Your age? ") followed by print(age + 1)?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It prints the age plus one.',
              wrongExplanation: 'age is text, so Python cannot add 1 to it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It prints the age with a 1 after it.',
              wrongExplanation: 'Python will not join text and a number with +. It stops instead.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because you cannot add a number to text.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Fix it with age = int(input("Your age? ")) so age is a number.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Python converts the age to a number for you.',
              wrongExplanation: 'Python never guesses. You have to convert it yourself.',
            },
          ],
        },
        {
          id: 'int-input',
          prompt: 'What does age = int(input("Your age? ")) do?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Asks for the age, converts the answer to a whole number, and stores it in age.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. input() runs first, then int() converts its text, then = stores the result.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Prints the age on the screen.',
              wrongExplanation: 'Nothing is printed except the question. The answer is stored.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Stores the text "Your age? " in age.',
              wrongExplanation: 'That text is the question shown to the user. The answer is stored.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Converts the age to a decimal number.',
              wrongExplanation: 'int() gives a whole number. float() would give a decimal.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-input-exercise',
      title: 'Exercise 4: Add Two Numbers',
      summary: 'Read numbers from the user and add them',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 4: Add Two Numbers' },
        { type: 'p', text: 'Ask the user for two numbers, then print their sum.' },
        {
          type: 'hint',
          id: 'input-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'input() gives you text. Convert each answer to a whole number with int() before adding them, or you will get 53 instead of 8.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'input-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4.py',
              code: `first = int(input("First number: "))
second = int(input("Second number: "))
print("The sum is", first + second)`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Build a small checkout. Ask for the price of one item (it can have decimals, such as 19.99) and how many the user wants to buy (a whole number). Print the total cost.',
        },
        {
          type: 'hint',
          id: 'input-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Use float() for the price, because it can have decimals, and int() for the quantity. Multiply them with *.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'input-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4_advanced.py',
              code: `price = float(input("Price per item? "))
quantity = int(input("How many? "))
print("Total:", price * quantity)`,
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_05: CourseGroupItem = {
  id: 'python-arithmetic',
  title: 'Section 5: Arithmetic',
  summary: 'Calculate with Python',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Arithmetic' },
    {
      type: 'labelValue',
      label: 'Operators:',
      list: {
        ordered: false,
        items: [
          '+ add, - subtract, * multiply, / divide.',
          '// whole-number division: how many full groups fit.',
          '% (modulo) gives the remainder: what is left over.',
          '** is power: 2 ** 3 means 2 × 2 × 2.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `print(7 + 3)    # 10
print(7 / 2)    # 3.5
print(7 // 2)   # 3   (whole-number division)
print(7 % 2)    # 1   (remainder)
print(2 ** 3)   # 8   (2 to the power 3)`,
    },
    {
      type: 'p',
      text: 'Think of 7 eggs and egg cartons that hold 2. How many full cartons can you fill? 7 // 2 is 3: Python ignores the leftover and gives only the whole number. How many eggs are left over? 7 % 2 is 1. This is called modulo, but you can just think of it as “the leftover”.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'In Python, % has nothing to do with percentages. It only means “remainder”.',
    },
  ],
  children: [
    {
      id: 'python-arithmetic-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of arithmetic',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'divide',
          prompt: 'What does print(7 / 2) show?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '3',
              wrongExplanation: 'That is 7 // 2. A single / keeps the decimals.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '3.5',
              wrongExplanation: '',
              correctExplanation: 'Correct. / is normal division and keeps the decimals.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '1',
              wrongExplanation: 'That is 7 % 2, the remainder.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '14',
              wrongExplanation: 'That would be 7 * 2. The / operator divides.',
            },
          ],
        },
        {
          id: 'floor-divide',
          prompt: 'What does print(7 // 2) show?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '3.5',
              wrongExplanation: 'That is 7 / 2. Two slashes drop the decimals.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '1',
              wrongExplanation: 'That is the remainder, 7 % 2.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '4',
              wrongExplanation: '// does not round up. It gives the number of full groups.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '3',
              wrongExplanation: '',
              correctExplanation: 'Correct. 2 fits into 7 three full times; the leftover is ignored.',
            },
          ],
        },
        {
          id: 'modulo',
          prompt: 'What does print(7 % 2) show?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '1',
              wrongExplanation: '',
              correctExplanation: 'Correct. After three full groups of 2, there is 1 left over.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '3',
              wrongExplanation: 'That is 7 // 2, the number of full groups.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '0.07',
              wrongExplanation: '% is not percent in Python. It is the remainder.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '3.5',
              wrongExplanation: 'That is 7 / 2.',
            },
          ],
        },
        {
          id: 'power',
          prompt: 'What does print(2 ** 3) show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '6',
              wrongExplanation: 'That would be 2 * 3. Two stars means “to the power of”.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '5',
              wrongExplanation: 'That would be 2 + 3.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '8',
              wrongExplanation: '',
              correctExplanation: 'Correct. 2 ** 3 is 2 × 2 × 2.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '9',
              wrongExplanation: 'That would be 3 ** 2. The first number is the one multiplied.',
            },
          ],
        },
        {
          id: 'modulo-meaning',
          prompt: 'What does % mean in Python?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Percent.',
              wrongExplanation: 'This is a common mix-up. % has nothing to do with percentages.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Divide and keep the decimals.',
              wrongExplanation: 'That is /.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Multiply.',
              wrongExplanation: 'That is *.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The remainder after division: the leftover.',
              wrongExplanation: '',
              correctExplanation: 'Correct. It is called modulo, but think of it as “the leftover”.',
            },
          ],
        },
        {
          id: 'egg-cartons',
          prompt:
            'You have 7 eggs and cartons that hold 2. Which code gives the full cartons and the eggs left over?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '7 / 2 for cartons and 7 * 2 for leftovers.',
              wrongExplanation: '7 / 2 gives 3.5 cartons, and 7 * 2 multiplies.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '7 // 2 for full cartons (3) and 7 % 2 for eggs left over (1).',
              wrongExplanation: '',
              correctExplanation:
                'Correct. // counts the full groups and % gives what is left.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '7 ** 2 for cartons and 7 - 2 for leftovers.',
              wrongExplanation: '7 ** 2 is 49, which is 7 to the power of 2.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '7 % 2 for full cartons and 7 // 2 for leftovers.',
              wrongExplanation: 'These are swapped. // gives the full groups and % the leftover.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-arithmetic-exercise',
      title: 'Exercise 5: Weeks in 100 Days',
      summary: 'Use // and % to split days into weeks',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 5: Weeks in 100 Days' },
        {
          type: 'p',
          text: 'Calculate how many full weeks are in 100 days, and how many days are left over.',
        },
        {
          type: 'hint',
          id: 'arithmetic-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'A week has 7 days. Whole-number division gives the number of complete groups. The remainder operator gives what is left after those groups are counted.',
            },
            {
              type: 'code',
              language: 'python',
              filename: 'operator reminder',
              code: `whole_groups = total // group_size
left_over = total % group_size`,
            },
          ],
        },
        {
          type: 'hint',
          id: 'arithmetic-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5.py',
              code: `days = 100
weeks = days // 7
left_over = days % 7
print("Full weeks:", weeks)
print("Days left over:", left_over)`,
            },
            { type: 'p', text: 'The answer is 14 full weeks and 2 days left over.' },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Convert 10,000 seconds into hours, minutes, and seconds. Print the result as one line, such as 2 hours, 46 minutes, 40 seconds.',
        },
        {
          type: 'hint',
          id: 'arithmetic-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'There are 3600 seconds in an hour and 60 in a minute. Work out the full hours first with //, then use % to get the seconds that are left, and repeat the same idea for minutes.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'arithmetic-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5_advanced.py',
              code: `seconds = 10000
hours = seconds // 3600
remaining = seconds % 3600
minutes = remaining // 60
secs = remaining % 60
print(hours, "hours,", minutes, "minutes,", secs, "seconds")`,
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_06: CourseGroupItem = {
  id: 'python-strings',
  title: 'Section 6: Working with Strings',
  summary: 'Combine text and values',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Working with Strings' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A string is text. You can join strings with +, but everything must be a string.',
          'The easier way is an f-string. Put f before the quotes and drop variables inside { }.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `name = "Alex"
age = 32

print("Hi " + name)                 # joining with +
print(f"Hi {name}, you are {age}")  # f-string, much cleaner`,
    },
    {
      type: 'p',
      text: 'f-strings are the modern, readable way, and you can even do maths right inside the braces. You will still see the + approach in other people’s code, so it is good to recognise it.',
    },
  ],
  children: [
    {
      id: 'python-strings-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of strings',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'join-plus',
          prompt: 'name = "Alex". What does print("Hi " + name) show?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Hi Alex',
              wrongExplanation: '',
              correctExplanation: 'Correct. + joins the two strings. The space comes from "Hi ".',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'HiAlex',
              wrongExplanation: 'There is a space inside "Hi ", so the output has a space.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Hi name',
              wrongExplanation: 'name has no quotes, so its value is used.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'Both parts are strings, so they can be joined.',
            },
          ],
        },
        {
          id: 'join-number',
          prompt: 'What happens with print("Alex is " + 32)?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It shows Alex is 32.',
              wrongExplanation: '32 is a number, and + only joins strings.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It shows Alex is 32 with an extra space.',
              wrongExplanation: 'Python stops before printing anything.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because everything joined with + must be a string.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Use an f-string instead: f"Alex is {32}" works without converting.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It adds 32 to the text.',
              wrongExplanation: 'Text and numbers cannot be added together with +.',
            },
          ],
        },
        {
          id: 'fstring-f',
          prompt: 'Where does the f go in an f-string?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'At the end of the line.',
              wrongExplanation: 'The f must come right before the opening quote.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Inside the braces.',
              wrongExplanation: 'The braces hold variables. The f goes before the quote.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Before the word print.',
              wrongExplanation: 'The f belongs to the string, not to print.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Immediately before the opening quote: f"...".',
              wrongExplanation: '',
              correctExplanation: 'Correct. Without the f, the braces are printed as plain text.',
            },
          ],
        },
        {
          id: 'fstring-braces',
          prompt: 'name = "Alex" and age = 32. What does print(f"Hi {name}, you are {age}") show?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Hi {name}, you are {age}',
              wrongExplanation: 'With the f in front, the braces are replaced by the values.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Hi Alex, you are 32',
              wrongExplanation: '',
              correctExplanation: 'Correct. Each {variable} is replaced by its value.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because age is a number.',
              wrongExplanation: 'f-strings handle numbers for you. No conversion is needed.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'f"Hi Alex, you are 32"',
              wrongExplanation: 'The f and the quotes are not printed.',
            },
          ],
        },
        {
          id: 'fstring-math',
          prompt: 'age = 32. What does print(f"Next year: {age + 1}") show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Next year: age + 1',
              wrongExplanation: 'Inside the braces, Python works out the value.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Next year: 321',
              wrongExplanation: 'age is a number here, so + adds rather than joins.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Next year: 33',
              wrongExplanation: '',
              correctExplanation: 'Correct. You can do maths right inside the braces.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'Calculations inside the braces are allowed.',
            },
          ],
        },
        {
          id: 'fstring-why',
          prompt: 'Why are f-strings usually preferred over joining with +?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'They are easier to read, and numbers do not need converting first.',
              wrongExplanation: '',
              correctExplanation: 'Correct. They are the modern, readable way to build text.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Joining with + no longer works in Python.',
              wrongExplanation: '+ still works for strings. f-strings are just cleaner.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'f-strings print in a different colour.',
              wrongExplanation: 'The output looks the same. The code is what is cleaner.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'f-strings can only hold numbers.',
              wrongExplanation: 'f-strings hold text, with values inserted in braces.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-strings-exercise',
      title: 'Exercise 6: In Five Years',
      summary: 'Use an f-string with a calculation',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 6: In Five Years' },
        {
          type: 'p',
          text: 'Using an f-string, print "In 5 years, {name} will be {age + 5}".',
        },
        {
          type: 'hint',
          id: 'strings-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Create name and age variables first. Then put f immediately before the opening quote, and use braces to insert the name and to calculate age + 5.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'strings-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6.py',
              code: `name = "Alex"
age = 32
print(f"In 5 years, {name} will be {age + 5}")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user for their name and the year they were born. Store the current year in a variable. Then use a single f-string to print a line such as Hi Alex! In 2031 you will turn 37.',
        },
        {
          type: 'hint',
          id: 'strings-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The birth year comes from input(), so convert it with int(). Inside the braces you can calculate both the year five years from now and the age in that year.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'strings-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6_advanced.py',
              code: `current_year = 2026
name = input("What is your name? ")
birth_year = int(input("What year were you born? "))
print(f"Hi {name}! In {current_year + 5} you will turn {current_year + 5 - birth_year}.")`,
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_07: CourseGroupItem = {
  id: 'python-indentation',
  title: 'Section 7: Indentation Matters',
  summary: 'Why the spaces at the start of a line count',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Indentation Matters' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'In Python, indentation (the space at the start of a line) is part of the rules, not just for looks.',
          'Code that belongs together is indented the same amount. Getting it wrong is an error.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `if age >= 18:
    print("Adult")     # indented: belongs to the if
print("Done")          # not indented: always runs`,
    },
    {
      type: 'p',
      text: 'This surprises people coming from other languages, where curly braces do this job. The standard is four spaces per level, and most editors, including VS Code, add them automatically after you type a colon and press Enter.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'This is also your first if, which the next chapter covers properly. To check whether two values are the same, use == (two equals signs). A single = stores a value.',
    },
  ],
  children: [
    {
      id: 'python-indentation-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of indentation',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'indent-rule',
          prompt: 'What is indentation in Python?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Just a way to make the code look nice.',
              wrongExplanation: 'In Python it is more than looks. It is part of the rules.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Part of the rules: it shows which lines belong together.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Code that belongs together is indented the same amount.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A kind of comment.',
              wrongExplanation: 'Comments start with #. Indentation is the space at the start of a line.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Something Python ignores.',
              wrongExplanation: 'Python reads indentation carefully. Wrong indentation is an error.',
            },
          ],
        },
        {
          id: 'indent-standard',
          prompt: 'What is the standard indentation for one level in Python?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'One space.',
              wrongExplanation: 'It works, but it is hard to read and not the standard.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A curly brace {.',
              wrongExplanation: 'Other languages use braces. Python uses indentation instead.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Ten spaces.',
              wrongExplanation: 'That is far more than the standard.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Four spaces.',
              wrongExplanation: '',
              correctExplanation: 'Correct. VS Code adds them automatically after a colon.',
            },
          ],
        },
        {
          id: 'indent-always-runs',
          prompt: 'In the example, age is 16. What is printed?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only Done.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. 16 is not 18 or more, so the indented line is skipped. Done is not indented, so it always runs.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Adult and Done.',
              wrongExplanation: 'Adult only prints when age is 18 or more.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only Adult.',
              wrongExplanation: 'Adult is skipped, and Done always runs because it is not indented.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'Done is not indented, so it runs no matter what.',
            },
          ],
        },
        {
          id: 'indent-wrong',
          prompt: 'What happens if you forget to indent the line after if age >= 18:?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Python indents it for you.',
              wrongExplanation: 'Your editor may help while you type, but Python itself never fixes it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The line always runs.',
              wrongExplanation: 'Python does not get that far. It stops first.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because Python expects an indented block after the colon.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Python reports an IndentationError: getting indentation wrong is an error.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing. Indentation is optional.',
              wrongExplanation: 'In Python, indentation is part of the rules.',
            },
          ],
        },
        {
          id: 'double-equals',
          prompt: 'In if mood == "happy":, what does == do?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Puts the value "happy" into mood.',
              wrongExplanation: 'That is a single =. Two equals signs compare.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Checks whether mood is the same as "happy".',
              wrongExplanation: '',
              correctExplanation: 'Correct. == compares two values; = stores a value.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Prints happy.',
              wrongExplanation: 'Nothing is printed by ==. It only checks.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It is a typing mistake; it should be one =.',
              wrongExplanation: 'In an if, you need == to compare.',
            },
          ],
        },
      ],
    },
    {
      id: 'python-indentation-exercise',
      title: 'Exercise 7: Hello When Happy',
      summary: 'Write your first if with correct indentation',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 7: Hello When Happy' },
        {
          type: 'p',
          text: 'Write an if that prints "Hello" only when a variable mood equals "happy".',
        },
        {
          type: 'hint',
          id: 'indentation-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Create the mood variable first. The if line ends with a colon, and the print line underneath must be indented by four spaces. Use == to compare.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'indentation-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_7.py',
              code: `mood = "happy"

if mood == "happy":
    print("Hello")`,
            },
            {
              type: 'p',
              text: 'Change mood to something else, such as "tired", and run it again. Nothing is printed.',
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user how they are feeling with input(). When the answer is happy, print two lines: Hello and Great to see you smiling!. After that, print Have a nice day, which should always appear, whatever the mood. Test it with happy and with another answer.',
        },
        {
          type: 'hint',
          id: 'indentation-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Both lines that belong to the if are indented the same amount. The last line goes back to the left edge, so it is no longer part of the if.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'indentation-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_7_advanced.py',
              code: `mood = input("How are you feeling? ")

if mood == "happy":
    print("Hello")
    print("Great to see you smiling!")
print("Have a nice day")`,
            },
          ],
        },
      ],
    },
  ],
};

export const SYNTAX_SECTION_08: CourseGroupItem = {
  id: 'tip-calculator',
  title: 'Section 8: Capstone: Tip Calculator',
  summary: 'Combine everything from the chapter',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Capstone: Tip Calculator' },
    {
      type: 'p',
      text: 'Time to combine every idea from this chapter in one real, useful program: input, converting types, variables, maths, and f-strings.',
    },
    {
      type: 'labelValue',
      label: 'Your program should:',
      list: {
        ordered: true,
        items: [
          'Ask the user for the bill amount.',
          'Ask for a tip percentage.',
          'Calculate the tip.',
          'Calculate the total bill.',
          'Display the tip and total.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Try it yourself before looking at the solution. Getting stuck and working it out is where the learning happens.',
    },
  ],
  children: [
    {
      id: 'tip-calculator-quiz',
      title: 'Quiz',
      summary: 'Check you are ready for the capstone',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'tip-float',
          prompt: 'Why should the bill amount be converted with float() instead of int()?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'float() is faster.',
              wrongExplanation: 'Speed is not the reason. It is about what the user can type.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'int() only works on text.',
              wrongExplanation: 'Both convert text. The difference is whole numbers versus decimals.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A bill can have decimals, such as 45.50.',
              wrongExplanation: '',
              correctExplanation: 'Correct. int() cannot convert "45.50"; float() can.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'There is no difference.',
              wrongExplanation: 'int() is for whole numbers and float() for decimals.',
            },
          ],
        },
        {
          id: 'tip-formula',
          prompt: 'The bill is 200 and the tip is 10%. What does bill * percent / 100 give?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '20.0',
              wrongExplanation: '',
              correctExplanation: 'Correct. 200 × 10 ÷ 100 is 20. Dividing with / gives 20.0.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '2000',
              wrongExplanation: 'Do not forget to divide by 100.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '210',
              wrongExplanation: 'That is the total, not the tip.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '0.2',
              wrongExplanation: 'Multiply the bill by the percentage first, then divide by 100.',
            },
          ],
        },
        {
          id: 'tip-total',
          prompt: 'Which line calculates the total bill?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'total = bill * tip',
              wrongExplanation: 'The tip is added to the bill, not multiplied by it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'total = bill % tip',
              wrongExplanation: '% gives a remainder, not a total.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'total == bill + tip',
              wrongExplanation: '== compares. To store a value, use a single =.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'total = bill + tip',
              wrongExplanation: '',
              correctExplanation: 'Correct. The total is the bill plus the tip.',
            },
          ],
        },
        {
          id: 'tip-round',
          prompt: 'The tip comes out as 6.825. What does round(tip, 2) give?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '7',
              wrongExplanation: 'The 2 asks for two decimals, not a whole number.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The tip rounded to two decimals, such as 6.83.',
              wrongExplanation: '',
              correctExplanation: 'Correct. round(value, 2) keeps two decimals, which suits money.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '2',
              wrongExplanation: 'The 2 is how many decimals to keep, not the result.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'round() works on decimal numbers.',
            },
          ],
        },
        {
          id: 'tip-forgot-float',
          prompt:
            'You write bill = input("Bill amount? ") without float(). What happens at tip = bill * percent / 100?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The tip is calculated correctly.',
              wrongExplanation: 'bill is text, so the maths does not work.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Python converts the bill for you.',
              wrongExplanation: 'Python never guesses. You must convert it yourself.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error, because bill is still text.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. input() always gives back text. Convert with float() before doing maths.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The tip is always 0.',
              wrongExplanation: 'Python stops with an error before any tip is calculated.',
            },
          ],
        },
      ],
    },
    {
      id: 'tip-calculator-exercise',
      title: 'Exercise: Tip Calculator',
      summary: 'Build a complete beginner program',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Tip Calculator' },
        {
          type: 'labelValue',
          label: 'Build a program that:',
          list: {
            ordered: true,
            items: [
              'Asks the user for the bill amount.',
              'Asks for a tip percentage.',
              'Calculates the tip.',
              'Calculates the total bill.',
              'Displays the tip and total.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'tip-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Both answers come from input(), so convert them with float() before calculating. The tip is the bill times the percentage divided by 100. Use f-strings to display the results with clear labels.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'tip-exercise-solution',
          title: 'Show the solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'tip_calculator.py',
              code: `bill = float(input("Bill amount? "))
percent = float(input("Tip percent? "))

tip = bill * percent / 100
total = bill + tip

print(f"Tip: {tip}")
print(f"Total: {total}")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Extend the tip calculator. Round the tip and the total to two decimals, then ask how many people are sharing the bill and print how much each person pays.',
        },
        {
          type: 'hint',
          id: 'tip-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'round(value, 2) rounds a number to two decimals. The number of people is a whole number, so convert it with int(). Each person pays the total divided by the number of people.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'tip-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'tip_calculator_advanced.py',
              code: `bill = float(input("Bill amount? "))
percent = float(input("Tip percent? "))
people = int(input("How many people? "))

tip = bill * percent / 100
total = bill + tip
per_person = total / people

print(f"Tip: {round(tip, 2)}")
print(f"Total: {round(total, 2)}")
print(f"Each person pays: {round(per_person, 2)}")`,
            },
          ],
        },
      ],
    },
  ],
};
