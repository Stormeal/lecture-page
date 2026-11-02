import { CourseContentItem, CourseQuizItem } from '../../course.model';

export const METHODOLOGY_SECTION_01: CourseContentItem = {
  id: 'waterfall',
  title: 'Section 1: Waterfall',
  summary: 'A linear, plan-led approach',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'The Waterfall Model' },
    {
      type: 'p',
      text: 'A methodology is the way a team organises the work of building software. Waterfall is the oldest formal software process and the easiest to picture.',
    },
    {
      type: 'image',
      src: 'assets/chapter2-methodologies.png',
      alt: 'Hand-drawn illustration of a software team working through development stages',
      caption: 'Course artwork from the Methodologies section.',
    },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'A linear, sequential approach: each phase finishes before the next begins.',
          'Like water flowing downhill, you move in one direction and rarely go back.',
          'Heavy emphasis on planning and documentation up front.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'Classic phases:',
      list: {
        ordered: true,
        items: [
          'Requirements',
          'Design',
          'Implementation',
          'Testing',
          'Deployment',
          'Maintenance',
        ],
      },
    },
    {
      type: 'p',
      text: 'You fully define the requirements, then design, then build, then test, in a fixed order. The whole plan is set early, which works well when the requirements are stable and well understood. The trade-off is that going back to an earlier phase is costly, so mistakes found late are expensive.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Strengths and Weaknesses' },
    {
      type: 'labelValue',
      label: 'Strengths:',
      list: {
        ordered: false,
        items: [
          'Simple to understand and manage, with a clear structure.',
          'Well-defined stages, milestones, and deliverables.',
          'Strong documentation that makes it easy to onboard new people.',
          'Works well for fixed, well-understood requirements.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'Weaknesses:',
      list: {
        ordered: false,
        items: [
          'Inflexible and hard to react to changing requirements.',
          'Working software appears only late in the project.',
          'Bugs and wrong assumptions surface late, when they cost the most.',
          'A poor fit for large, long, or uncertain projects.',
        ],
      },
    },
    {
      type: 'p',
      text: 'The strengths and weaknesses are two sides of the same coin. The rigid structure that makes Waterfall easy to manage is also what makes it hard to change. It shines for short projects with clear, frozen requirements, such as some regulated or contract-based work. It struggles when the customer is unsure what they want or when requirements evolve, which is common in modern software.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'When people say Waterfall “tests late”, they mean dynamic testing: running the code can only happen once the code has been written. Static testing, such as reviewing requirements and designs, happens from the very start.',
    },
  ],
};

