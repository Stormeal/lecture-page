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

export const SECTION_03: CourseGroupItem = {
  id: 'section3',
  title: 'Section 3: Source Code and Execution',
  summary: '',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Theory: Source code vs execution' },

    {
      type: 'p',
      text: 'When you write code, you are writing source code. Source code is designed for humans to read and maintain. Computers do not execute source code directly. It must be translated into instructions the computer can run.',
    },

    {
      type: 'callout',
      variant: 'info',
      text: 'Source code is what you write. Execution is what the computer actually does when the program runs.',
    },

    { type: 'divider' },

    { type: 'h3', text: 'From source code to running program' },

    {
      type: 'p',
      text: 'To run a program, the code must be turned into something the computer can execute. Different languages do this in different ways, but the goal is the same: produce instructions the CPU can follow.',
    },

    {
      type: 'labelValue',
      label: 'Common translation approaches:',
      list: {
        ordered: false,
        items: [
          'Compilation: translate source code into machine code before the program runs.',
          'Interpretation: read and execute source code (or an intermediate form) while the program runs.',
          'Hybrid models: compile to an intermediate form, then run it using a runtime (often with just-in-time compilation).',
        ],
      },
      testId: 'ch1-section3-translation-approaches',
    },

    { type: 'divider' },

    { type: 'h3', text: 'What is a runtime?' },

    {
      type: 'p',
      text: 'A runtime is the environment that provides the program with services while it runs. It can manage memory, handle files, talk to the operating system, and provide libraries and tooling.',
    },

    {
      type: 'labelValue',
      label: 'Examples of what a runtime often provides:',
      list: {
        ordered: false,
        items: [
          'Memory management and garbage collection.',
          'Standard libraries for common tasks (strings, files, networking).',
          'Access to the operating system (timers, processes, environment variables).',
          'Error reporting, stack traces, and debugging support.',
        ],
      },
      testId: 'ch1-section3-runtime-provides',
    },

    { type: 'divider' },

    { type: 'h3', text: 'High-level comparison across languages' },

    {
      type: 'p',
      text: 'You do not need deep details yet. For now, the goal is to understand that these languages take different paths from source code to execution, and that this affects tooling, performance, and deployment.',
    },

    {
      type: 'labelValue',
      label: 'A practical mental model:',
      list: {
        ordered: false,
        items: [
          'Python: typically executed by an interpreter with a runtime.',
          'JavaScript: typically executed by an engine (like V8) with a runtime (for example the browser or Node.js).',
          'C#: compiled to an intermediate form and executed by a runtime (the .NET runtime).',
          'Java: compiled to bytecode and executed by a runtime (the JVM).',
        ],
      },
      testId: 'ch1-section3-language-mental-models',
    },

    {
      type: 'callout',
      variant: 'warning',
      text: 'Even if two languages look similar, the way they run can be very different. This is why ecosystems and tooling also differ.',
    },
  ],
  children: [
    {
      id: 'ch1-s3-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of source code, compilation, and runtimes',
      type: 'quiz',
      intro:
        'One question at a time. If you miss one, try again and read the explanation carefully.',
      questions: [
        {
          id: 'q1',
          prompt: 'What is source code?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The instructions the CPU executes directly.',
              wrongExplanation:
                'That describes machine code. Source code is written for humans and must be translated before the CPU can execute it.',
              wrongExplainFurther:
                'A CPU does not understand Python, JavaScript, C#, or Java syntax. It understands machine instructions.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Human-readable code written in a programming language.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Source code is the human-readable form of a program that must be translated into executable instructions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A running program in memory.',
              wrongExplanation:
                'A running program is an execution. Source code is the input used to create that running program.',
              wrongExplainFurther:
                'Source code exists before execution. Execution is what happens when the program runs.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A configuration file for the operating system.',
              wrongExplanation: 'Configuration can affect a program, but it is not source code.',
              wrongExplainFurther: 'Source code contains the program logic, not just settings.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'Why can a computer not execute source code directly?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because source code is always too large.',
              wrongExplanation:
                'Size is not the reason. The issue is that CPUs only understand machine-level instructions.',
              wrongExplainFurther:
                'Even tiny programs must be translated because the CPU expects machine code.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because source code is only meant for documentation.',
              wrongExplanation:
                'Source code is not just documentation. It describes program behavior, but it still must be translated to run.',
              wrongExplainFurther:
                'Documentation explains. Source code defines behavior, but in a human-readable form.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because the CPU understands machine instructions, not programming language syntax.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The CPU executes machine instructions. Source code must be translated into those instructions first.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because source code requires an internet connection to run.',
              wrongExplanation:
                'An internet connection is not required to run source code. Translation and execution happen locally.',
              wrongExplainFurther:
                'Some programs use the internet, but running code does not inherently require it.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'What is compilation best described as?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Translating source code into executable machine code before running the program.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Compilation translates source code into a form the computer can execute, typically before the program runs.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Executing a program line by line without translation.',
              wrongExplanation:
                'That describes interpretation. Compilation happens before execution and produces an executable form.',
              wrongExplainFurther:
                'In interpretation, the program is executed as it is read (or in an intermediate form), not fully translated upfront.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Storing program data in variables.',
              wrongExplanation: 'That describes program state and memory usage, not compilation.',
              wrongExplainFurther:
                'Compilation is about translation from source code to an executable form.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Saving source code into a file.',
              wrongExplanation:
                'Saving a file is not compilation. Compilation produces an executable output from source code.',
              wrongExplainFurther:
                'You can save source code without compiling it. Compilation is a separate step.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'What is a runtime?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A text editor used to write code.',
              wrongExplanation:
                'A text editor helps you write source code, but it is not the runtime.',
              wrongExplainFurther:
                'The runtime is involved when the program runs, not when you type.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A list of rules for writing clean code.',
              wrongExplanation:
                'Rules for clean code are style guidelines. A runtime is the environment that supports execution.',
              wrongExplainFurther:
                'A runtime provides libraries and services while the program runs.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The CPU inside the computer.',
              wrongExplanation:
                'The CPU executes machine instructions, but the runtime is software that supports program execution.',
              wrongExplainFurther:
                'The runtime sits between the program and the operating system, providing services like memory management and libraries.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The environment and supporting components that help a program run.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. A runtime provides services and libraries that support a program while it executes.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which statement is correct about different languages and execution?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'All languages run the same way, only syntax differs.',
              wrongExplanation:
                'Languages can have very different execution models, runtimes, and tooling.',
              wrongExplainFurther:
                'How a language runs affects performance, debugging, packaging, and deployment.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Languages can translate and run code in different ways, which affects tooling and behavior.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. The path from source code to execution differs between languages and influences the ecosystem.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only compiled languages can have runtimes.',
              wrongExplanation: 'Interpreted and hybrid languages also rely on runtimes.',
              wrongExplainFurther:
                'Python, JavaScript, Java, and C# all use runtimes in different forms.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Runtimes only exist for web development.',
              wrongExplanation: 'Runtimes exist across many domains, not only web.',
              wrongExplainFurther:
                'Any environment that supports program execution can be considered a runtime.',
            },
          ],
        },
      ],
    },

    {
      id: 'ch1-s3-exercise',
      title: 'Exercise',
      summary: 'Classify language execution paths and runtimes',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Source Code and Execution' },

        {
          type: 'p',
          text: 'Your goal is to strengthen your mental model of how code becomes a running program. You do not need deep technical details. Focus on the high-level flow.',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Part 1: Classify these statements',
          list: {
            ordered: false,
            items: [
              '“This is the code I write in a file.” (Source code or execution?)',
              '“This is what the computer runs.” (Source code or execution?)',
              '“This step translates code before the program runs.” (Compilation or interpretation?)',
              '“This provides libraries and services while the program runs.” (Runtime or source code?)',
            ],
          },
          testId: 'ch1-s3-exercise-part-1',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Part 2: Apply the model to real life',
          list: {
            ordered: false,
            items: [
              'Pick one language from: Python, JavaScript, C#, Java.',
              'Write a short explanation of how code in that language becomes a running program. Keep it high-level.',
              'Name what you think the runtime is in that context.',
            ],
          },
          testId: 'ch1-s3-exercise-part-2',
        },

        {
          type: 'callout',
          variant: 'info',
          text: 'If your explanation feels fuzzy, that is normal. The goal is not perfect terminology. The goal is to build a consistent mental model you can refine over time.',
        },
      ],
    },
  ],
};

