import { CourseGroupItem } from '../../course.model';

export const SECTION_01: CourseGroupItem = {
  id: 'section1',
  title: 'Section 1: Precise Instructions',
  summary: '',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Theory: Programming is giving precise instructions' },

    {
      type: 'p',
      text: 'At its core, programming is the act of giving instructions to a computer. A program is simply a structured list of steps that the computer follows exactly as written.',
    },

    {
      type: 'p',
      text: 'Unlike humans, computers do not interpret intent. They do not guess what you meant. They execute exactly what you specify.',
    },

    {
      type: 'callout',
      variant: 'info',
      text: 'The computer does not understand what you meant. It only understands what you wrote.',
    },

    { type: 'divider' },

    { type: 'h3', text: 'Why Precision Matters' },

    {
      type: 'p',
      text: 'If an instruction is ambiguous, incomplete, or logically incorrect, the computer will still attempt to execute it. This is why small mistakes can cause large failures.',
    },

    {
      type: 'labelValue',
      label: 'Common sources of ambiguity:',
      list: {
        ordered: false,
        items: [
          'Missing steps.',
          'Unclear conditions.',
          'Assumptions that are not explicitly defined.',
          'Logical contradictions.',
        ],
      },
      testId: 'ch1-ambiguity-sources',
    },

    { type: 'divider' },

    { type: 'h3', text: 'A Simple Thought Experiment' },

    {
      type: 'p',
      text: 'Imagine writing instructions for making a sandwich. If you write “put cheese on bread”, what does that mean exactly? How much cheese? Which bread? Should the bread be opened first?',
    },

    {
      type: 'p',
      text: 'This exercise demonstrates why programming requires clarity and explicit detail.',
    },
  ],
  children: [
    {
      id: 'ch1-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of programming fundamentals',
      type: 'quiz',
      intro:
        'One question at a time. If you miss one, try again and read the explanation carefully.',
      questions: [
        {
          id: 'q1',
          prompt: 'What is a program best described as?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A collection of random computer commands.',
              wrongExplanation:
                'Programs are not random. They are structured and ordered sets of instructions designed to achieve a specific outcome.',
              wrongExplainFurther:
                'If instructions were random, the output would also be unpredictable. Programs rely on structure and logic.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A tool that makes computers think like humans.',
              wrongExplanation:
                'Computers do not think like humans. They execute instructions based on defined rules and logic.',
              wrongExplainFurther:
                'Computers do not guess or interpret intent. They follow instructions exactly as written.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A structured set of precise instructions executed by a computer.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A program is a structured list of precise instructions that a computer executes step by step.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A visual interface that users interact with.',
              wrongExplanation:
                'A visual interface may be built by a program, but the program itself is the underlying logic and instructions.',
              wrongExplainFurther:
                'The user interface is an output of a program, not the definition of one.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'Why must programming instructions be precise?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because computers are creative and need flexibility.',
              wrongExplanation:
                'Computers are not creative. They follow exact rules and defined logic.',
              wrongExplainFurther:
                'Ambiguous instructions lead to unexpected or incorrect behavior because the computer cannot interpret intent.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because computers execute exactly what is written, not what was intended.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The computer does not understand intent. It executes exactly what is specified in the program.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because precise instructions make programs run faster.',
              wrongExplanation: 'Precision is about correctness, not speed.',
              wrongExplainFurther:
                'A program can be precise and slow, or imprecise and fast. Precision ensures predictable behavior.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Because programming languages require long words.',
              wrongExplanation:
                'Precision is about clarity of logic and conditions, not word length.',
              wrongExplainFurther:
                'Even short instructions must be logically precise to behave correctly.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'What is the correct basic model for how programs work?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Input → Processing → Output',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Programs take input, process it using logic, and produce output.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Design → Guess → Hope',
              wrongExplanation:
                'Programming is not based on guessing. It relies on defined logic and structured execution.',
              wrongExplainFurther: 'Predictability and structure are what make software reliable.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Output → Processing → Input',
              wrongExplanation:
                'Output is the result of processing. It does not happen before input.',
              wrongExplainFurther:
                'The flow begins with input, which is then processed to produce output.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Code → Magic → Result',
              wrongExplanation: 'There is no magic step. Execution follows defined logical rules.',
              wrongExplainFurther:
                'Understanding execution removes the illusion of magic from programming.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'What does it mean that computers are deterministic?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'They always run quickly.',
              wrongExplanation: 'Deterministic does not refer to speed.',
              wrongExplainFurther:
                'A deterministic system produces predictable results for the same input.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'They sometimes guess the best outcome.',
              wrongExplanation: 'Computers do not guess. They follow logical rules.',
              wrongExplainFurther:
                'Given the same program and same input, the output will be the same.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The same input and program produce the same output.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Deterministic systems produce predictable results when conditions are the same.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'They can change behavior without changing the code.',
              wrongExplanation:
                'Without changes in input, environment, or code, the result will remain the same.',
              wrongExplainFurther:
                'Unexpected behavior usually comes from hidden state or incorrect assumptions.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which statement best describes what programming really is?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a)',
              label: 'a)',
              text: 'Memorizing as much syntax as possible.',
              wrongExplanation: 'Syntax is important, but it is not the core of programming.',
              wrongExplainFurther:
                'Programming is about logic and structured thinking. Syntax is a tool for expressing that logic.',
            },
            {
              id: 'b)',
              label: 'b)',
              text: 'Typing quickly and using advanced tools.',
              wrongExplanation:
                'Speed and tools help productivity but do not define programming ability.',
              wrongExplainFurther:
                'Clear thinking and structured logic are more important than typing speed.',
            },
            {
              id: 'c)',
              label: 'c)',
              text: 'Copying solutions from the internet.',
              wrongExplanation:
                'Copying code without understanding does not build programming skill.',
              wrongExplainFurther:
                'Understanding why code works is more important than simply using it.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Structured problem solving expressed through precise instructions.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Programming is structured problem solving, expressed as precise instructions a computer can execute.',
            },
          ],
        },
      ],
    },

    {
      id: 'ch1-precise-instructions-exercise',
      title: 'Exercise',
      summary: 'Turn vague instructions into precise ones',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Remove the Ambiguity' },

        {
          type: 'p',
          text: 'Below is a vague instruction. Your task is to rewrite it so that a computer could execute it without guessing.',
        },

        {
          type: 'callout',
          variant: 'warning',
          text: 'Original instruction: “Sort the numbers properly.”',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Questions to guide you:',
          list: {
            ordered: false,
            items: [
              'What does “properly” mean?',
              'Ascending or descending?',
              'What happens if two numbers are equal?',
              'What should the output format be?',
            ],
          },
          testId: 'ch1-precise-instructions-exercise-guiding-questions',
        },

        {
          type: 'p',
          text: 'Rewrite the instruction in a way that removes ambiguity and clearly defines expected behavior.',
        },
      ],
    },
  ],
};

