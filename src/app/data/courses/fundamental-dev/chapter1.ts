import { CourseContentItem, CourseQuizItem } from '../../course.model';

export const SECTION_01: CourseContentItem = {
  id: 'software-developer',
  title: 'Section 1: The Software Developer',
  summary: 'Software around us and who builds it',
  type: 'content',
  blocks: [
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
    {
      type: 'p',
      text: 'Think of a phone, a car, a coffee machine, or a website. Its software solves a problem for the user, and a defect in it can cause real trouble. Someone has to build that software, check that it works, and keep it working.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'The Software Developer' },
    {
      type: 'labelValue',
      label: 'Core responsibilities:',
      list: {
        ordered: false,
        items: [
          'Coding and troubleshooting: writing the code and finding out why something does not work.',
          'Design and architecture: deciding how the system and its parts fit together.',
          'Testing: checking that the software does what it should.',
          'Maintenance: fixing, updating, and improving the software after people start using it.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'In other words: a software developer is the person responsible for creating, designing, testing, and maintaining the actual software.',
    },
  ],
};

export const SECTION_02: CourseContentItem = {
  id: 'myths-and-what-matters',
  title: 'Section 2: Myths and What Actually Matters',
  summary: 'Common misconceptions and the skills that count',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Common Myths' },
    {
      type: 'p',
      text: 'Many people hold back from software development because of assumptions that do not match how the work is done.',
    },
    {
      type: 'labelValue',
      label: 'Myth versus reality:',
      list: {
        ordered: false,
        items: [
          { text: '“Programmers work alone.”', children: ['Reality: teamwork and collaboration.'] },
          { text: '“You need a degree.”', children: ['Reality: problem solving and creativity.'] },
          {
            text: '“It is only for introverts.”',
            children: ['Reality: diverse skills and perspectives.'],
          },
          {
            text: '“It is too late to start.”',
            children: ['Reality: you can start building impactful solutions at any point.'],
          },
        ],
      },
    },
    {
      type: 'p',
      text: 'Software development is one of the most diverse professions. Teams often include people with backgrounds in business, art, science, education, and many other fields.',
    },
    {
      type: 'labelValue',
      label: 'Successful developers can be:',
      list: {
        ordered: false,
        items: [
          'Great communicators.',
          'Team leaders.',
          'Designers.',
          'Entrepreneurs.',
          'Extroverts or introverts.',
        ],
      },
    },
    { type: 'divider' },
    { type: 'h3', text: 'What Actually Matters?' },
    {
      type: 'labelValue',
      label: 'Skills that make a difference:',
      list: {
        ordered: false,
        items: [
          'Curiosity and willingness to learn.',
          'Problem-solving skills.',
          'Communication and teamwork.',
          'Persistence when facing challenges.',
          'Ability to adapt to new technologies.',
          'Understanding user needs.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'In other words: coding is important, but these skills often matter even more.',
    },
  ],
};

export const SECTION_03: CourseContentItem = {
  id: 'skills-and-learning',
  title: 'Section 3: Transferable Skills and Continuous Learning',
  summary: 'Your experience counts, and learning never stops',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Skills Transfer Across Careers' },
    {
      type: 'labelValue',
      label: 'Examples:',
      list: {
        ordered: false,
        items: [
          'Teacher → explaining complex ideas clearly.',
          'Chef → following processes and multitasking.',
          'Mechanic → troubleshooting complex systems.',
          'Manual tester → debugging and quality assurance.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Software development is not reserved for people who have been coding since they were teenagers. Many successful developers started in completely different careers. The communication, troubleshooting, organisation, creativity, and quality-focused thinking they built there often become some of their greatest strengths.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'You Are Done Learning?' },
    {
      type: 'p',
      text: 'In software development you are never truly done learning. It is an adaptive field that changes every day, so keeping your knowledge up to date is essential.',
    },
    {
      type: 'labelValue',
      label: 'Ways developers keep learning:',
      list: {
        ordered: false,
        items: [
          'Learning new programming languages.',
          'Exploring new frameworks.',
          'Solving programming challenges.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Not only software development: most careers evolve, and you have to learn new approaches along the way.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Software Development Is Boring?' },
    {
      type: 'p',
      text: 'Doing the same task every day can become boring. But software developers wear many different hats, and the job is not coding for eight hours every day.',
    },
    {
      type: 'labelValue',
      label: 'The hats a developer wears:',
      list: {
        ordered: false,
        items: ['Problem solver.', 'Analyst.', 'Designer.', 'Tester.', 'Coach.', 'Tech reviewer.'],
      },
    },
  ],
};

export const SECTION_04: CourseContentItem = {
  id: 'planning-activities',
  title: 'Section 4: Requirements, Validation, and Architecture',
  summary: 'The activities that come before writing code',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Activities in Software Development' },
    {
      type: 'p',
      text: 'Building software involves much more than writing code. A product moves through a set of connected activities, and teams revisit them as they learn more.',
    },
    {
      type: 'labelValue',
      label: 'The six activities:',
      list: {
        ordered: true,
        items: [
          'Collecting and analysing requirements.',
          'Validating ideas, performing feasibility studies.',
          'Defining the software / project architecture.',
          'Implementation and quality assurance.',
          'Writing documentation and guides.',
          'Releasing, supporting, and maintaining the software.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'This section covers the first three activities. Section 5 covers the remaining three.',
    },
    { type: 'divider' },
    { type: 'h3', text: '1. Collecting and Analysing Requirements' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Understand what the software must do before deciding how.',
          'Gather needs from stakeholders, users, and the business.',
          'Turn vague wishes into clear, testable requirements.',
          'Distinguish functional requirements (“the system shall…”) from non-functional ones (speed, security, usability).',
        ],
      },
    },
    {
      type: 'p',
      text: 'This is where every project begins, and skipping or rushing it is the most common cause of failed software. The goal is not to write code yet, but to understand the problem deeply. A well-written requirement is specific and verifiable: you can later prove it was met.',
    },
    { type: 'divider' },
    { type: 'h3', text: '2. Validating Ideas' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Ask: should we build this, and can we?',
          'Check feasibility across technical, financial, and time dimensions.',
          'Validate the ideas with users early, using prototypes and mock-ups.',
          'It is cheaper to discard a bad idea now than after months of coding.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Just because something is requested does not mean it is worth building. Feasibility studies weigh cost against benefit and surface risks early. Even a paper sketch shown to a user can catch wrong assumptions before development starts.',
    },
    { type: 'divider' },
    { type: 'h3', text: '3. Defining the Architecture' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'The blueprint: how the system is structured and how its parts connect.',
          'Choose technologies, frameworks, and patterns.',
          'Plan for scalability, maintainability, and security from the start.',
          'Good architecture makes future change cheap; poor architecture makes it painful.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Architecture is the high-level design, the skeleton everything else hangs on. Decisions made here are expensive to reverse later. Think of designing a building: you settle the foundation and load-bearing walls before choosing the paint.',
    },
  ],
};

export const SECTION_05: CourseContentItem = {
  id: 'delivery-activities',
  title: 'Section 5: Implementation, Documentation, and Release',
  summary: 'Building the software and keeping it useful',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Building, Documenting, and Releasing' },
    {
      type: 'p',
      text: 'With the requirements understood and the architecture in place, the team builds the software, documents it, and delivers it to users.',
    },
    { type: 'divider' },
    { type: 'h3', text: '4. Implementation and Quality Assurance' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Implementation means writing the actual code.',
          'Follow standards, use version control, and review each other’s work.',
          'QA runs in parallel. Testing is not an afterthought.',
          'Catch defects early with unit tests, integration tests, and manual testing.',
        ],
      },
    },
    {
      type: 'p',
      text: 'This is the phase most people picture when they think of development, but coding is only half of it. The earlier a bug is found, the cheaper it is to fix: a defect caught in testing costs far less than one found in production.',
    },
    { type: 'divider' },
    { type: 'h3', text: '5. Writing Documentation and Guides' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Documentation makes software usable and maintainable.',
          'Two audiences: users (how to use it) and developers (how it works).',
          'Includes API documentation, setup guides, user manuals, and inline comments.',
          '“Future you” and new team members will thank you.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Undocumented software is hard to use and even harder to maintain. Good documentation reduces support requests and onboarding time. It is tempting to skip it under deadline pressure, but knowledge that lives only in one person’s head is a serious project risk.',
    },
    { type: 'divider' },
    { type: 'h3', text: '6. Releasing, Supporting, and Maintaining' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'Release: deliver the software to its users.',
          'Support: help users, fix issues, and respond to feedback.',
          'Maintenance: bug fixes, updates, and new features over time.',
          'Software is never truly “finished”. It lives and evolves.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Launch is the beginning, not the end. Most of a software product’s life, and often most of its total cost, is spent in maintenance. Real-world use reveals new bugs and needs, so a healthy product keeps improving long after the first release.',
    },
  ],
};

export const CHAPTER1_RECAP: CourseContentItem = {
  id: 'software-development-recap',
  title: 'Recap: Software Development',
  summary: 'Key points from the chapter',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Recap: Software Development' },
    {
      type: 'labelValue',
      label: 'Remember:',
      list: {
        ordered: false,
        items: [
          'A developer designs, builds, tests, and maintains software, not just writes code.',
          'The myths are wrong: it is teamwork, and no degree or personality type is required.',
          'Curiosity, problem solving, and communication matter as much as coding.',
          'Skills from other careers transfer, and you are never done learning.',
          'Six activities: requirements, validation, architecture, implementation and QA, documentation, and release and maintenance.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Key takeaway: software development is a team effort to solve problems. Coding is only one part of it.',
    },
  ],
};

export const CHAPTER1_QUIZ: CourseQuizItem = {
  id: 'software-development-quiz',
  title: 'Quiz: Software Development',
  summary: 'Check your understanding of the whole chapter',
  type: 'quiz',
  intro:
    'These questions cover every section in the chapter. Choose the best answer, then read the explanation.',
  questions: [
    {
      id: 'developer-role',
      prompt: 'Which description best matches the role of a software developer?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Someone who only writes code.',
          wrongExplanation:
            'Writing code is important, but developers also design, test, troubleshoot, and maintain software.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Someone who only tests finished software.',
          wrongExplanation:
            'Testing contributes to quality, but developers take part in work before and after testing too.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Someone responsible for creating, designing, testing, and maintaining software.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Software development covers the full life of a product, not only implementation.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Someone who works alone without input from others.',
          wrongExplanation:
            'Software development relies on communication with teammates, users, and stakeholders.',
        },
      ],
    },
    {
      id: 'not-a-core-responsibility',
      prompt: 'Which of these is NOT one of a developer’s core responsibilities?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Coding and troubleshooting.',
          wrongExplanation:
            'Writing code and finding out why it does not work is a core part of the role.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Design and architecture.',
          wrongExplanation:
            'Developers decide how a system is structured and how its parts connect.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Selling the product to customers.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Developers often talk to users, but selling the product is not one of the core responsibilities.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Maintenance.',
          wrongExplanation:
            'Developers keep fixing and improving software after it has been released.',
        },
      ],
    },
    {
      id: 'why-maintenance',
      prompt: 'Why is maintenance part of a developer’s job?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Software keeps being used after release and needs fixes, updates, and improvements.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Real-world use reveals new problems and needs, so the work continues after the first release.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Because software that is tested properly never needs to change.',
          wrongExplanation:
            'Even well-tested software changes as users, technology, and requirements change.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Because maintenance replaces the need for testing.',
          wrongExplanation:
            'Maintenance and testing work together. Neither replaces the other.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'It is not. Maintenance is handled only by the users.',
          wrongExplanation:
            'Users report problems, but the development team is responsible for fixing them.',
        },
      ],
    },
    {
      id: 'spot-the-myth',
      prompt: 'Which statement is a myth about software development?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Developers spend a lot of time collaborating with others.',
          wrongExplanation:
            'This is true. Software is built by teams working with users and stakeholders.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'You need a computer science degree before you can start.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Many developers start without a degree. Problem solving and creativity count for more.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'People from many different backgrounds work as developers.',
          wrongExplanation:
            'This is true. Teams include people from business, art, science, education, and more.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Problem solving is a central part of the work.',
          wrongExplanation: 'This is true. Most development work is solving problems.',
        },
      ],
    },
    {
      id: 'personality',
      prompt: 'What kind of personality does software development require?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Introverts only.',
          wrongExplanation:
            'This is one of the myths. Both introverts and extroverts succeed as developers.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Extroverts only.',
          wrongExplanation:
            'No personality type is required. Teams benefit from different kinds of people.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'People who have coded since they were teenagers.',
          wrongExplanation:
            'It is never too late to start. Many developers came from other careers.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'No particular personality. Diverse skills and perspectives make teams stronger.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Developers can be communicators, leaders, designers, entrepreneurs, introverts, or extroverts.',
        },
      ],
    },
    {
      id: 'what-matters',
      prompt: 'Which of these is one of the skills that often matters even more than coding?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Understanding user needs.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Software exists to solve problems for people, so understanding them is essential.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Typing very fast.',
          wrongExplanation:
            'Typing speed has little to do with building good software. Thinking through the problem matters far more.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Memorising every command in a programming language.',
          wrongExplanation:
            'Developers look things up all the time. Curiosity and problem solving matter more than memory.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Avoiding new technologies.',
          wrongExplanation:
            'The opposite is true. The ability to adapt to new technologies is one of the key skills.',
        },
      ],
    },
    {
      id: 'manual-tester-skill',
      prompt: 'Which skill does a manual tester typically bring into software development?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Explaining complex ideas clearly.',
          wrongExplanation:
            'That is the example given for a teacher. Think about what testers do every day.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Following processes while multitasking.',
          wrongExplanation:
            'That is the example given for a chef. Testers bring something closer to quality work.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Debugging and quality assurance.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Finding, describing, and investigating defects transfers directly to development work.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Nothing, because testing experience does not transfer.',
          wrongExplanation:
            'Skills from other careers, testing included, often become a developer’s greatest strengths.',
        },
      ],
    },
    {
      id: 'never-done-learning',
      prompt: 'Why are developers never truly done learning?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Because the first programming language you learn is usually wrong.',
          wrongExplanation:
            'Your first language is a solid foundation. Learning continues because the field moves.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Because the field adapts and changes every day.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. New languages, frameworks, and approaches keep appearing, so knowledge must be kept up to date.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Because certifications expire every year.',
          wrongExplanation:
            'Certifications are not the reason. The technology itself keeps changing.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'They are done once they have learned one framework well.',
          wrongExplanation:
            'Frameworks change and new ones appear, so learning continues throughout a career.',
        },
      ],
    },
    {
      id: 'many-hats',
      prompt: 'Which statement best describes a developer’s working day?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Eight hours of writing code with no other tasks.',
          wrongExplanation:
            'Coding is only part of it. Developers also analyse, design, test, coach, and review.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Mostly attending meetings, with no time for technical work.',
          wrongExplanation:
            'Collaboration matters, but developers spend plenty of time on technical problems too.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The same single task repeated every day.',
          wrongExplanation:
            'Developers switch between many roles, which keeps the work varied.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'A mix of roles: problem solver, analyst, designer, tester, coach, and tech reviewer.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Developers wear many hats, which is a big part of why the job stays interesting.',
        },
      ],
    },
    {
      id: 'non-functional',
      prompt: 'Which of these is a non-functional requirement?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'The system shall let a user reset their password.',
          wrongExplanation:
            'This describes something the system does, which makes it a functional requirement.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'The login page shall load in under two seconds.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Speed, security, and usability describe how well the system works, so they are non-functional.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The system shall send an order confirmation email.',
          wrongExplanation:
            'Sending an email is a behaviour of the system, so this is a functional requirement.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The system shall let a user add items to a basket.',
          wrongExplanation:
            'Adding items is something the system does, so this is a functional requirement.',
        },
      ],
    },
    {
      id: 'testable-requirement',
      prompt: 'Which requirement is the most clear and testable?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'The password reset should be easy to use.',
          wrongExplanation:
            '“Easy to use” is vague. There is no way to prove it has been met.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'The password reset should be fast.',
          wrongExplanation: '“Fast” has no measurable limit, so it cannot be verified.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'A reset link shall be emailed within one minute and expire after 30 minutes.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. It is specific and verifiable, so a tester can later prove it was met.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The password reset should work well for everyone.',
          wrongExplanation:
            'This is a wish rather than a requirement. Turn it into something you can measure.',
        },
      ],
    },
    {
      id: 'validate-early',
      prompt: 'Why should a team validate an idea before starting development?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'It is cheaper to discard a bad idea now than after months of coding.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Prototypes and mock-ups catch wrong assumptions before they become expensive.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Validation replaces the need to gather requirements.',
          wrongExplanation:
            'Validation builds on requirements. It checks whether the idea is worth building and possible to build.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Everything that is requested should always be built.',
          wrongExplanation:
            'Just because something is requested does not mean it is worth building.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Users can only give feedback on finished software.',
          wrongExplanation:
            'Users can react to prototypes, mock-ups, and even paper sketches long before the code exists.',
        },
      ],
    },
    {
      id: 'architecture-decisions',
      prompt: 'Why do architecture decisions deserve careful thought?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Because architecture only affects how the software looks.',
          wrongExplanation:
            'Architecture is about structure and how parts connect, not visual appearance.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Because architecture can easily be changed at any time.',
          wrongExplanation: 'The opposite is true. Architecture decisions are expensive to reverse.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Because architecture is decided after the software is released.',
          wrongExplanation:
            'Architecture is defined early, so the rest of the system can be built on it.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Because they are expensive to reverse, and they decide how easy future changes will be.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Like a building’s foundation, good architecture makes future change cheap.',
        },
      ],
    },
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
          text: 'In parallel with implementation.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Testing is not an afterthought. It runs alongside the code being written.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Only when a user reports a problem.',
          wrongExplanation:
            'User feedback matters, but teams should catch defects before release where possible.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Only when the architecture is finished.',
          wrongExplanation: 'Testing supports the product throughout development.',
        },
      ],
    },
    {
      id: 'cheapest-defect',
      prompt: 'Where is a defect usually cheapest to fix?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Early, during implementation and testing.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The earlier a bug is found, the cheaper it is to fix.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'In production, once real users find it.',
          wrongExplanation:
            'A defect found in production costs far more than one caught during testing.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'It costs the same no matter when it is found.',
          wrongExplanation:
            'The cost grows the longer a defect goes unnoticed.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'During maintenance, years after release.',
          wrongExplanation:
            'By then other code may depend on the defect, which makes it more expensive to fix.',
        },
      ],
    },
    {
      id: 'documentation-audiences',
      prompt: 'Who are the two audiences for documentation?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Managers and sales staff.',
          wrongExplanation:
            'Others may read it, but documentation is written mainly for users and developers.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Only the developer who wrote the code.',
          wrongExplanation:
            'Knowledge that lives only in one person’s head is a project risk. Documentation is for others too.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Users (how to use it) and developers (how it works).',
          wrongExplanation: '',
          correctExplanation:
            'Correct. User manuals and guides help users, while API docs and inline comments help developers.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Testers and auditors only.',
          wrongExplanation: 'Documentation serves users and developers first.',
        },
      ],
    },
    {
      id: 'password-reset-after-release',
      prompt:
        'A team has released a new password reset feature. Users now report that reset emails land in their spam folder. Which activity is this?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Collecting requirements.',
          wrongExplanation:
            'The feature has already been specified and released. This work happens after release.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Validating the idea.',
          wrongExplanation:
            'Validation happens before development starts, to decide whether to build the feature.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Defining the architecture.',
          wrongExplanation:
            'Architecture is defined early. Responding to user reports belongs to a later activity.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Supporting and maintaining the software.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Helping users, fixing issues, and responding to feedback continue long after launch.',
        },
      ],
    },
  ],
};
