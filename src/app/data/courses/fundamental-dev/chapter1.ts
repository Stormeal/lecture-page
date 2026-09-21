import { CourseGroupItem } from '../../course.model';

export const SECTION_01: CourseGroupItem = {
  id: 'software-development',
  title: 'Section 1: What Is Software Development?',
  summary: 'Roles, myths, and the work behind software',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'What Is Software Development?' },
    {
      type: 'p',
      text: 'Software shapes the products and services we use every day, from cars and phones to websites, appliances, and smart devices.',
    },
    {
      type: 'image',
      src: 'assets/fundamental-development-section-1-transparent.png',
      alt: 'Hand-drawn illustration showing software in everyday products',
      caption: 'Software is everywhere. Artwork from the course presentation.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'The Role of a Software Developer' },
    {
      type: 'p',
      text: 'A software developer helps create, design, test, and maintain software. Writing code matters, but it is one part of a wider process.',
    },
    {
      type: 'labelValue',
      label: 'Core responsibilities:',
      list: {
        ordered: false,
        items: [
          'Writing code and troubleshooting problems.',
          'Designing how a system and its parts fit together.',
          'Testing software and supporting quality assurance.',
          'Maintaining software after people start using it.',
        ],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'Common Myths' },
    {
      type: 'labelValue',
      label: 'The course challenges these assumptions:',
      list: {
        ordered: false,
        items: [
          'Programmers work alone.',
          'You need a degree to start.',
          'Software development only suits introverts.',
          'It is too late to learn programming.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Software development depends on collaboration, problem solving, diverse perspectives, and work that helps real users.',
    },
  ],
  children: [
    {
      id: 'software-development-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of the developer role',
      type: 'quiz',
      intro: 'Choose the best answer, then read the explanation.',
      questions: [
        {
          id: 'developer-role',
          prompt: 'Which activity is part of a software developer’s role?',
          correctOptionId: 'c',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only writing code.',
              wrongExplanation:
                'Writing code is important, but developers also design, test, troubleshoot, and maintain software.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Only testing finished software.',
              wrongExplanation:
                'Testing contributes to quality, but developers take part in work before and after testing too.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Creating, designing, testing, and maintaining software.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Software development includes the full life of a product, not only implementation.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Working alone without input from others.',
              wrongExplanation:
                'Software development relies on communication with teammates, users, and stakeholders.',
            },
          ],
        },
      ],
    },
    {
      id: 'software-development-exercise',
      title: 'Exercise',
      summary: 'Find software development in everyday life',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Software Around You' },
        {
          type: 'p',
          text: 'Choose an everyday product that contains software, such as a phone, car, coffee machine, or website.',
        },
        {
          type: 'labelValue',
          label: 'Discuss or write down:',
          list: {
            ordered: false,
            items: [
              'What problem does its software solve for the user?',
              'What could go wrong if the software contains a defect?',
              'Which developer responsibility would help prevent or fix that problem?',
            ],
          },
        },
      ],
    },
  ],
};

export const SECTION_02: CourseGroupItem = {
  id: 'developer-skills',
  title: 'Section 2: Skills That Matter',
  summary: 'Transferable strengths and continuous learning',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Skills That Matter in Software Development' },
    {
      type: 'p',
      text: 'People enter software development from many careers. Communication, troubleshooting, organisation, creativity, and attention to quality can become powerful technical strengths.',
    },
    {
      type: 'labelValue',
      label: 'Examples of transferable skills:',
      list: {
        ordered: false,
        items: [
          'A teacher explains complex ideas clearly.',
          'A chef follows processes and manages several tasks at once.',
          'A mechanic troubleshoots complex systems.',
          'A manual tester brings debugging and quality assurance experience.',
        ],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'Continuous Learning' },
    {
      type: 'p',
      text: 'Software development evolves. Developers keep their knowledge current, learn new languages and frameworks when useful, and practise solving programming problems.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Curiosity, persistence, teamwork, adaptability, and understanding user needs often matter as much as writing code.',
    },
  ],
  children: [
    {
      id: 'developer-skills-exercise',
      title: 'Exercise',
      summary: 'Connect your experience to development work',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Your Transferable Skills' },
        {
          type: 'p',
          text: 'Choose one skill from a current or previous role that would help you in software development.',
        },
        {
          type: 'labelValue',
          label: 'Reflect on:',
          list: {
            ordered: false,
            items: [
              'How does that skill help when solving a technical problem?',
              'When have you used it to understand a user or teammate?',
              'How could you practise it during this course?',
            ],
          },
        },
      ],
    },
  ],
};