export const SECTION_02: CourseGroupItem = {
  id: 'section2',
  title: 'Section 2: What Is a Program?',
  summary: '',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Theory: What is a program?' },

    {
      type: 'p',
      text: 'A program is a set of instructions that transforms input into output. This simple model helps you explain almost any software system, from a calculator to a web app.',
    },

    {
      type: 'callout',
      variant: 'info',
      text: 'A helpful mental model is Input → Processing → Output. If you can describe a system using this, you are thinking like a developer.',
    },

    { type: 'divider' },

    { type: 'h3', text: 'Input' },

    {
      type: 'p',
      text: 'Input is any data the program receives. It can come from a user, a file, a network request, or another system. Input is what the program reacts to.',
    },

    {
      type: 'labelValue',
      label: 'Common types of input:',
      list: {
        ordered: false,
        items: [
          'User actions (clicks, typing, button presses).',
          'Command line arguments.',
          'Files (text files, CSV, images).',
          'Network data (API responses).',
          'Time and environment (current time, configuration values).',
        ],
      },
      testId: 'ch1-section2-input-types',
    },

    { type: 'divider' },

    { type: 'h3', text: 'Processing' },

    {
      type: 'p',
      text: 'Processing is what the program does with input. This is where logic happens. Processing can validate data, make decisions, calculate results, and update internal state.',
    },

    {
      type: 'labelValue',
      label: 'Processing often includes:',
      list: {
        ordered: false,
        items: [
          'Calculations (math, formatting, conversions).',
          'Decisions (if a condition is true, do one thing, otherwise do another).',
          'Iteration (repeat steps for each item in a collection).',
          'Validation (reject invalid input early).',
          'State updates (store values for later use).',
        ],
      },
      testId: 'ch1-section2-processing-types',
    },

    { type: 'divider' },

    { type: 'h3', text: 'Output' },

    {
      type: 'p',
      text: 'Output is the result produced by the program. Output can be shown to a user, saved to a file, sent over the network, or used to update a user interface.',
    },

    {
      type: 'labelValue',
      label: 'Common types of output:',
      list: {
        ordered: false,
        items: [
          'Text on screen or in a terminal.',
          'A changed UI state (new content, updated numbers).',
          'A saved file.',
          'A network request (sending data to an API).',
          'A return value from a function.',
        ],
      },
      testId: 'ch1-section2-output-types',
    },

    { type: 'divider' },

    { type: 'h3', text: 'Why this model matters' },

    {
      type: 'p',
      text: 'When you get stuck, this model helps you debug. You can ask: What input did I give? What processing happened? What output did I expect? Where did it differ?',
    },

    {
      type: 'callout',
      variant: 'info',
      text: 'Good developers constantly connect observed output back to input and processing. This is the foundation of debugging.',
    },
  ],
  children: [
    {
      id: 'ch1-s2-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of Input, Processing, and Output',
      type: 'quiz',
      intro:
        'One question at a time. If you miss one, try again and read the explanation carefully.',
      questions: [
        {
          id: 'q1',
          prompt: 'In the Input → Processing → Output model, what is “input”?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The final result shown to the user.',
              wrongExplanation:
                'That describes output. Input is what the program receives before it starts processing.',
              wrongExplainFurther:
                'If you mix up input and output, it becomes harder to reason about program flow and debugging.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Data the program receives from a user, file, network, or environment.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Input is any data the program receives and reacts to.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The part of the program that contains logic and decisions.',
              wrongExplanation:
                'That describes processing. Processing is what happens to input to produce output.',
              wrongExplainFurther:
                'Logic, conditions, and calculations belong in processing, not input.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A programming language feature used to store values.',
              wrongExplanation: 'That describes a variable or a data structure, not input itself.',
              wrongExplainFurther:
                'Input may be stored in variables, but it is not defined by the storage mechanism.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'Which of the following is the best example of “processing”?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A user clicks the “Buy” button.',
              wrongExplanation: 'A click is input. It is an event the program receives.',
              wrongExplainFurther: 'The logic that happens after the click is processing.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The app displays “Order confirmed”.',
              wrongExplanation: 'That is output. It is what the program shows after processing.',
              wrongExplainFurther:
                'Processing is what leads to the confirmation message being shown.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The program checks if the cart is empty and calculates the total price.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Decisions and calculations are part of processing.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A file is loaded from disk.',
              wrongExplanation:
                'Loading a file is input. The file contents are data the program receives.',
              wrongExplainFurther:
                'Processing would be what you do with the file contents after loading them.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'Which statement about output is correct?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Output can be a UI update, a saved file, a network request, or a returned value.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Output is any result produced by the program, not only text on screen.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Output only means printing text in a terminal.',
              wrongExplanation:
                'Output is broader than terminal text. Many programs produce output through UI updates, files, or network calls.',
              wrongExplainFurther:
                'Thinking of output only as “print” hides how most real software behaves.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Output happens before processing.',
              wrongExplanation: 'Output is the result of processing. Processing must happen first.',
              wrongExplainFurther: 'The flow is input first, then processing, then output.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Output is the same thing as source code.',
              wrongExplanation:
                'Source code is what you write. Output is what the program produces when it runs.',
              wrongExplainFurther:
                'Separating “code” from “behavior” is essential for debugging and reasoning.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'Why is the Input → Processing → Output model useful when debugging?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because it guarantees the program has no bugs.',
              wrongExplanation:
                'A model does not remove bugs. It helps you reason about where a bug might be.',
              wrongExplainFurther:
                'Debugging is about finding mismatches between expected and actual behavior.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because it replaces the need to test your program.',
              wrongExplanation:
                'Testing is still necessary. The model helps you think clearly, but it does not verify behavior.',
              wrongExplainFurther:
                'A clear mental model supports better tests and faster debugging.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because it makes programs run faster.',
              wrongExplanation: 'This model is about understanding, not performance.',
              wrongExplainFurther:
                'Speed depends on algorithms and implementation details, not this mental model.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because it helps you locate whether the issue is in the input, the logic, or the produced result.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The model helps you isolate where reality diverges from expectation.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'A calculator app receives “2 + 2” and shows “4”. Which mapping is correct?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Input: “4”, Processing: “2 + 2”, Output: user typing',
              wrongExplanation:
                'This mixes up the roles. Input is what the app receives, and output is what the app produces.',
              wrongExplainFurther:
                'Try to consistently apply the flow: what comes in, what happens, what comes out.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Input: “2 + 2”, Processing: perform addition, Output: “4”',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The expression is input, the addition is processing, and the displayed result is output.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Input: perform addition, Processing: “4”, Output: “2 + 2”',
              wrongExplanation:
                'Processing is the action, not the result. Output is the result produced by the program.',
              wrongExplainFurther:
                'The program receives the expression first. Then it calculates. Then it shows the result.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Input: “2 + 2”, Processing: show “4”, Output: perform addition',
              wrongExplanation:
                'Showing “4” is output, not processing. Processing is the logic used to compute the result.',
              wrongExplainFurther:
                'A good way to separate them is to ask: which part is logic, and which part is a visible effect?',
            },
          ],
        },
      ],
    },

    {
      id: 'ch1-s2-exercise',
      title: 'Exercise',
      summary: 'Identify input, processing, and output in real examples',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Input, Processing, Output' },

        {
          type: 'p',
          text: 'For each scenario below, identify the input, the processing, and the output. Focus on being specific. Avoid vague answers like “the program does something”.',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Scenario 1: A login form',
          list: {
            ordered: false,
            items: [
              'Input: What data is provided to the system?',
              'Processing: What checks or decisions are made?',
              'Output: What does the system produce or change?',
            ],
          },
          testId: 'ch1-s2-exercise-scenario-1',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Scenario 2: A weather app',
          list: {
            ordered: false,
            items: [
              'Input: What data does the app receive?',
              'Processing: What does the app do with it?',
              'Output: What does the user see or receive?',
            ],
          },
          testId: 'ch1-s2-exercise-scenario-2',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Scenario 3: A music streaming app',
          list: {
            ordered: false,
            items: [
              'Input: What triggers playback or changes?',
              'Processing: What decisions or calculations happen?',
              'Output: What changes for the user or system?',
            ],
          },
          testId: 'ch1-s2-exercise-scenario-3',
        },

        { type: 'divider' },

        {
          type: 'callout',
          variant: 'info',
          text: 'If your answers feel unclear, rewrite them using more concrete words. Name the data. Name the decision. Name the resulting change.',
        },
      ],
    },
  ],
};