export const METHODOLOGY_SECTION_02: CourseContentItem = {
  id: 'agile',
  title: 'Section 2: Agile',
  summary: 'Iterative development and regular feedback',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Agile Software Development' },
    {
      type: 'labelValue',
      label: 'Key points:',
      list: {
        ordered: false,
        items: [
          'An iterative approach: build in small cycles called iterations or sprints.',
          'Deliver working software frequently, then gather feedback and adjust.',
          'Values collaboration, customer involvement, and responding to change.',
          'Grounded in the Agile Manifesto; common frameworks include Scrum and Kanban.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Agile emerged as a response to Waterfall’s rigidity. Instead of one long pass, you work in short cycles, often one to four weeks, and produce something usable at the end of each. The customer sees progress early and often, so the product can adapt as needs become clearer.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Agile is a mindset and a set of values first. Scrum and Kanban are specific ways to put it into practice.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Strengths and Weaknesses' },
    {
      type: 'labelValue',
      label: 'Strengths:',
      list: {
        ordered: false,
        items: [
          'Flexible, and welcomes changing requirements, even late.',
          'Delivers working software early and continuously.',
          'Close customer collaboration keeps the product on target.',
          'Problems surface quickly while they are still cheap to fix.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'Weaknesses:',
      list: {
        ordered: false,
        items: [
          'Less predictable on final cost, scope, and timeline.',
          'Needs strong communication and an engaged customer.',
          'Lighter documentation can be a risk if overdone.',
          'Can drift without discipline and experienced people.',
        ],
      },
    },
    {
      type: 'p',
      text: 'Agile trades up-front certainty for adaptability. You may not know the exact final scope on day one, but you steer continuously towards what the customer actually needs. It depends heavily on good communication and an available customer, so it can falter when those are missing.',
    },
  ],
};

export const METHODOLOGY_SECTION_03: CourseContentItem = {
  id: 'choosing-a-methodology',
  title: 'Section 3: Which One Should You Use?',
  summary: 'Match the approach to the project',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Which One Should You Use?' },
    {
      type: 'p',
      text: 'Neither method is “best”. The right choice depends on how stable the requirements are and how much change you expect.',
    },
    {
      type: 'labelValue',
      label: 'Lean Waterfall when:',
      list: {
        ordered: false,
        items: [
          'Requirements are clear, stable, and unlikely to change.',
          'Scope and budget are fixed up front.',
          'The project is short and well understood.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'Lean Agile when:',
      list: {
        ordered: false,
        items: [
          'Requirements are unclear or expected to evolve.',
          'The customer wants to be involved and see progress early.',
          'The project is large, long, or exploratory.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Many real teams blend both, using structure where it helps and flexibility where it counts. No team or project is the same.',
    },
  ],
};

export const METHODOLOGY_RECAP: CourseContentItem = {
  id: 'methodologies-recap',
  title: 'Recap: Methodologies',
  summary: 'Key points from the chapter',
  type: 'content',
  blocks: [
    { type: 'h2', text: 'Recap: Methodologies' },
    {
      type: 'labelValue',
      label: 'Remember:',
      list: {
        ordered: false,
        items: [
          'A methodology is the way a team organises the work of building software.',
          'Waterfall is linear: each phase finishes before the next one begins.',
          'Waterfall suits clear, stable requirements with fixed scope and budget.',
          'Agile is iterative: small sprints, working software early, frequent feedback.',
          'Agile suits unclear or changing requirements and involved customers.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Key takeaway: neither is better by default. Pick what fits the project; many teams blend both.',
    },
  ],
};

export const METHODOLOGY_QUIZ: CourseQuizItem = {
  id: 'methodologies-quiz',
  title: 'Quiz: Methodologies',
  summary: 'Check your understanding of the whole chapter',
  type: 'quiz',
  intro:
    'These questions cover every section in the chapter. Choose the best answer, then read the explanation.',
  questions: [
    {
      id: 'methodology-definition',
      prompt: 'What is a software development methodology?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'The way a team organises the work of building software.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. A methodology gives the team a shared way to plan, build, test, and release.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'A programming language designed for large projects.',
          wrongExplanation:
            'A methodology is about how the work is organised, not which language is used.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'A tool that automatically tests the software.',
          wrongExplanation:
            'Tools can support a methodology, but the methodology itself is a way of working.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'A document that lists every bug in the system.',
          wrongExplanation:
            'That would be a defect log. A methodology describes how the whole team works.',
        },
      ],
    },
    {
      id: 'waterfall-sequence',
      prompt: 'What best describes the Waterfall model?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'The team changes direction after every individual task.',
          wrongExplanation:
            'Waterfall follows defined phases instead of frequent short feedback cycles.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Each phase finishes before the next one begins.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Like water flowing downhill, Waterfall moves in one direction and rarely goes back.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'The team releases working software every week by definition.',
          wrongExplanation: 'Frequent delivery belongs to Agile, not Waterfall.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'The team avoids planning and documentation.',
          wrongExplanation:
            'The opposite is true. Waterfall puts heavy emphasis on planning and documentation up front.',
        },
      ],
    },
    {
      id: 'waterfall-phases',
      prompt: 'Which list shows the classic Waterfall phases in the right order?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Design, Requirements, Testing, Implementation, Maintenance, Deployment.',
          wrongExplanation:
            'You cannot design before you know the requirements, or test before you implement.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Implementation, Testing, Requirements, Design, Deployment, Maintenance.',
          wrongExplanation:
            'Waterfall starts by defining the requirements, not by writing code.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Requirements, Implementation, Design, Deployment, Testing, Maintenance.',
          wrongExplanation:
            'Design comes before implementation, and testing comes before deployment.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Requirements, Design, Implementation, Testing, Deployment, Maintenance.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Requirements are defined first, and maintenance continues after deployment.',
        },
      ],
    },
    {
      id: 'waterfall-late-mistakes',
      prompt: 'Why are mistakes found late in a Waterfall project expensive?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Because Waterfall projects have no budget for fixes.',
          wrongExplanation:
            'Budget is not the reason. The cost comes from having to redo earlier phases.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Because Waterfall does not allow any changes at all.',
          wrongExplanation:
            'Changes are possible, but they are costly because finished phases must be reopened.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Because going back to an earlier phase is costly once later phases are built on it.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. A wrong requirement found in testing can mean redoing design and implementation too.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Because Waterfall projects never test the software.',
          wrongExplanation: 'Testing is one of the classic Waterfall phases.',
        },
      ],
    },
    {
      id: 'waterfall-strength',
      prompt: 'Which of these is a strength of Waterfall?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Strong documentation makes it easy to onboard new people.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The emphasis on up-front documentation helps new team members get started.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'It welcomes changing requirements, even late in the project.',
          wrongExplanation:
            'That is a strength of Agile. Waterfall finds changing requirements hard to handle.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Working software is available from the first week.',
          wrongExplanation: 'In Waterfall, working software appears only late in the project.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'It is a good fit for large, uncertain projects.',
          wrongExplanation:
            'Large, long, or uncertain projects are where Waterfall struggles most.',
        },
      ],
    },
    {
      id: 'waterfall-late-testing',
      prompt: 'Waterfall is often said to “test late”. What does that actually mean?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'No testing of any kind happens until the testing phase.',
          wrongExplanation:
            'Static testing, such as reviewing requirements and designs, happens from the start.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Dynamic testing comes late because the code is not written yet; static testing such as reviews happens early.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. You cannot run code that does not exist, but you can review documents and designs.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Testers join the project only after it is released.',
          wrongExplanation:
            'Testing is a phase before deployment, and reviews involve testers much earlier.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Testing is skipped if the project is late.',
          wrongExplanation: 'Testing is a planned phase of Waterfall, not an optional extra.',
        },
      ],
    },
    {
      id: 'agile-feedback',
      prompt: 'Why do Agile teams deliver working software frequently?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'To remove the need for planning.',
          wrongExplanation: 'Agile teams still plan. They revise plans as new information appears.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'To avoid talking with customers.',
          wrongExplanation: 'Customer collaboration and feedback are central to Agile.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'To gather feedback early and adjust the product.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. The customer sees progress early and often, so the product can adapt as needs become clearer.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'To guarantee a fixed final scope and timeline.',
          wrongExplanation:
            'Agile is actually less predictable on final scope and timeline.',
        },
      ],
    },
    {
      id: 'sprint-length',
      prompt: 'How long is a typical Agile iteration (sprint)?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'One day.',
          wrongExplanation:
            'A day is too short to produce something usable and gather feedback on it.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Six to twelve months.',
          wrongExplanation:
            'Cycles that long would lose the benefit of frequent feedback.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'As long as the whole project.',
          wrongExplanation: 'That would be one long pass, which is closer to Waterfall.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Often one to four weeks.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Short cycles produce something usable at the end of each.',
        },
      ],
    },
    {
      id: 'scrum-kanban',
      prompt: 'How do Scrum and Kanban relate to Agile?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'They are alternatives that replace Agile.',
          wrongExplanation: 'Scrum and Kanban are Agile frameworks, not replacements for it.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'They are specific frameworks that put Agile values into practice.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Agile is a mindset and set of values first; Scrum and Kanban are ways to apply it.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'They are programming languages used by Agile teams.',
          wrongExplanation: 'Scrum and Kanban describe ways of working, not languages.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'They are Waterfall phases.',
          wrongExplanation:
            'The Waterfall phases are requirements, design, implementation, testing, deployment, and maintenance.',
        },
      ],
    },
    {
      id: 'agile-weakness',
      prompt: 'Which of these is a weakness of Agile?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'It is less predictable on final cost, scope, and timeline.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Agile trades up-front certainty for adaptability.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Working software appears only late in the project.',
          wrongExplanation:
            'That is a Waterfall weakness. Agile delivers working software early and continuously.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'It cannot handle changing requirements.',
          wrongExplanation: 'Agile welcomes changing requirements, even late.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Problems surface late, when they cost the most.',
          wrongExplanation:
            'In Agile, problems surface quickly while they are still cheap to fix.',
        },
      ],
    },
    {
      id: 'agile-falters',
      prompt: 'When is Agile most likely to falter?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'When requirements are expected to change.',
          wrongExplanation: 'Changing requirements are exactly what Agile is designed to handle.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'When the customer wants to see progress early.',
          wrongExplanation: 'An involved customer is a good fit for Agile.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'When communication is weak and the customer is not available.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Agile depends heavily on good communication and an engaged customer.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'When the project is large and exploratory.',
          wrongExplanation: 'Large, long, or exploratory projects are where Agile fits well.',
        },
      ],
    },
    {
      id: 'choose-fixed-contract',
      prompt:
        'A three-month contract project has a fixed budget and clear requirements that will not change. Which approach fits best?',
      correctOptionId: 'd',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Agile, because every project should be Agile.',
          wrongExplanation:
            'No method is best by default. Here the requirements are clear and fixed.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Agile, because the requirements are unclear.',
          wrongExplanation: 'The scenario says the requirements are clear and will not change.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Neither. The team should skip planning.',
          wrongExplanation: 'Every project needs a way of organising the work.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Waterfall.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Clear, stable requirements with fixed scope and budget on a short project suit Waterfall.',
        },
      ],
    },
    {
      id: 'choose-startup',
      prompt:
        'A start-up is building a new app and is not yet sure what users want. Which approach fits best?',
      correctOptionId: 'a',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Agile.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Unclear requirements and the need for early feedback suit Agile.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Waterfall, because the plan should be fixed up front.',
          wrongExplanation:
            'A fixed plan is risky when nobody knows yet what users want.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Waterfall, because it delivers working software early.',
          wrongExplanation: 'Waterfall delivers working software late, not early.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Neither. The team should wait until the requirements are final.',
          wrongExplanation:
            'Waiting rarely makes requirements clearer. Building small and getting feedback does.',
        },
      ],
    },
    {
      id: 'choose-blend',
      prompt:
        'A museum needs a new website. The pages for exhibitions, opening hours, and contact details are well understood, but an interactive ticket-booking feature needs testing with visitors. What fits best?',
      correctOptionId: 'b',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Pure Waterfall for everything.',
          wrongExplanation:
            'The ticket-booking feature is uncertain and needs feedback, which Waterfall handles poorly.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'A blend: structure for the stable pages, short feedback cycles for the booking feature.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. Many real teams blend both, using structure where it helps and flexibility where it counts.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Pure Agile, and no documentation for any part.',
          wrongExplanation:
            'Agile does not mean no documentation. Overdoing lighter documentation is a risk.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'It does not matter which approach is used.',
          wrongExplanation:
            'The right choice depends on how stable the requirements are and how much change you expect.',
        },
      ],
    },
    {
      id: 'which-is-best',
      prompt: 'Which methodology is the best?',
      correctOptionId: 'c',
      options: [
        {
          id: 'a',
          label: 'a)',
          text: 'Agile, because it is newer.',
          wrongExplanation:
            'Being newer does not make it the right fit for every project.',
        },
        {
          id: 'b',
          label: 'b)',
          text: 'Waterfall, because it is simpler to manage.',
          wrongExplanation:
            'Simplicity helps on some projects, but Waterfall struggles when requirements change.',
        },
        {
          id: 'c',
          label: 'c)',
          text: 'Neither by default. Pick what fits the project.',
          wrongExplanation: '',
          correctExplanation:
            'Correct. It depends on how stable the requirements are and how much change you expect.',
        },
        {
          id: 'd',
          label: 'd)',
          text: 'Whichever one the team used on its last project.',
          wrongExplanation: 'No team or project is the same, so the choice should fit this project.',
        },
      ],
    },
  ],
};