export const SECTION_04: CourseGroupItem = {
  id: 'section4',
  title: 'Section 4: Determinism',
  summary: '',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Theory: Deterministic systems' },

    {
      type: 'p',
      text: 'Computers are deterministic systems. Given the same program, the same input, and the same environment, the result will be the same.',
    },

    {
      type: 'callout',
      variant: 'info',
      text: 'Same input + same program + same environment = same output.',
    },

    { type: 'divider' },

    { type: 'h3', text: 'Why determinism matters' },

    {
      type: 'p',
      text: 'Determinism is what makes debugging possible. If behavior changes without explanation, you know something in the input, state, or environment has changed.',
    },

    {
      type: 'labelValue',
      label: 'Common sources of non-obvious change:',
      list: {
        ordered: false,
        items: [
          'Hidden state stored in memory.',
          'External systems such as APIs.',
          'Current time or random number generation.',
          'Concurrency and parallel execution.',
        ],
      },
      testId: 'ch1-section4-non-obvious-change',
    },

    {
      type: 'callout',
      variant: 'warning',
      text: 'If a program behaves differently, something is different. Determinism forces you to find what changed.',
    },
  ],
  children: [
    {
      id: 'ch1-s4-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of determinism',
      type: 'quiz',
      intro: 'One question at a time. If you miss one, read the explanation and try again.',
      questions: [
        {
          id: 'q1',
          prompt: 'What does it mean that computers are deterministic?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Given the same conditions, they produce the same result.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Determinism means identical conditions lead to identical outcomes.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'They are designed to avoid all randomness in every situation.',
              wrongExplanation:
                'Programs can use randomness intentionally. Determinism refers to predictable behavior under the same conditions.',
              wrongExplainFurther:
                'If randomness is involved, the seed or environment becomes part of the conditions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'They always execute instructions in a fixed physical order inside the CPU hardware.',
              wrongExplanation:
                'CPU execution details are not what defines determinism at the program level.',
              wrongExplainFurther:
                'Determinism is about observable behavior, not internal micro-optimizations.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'They prevent developers from writing incorrect logic.',
              wrongExplanation:
                'Computers will happily execute incorrect logic. Determinism does not prevent mistakes.',
              wrongExplainFurther:
                'It only guarantees consistent behavior, even if that behavior is wrong.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'If a program produces different output on two runs, what is most likely true?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The computer decided to optimize the result differently.',
              wrongExplanation:
                'Optimization does not change correct logical outcomes under identical conditions.',
              wrongExplainFurther: 'If results differ, something in the conditions likely changed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Determinism has failed and the system is broken.',
              wrongExplanation:
                'Determinism has not failed. It means something was not actually identical between runs.',
              wrongExplainFurther:
                'Hidden state, timing, or external data often explains differences.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Some part of the input, state, or environment was different.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Determinism means identical conditions produce identical results. A different result implies different conditions.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The source code changed automatically during execution.',
              wrongExplanation:
                'Source code does not change during normal execution unless explicitly modified.',
              wrongExplainFurther: 'Execution works on already defined instructions.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'Why is determinism important for debugging?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Because it ensures programs are always correct.',
              wrongExplanation: 'Determinism ensures consistency, not correctness.',
              wrongExplainFurther: 'A program can be consistently wrong.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Because it allows you to trace errors by comparing conditions and outcomes.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. If behavior changes, you can look for what changed in the conditions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Because it automatically logs every internal variable change.',
              wrongExplanation:
                'Logging must be implemented explicitly. Determinism does not imply automatic logging.',
              wrongExplainFurther: 'Determinism is a property of system behavior, not tooling.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Because deterministic systems cannot contain logical errors.',
              wrongExplanation:
                'They absolutely can. They will just reproduce those errors consistently.',
              wrongExplainFurther: 'Reproducible errors are easier to debug.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'Which scenario most clearly breaks simple determinism?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'A function that adds two numbers together.',
              wrongExplanation:
                'Addition with the same numbers will always produce the same result.',
              wrongExplainFurther: 'There is no external variability in this example.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'A function that formats a string in uppercase.',
              wrongExplanation: 'Formatting the same string produces the same output.',
              wrongExplainFurther: 'There is no randomness or external state involved.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'A function that multiplies user input by two.',
              wrongExplanation: 'Given the same input, the result will be the same.',
              wrongExplainFurther: 'This is a deterministic transformation.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'A function that uses the current time and a random number generator.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Time and randomness introduce variability unless explicitly controlled.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'What is the most accurate conclusion about unexpected behavior?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Something in the conditions is different.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Determinism means different output implies different input, state, or environment.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The computer interpreted the instructions creatively this time.',
              wrongExplanation:
                'Computers do not interpret creatively. They execute defined instructions.',
              wrongExplainFurther:
                'Unexpected behavior is usually a sign of hidden state or incorrect assumptions.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The runtime decided to improve the logic automatically.',
              wrongExplanation: 'Runtimes do not modify business logic automatically.',
              wrongExplainFurther:
                'They may optimize performance, but logical outcomes remain consistent under identical conditions.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The programming language silently rewrote the algorithm during execution.',
              wrongExplanation:
                'Programming languages do not rewrite logic silently during execution.',
              wrongExplainFurther: 'Execution follows predefined instructions.',
            },
          ],
        },
      ],
    },

    {
      id: 'ch1-s4-exercise',
      title: 'Exercise',
      summary: 'Identify sources of hidden variability',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Hidden differences' },

        {
          type: 'p',
          text: 'This exercise helps you practice diagnosing why software can appear inconsistent even when the computer is still following rules. If the result changed, something changed, even if it is not obvious at first.',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'For each scenario:',
          list: {
            ordered: false,
            items: [
              'Name the most likely source of variability.',
              'Explain what might be different between one run and another.',
              'Use categories like input, state, environment, time, or external systems.',
            ],
          },
          testId: 'ch1-s4-exercise-instructions',
        },

        {
          type: 'labelValue',
          label: 'Scenario 1: A test passes locally but fails in CI',
          list: {
            ordered: false,
            items: [
              'What might be different about the environment, dependencies, configuration, or test data?',
            ],
          },
          testId: 'ch1-s4-exercise-scenario-1',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Scenario 2: A function returns different values at different times of day',
          list: {
            ordered: false,
            items: [
              'What role could time, time zones, clocks, scheduled updates, or date boundaries play?',
            ],
          },
          testId: 'ch1-s4-exercise-scenario-2',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Scenario 3: A feature works for one user but not another',
          list: {
            ordered: false,
            items: [
              'What user-specific input, permissions, account state, feature flags, or stored settings could differ?',
            ],
          },
          testId: 'ch1-s4-exercise-scenario-3',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Scenario 4: A report shows different totals when refreshed',
          list: {
            ordered: false,
            items: [
              'What live data, filtering rules, caching, timing, or external system changes could explain the difference?',
            ],
          },
          testId: 'ch1-s4-exercise-scenario-4',
        },

        { type: 'divider' },

        {
          type: 'p',
          text: 'More than one answer may be valid. The goal is not to guess a single perfect cause. The goal is to build the habit of looking for hidden variables.',
        },

        {
          type: 'labelValue',
          label: 'Reflection:',
          list: {
            ordered: false,
            items: [
              'Which of these hidden differences would be hardest to debug in a real project, and why?',
            ],
          },
          testId: 'ch1-s4-exercise-reflection',
        },

        {
          type: 'callout',
          variant: 'info',
          text: 'When output changes, ask what changed: the input, the internal state, the environment, the timing, or an external dependency.',
        },
      ],
    },
  ],
};

