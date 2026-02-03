export type CourseItemType = 'content' | 'external';

export type CourseContentBlock =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'callout'; variant: 'info' | 'warning'; text: string }
  | { type: 'links'; links: { label: string; url: string; description?: string }[] }
  | { type: 'downloads'; downloads: { label: string; url: string; meta?: string }[] }
  | { type: 'code'; code: string; language?: string; filename?: string }
  | { type: 'divider' };

export interface CourseItemBase {
  id: string; // unique per course
  title: string;
  summary?: string; // shown in the nav list (optional)
  badge?: string; // e.g. "Links", "Downloads" (optional)
}

export interface CourseContentItem extends CourseItemBase {
  type: 'content';
  blocks: CourseContentBlock[];
}

export interface CourseExternalItem extends CourseItemBase {
  type: 'external';
  externalUrl: string;
}

export type CourseItem = CourseContentItem | CourseExternalItem;

export interface Course {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];

  disabled?: boolean;
  disabledReason?: string;

  // Manual order is the array order (very important for you)
  items: CourseItem[];
}
