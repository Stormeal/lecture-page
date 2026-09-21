import { CourseGroupItem } from '../../course.model';

export const METHODOLOGY_SECTION_01: CourseGroupItem = {
  id: 'waterfall',
  title: 'Section 1: Waterfall',
  summary: 'A linear, plan-led approach',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'The Waterfall Model' },
    {
      type: 'p',
      text: 'Waterfall follows a linear sequence. A team completes one phase before moving to the next, with substantial planning and documentation at the beginning.',
    },
    {
      type: 'image',
      src: 'assets/chapter2-methodologies.png',
      alt: 'Hand-drawn illustration of a software team working through development stages',
      caption: 'Course artwork from the Methodologies section.',
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
    { type: 'divider' },
    { type: 'h3', text: 'When Waterfall Helps' },
    {
      type: 'labelValue',
      label: 'Strengths:',
      list: {
        ordered: false,
        items: [
          'Clear stages, milestones, and deliverables.',
          'Strong documentation that helps new people join a project.',
          'A good fit for short projects with fixed, well-understood requirements.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'Limitations:',
      list: {
        ordered: false,
        items: [
          'Changing requirements are difficult to accommodate.',
          'Working software appears late in the project.',
          'Incorrect assumptions and defects can surface when they cost more to fix.',
          'Long or uncertain projects can become difficult to manage.',
        ],
      },
    },
  ],
  children: [
    {
      id: 'waterfall-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of Waterfall',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
        {
          id: 'waterfall-sequence',
          prompt: 'What best describes the Waterfall model?',
          correctOptionId: 'b',
          options: [
            {
              id: 'a',
              label: 'a)',
              text: 'The team changes direction after every individual task.',
              wrongExplanation: 'Waterfall follows defined phases instead of frequent short feedback cycles.',
            },
            {
              id: 'b',
              label: 'b)',
              text: 'The team completes one phase before moving to the next.',
              wrongExplanation: '',
              correctExplanation: 'Correct. Waterfall is a linear and sequential approach.',
            },
            {
              id: 'c',
              label: 'c)',
              text: 'The team releases working software every week by definition.',
              wrongExplanation: 'Frequent delivery belongs more closely to Agile approaches.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'The team avoids planning and documentation.',
              wrongExplanation: 'Waterfall places strong emphasis on planning and documentation upfront.',
            },
          ],
        },
      ],
    },
  ],
};

export const METHODOLOGY_SECTION_02: CourseGroupItem = {
  id: 'agile',
  title: 'Section 2: Agile',
  summary: 'Iterative development and regular feedback',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Agile Software Development' },
    {
      type: 'p',
      text: 'Agile builds software in small cycles, often called iterations or sprints. Teams deliver working software frequently, collect feedback, and adjust their plans as they learn.',
    },
    {
      type: 'labelValue',
      label: 'Agile emphasises:',
      list: {
        ordered: false,
        items: [
          'Collaboration within the team and with customers.',
          'Frequent delivery of working software.',
          'Responding to changing needs.',
          'Feedback that helps the product stay on track.',
        ],
      },
    },
    {
      type: 'p',
      text: 'The Agile Manifesto provides the foundation for this way of working. Scrum and Kanban are common Agile frameworks.',
    },
    { type: 'divider' },
    { type: 'h3', text: 'Benefits and Risks' },
    {
      type: 'labelValue',
      label: 'Benefits:',
      list: {
        ordered: false,
        items: [
          'Teams can react to changed requirements, including late changes.',
          'Working software reaches users early and often.',
          'Problems surface while they are still cheaper to fix.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'Risks to manage:',
      list: {
        ordered: false,
        items: [
          'Final cost, scope, and timeline can be less predictable.',
          'The approach needs strong communication and engaged customers.',
          'Documentation can suffer if a team treats it as unimportant.',
          'Teams need discipline and experience to avoid losing focus.',
        ],
      },
    },
  ],
  children: [
    {
      id: 'agile-quiz',
      title: 'Quiz',
      summary: 'Check your understanding of Agile',
      type: 'quiz',
      intro: 'Choose the best answer.',
      questions: [
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
                'Correct. Frequent delivery gives teams useful feedback while change remains manageable.',
            },
            {
              id: 'd',
              label: 'd)',
              text: 'To guarantee a fixed final scope and timeline.',
              wrongExplanation: 'Agile can reduce risk, but it does not guarantee a fixed scope or timeline.',
            },
          ],
        },
      ],
    },
  ],
};

export const METHODOLOGY_SECTION_03: CourseGroupItem = {
  id: 'choosing-a-methodology',
  title: 'Section 3: Choosing an Approach',
  summary: 'Match the approach to the project',
  type: 'group',
  overviewBlocks: [
    { type: 'h2', text: 'Choosing an Approach' },
    {
      type: 'p',
      text: 'No single methodology fits every project. Choose an approach that matches the clarity of the requirements, the level of uncertainty, and how closely customers need to be involved.',
    },
    {
      type: 'labelValue',
      label: 'A Waterfall approach fits best when:',
      list: {
        ordered: false,
        items: [
          'Requirements are clear, stable, and unlikely to change.',
          'Scope and budget are fixed upfront.',
          'The project is short and well understood.',
        ],
      },
    },
    {
      type: 'labelValue',
      label: 'An Agile approach fits best when:',
      list: {
        ordered: false,
        items: [
          'Requirements remain unclear or are expected to change.',
          'Customers want to see progress and give feedback early.',
          'The project is large, long-running, or exploratory.',
        ],
      },
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Many teams blend the two approaches. They keep useful structure while making room for feedback and change.',
    },
  ],
  children: [
    {
      id: 'choosing-a-methodology-exercise',
      title: 'Exercise',
      summary: 'Choose an approach for a project',
      type: 'content',
      blocks: [
        { type: 'h2', text: 'Exercise: Waterfall or Agile?' },
        {
          type: 'p',
          text: 'A museum needs a new website. It knows it needs pages for exhibitions, opening hours, and contact details. It also wants visitors to test early ideas for an interactive ticket-booking feature.',
        },
        {
          type: 'labelValue',
          label: 'Discuss:',
          list: {
            ordered: false,
            items: [
              'Which parts of the project have stable requirements?',
              'Which parts would benefit from early feedback?',
              'Would you recommend Waterfall, Agile, or a blend? Explain your choice.',
            ],
          },
        },
      ],
    },
  ],
};
