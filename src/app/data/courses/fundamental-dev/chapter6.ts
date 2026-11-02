import { CourseGroupItem } from '../../course.model';

export const CONDITION_SECTION_01: CourseGroupItem = {
  id: 'comparison-operators',
  title: 'Section 1: Comparison Operators',
  summary: 'Ask questions that answer True or False',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Comparison Operators' },
    {
      type: 'image',
      src: 'assets/chapter6-conditions.png',
      alt: 'Hand-drawn zoo decision-flow illustration',
      caption: 'Course artwork from the Conditionals section.',
    },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A comparison takes two values and answers with True or False.',
          'True and False are called booleans: values that can only be one of the two.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `print(5 > 3)    # True
print(5 < 3)    # False
print(5 == 5)   # True   (equal to)
print(5 != 4)   # True   (not equal to)
print(5 >= 5)   # True
print(3 <= 2)   # False`,
    },
    {
      type: 'p',
      text: 'Read each one aloud as a question: “Is 5 greater than 3? True.”',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Watch Out: = Is Not ==' },
    { type: 'p', text: 'One equals stores, two equals asks.' },
    {
      type: 'labelValue',
      label: 'The difference:',
      list: {
        ordered: false,
        items: [
          '= is assignment. It puts a value into a variable.',
          '== is comparison. It asks “are these the same?” and answers True or False.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `age = 18      # store 18 in age
age == 18     # ask: is age 18?  ->  True`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Mixing these up is the most common beginner bug in this entire course. Python refuses if age = 18: with a syntax error. When you see that error, the fix is adding the second equals sign. If your if line errors or behaves strangely, check this first.',
    },
  ],
  children: [
    {
      id: 'comparison-operators-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of comparisons',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'comparison-answer',
          prompt: 'What does a comparison answer with?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A number.',
              wrongExplanation: 'Arithmetic gives numbers. A comparison gives True or False.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'True or False.',
              wrongExplanation: '',
              correctExplanation: 'Correct. These two values are called booleans.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Yes or No as text.',
              wrongExplanation: 'Python answers with the special values True and False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing; it only stores a value.',
              wrongExplanation: 'Storing a value is assignment (=). A comparison asks a question.',
            },
          ],
        },
        {
          id: 'not-equal',
          prompt: 'What does != mean?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Equal to.',
              wrongExplanation: 'Equal to is ==.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Very equal.',
              wrongExplanation: 'The ! means “not”.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Greater than.',
              wrongExplanation: 'Greater than is >.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Not equal to.',
              wrongExplanation: '',
              correctExplanation: 'Correct. 5 != 4 is True because 5 is not equal to 4.',
            },
          ],
        },
        {
          id: 'greater-or-equal',
          prompt: 'What does print(5 >= 5) show?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'True',
              wrongExplanation: '',
              correctExplanation: 'Correct. >= means “greater than or equal to”, and 5 is equal to 5.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'False',
              wrongExplanation: '5 is not greater than 5, but it is equal, and >= allows that.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '10',
              wrongExplanation: 'A comparison does not add. It answers True or False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: '>= is a valid comparison operator.',
            },
          ],
        },
        {
          id: 'less-or-equal',
          prompt: 'What does print(3 <= 2) show?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'True',
              wrongExplanation: '3 is neither less than nor equal to 2.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '1',
              wrongExplanation: 'A comparison does not subtract. It answers True or False.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'False',
              wrongExplanation: '',
              correctExplanation: 'Correct. 3 is bigger than 2, so “3 is at most 2” is False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: '<= is a valid comparison operator.',
            },
          ],
        },
        {
          id: 'one-or-two-equals',
          prompt: 'Which line asks whether age is 18?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'age == 18',
              wrongExplanation: '',
              correctExplanation: 'Correct. Two equals asks; one equals stores.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'age = 18',
              wrongExplanation: 'One equals stores 18 in age. It does not ask anything.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'age =! 18',
              wrongExplanation: 'This is not a valid operator. Not equal is written !=.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'age === 18',
              wrongExplanation: 'Some languages use ===, but Python uses ==.',
            },
          ],
        },
        {
          id: 'if-assignment-error',
          prompt: 'Python shows a syntax error for the line if age = 18:. What is the fix?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Remove the colon.',
              wrongExplanation: 'The colon is required. The problem is the single equals sign.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Put 18 in quotes.',
              wrongExplanation: 'age is a number, so 18 should stay a number.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Restart VS Code.',
              wrongExplanation: 'The editor is fine. The code itself needs fixing.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Add a second equals sign: if age == 18:',
              wrongExplanation: '',
              correctExplanation:
                'Correct. When you see that error, check for a single = where you meant ==.',
            },
          ],
        },
      ],
    },
    {
      id: 'comparison-operators-exercise',
      title: 'Exercise 1: Temperature Check',
      summary: 'Print the result of two comparisons',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 1: Temperature Check' },
        {
          type: 'p',
          text: 'Make a variable temperature = 25. Print whether it is above 20, and whether it is exactly 30.',
        },
        {
          type: 'hint',
          id: 'comparison-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'You can put a comparison straight inside print(). “Above” is >, and “exactly” is ==.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'comparison-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1.py',
              code: `temperature = 25
print(temperature > 20)
print(temperature == 30)`,
            },
            { type: 'p', text: 'This prints True, then False.' },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user for two whole numbers. Print the result of all six comparison operators, each with a label, such as Equal: False.',
        },
        {
          type: 'hint',
          id: 'comparison-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Remember to convert both inputs with int(). Use a comma in print() to show the label and the comparison together.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'comparison-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_1_advanced.py',
              code: `a = int(input("First number: "))
b = int(input("Second number: "))

print("Equal:", a == b)
print("Not equal:", a != b)
print("First is bigger:", a > b)
print("First is smaller:", a < b)
print("First is at least as big:", a >= b)
print("First is at most as big:", a <= b)`,
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_02: CourseGroupItem = {
  id: 'if-statement',
  title: 'Section 2: Conditional Code with if',
  summary: 'Run code only when a condition is True',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Conditional Code with if' },
    {
      type: 'p',
      text: 'Until now, every program ran every line, top to bottom. That changes here: programs start asking questions and choosing between different paths.',
    },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'An if statement runs code only when its condition is True.',
          'The condition is any expression that answers True or False, like a comparison.',
          'Note the colon at the end of the if line. It is required.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `age = 20

if age >= 18:
    print("You are an adult")

print("This line always runs")`,
    },
    {
      type: 'p',
      text: 'Walk through it with two values. With age 20, both lines print. With age 15, only the last line prints. The program literally skips code.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Forgetting the colon is the second most common error in this chapter, right after = versus ==.',
    },
  ],
  children: [
    {
      id: 'if-statement-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of if',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'if-runs-when',
          prompt: 'When does the code inside an if run?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Always.',
              wrongExplanation: 'The whole point of if is that the code can be skipped.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only when the condition is False.',
              wrongExplanation: 'It is the other way around.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only when the condition is True.',
              wrongExplanation: '',
              correctExplanation: 'Correct. When the condition is False, Python skips the block.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only when the user types something.',
              wrongExplanation: 'The condition decides, not whether the user types.',
            },
          ],
        },
        {
          id: 'if-colon',
          prompt: 'What is required at the end of an if line?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A colon :',
              wrongExplanation: '',
              correctExplanation: 'Correct. Without it, Python reports a syntax error.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A semicolon ;',
              wrongExplanation: 'Python does not use semicolons here. It needs a colon.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A full stop .',
              wrongExplanation: 'A full stop is not valid here. It needs a colon.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'The colon is required. Forgetting it is a very common error.',
            },
          ],
        },
        {
          id: 'if-age-20',
          prompt: 'In the example, age is 20. What is printed?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only This line always runs.',
              wrongExplanation: '20 is 18 or more, so the indented line runs too.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'You are an adult, then This line always runs.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The condition is True, so both lines print.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only You are an adult.',
              wrongExplanation: 'The last line is not part of the if, so it always runs.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'At least the last line always runs.',
            },
          ],
        },
        {
          id: 'if-age-15',
          prompt: 'Now age is 15. What is printed?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'You are an adult, then This line always runs.',
              wrongExplanation: '15 is not 18 or more, so the indented line is skipped.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Nothing.',
              wrongExplanation: 'The last line is outside the if, so it always runs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error.',
              wrongExplanation: 'A False condition is not an error. The block is just skipped.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only This line always runs.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The program skips the indented line.',
            },
          ],
        },
        {
          id: 'if-condition',
          prompt: 'What can you use as the condition of an if?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only the word True.',
              wrongExplanation: 'You can use any expression that answers True or False.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only text in quotes.',
              wrongExplanation: 'A condition is a question, usually a comparison.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Any expression that answers True or False, like a comparison.',
              wrongExplanation: '',
              correctExplanation: 'Correct. age >= 18 is a typical condition.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A print() statement.',
              wrongExplanation: 'print() goes inside the block, not in the condition.',
            },
          ],
        },
      ],
    },
    {
      id: 'if-statement-exercise',
      title: 'Exercise 2: A Big Number',
      summary: 'Write your first if with user input',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 2: A Big Number' },
        {
          type: 'p',
          text: 'Ask the user for a number. If it is greater than 100, print "That is a big number".',
        },
        {
          type: 'hint',
          id: 'if-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'input() gives text, so convert it with int() before comparing. End the if line with a colon and indent the print line.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'if-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2.py',
              code: `number = int(input("Enter a number: "))

if number > 100:
    print("That is a big number")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user for a number. Using three separate if statements, print "That is a big number" when it is greater than 100, "That is a negative number" when it is below 0, and "That is exactly zero" when it is 0.',
        },
        {
          type: 'hint',
          id: 'if-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Each if is its own question, checked one after the other. To check for exactly zero, use ==.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'if-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_2_advanced.py',
              code: `number = int(input("Enter a number: "))

if number > 100:
    print("That is a big number")
if number < 0:
    print("That is a negative number")
if number == 0:
    print("That is exactly zero")`,
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_03: CourseGroupItem = {
  id: 'code-blocks',
  title: 'Section 3: Code Blocks',
  summary: 'Indented lines run or get skipped together',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Code Blocks' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'The indented lines after the if form a code block. They run, or get skipped, together.',
          'The first line that is not indented is outside the block and always runs.',
          'Standard indentation is four spaces. VS Code does it for you when you type the colon and press Enter.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `mood = "happy"

if mood == "happy":
    print("Great to hear!")     # in the block
    print("Keep smiling")       # also in the block

print("Goodbye")                # outside, always runs`,
    },
    {
      type: 'p',
      text: 'This is the “indentation matters” idea from Basic Syntax paying off. The indent is how Python knows where the decision ends.',
    },
  ],
  children: [
    {
      id: 'code-blocks-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of code blocks',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'block-definition',
          prompt: 'What forms the code block of an if?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Every line in the file.',
              wrongExplanation: 'Only the indented lines after the if belong to it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The indented lines after the if.',
              wrongExplanation: '',
              correctExplanation: 'Correct. They run, or get skipped, together.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The lines inside curly braces { }.',
              wrongExplanation: 'Other languages use braces. Python uses indentation.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only the first line after the if.',
              wrongExplanation: 'All the lines indented the same amount belong to the block.',
            },
          ],
        },
        {
          id: 'first-unindented',
          prompt: 'What happens to the first line after the block that is not indented?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It only runs when the condition is True.',
              wrongExplanation: 'It is outside the block, so the condition does not affect it.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It never runs.',
              wrongExplanation: 'It is a normal line, so it runs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It causes an error.',
              wrongExplanation: 'Going back to the left edge is how you end a block.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It is outside the block and always runs.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Like Goodbye in the example.',
            },
          ],
        },
        {
          id: 'mood-sad',
          prompt: 'In the example, mood is "sad" instead. What is printed?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only Goodbye.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The condition is False, so the whole block is skipped.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Great to hear! and Goodbye.',
              wrongExplanation: 'Both indented lines are skipped together, not just one.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'All three lines.',
              wrongExplanation: '"sad" is not "happy", so the block is skipped.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'Goodbye is outside the block, so it always runs.',
            },
          ],
        },
        {
          id: 'block-indent-size',
          prompt: 'What is the standard indentation for a code block?',
          correctOptionId: 'c',
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
              text: 'Two tabs.',
              wrongExplanation: 'The standard is four spaces per level.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Four spaces.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. VS Code adds them when you type the colon and press Enter.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It does not matter, as long as there is some.',
              wrongExplanation:
                'Every line in a block must use the same amount, and four spaces is the standard.',
            },
          ],
        },
        {
          id: 'unindent-second',
          prompt:
            'You move print("Keep smiling") back to the left edge, and mood is "sad". What changes?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Nothing changes.',
              wrongExplanation: 'The line is now outside the block, so it no longer depends on the if.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Keep smiling now prints even though the mood is not happy.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Unindented means outside the block, so it always runs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Great to hear! now prints too.',
              wrongExplanation: 'That line is still in the block and is still skipped.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Goodbye stops printing.',
              wrongExplanation: 'Goodbye is still outside the block and always runs.',
            },
          ],
        },
      ],
    },
    {
      id: 'code-blocks-exercise',
      title: 'Exercise 3: A Block of Three',
      summary: 'Write a block and test it both ways',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 3: A Block of Three' },
        {
          type: 'p',
          text: 'Write an if with a block of three print lines, and one line after it that always runs. Test it with the condition both True and False.',
        },
        {
          type: 'hint',
          id: 'blocks-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'A boolean variable makes testing easy: set it to True, run the program, then change it to False and run it again.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'blocks-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3.py',
              code: `is_weekend = True

if is_weekend:
    print("No alarm clock today")
    print("Time for a long breakfast")
    print("Maybe a walk in the park")
print("Have a good day")`,
            },
            {
              type: 'p',
              text: 'With True, all four lines print. With False, only Have a good day prints.',
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Break it on purpose. Take your program, move the second print line back to the left edge, and delete the third. Before you run it, write down what you expect to see when the condition is True and when it is False. Then run it both ways and compare.',
        },
        {
          type: 'hint',
          id: 'blocks-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Once a line is back at the left edge, the block has ended. Every line after that is outside the if.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'blocks-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_3_advanced.py',
              code: `is_weekend = False

if is_weekend:
    print("No alarm clock today")
print("Time for a long breakfast")
print("Have a good day")`,
            },
            {
              type: 'p',
              text: 'With False, the long breakfast still prints, because it is no longer in the block. Seeing the difference teaches more than the rule.',
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_04: CourseGroupItem = {
  id: 'else-statement',
  title: 'Section 4: Otherwise: else',
  summary: 'Give the program a second path',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Otherwise: else' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'else gives the program a second path. If the condition is False, the else block runs instead.',
          'Exactly one of the two blocks always runs. Never both.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `age = int(input("Your age? "))

if age >= 18:
    print("Entry allowed")
else:
    print("Sorry, adults only")`,
    },
    {
      type: 'p',
      text: 'else has no condition of its own. It simply means “in all other cases”.',
    },
  ],
  children: [
    {
      id: 'else-statement-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of else',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'else-runs-when',
          prompt: 'When does the else block run?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When the if condition is False.',
              wrongExplanation: '',
              correctExplanation: 'Correct. It is the second path for all other cases.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'When the if condition is True.',
              wrongExplanation: 'Then the if block runs instead.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Always, after the if block.',
              wrongExplanation: 'Only one of the two blocks runs, never both.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Never; it is only a comment.',
              wrongExplanation: 'else is real code that runs when the condition is False.',
            },
          ],
        },
        {
          id: 'else-how-many',
          prompt: 'In an if/else, how many of the two blocks run?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'None, if the condition is False.',
              wrongExplanation: 'If the condition is False, the else block runs.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Both, one after the other.',
              wrongExplanation: 'Never both.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It depends on the indentation.',
              wrongExplanation: 'With correct indentation, the answer is always the same.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Exactly one.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Exactly one of the two blocks always runs.',
            },
          ],
        },
        {
          id: 'else-condition',
          prompt: 'Which is the correct way to write else?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'else age < 18:',
              wrongExplanation: 'else has no condition of its own.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'else',
              wrongExplanation: 'else needs a colon, just like if.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'else:',
              wrongExplanation: '',
              correctExplanation: 'Correct. No condition, just a colon. It means “in all other cases”.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'otherwise:',
              wrongExplanation: 'The keyword is else.',
            },
          ],
        },
        {
          id: 'case-sensitive',
          prompt: 'The password check uses == "secret123". The user types Secret123. What happens?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Welcome is printed, because it is nearly the same.',
              wrongExplanation: 'Python compares exactly. A capital S is different from a lowercase s.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Access denied is printed. That is correct behaviour, not a bug.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Text comparison is case-sensitive, which is exactly what you want for passwords.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error.',
              wrongExplanation: 'Comparing two pieces of text is fine. They are just not equal.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Both Welcome and Access denied are printed.',
              wrongExplanation: 'Exactly one block runs, never both.',
            },
          ],
        },
        {
          id: 'else-age-17',
          prompt: 'In the example, the user types 17. What is printed?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Sorry, adults only',
              wrongExplanation: '',
              correctExplanation: 'Correct. 17 >= 18 is False, so the else block runs.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Entry allowed',
              wrongExplanation: '17 is less than 18, so the condition is False.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Both lines.',
              wrongExplanation: 'Exactly one block runs.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'With else, one of the two blocks always runs.',
            },
          ],
        },
      ],
    },
    {
      id: 'else-statement-exercise',
      title: 'Exercise 4: Password Check',
      summary: 'Choose between two paths',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 4: Password Check' },
        {
          type: 'p',
          text: 'Ask for a password. If it equals "secret123", print "Welcome". Otherwise print "Access denied".',
        },
        {
          type: 'hint',
          id: 'else-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The password is text, so there is no need for int(). Compare it with == and use else for every other answer. Try typing Secret123 too: it should be denied.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'else-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4.py',
              code: `password = input("Password: ")

if password == "secret123":
    print("Welcome")
else:
    print("Access denied")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask the user for a whole number and print whether it is even or odd, for example 7 is odd.',
        },
        {
          type: 'hint',
          id: 'else-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Remember % from Basic Syntax: it gives the remainder. An even number has no remainder when divided by 2.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'else-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_4_advanced.py',
              code: `number = int(input("Enter a whole number: "))

if number % 2 == 0:
    print(number, "is even")
else:
    print(number, "is odd")`,
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_05: CourseGroupItem = {
  id: 'elif-statement',
  title: 'Section 5: elif',
  summary: 'Check several conditions in order',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'elif' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'elif means “else, if”. It lets you check several conditions in order.',
          'Python tests them top to bottom, runs the first block that matches, then skips the rest.',
          'In many languages this is written else if. In Python it is one word: elif.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `score = int(input("Your score? "))

if score >= 90:
    print("Grade: A")
elif score >= 75:
    print("Grade: B")
elif score >= 60:
    print("Grade: C")
else:
    print("Grade: F")`,
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Two things to remember. First, the spelling: typing else if gives a syntax error; the keyword is elif. Second, order matters: a score of 95 matches the first test and stops, even though 95 is also greater than 75. First match wins.',
    },
  ],
  children: [
    {
      id: 'elif-statement-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of elif',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'elif-meaning',
          prompt: 'What does elif mean?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'End the if.',
              wrongExplanation: 'A block ends when the indentation ends.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Repeat the if.',
              wrongExplanation: 'elif checks a new condition; it does not repeat anything.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '“Else, if”: check another condition when the earlier ones were False.',
              wrongExplanation: '',
              correctExplanation: 'Correct. It lets you check several conditions in order.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It is a typing mistake for else.',
              wrongExplanation: 'elif is a real Python keyword.',
            },
          ],
        },
        {
          id: 'else-if-spelling',
          prompt: 'What happens if you write else if instead of elif?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A syntax error.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Many languages use else if, but Python uses one word: elif.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'It works exactly the same.',
              wrongExplanation: 'Python does not accept else if in that form.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Python corrects it for you.',
              wrongExplanation: 'Python never corrects your code. It reports an error.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The else part is ignored.',
              wrongExplanation: 'Python stops with an error before running anything.',
            },
          ],
        },
        {
          id: 'score-95',
          prompt: 'In the grading example, the user types 95. What is printed?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Grade: A and Grade: B',
              wrongExplanation: 'Only the first match runs. The rest are skipped.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Grade: B',
              wrongExplanation: '95 already matches the first test, score >= 90.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Grade: A, Grade: B and Grade: C',
              wrongExplanation: 'First match wins. Python skips the rest.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Grade: A',
              wrongExplanation: '',
              correctExplanation:
                'Correct. 95 matches the first test and stops, even though it is also above 75.',
            },
          ],
        },
        {
          id: 'score-80',
          prompt: 'The user types 80. What is printed?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Grade: A',
              wrongExplanation: '80 is not 90 or more.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Grade: B',
              wrongExplanation: '',
              correctExplanation: 'Correct. The first test fails, and score >= 75 is the first match.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Grade: C',
              wrongExplanation: '80 >= 60 is True, but score >= 75 matched first.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Grade: F',
              wrongExplanation: 'else only runs when none of the conditions matched.',
            },
          ],
        },
        {
          id: 'score-50',
          prompt: 'The user types 50. What is printed?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Nothing.',
              wrongExplanation: 'The else block catches every other case.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Grade: C',
              wrongExplanation: '50 is not 60 or more.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Grade: F',
              wrongExplanation: '',
              correctExplanation: 'Correct. None of the conditions matched, so else runs.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'A score that matches no condition is handled by else.',
            },
          ],
        },
        {
          id: 'order-matters',
          prompt:
            'Someone swaps the order so that score >= 60 is checked first and score >= 90 last. What does 95 print now?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Grade: C',
              wrongExplanation: '',
              correctExplanation:
                'Correct. 95 >= 60 is True, so that block wins and the rest are skipped. Order matters.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Grade: A',
              wrongExplanation: 'Python never reaches the >= 90 test, because an earlier one matched.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Grade: F',
              wrongExplanation: '95 matches a condition, so else does not run.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'An error.',
              wrongExplanation: 'The code still runs. It just gives the wrong grade.',
            },
          ],
        },
      ],
    },
    {
      id: 'elif-statement-exercise',
      title: 'Exercise 5: Freezing, Cool, or Warm',
      summary: 'Choose between three paths',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 5: Freezing, Cool, or Warm' },
        {
          type: 'p',
          text: 'Ask for a temperature. Below 0 print "Freezing", 0 to 20 print "Cool", above 20 print "Warm".',
        },
        {
          type: 'hint',
          id: 'elif-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Start with the lowest range. Once you know the temperature is not below 0, the next test only has to check whether it is 20 or less. Everything else is warm.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'elif-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5.py',
              code: `temperature = int(input("Temperature? "))

if temperature < 0:
    print("Freezing")
elif temperature <= 20:
    print("Cool")
else:
    print("Warm")`,
            },
            { type: 'p', text: 'Test the edges too: -1, 0, 20, and 21.' },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Build the grading program from the slide yourself (A from 90, B from 75, C from 60, otherwise F), but make it safe: print "Invalid score" when the score is above 100 or below 0.',
        },
        {
          type: 'hint',
          id: 'elif-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Order matters. Check for a score above 100 first, before the A test catches it. Then change the F branch so it only accepts scores of 0 or more, and let else catch everything below 0.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'elif-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_5_advanced.py',
              code: `score = int(input("Your score (0-100)? "))

if score > 100:
    print("Invalid score")
elif score >= 90:
    print("Grade: A")
elif score >= 75:
    print("Grade: B")
elif score >= 60:
    print("Grade: C")
elif score >= 0:
    print("Grade: F")
else:
    print("Invalid score")`,
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_06: CourseGroupItem = {
  id: 'logical-operators',
  title: 'Section 6: Logical Operators',
  summary: 'Combine questions with and, or, and not',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Logical Operators' },
    { type: 'p', text: 'Combining questions: and, or, not.' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'and is True only when both sides are True.',
          'or is True when at least one side is True.',
          'not flips True to False and back.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `age = 25
is_member = True

if age >= 18 and is_member:
    print("Welcome to the members lounge")

if age < 3 or age >= 65:
    print("Free entry")

if not is_member:
    print("Want to join?")`,
    },
    {
      type: 'p',
      text: 'Read conditions as plain sentences: “if age is at least 18 and they are a member”. If it reads sensibly aloud, it is probably right.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'A common pitfall is writing age >= 13 and < 20. Both sides of an and must be complete questions on their own, so repeat the variable: age >= 13 and age < 20.',
    },
  ],
  children: [
    {
      id: 'logical-operators-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of and, or, and not',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'and-meaning',
          prompt: 'When is a condition joined with and True?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'When at least one side is True.',
              wrongExplanation: 'That describes or.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only when both sides are True.',
              wrongExplanation: '',
              correctExplanation: 'Correct. If either side is False, the whole condition is False.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'When both sides are False.',
              wrongExplanation: 'Then and gives False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Always.',
              wrongExplanation: 'and depends on both sides.',
            },
          ],
        },
        {
          id: 'or-meaning',
          prompt: 'When is a condition joined with or True?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only when both sides are True.',
              wrongExplanation: 'That describes and.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only when exactly one side is True.',
              wrongExplanation: 'or is also True when both sides are True.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Never.',
              wrongExplanation: 'or is True as soon as one side is True.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'When at least one side is True.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Under 3 or 65 and over: either one gives free entry.',
            },
          ],
        },
        {
          id: 'not-meaning',
          prompt: 'is_member is True. What is not is_member?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'False',
              wrongExplanation: '',
              correctExplanation: 'Correct. not flips True to False and back.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'True',
              wrongExplanation: 'not flips the value.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An error.',
              wrongExplanation: 'not works on any True or False value.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'not gives back the opposite boolean.',
            },
          ],
        },
        {
          id: 'repeat-variable',
          prompt: 'What is wrong with: if age >= 13 and < 20:',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Nothing. It works fine.',
              wrongExplanation: 'Python reports a syntax error for this line.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'and should be &.',
              wrongExplanation: 'Python uses the word and.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The right side is not a complete question; it should be age >= 13 and age < 20.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Both sides of an and must be complete questions on their own.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The colon should be removed.',
              wrongExplanation: 'The colon is required. The problem is the missing variable.',
            },
          ],
        },
        {
          id: 'members-lounge',
          prompt: 'In the example, age is 25 and is_member is True. What is printed?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'All three messages.',
              wrongExplanation: '25 is neither under 3 nor 65 or over, and not True is False.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only Welcome to the members lounge.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Both sides of the and are True; the other two conditions are False.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only Want to join?',
              wrongExplanation: 'They are already a member, so not is_member is False.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'age >= 18 and is_member are both True.',
            },
          ],
        },
        {
          id: 'senior-non-member',
          prompt: 'Now age is 70 and is_member is False. What is printed?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only Welcome to the members lounge.',
              wrongExplanation: 'is_member is False, so the and condition is False.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only Free entry.',
              wrongExplanation: 'not is_member is True, so that message prints too.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Nothing.',
              wrongExplanation: 'Two of the conditions are True.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Free entry, then Want to join?',
              wrongExplanation: '',
              correctExplanation:
                'Correct. 70 >= 65 makes the or True, and not False is True.',
            },
          ],
        },
      ],
    },
    {
      id: 'logical-operators-exercise',
      title: 'Exercise 6: Teenager',
      summary: 'Combine two comparisons with and',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 6: Teenager' },
        {
          type: 'p',
          text: 'Ask the user about their age, and only print “Teenager” if their age is between 13 and 20.',
        },
        {
          type: 'hint',
          id: 'logical-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'A teenager is at least 13 and under 20. Join the two comparisons with and, and remember to repeat the variable on both sides.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'logical-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6.py',
              code: `age = int(input("How old are you? "))

if age >= 13 and age < 20:
    print("Teenager")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Build a discount check for a cinema. Ask for the age and whether the visitor has a student card (yes or no). Print "Discount applies" if they are under 18, 65 or over, or have a student card; otherwise print "Full price". Finally, if they do not have a student card, print a reminder that students get a discount too.',
        },
        {
          type: 'hint',
          id: 'logical-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Store the student card answer as a boolean: input(...) == "yes" gives True or False. Then you can use it directly with or, and with not for the reminder.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'logical-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_6_advanced.py',
              code: `age = int(input("How old are you? "))
has_student_card = input("Do you have a student card? (yes/no) ") == "yes"

if age < 18 or age >= 65 or has_student_card:
    print("Discount applies")
else:
    print("Full price")

if not has_student_card:
    print("Students get a discount too. Bring your card next time!")`,
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_07: CourseGroupItem = {
  id: 'nested-conditions',
  title: 'Section 7: Nested Conditions',
  summary: 'A decision inside a decision',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Nested Conditions' },
    { type: 'p', text: 'A decision inside a decision.' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'An if can live inside another if’s block. The inner question is only asked when the outer one passed.',
          'Each level adds one more indent.',
          'Use nesting when the second question only makes sense after the first. If you are just combining requirements, and is usually cleaner.',
        ],
      },
    },
    {
      type: 'code',
      language: 'python',
      filename: 'main.py',
      code: `has_ticket = True
age = 10

if has_ticket:
    if age < 12:
        print("Child entry: please bring an adult")
    else:
        print("Entry allowed")
else:
    print("Please buy a ticket first")`,
    },
  ],
  children: [
    {
      id: 'nested-conditions-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of nested conditions',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'inner-asked-when',
          prompt: 'When is the inner if asked?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only when the outer condition passed.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The inner question lives inside the outer block.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Always, before the outer if.',
              wrongExplanation: 'Python reads top to bottom, and the inner if is inside the outer block.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only when the outer condition failed.',
              wrongExplanation: 'Then the outer else runs instead.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Never.',
              wrongExplanation: 'It runs whenever the outer condition is True.',
            },
          ],
        },
        {
          id: 'nesting-indent',
          prompt: 'How do you show that an if is inside another if?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Write the two ifs on the same line.',
              wrongExplanation: 'Each if gets its own line.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Use the keyword inside.',
              wrongExplanation: 'There is no such keyword. Indentation does the job.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Indent it one more level; each level adds one more indent.',
              wrongExplanation: '',
              correctExplanation: 'Correct. The inner block is indented eight spaces in total.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Put it in brackets.',
              wrongExplanation: 'Python uses indentation, not brackets, to group code.',
            },
          ],
        },
        {
          id: 'nested-child',
          prompt: 'In the example, has_ticket is True and age is 10. What is printed?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Entry allowed',
              wrongExplanation: '10 is under 12, so the inner if matches.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Child entry: please bring an adult',
              wrongExplanation: '',
              correctExplanation: 'Correct. The outer check passes, then age < 12 is True.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Please buy a ticket first',
              wrongExplanation: 'They have a ticket, so the outer else does not run.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing.',
              wrongExplanation: 'Both conditions are True, so the inner message prints.',
            },
          ],
        },
        {
          id: 'nested-no-ticket',
          prompt: 'Now has_ticket is False and age is 10. What is printed?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Child entry: please bring an adult',
              wrongExplanation: 'The inner if is never reached without a ticket.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Entry allowed',
              wrongExplanation: 'The inner if/else is skipped completely.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Both the child message and Please buy a ticket first.',
              wrongExplanation: 'Only one branch of the outer if/else runs.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Please buy a ticket first',
              wrongExplanation: '',
              correctExplanation: 'Correct. The outer condition fails, so the age is never checked.',
            },
          ],
        },
        {
          id: 'nest-or-and',
          prompt: 'When is and usually cleaner than nesting?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Never; nesting is always better.',
              wrongExplanation: 'Deep nesting gets hard to read. and is often simpler.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'When the second question only makes sense after the first.',
              wrongExplanation: 'That is exactly when nesting is the right choice.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'When you are just combining requirements that both must be True.',
              wrongExplanation: '',
              correctExplanation: 'Correct. if age >= 18 and is_member: is cleaner than two nested ifs.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'When there is an else.',
              wrongExplanation: 'else works with both styles. The question is what you are expressing.',
            },
          ],
        },
      ],
    },
    {
      id: 'nested-conditions-exercise',
      title: 'Exercise 7: Umbrella',
      summary: 'Ask a second question only when it makes sense',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise 7: Umbrella' },
        {
          type: 'p',
          text: 'Ask if the user has an umbrella (yes or no). If yes, ask if it is raining. Only if both, print "You stay dry".',
        },
        {
          type: 'hint',
          id: 'nested-exercise-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'The second input() goes inside the first if block, so it is only asked when the answer was yes. Then put another if inside that block.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'nested-exercise-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_7.py',
              code: `umbrella = input("Do you have an umbrella? (yes/no) ")

if umbrella == "yes":
    raining = input("Is it raining? (yes/no) ")
    if raining == "yes":
        print("You stay dry")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'p',
          text: 'Ask both questions up front, then give an answer for all four combinations: "You stay dry", "You can leave the umbrella at home", "You will get wet", and "Lucky you, it is dry".',
        },
        {
          type: 'hint',
          id: 'nested-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Use an outer if/else for the umbrella, and put an if/else for the rain inside both branches.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'nested-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'exercise_7_advanced.py',
              code: `umbrella = input("Do you have an umbrella? (yes/no) ")
raining = input("Is it raining? (yes/no) ")

if umbrella == "yes":
    if raining == "yes":
        print("You stay dry")
    else:
        print("You can leave the umbrella at home")
else:
    if raining == "yes":
        print("You will get wet")
    else:
        print("Lucky you, it is dry")`,
            },
          ],
        },
      ],
    },
  ],
};

export const CONDITION_SECTION_08: CourseGroupItem = {
  id: 'zoo-entry-system',
  title: 'Section 8: Capstone: The Zoo Entry System',
  summary: 'Combine everything from the chapter',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Capstone: The Zoo Entry System' },
    {
      type: 'p',
      text: 'Build the ticket system for a zoo. Every topic from this chapter appears: an elif chain for the prices, logical operators for the member discount, text comparison for the lion, and nesting for the child check. You will also use input, int(), and f-strings from Basic Syntax.',
    },
    {
      type: 'labelValue',
      label: 'Your program should:',
      list: {
        ordered: true,
        items: [
          'Ask the visitor’s age.',
          {
            text: 'Pick a price:',
            children: [
              'Under 3 is free.',
              '3–12 pays 50 DKK.',
              '13–64 pays 120 DKK.',
              '65 and above pays 80 DKK.',
            ],
          },
          'Ask if they are a member. Members get 20 DKK off, but only if the ticket is not already free.',
          'Ask which animal they came to see. The lion exhibit is closed today: if they answer “lion”, suggest the tigers instead.',
          'If the visitor is under 13, ask if an adult is with them. If not, politely refuse entry.',
          'Print a ticket summary with the final price.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Give yourself 20 to 30 minutes and try not to look at the solution early.',
    },
  ],
  children: [
    {
      id: 'zoo-entry-system-quiz',
      title: 'Quiz',
      summary: 'Check you are ready for the capstone',
      type: 'quiz',
      intro: 'Answer these before you start the exercise.',
      questions: [
        {
          id: 'zoo-price-8',
          prompt: 'A visitor is 8 years old and not a member. What should the ticket cost?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '0 DKK',
              wrongExplanation: 'Only visitors under 3 get in free.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '50 DKK',
              wrongExplanation: '',
              correctExplanation: 'Correct. 8 is in the 3–12 range.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '120 DKK',
              wrongExplanation: '120 DKK is for ages 13–64.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '30 DKK',
              wrongExplanation: 'The 20 DKK discount is only for members.',
            },
          ],
        },
        {
          id: 'zoo-member-30',
          prompt: 'A visitor is 30 years old and a member. What is the final price?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: '120 DKK',
              wrongExplanation: 'Members get 20 DKK off.',
            },
            {
              id: 'b',
              label: 'b)',
              text: '80 DKK',
              wrongExplanation: '80 DKK is the price for 65 and above.',
            },
            {
              id: 'c',
              label: 'c)',
              text: '140 DKK',
              wrongExplanation: 'The discount is subtracted, not added.',
            },
            {
              id: 'd',
              label: 'd)',
              text: '100 DKK',
              wrongExplanation: '',
              correctExplanation: 'Correct. 120 DKK minus the 20 DKK member discount.',
            },
          ],
        },
        {
          id: 'zoo-member-free',
          prompt: 'A 2-year-old is a member. Why must the program not subtract 20 DKK?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The ticket is already free, so the price would become −20.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. That is why the discount check uses and: is_member and price > 0.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Children cannot be members.',
              wrongExplanation: 'The task does not say that. The issue is the free ticket.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Members never get a discount.',
              wrongExplanation: 'Members get 20 DKK off, just not on a free ticket.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Python cannot subtract from 0.',
              wrongExplanation: 'It can, which is exactly the problem: the price would go negative.',
            },
          ],
        },
        {
          id: 'zoo-price-tool',
          prompt: 'Which tool fits best for choosing between the four age prices?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Four separate if statements with no elif.',
              wrongExplanation:
                'It can work, but you must make every range exact. An elif chain stops at the first match.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A single if with not.',
              wrongExplanation: 'One condition cannot choose between four prices.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'An if / elif / elif / else chain.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Check the ranges in order and the first match picks the price.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A nested if inside every branch.',
              wrongExplanation: 'Nesting is for questions that depend on each other. The ages do not.',
            },
          ],
        },
        {
          id: 'zoo-child-alone',
          prompt: 'A 10-year-old answers no when asked if an adult is with them. What should happen?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Print the ticket with a 50 DKK price.',
              wrongExplanation: 'Children under 13 without an adult must be refused.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Politely refuse entry.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. This is the nested check: only children under 13 are asked about an adult.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Charge the adult price instead.',
              wrongExplanation: 'The task says to refuse entry, not to change the price.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Nothing; the question is only asked to adults.',
              wrongExplanation: 'The question is asked to visitors under 13.',
            },
          ],
        },
      ],
    },
    {
      id: 'zoo-entry-system-exercise',
      title: 'Exercise: The Zoo Entry System',
      summary: 'Build a complete decision-making program',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: The Zoo Entry System' },
        {
          type: 'labelValue',
          label: 'Build a program that:',
          list: {
            ordered: true,
            items: [
              'Asks the visitor’s age.',
              'Picks a price: under 3 is free, 3–12 pays 50 DKK, 13–64 pays 120 DKK, 65 and above pays 80 DKK.',
              'Asks if they are a member. Members get 20 DKK off, but only if the ticket is not already free.',
              'Asks which animal they came to see. If they answer “lion”, explains that the lion exhibit is closed today and suggests the tigers.',
              'If the visitor is under 13, asks if an adult is with them. If not, politely refuses entry.',
              'Prints a ticket summary with the final price.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'zoo-exercise-hint-1',
          title: 'Hint 1: Work out the price first',
          blocks: [
            {
              type: 'p',
              text: 'Use an if / elif / elif / else chain that stores a value in a price variable. Then apply the discount with one more if that checks two things with and.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'zoo-exercise-hint-2',
          title: 'Hint 2: Turn yes/no into a boolean',
          blocks: [
            {
              type: 'p',
              text: 'input("Are you a member? (yes/no) ") == "yes" gives True or False, which you can use directly in a condition.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'zoo-exercise-solution',
          title: 'Show one possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'zoo.py',
              code: `age = int(input("How old are you? "))
is_member = input("Are you a member? (yes/no) ") == "yes"

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

animal = input("Which animal are you here to see? ")
if animal == "lion":
    print("The lion exhibit is closed today. The tigers are right next door!")

if age < 13:
    accompanied = input("Is an adult with you? (yes/no) ")
    if accompanied == "no":
        print("Sorry, children must be accompanied by an adult.")
    else:
        print(f"Welcome to the zoo! Your ticket costs {price}.")
else:
    print(f"Welcome to the zoo! Your ticket costs {price}.")`,
            },
          ],
        },
        { type: 'divider' },
        { type: 'h3', text: 'Advanced Alternative (Optional)' },
        {
          type: 'labelValue',
          label: 'Extend the zoo system so it also:',
          list: {
            ordered: true,
            items: [
              'Rejects impossible ages (below 0 or above 120) before asking anything else.',
              'Asks how many tickets the visitor wants. Groups of 5 or more get 10% off the total.',
              'Handles one more exhibit, for example telling penguin fans when feeding time is.',
            ],
          },
        },
        {
          type: 'hint',
          id: 'zoo-advanced-hint',
          title: 'Hint',
          blocks: [
            {
              type: 'p',
              text: 'Wrap the whole ticket flow in the else of the age check, so nothing else is asked when the age is impossible. 10% off is the same as multiplying the total by 0.9.',
            },
          ],
        },
        {
          type: 'hint',
          id: 'zoo-advanced-solution',
          title: 'Show a possible solution',
          blocks: [
            {
              type: 'code',
              language: 'python',
              filename: 'zoo_advanced.py',
              code: `age = int(input("How old are you? "))

if age < 0 or age > 120:
    print("That age does not look right. Please ask at the ticket desk.")
else:
    is_member = input("Are you a member? (yes/no) ") == "yes"
    tickets = int(input("How many tickets? "))

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

    total = price * tickets
    if tickets >= 5:
        total = total * 0.9

    animal = input("Which animal are you here to see? ")
    if animal == "lion":
        print("The lion exhibit is closed today. The tigers are right next door!")
    elif animal == "penguins":
        print("Penguin feeding is at 14:00. Do not miss it!")

    if age < 13:
        accompanied = input("Is an adult with you? (yes/no) ")
        if accompanied == "no":
            print("Sorry, children must be accompanied by an adult.")
        else:
            print(f"Welcome to the zoo! Your {tickets} ticket(s) cost {total} DKK.")
    else:
        print(f"Welcome to the zoo! Your {tickets} ticket(s) cost {total} DKK.")`,
            },
          ],
        },
      ],
    },
  ],
};
