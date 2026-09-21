import { Course } from '../course.model';
import {
  FUNDAMENTAL_DEV_CHAPTER1,
  FUNDAMENTAL_DEV_CHAPTER2,
  FUNDAMENTAL_DEV_CHAPTER3,
  FUNDAMENTAL_DEV_CHAPTER4,
  FUNDAMENTAL_DEV_CHAPTER5,
  FUNDAMENTAL_DEV_CHAPTER6,
  FUNDAMENTAL_DEV_CHAPTER7,
  FUNDAMENTAL_DEV_CHAPTER8,
} from './fundamental-dev';

export const FUNDAMENTAL_DEV_COURSE: Course = {
  slug: 'fundamental-dev',
  title: 'Fundamental Development',
  description:
    'New to programming? Start here. Programming Fundamentals introduces the core ideas behind coding using Java, C#, TypeScript, and Python—no experience required. Build confidence, write real code, and learn skills that transfer to any language.',
  imageUrl: 'assets/fundamental-development-img.jpg',
  tags: ['development', 'beginner'],
  disabled: false,
  disabledReason: 'Under development',
  items: [
    {
      id: 'welcome',
      title: 'Welcome',
      summary: 'Course overview and expectations',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Welcome to Fundamental Development' },
        {
          type: 'p',
          text: 'This course introduces the foundations of software development and programming. You will learn how software is built, how developers think through problems, and how to write your first Python programs.',
        },
        {
          type: 'callout',
          variant: 'info',
          text: 'Use this page during the course for examples and exercises, then return to it when you want to practise or refresh a topic.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'Why This Course Matters' },
        {
          type: 'p',
          text: 'Testing teams are becoming more technical. Automation, AI, and modern development tools assume that you can read and discuss code with confidence.',
        },
        {
          type: 'p',
          text: 'You do not need to become a developer in one day. You will build enough programming knowledge to understand how software works and contribute more effectively alongside developers.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'What You Will Cover' },
        {
          type: 'p',
          text: 'We begin with software development: developer responsibilities, common myths, and the skills that transfer from other careers. We then cover development methodologies and the programming foundations behind every language.',
        },
        {
          type: 'p',
          text: 'The practical part of the course uses Python. You will work with basic syntax, decisions, loops, and functions through short exercises and larger programming tasks.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'What to Expect' },
        {
          type: 'p',
          text: 'The course is hands-on. After each topic, you will write a small piece of Python yourself. Ask questions, try variations, and treat errors as useful feedback.',
        },
        {
          type: 'p',
          text: 'Software development changes constantly, so learning does not end with this course. The most useful starting point is curiosity, persistence, and a willingness to practise.',
        },
        { type: 'divider' },
        { type: 'h2', text: 'Requirements' },
        {
          type: 'p',
          text: 'No previous programming experience is required. Bring a computer where you can install Python and Visual Studio Code, plus a willingness to experiment.',
        },
      ],
    },

    {
      id: 'setup',
      title: 'Python and VS Code Setup',
      summary: 'Install the tools used in this course',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Before You Begin' },
        {
          type: 'p',
          text: 'This course uses Python and Visual Studio Code. Complete the steps below before the hands-on exercises so you can write and run code on your own computer.',
        },

        { type: 'divider' },
        { type: 'h3', text: 'Step 1: Install Python' },
        {
          type: 'p',
          text: 'Open the Python downloads page and install the latest Python version for Windows. In the installer, select “Add python.exe to PATH” before choosing “Install Now”.',
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
          text: 'Adding Python to PATH lets you run Python from any terminal. If you miss this option, rerun the installer and enable it.',
        },
        { type: 'divider' },
        { type: 'h3', text: 'Step 2: Check the Installation' },
        {
          type: 'p',
          text: 'Open a new Command Prompt or PowerShell window and run the command below. A version number confirms that Python is ready.',
        },

        { type: 'code', language: 'bash', filename: 'terminal', code: `python --version` },
        {
          type: 'p',
          text: 'If the command reports that Python cannot be found, close and reopen the terminal. If that does not help, reinstall Python and make sure the PATH option is selected.',
        },

        { type: 'divider' },
        { type: 'h3', text: 'Step 3: Try the Python Command Line' },
        {
          type: 'p',
          text: 'Start the Python command line by running the command below. When you see the >>> prompt, Python is ready to run code immediately.',
        },
        { type: 'code', language: 'bash', filename: 'terminal', code: `python` },
        {
          type: 'p',
          text: 'Try a short expression such as 2 + 2, then type exit() to return to the normal terminal.',
        },
        { type: 'divider' },
        { type: 'h3', text: 'Step 4: Install Visual Studio Code' },
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
        {
          type: 'p',
          text: 'Open VS Code, choose Extensions from the left-hand sidebar, and install the official Python extension from Microsoft.',
        },
        {
          type: 'p',
          text: 'Create a file named hello.py, add a simple print statement, and use the Run button in the top-right corner to see its output.',
        },
        { type: 'code', language: 'python', filename: 'hello.py', code: `print('Hello, world!')` },
      ],
    },

    {
      id: 'ch1',
      title: 'Chapter 1: What Is Software Development?',
      summary: 'Theory and exercises',
      type: 'group',
      overviewBlocks: [
        {
          type: 'p',
          text: 'Before we begin writing code, we need to build a clear mental model of what programming actually is. This chapter focuses on understanding execution, precision, and structured thinking.',
        },
        { type: 'divider' },

        {
          type: 'labelValue',
          label: 'By the end of this chapter, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Explain what a program is in simple terms.',
              'Describe the Input → Processing → Output model.',
              'Understand why computers require precise instructions.',
              'Differentiate between source code and machine execution.',
              'Recognize that programming is structured problem solving, not memorizing syntax.',
            ],
          },
          testId: 'ch1-learning-objectives-list',
        },
        {
          type: 'callout',
          variant: 'info',
          text: 'If you can clearly explain these concepts to another person, you are ready to move on to variables and syntax later.',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER1,
    },
    {
      id: 'ch2',
      title: 'Chapter 2: Software Development Methodologies',
      summary: 'Waterfall and Agile',
      type: 'group',
      overviewBlocks: [
        {
          type: 'p',
          text: 'Software development methodologies give teams a shared way to plan, build, test, and release software. This chapter compares Waterfall and Agile so you can recognise when each approach helps.',
        },
        {
          type: 'labelValue',
          label: 'By the end of this chapter, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Describe the flow of a Waterfall project.',
              'Describe how Agile uses iterative development and feedback.',
              'Compare the strengths and limits of each approach.',
              'Choose an approach that fits a project’s requirements and uncertainty.',
            ],
          },
          testId: 'ch2-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER2,
    },
    {
      id: 'ch3',
      title: 'Chapter 3: Programming Foundations',
      summary: 'What code is and how computers run it',
      type: 'group',
      overviewBlocks: [
        {
          type: 'p',
          text: 'Programming gives a computer precise instructions. This chapter introduces code, variables, output, programming languages, and the translators that let human-readable code run on hardware.',
        },
        {
          type: 'labelValue',
          label: 'By the end of this chapter, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Explain why computers need exact instructions.',
              'Describe a program using variables, instructions, and output.',
              'Explain the purpose of programming-language syntax.',
              'Describe how a compiler or interpreter helps code run on a CPU.',
            ],
          },
          testId: 'ch3-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER3,
    },
    {
      id: 'ch4',
      title: 'Chapter 4: Introducing Python',
      summary: 'Why Python and how to start using it',
      type: 'group',
      overviewBlocks: [
        {
          type: 'p',
          text: 'Python is the language used throughout the practical part of this course. It is designed to be readable, quick to start with, and useful across many fields.',
        },
        {
          type: 'labelValue',
          label: 'By the end of this chapter, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Explain why Python is a good language for beginners.',
              'Install Python and verify the installation.',
              'Use the Python command line to try small expressions.',
              'Set up VS Code to create and run a Python file.',
            ],
          },
          testId: 'ch4-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER4,
    },
    {
      id: 'ch5',
      title: 'Chapter 5: Basic Python Syntax',
      summary: 'The building blocks of a Python program',
      type: 'group',
      overviewBlocks: [
        {
          type: 'p',
          text: 'This chapter introduces the basic parts of a Python program. You will write small pieces of code after each topic, then combine the ideas in a tip calculator.',
        },
        {
          type: 'labelValue',
          label: 'By the end of this chapter, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Use print, comments, and variables.',
              'Read input and convert text into numbers.',
              'Use arithmetic and f-strings.',
              'Recognise why indentation matters in Python.',
            ],
          },
          testId: 'ch5-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER5,
    },
    {
      id: 'ch6',
      title: 'Chapter 6: Conditions',
      summary: 'Teach a program to make decisions',
      type: 'group',
      overviewBlocks: [
        {
          type: 'p',
          text: 'Conditions let a program ask questions and choose between different paths. You will practise each idea, then use them together in a zoo ticket system.',
        },
        {
          type: 'labelValue',
          label: 'By the end of this chapter, you should be able to:',
          list: {
            ordered: false,
            items: [
              'Use comparisons to produce True or False.',
              'Write if, elif, and else statements.',
              'Combine conditions with and, or, and not.',
              'Use nested conditions when one decision depends on another.',
            ],
          },
          testId: 'ch6-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER6,
    },
    {
      id: 'ch7',
      title: 'Chapter 7: Loops',
      summary: 'Repeat work without repeating code',
      type: 'group',
      overviewBlocks: [
        { type: 'p', text: 'Loops repeat a block of code until a condition changes or a collection runs out of items. You will use them to build a number guessing game.' },
        {
          type: 'labelValue', label: 'By the end of this chapter, you should be able to:',
          list: { ordered: false, items: ['Use while and for-in loops.', 'Work with lists and range().', 'Avoid infinite loops and use break or continue.', 'Use an accumulator to build a result over several iterations.'] }, testId: 'ch7-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER7,
    },
    {
      id: 'ch8',
      title: 'Chapter 8: Functions',
      summary: 'Name and reuse blocks of code',
      type: 'group',
      overviewBlocks: [
        { type: 'p', text: 'Functions give code a clear structure. You define a named block once, call it when needed, and pass values in or return values out.' },
        {
          type: 'labelValue', label: 'By the end of this chapter, you should be able to:',
          list: { ordered: false, items: ['Define and call functions.', 'Use parameters and arguments.', 'Choose between print and return.', 'Use multiple and default parameters.'] }, testId: 'ch8-learning-objectives-list',
        },
      ],
      children: FUNDAMENTAL_DEV_CHAPTER8,
    },
  ],
};
