export type CourseItemType = 'content' | 'external' | 'group';

export type CourseContentBlock =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'callout'; variant: 'info' | 'warning'; text: string }
  | { type: 'links'; links: { label: string; url: string; description?: string }[] }
  | { type: 'downloads'; downloads: { label: string; url: string; meta?: string }[] }
  | { type: 'code'; code: string; language?: string; filename?: string }
  | { type: 'hint'; id: string; title: string; blocks: CourseContentBlock[] }
  | { type: 'divider' };

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

export type CourseItem = CourseContentItem | CourseExternalItem | CourseGroupItem;

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
