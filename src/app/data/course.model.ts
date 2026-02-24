export type CourseItemType = 'content' | 'external' | 'group' | 'quiz';

export interface CourseBlockBase {
  testId?: string;
}

export interface CourseQuizOption {
  id: string; // stable id, e.g. "a", "b", "c", "d"
  label: string; // display, e.g. "a)"
  text: string;

  /**
   * Shown when the user selects THIS option and it is incorrect.
   * This should explain *why the selected answer is wrong* (Udemy style).
   */
  wrongExplanation: string;

  /**
   * Optional extra details toggled by "Explain this further".
   */
  wrongExplainFurther?: string;

  /**
   * Optional explanation shown when the user selects THIS option and it is correct.
   */
  correctExplanation?: string;
}

export interface CourseQuizQuestion {
  id: string;
  prompt: string;
  options: CourseQuizOption[];
  correctOptionId: string;
}

export interface CourseQuizItem extends CourseItemBase {
  type: 'quiz';
  /**
   * Optional intro text shown above the quiz UI.
   */
  intro?: string;

  questions: CourseQuizQuestion[];
}

export type CourseListItem =
  | string
  | {
      text: string;
      children?: CourseListItem[];
    };

export type CourseContentBlock =
  | (CourseBlockBase & { type: 'h1'; text: string })
  | (CourseBlockBase & { type: 'h2'; text: string })
  | (CourseBlockBase & { type: 'h3'; text: string })
  | (CourseBlockBase & { type: 'p'; text: string })
  | (CourseBlockBase & {
      type: 'labelValue';
      label: string;
      /** old usage */
      text?: string;
      list?: {
        ordered?: boolean; // false => ul, true => ol
        items: CourseListItem[];
      };
    })
  | (CourseBlockBase & { type: 'callout'; variant: 'info' | 'warning'; text: string })
  | (CourseBlockBase & {
      type: 'links';
      links: { label: string; url: string; description?: string }[];
    })
  | (CourseBlockBase & {
      type: 'downloads';
      downloads: { label: string; url: string; meta?: string }[];
    })
  | (CourseBlockBase & { type: 'code'; code: string; language?: string; filename?: string })
  | (CourseBlockBase & { type: 'hint'; id: string; title: string; blocks: CourseContentBlock[] })
  | (CourseBlockBase & { type: 'divider' })
  | (CourseBlockBase & {
      type: 'button';
      label: string;
      routerLink?: string;
      queryParams?: Record<string, string | number | boolean | null | undefined>;
      href?: string;
      variant?: 'primary' | 'secondary';
      newTab?: boolean;
    });

export interface CourseItemBase {
  id: string;
  title: string;
  summary?: string;
  badge?: string;
}

export interface CourseContentItem extends CourseItemBase {
  type: 'content';
  blocks: CourseContentBlock[];

  /**
   * If true, content is hidden until user clicks "Reveal".
   * Great for solutions (not locked, just tucked away).
   */
  revealable?: boolean;
}

export interface CourseExternalItem extends CourseItemBase {
  type: 'external';
  externalUrl: string;
}

/**
 * Group (folder) that can contain nested items.
 * Selecting a group shows overviewBlocks in the main content area.
 */
export interface CourseGroupItem extends CourseItemBase {
  type: 'group';
  overviewBlocks?: CourseContentBlock[];
  children: CourseItem[];
}

export type CourseItem = CourseContentItem | CourseExternalItem | CourseGroupItem | CourseQuizItem;

export interface Course {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  disabled?: boolean;
  disabledReason?: string;

  // Manual order stays: items array order = UI order
  items: CourseItem[];
}
