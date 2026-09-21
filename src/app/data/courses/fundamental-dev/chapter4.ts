import { CourseGroupItem } from '../../course.model';

export const PYTHON_SECTION_01: CourseGroupItem = {
  id: 'why-python',
  title: 'Section 1: Why Python?',
  summary: 'A readable language for beginners and beyond',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Why Python?' },
    {
      type: 'p',
      text: 'Python runs on Windows, macOS, Linux, and many smaller devices. Its clear syntax makes it quick to read, write, and practise with as a beginner.',
    },
    {
      type: 'image',
      src: 'assets/chapter4-python.png',
      alt: 'Hand-drawn Python laptop illustration with notebook and coffee',
      caption: 'Course artwork from the Introducing Python section.',
    },
    {
      type: 'labelValue',
      label: 'Python works well for this course because it:',
      list: {
        ordered: false,
        items: [
          'Looks close to plain English.',
          'Lets beginners get useful results quickly.',
          'Uses less setup code for simple tasks than many languages.',
          'Has broad use in areas such as AI and machine learning.',
        ],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'Less Code, Same Result' },
    {
      type: 'p',
      text: 'A simple Python program can often express an idea with less surrounding structure. Less code gives beginners fewer opportunities to make syntax mistakes while they learn the underlying concept.',
    },
    {
      type: 'code',
      language: 'python',
      filename: 'hello.py',
      code: `print('Hello, world!')`,
    },
  ],
  children: [
    {
      id: 'why-python-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of Python',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
        {
          id: 'python-benefit',
          prompt: 'Why is Python a useful first programming language?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'It only runs on Windows computers.',
              wrongExplanation: 'Python runs on Windows, macOS, Linux, and many other platforms.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Its readable syntax helps beginners focus on programming ideas.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Python’s readable syntax helps you concentrate on the logic behind a program.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'It removes the need to learn programming concepts.',
              wrongExplanation: 'Python makes practice accessible, but variables, conditions, loops, and functions still matter.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'It guarantees that programs contain no errors.',
              wrongExplanation: 'Every programming language can contain errors. Python helps you learn to identify and fix them.',
            },
          ],
        },
      ],
    },
  ],
};

export const PYTHON_SECTION_02: CourseGroupItem = {
  id: 'python-setup',
  title: 'Section 2: Python Setup and Command Line',
  summary: 'Install, verify, and try Python',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Python Setup' },
    {
      type: 'p',
      text: 'Download the latest Python version for Windows from python.org. Before installing, select “Add python.exe to PATH”. This lets you run Python from a terminal.',
    },
    {
      type: 'links',
      links: [
        {
          label: 'Download Python',
          url: 'https://www.python.org/downloads/',
          description: 'Official Python downloads',
        },
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If you miss the PATH option, run the installer again and enable it. Open a new terminal after installation so it can find Python.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Check the Installation' },
    {
      type: 'p',
      text: 'Open Command Prompt or PowerShell, then run the following command. Python prints a version number when the installation worked.',
    },
    { type: 'code', language: 'bash', filename: 'terminal', code: `python --version` },
    { type: 'divider' },
    { type: 'h3', text: 'The Python Command Line' },
    {
      type: 'p',
      text: 'Run python in a terminal to open the Python REPL. The prompt changes to >>> and Python runs each expression immediately. This makes the REPL useful for quick experiments.',
    },
    { type: 'code', language: 'bash', filename: 'terminal', code: `python` },
    { type: 'code', language: 'python', filename: 'Python REPL', code: `>>> 2 + 2\n4\n>>> exit()` },
  ],
  children: [
    {
      id: 'python-setup-exercise',
      title: 'Exercise',
      summary: 'Verify Python and use the REPL',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Your First Python Commands' },
        {
          type: 'labelValue',
          label: 'Complete these steps:',
          list: {
            ordered: true,
            items: [
              'Run python --version and record the version shown.',
              'Start the REPL with python.',
              'Try 10 * 3 and then print("Hello from Python").',
              'Leave the REPL with exit().',
            ],
          },
        },
      ],
    },
  ],
};

export const PYTHON_SECTION_03: CourseGroupItem = {
  id: 'vscode-setup',
  title: 'Section 3: Visual Studio Code',
  summary: 'Create and run a Python file',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Setting Up Visual Studio Code' },
    {
      type: 'p',
      text: 'Visual Studio Code is the editor used in this course. Download and install it, then open the Extensions panel and install the official Python extension from Microsoft.',
    },
    {
      type: 'links',
      links: [
        {
          label: 'Download Visual Studio Code',
          url: 'https://code.visualstudio.com/',
          description: 'Official Visual Studio Code download',
        },
      ],
    },
    { type: 'divider' },
    { type: 'h3', text: 'Your First Python File' },
    {
      type: 'p',
      text: 'Create a file named hello.py. The .py ending tells VS Code that the file contains Python. Add the code below, save it, then select the Run button in the top-right corner.',
    },
    { type: 'code', language: 'python', filename: 'hello.py', code: `print('Hello, world!')` },
    {
      type: 'p',
      text: 'VS Code shows the program output in the panel at the bottom. If it asks you to select a Python interpreter, choose the Python version you installed.',
    },
  ],
  children: [
    {
      id: 'vscode-setup-quiz',
      title: 'Quiz',
      summary: 'Check your VS Code setup knowledge',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
        {
          id: 'python-file-extension',
          prompt: 'Which file name should you use for a Python program?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'hello.txt',
              wrongExplanation: 'A .txt file is plain text and does not identify the file as Python code.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'hello.java',
              wrongExplanation: 'The .java extension identifies Java source code.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'hello.py',
              wrongExplanation: '',
              correctExplanation: 'Correct. Python source files use the .py extension.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'hello.exe',
              wrongExplanation: 'An .exe file is a Windows executable, not a Python source file.',
            },
          ],
        },
      ],
    },
  ],
};