export const SECTION_05: CourseGroupItem = {
  id: 'section5',
  title: 'Section 5: What Programming Is Not',
  summary: '',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Theory: Common misconceptions' },

    {
      type: 'p',
      text: 'Before moving forward, it is important to remove common misconceptions about programming.',
    },

    {
      type: 'labelValue',
      label: 'Programming is not:',
      list: {
        ordered: false,
        items: [
          'Memorizing large amounts of syntax.',
          'Typing quickly.',
          'Copying code without understanding it.',
          'Using the most advanced tools available.',
        ],
      },
      testId: 'ch1-section5-not',
    },

    { type: 'divider' },

    {
      type: 'labelValue',
      label: 'Programming is:',
      list: {
        ordered: false,
        items: [
          'Structured problem solving.',
          'Breaking complex problems into smaller parts.',
          'Expressing logic clearly and precisely.',
          'Reasoning about cause and effect.',
        ],
      },
      testId: 'ch1-section5-is',
    },

    {
      type: 'callout',
      variant: 'info',
      text: 'Tools and syntax matter, but they are secondary to clear thinking.',
    },
  ],
  children: [
    {
      id: 'ch1-s5-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of programming mindset',
      type: 'quiz',
      intro: 'One question at a time. Choose carefully and read the explanations.',
      questions: [
        {
          id: 'q1',
          prompt: 'Which skill is most central to programming?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Memorizing every available library function.',
              wrongExplanation:
                'Libraries change over time. Memorization without understanding is fragile.',
              wrongExplainFurther:
                'Understanding core principles allows you to learn libraries when needed.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Typing quickly with minimal errors.',
              wrongExplanation:
                'Typing speed improves productivity but does not define problem-solving ability.',
              wrongExplainFurther: 'Clarity of thought is more important than speed.',
            },
            {
              id: 'c)',
              label: 'c)',
              text: 'Structured problem solving.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Programming is fundamentally about structuring and solving problems logically.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Using advanced frameworks from day one.',
              wrongExplanation:
                'Frameworks are tools. Without core understanding, they become confusing quickly.',
              wrongExplainFurther: 'Strong fundamentals make frameworks easier to learn later.',
            },
          ],
        },

        {
          id: 'q2',
          prompt: 'Why is copying code without understanding risky?',
          correctOptionId: 'a',
          options: [
            {
              id: 'a)',
              label: 'a)',
              text: 'Because you cannot adapt or debug what you do not understand.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Without understanding, you cannot reason about behavior or fix issues confidently.',
            },
            {
              id: 'b)',
              label: 'b)',
              text: 'Because copied code never works.',
              wrongExplanation:
                'Copied code can work, but the risk comes from lack of understanding.',
              wrongExplainFurther: 'Understanding allows you to modify and extend code safely.',
            },
            {
              id: 'c)',
              label: 'c)',
              text: 'Because programming languages forbid reuse.',
              wrongExplanation:
                'Reuse is common and encouraged. The issue is not reuse but blind copying.',
              wrongExplainFurther: 'Understanding enables effective reuse.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Because modern tools automatically rewrite copied code.',
              wrongExplanation: 'Tools do not rewrite logic automatically in that way.',
              wrongExplainFurther: 'Responsibility for understanding remains with the developer.',
            },
          ],
        },

        {
          id: 'q3',
          prompt: 'Which statement best reflects a strong programming mindset?',
          correctOptionId: 'd',
          options: [
            {
              id: 'a)',
              label: 'a)',
              text: 'I will learn one framework deeply and ignore fundamentals.',
              wrongExplanation:
                'Frameworks change. Fundamentals remain useful across languages and ecosystems.',
              wrongExplainFurther: 'A strong foundation increases long-term adaptability.',
            },
            {
              id: 'b)',
              label: 'b)',
              text: 'If it works once, I do not need to understand why.',
              wrongExplanation:
                'Reproducibility and understanding are essential for maintaining and scaling systems.',
              wrongExplainFurther: 'Without understanding, future changes become risky.',
            },
            {
              id: 'c)',
              label: 'c)',
              text: 'Speed matters more than clarity.',
              wrongExplanation: 'Clarity reduces future bugs and maintenance cost.',
              wrongExplainFurther: 'Readable and well-structured logic scales better over time.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'I will focus on understanding the problem before choosing tools.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Tools support solutions. Clear understanding drives good decisions.',
            },
          ],
        },

        {
          id: 'q4',
          prompt: 'Why are fundamentals more valuable than memorized syntax?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a)',
              label: 'a)',
              text: 'Because syntax changes daily.',
              wrongExplanation: 'Syntax does not change daily, but tools and libraries evolve.',
              wrongExplainFurther: 'Fundamentals provide stability across change.',
            },
            {
              id: 'b)',
              label: 'b)',
              text: 'Because principles transfer across languages and ecosystems.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Understanding core concepts makes learning new languages easier.',
            },
            {
              id: 'c)',
              label: 'c)',
              text: 'Because syntax is irrelevant.',
              wrongExplanation:
                'Syntax is important. It just should not replace conceptual understanding.',
              wrongExplainFurther: 'Both matter, but fundamentals come first.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Because compilers automatically correct syntax mistakes.',
              wrongExplanation: 'Compilers report syntax errors. They do not correct them for you.',
              wrongExplainFurther: 'You are still responsible for writing correct syntax.',
            },
          ],
        },

        {
          id: 'q5',
          prompt: 'Which statement best describes long-term growth as a developer?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a)',
              label: 'a)',
              text: 'Master one syntax and you have mastered programming.',
              wrongExplanation: 'Programming spans many ecosystems and concepts beyond syntax.',
              wrongExplainFurther: 'Flexibility requires conceptual depth.',
            },
            {
              id: 'b)',
              label: 'b)',
              text: 'Rely entirely on tools to think for you.',
              wrongExplanation: 'Tools assist but do not replace structured reasoning.',
              wrongExplainFurther: 'Strong developers use tools deliberately, not blindly.',
            },
            {
              id: 'c)',
              label: 'c)',
              text: 'Build strong fundamentals and refine them over time.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Deep understanding compounds over time and supports long-term growth.',
            },
            {
              id: 'd)',
              label: 'd)',
              text: 'Avoid difficult concepts until absolutely necessary.',
              wrongExplanation: 'Avoidance limits growth and slows learning.',
              wrongExplainFurther: 'Challenging concepts often unlock deeper understanding.',
            },
          ],
        },
      ],
    },

    {
      id: 'ch1-s5-exercise',
      title: 'Exercise',
      summary: 'Reflect on your current programming mindset',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Reframing your mindset' },

        {
          type: 'p',
          text: 'This exercise is about noticing how you currently think about programming and deliberately replacing weaker assumptions with stronger ones. Keep your answers short, but make them specific.',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Part 1: Identify an old assumption',
          list: {
            ordered: false,
            items: [
              'Which misconception from this section felt familiar to you?',
              'Why is that belief tempting or common for beginners?',
              'What problems can it cause when learning or debugging?',
            ],
          },
          testId: 'ch1-s5-exercise-part-1',
        },

        {
          type: 'labelValue',
          label: 'Part 2: Replace it with a stronger mindset',
          list: {
            ordered: false,
            items: [
              'Rewrite the misconception as a better principle you want to follow.',
              'How will you approach learning a new language or tool differently after this chapter?',
              'What will you focus on first when something does not work?',
            ],
          },
          testId: 'ch1-s5-exercise-part-2',
        },

        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'Part 3: Choose one practical habit',
          list: {
            ordered: false,
            items: [
              'Pick one habit you will practice: breaking problems into smaller parts, defining inputs and outputs, checking assumptions, or understanding code before reusing it.',
              'Write one sentence about how you will apply that habit the next time you get stuck.',
            ],
          },
          testId: 'ch1-s5-exercise-part-3',
        },

        {
          type: 'callout',
          variant: 'info',
          text: 'A strong programming mindset is not a personality trait. It is a set of habits you build by repeatedly slowing down, clarifying the problem, and reasoning step by step.',
        },
      ],
    },
  ],
};