export const SECTION_03: CourseGroupItem = {
  id: 'development-activities',
  title: 'Section 3: Software Development Activities',
  summary: 'The work that takes an idea into a usable product',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Software Development Activities' },
    {
      type: 'p',
      text: 'A software product moves through a set of connected activities. Teams revisit these activities as they learn more and as the product changes.',
    },
    {
      type: 'labelValue',
      label: 'A typical software lifecycle includes:',
      list: {
        ordered: true,
        items: [
          'Collecting and analysing requirements.',
          'Validating ideas and checking feasibility.',
          'Defining architecture.',
          'Implementation and quality assurance.',
          'Writing documentation and guides.',
          'Releasing, supporting, and maintaining the software.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The lifecycle helps a team make the right product, build it responsibly, and keep it useful after release.',
    },
  ],
  children: [
    {
      id: 'requirements-validation',
      title: 'Requirements and Validation',
      summary: 'Understand the problem before building',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Requirements and Validation' },
        { type: 'h3', text: 'Collecting and Analysing Requirements' },
        {
          type: 'p',
          text: 'Teams first establish what the software must do before deciding how to build it. They gather needs from users, stakeholders, and the business, then turn vague wishes into clear and testable requirements.',
        },
        {
          type: 'labelValue',
          label: 'Requirements can describe:',
          list: {
            ordered: false,
            items: [
              'Functional needs, such as “the system shall allow a user to reset a password.”',
              'Non-functional needs, such as speed, security, reliability, or usability.',
            ],
          },
        },
        { type: 'divider' },
        { type: 'h3', text: 'Validating Ideas' },
        {
          type: 'p',
          text: 'Before investing in implementation, a team asks whether an idea should be built and whether it can be built within the available technology, budget, and time.',
        },
        {
          type: 'p',
          text: 'Prototypes and mock-ups help teams test ideas with users early. It costs less to discard or adjust a weak idea before months of development begin.',
        },
      ],
    },
  ],
};

export const SECTION_04: CourseGroupItem = {
  id: 'architecture-quality',
  title: 'Section 4: Architecture, Implementation, and Quality',
  summary: 'Design the system and build it with quality in mind',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Architecture, Implementation, and Quality' },
    { type: 'h3', text: 'Defining the Architecture' },
    {
      type: 'p',
      text: 'Architecture is the blueprint for how a system is structured and how its parts connect. Teams choose technologies, frameworks, and patterns while planning for scalability, maintainability, and security.',
    },
    {
      type: 'p',
      text: 'Good architecture makes future changes easier. Weak architecture makes changes expensive and risky.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Implementation and Quality Assurance' },
    {
      type: 'p',
      text: 'Implementation means writing the code. Teams follow agreed standards, use version control, and review each other’s work.',
    },
    {
      type: 'p',
      text: 'Quality assurance runs alongside implementation. Unit tests, integration tests, and manual testing help teams find defects early.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Testing is part of building software, not a final activity performed after development ends.',
    },
  ],
  children: [
    {
      id: 'architecture-quality-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of architecture and quality',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
        {
          id: 'qa-timing',
          prompt: 'When should quality assurance take place?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'Only after every feature is complete.',
              wrongExplanation: 'Late testing makes defects more expensive to find and fix.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'Alongside implementation.',
              wrongExplanation: '',
              correctExplanation:
                'Correct. Quality assurance helps teams find issues while they are building the product.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'Only when a user reports a problem.',
              wrongExplanation:
                'User feedback matters, but teams should prevent defects before release where possible.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'Only when the architecture is finished.',
              wrongExplanation: 'Testing supports the product throughout development.',
            },
          ],
        },
      ],
    },
  ],
};

export const SECTION_05: CourseGroupItem = {
  id: 'software-lifecycle',
  title: 'Section 5: Documentation, Release, and Maintenance',
  summary: 'Keep software useful after it reaches users',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Documentation, Release, and Maintenance' },
    { type: 'h3', text: 'Writing Documentation and Guides' },
    {
      type: 'p',
      text: 'Documentation helps people use and maintain software. User documentation explains how to use a product. Developer documentation explains how the system works.',
    },
    {
      type: 'labelValue',
      label: 'Examples include:',
      list: {
        ordered: false,
        items: ['API documentation.', 'Setup guides.', 'User manuals.', 'Inline comments in code.'],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'Releasing, Supporting, and Maintaining' },
    {
      type: 'p',
      text: 'A release delivers software to its users. Support helps users, fixes issues, and gathers feedback. Maintenance continues with bug fixes, updates, and new features.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Software continues to evolve after release. Teams keep improving it as users, technology, and needs change.',
    },
  ],
  children: [
    {
      id: 'software-lifecycle-exercise',
      title: 'Exercise',
      summary: 'Follow one feature through the lifecycle',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: A Password Reset Feature' },
        {
          type: 'p',
          text: 'Imagine a team wants to add password reset to an online service. Describe what the team should consider at each stage.',
        },
        {
          type: 'labelValue',
          label: 'Use the lifecycle:',
          list: {
            ordered: true,
            items: [
              'What requirement would make the feature clear and testable?',
              'How could the team validate the idea with users?',
              'What security or architecture decision matters?',
              'How would testing support the implementation?',
              'What documentation, support, or maintenance could users need after release?',
            ],
          },
        },
      ],
    },
  ],
};
