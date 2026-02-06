## Content System Template

### Purpose
A typed, data-driven content system where:

- A registry file exports an array of top-level entities.
- Each entity contains a tree of items.
- Items render either structured content blocks, an external link, or a nested group.
- A thin service provides read access to the registry (list + lookup by slug).

---

## Top-Level Entity

### Responsibilities
- Represent a navigable unit (for example a course, section, or module).
- Own display metadata and an ordered list of items.

### Typical Fields
- slug (stable identifier, used for routing or lookup)
- title
- description
- imageUrl
- tags
- disabled (optional)
- disabledReason (optional)
- items (ordered list, order equals UI order)

---

## Item Tree

### Item Types
Items are modeled as a discriminated union using a type field:

- content
- external
- group

### Shared Item Fields
- id (stable within scope)
- title
- summary (optional)
- badge (optional)

### Content Item
- type: content
- blocks: Block[]
- revealable (optional, hides content behind a reveal interaction)

### External Item
- type: external
- externalUrl

### Group Item
- type: group
- children: Item[]
- overviewBlocks (optional, shown when the group itself is selected)

Groups act like folders and enable hierarchical navigation.

---

## Block System

### Purpose
Blocks describe renderable content using small, composable primitives. Rendering is typically implemented with a switch on block.type.

### Base Block Fields
- testId (optional, used for stable test selectors)

### Block Categories

- Text structure
  - headings
  - paragraphs

- Structured content
  - label/value blocks
  - ordered or unordered lists

- Emphasis and layout
  - callouts with limited variants
  - dividers
  - hint or accordion-style blocks containing nested blocks

- Resources
  - link collections
  - download collections

- Code
  - code snippets with optional language and filename

- Actions
  - buttons with router navigation or external links
  - optional variant and new-tab behavior

Adding a new block type is a contract change and requires renderer support.

---

## Lists

### Shape
List items support both flat and nested forms:

- string
- object with text and optional children

Lists may be ordered or unordered via a boolean flag.

---

## Data Access Layer

### Service Pattern
A lightweight, read-only service provides:

- getAll()
- getBySlug(slug)

Content is bundled with the app and accessed synchronously.

---

## Authoring Guidelines

- Keep registry files declarative.
- Treat slugs and ids as stable identifiers.
- Use testId for durable automated test selectors.
- Prefer groups over large flat lists.
- Favor small, composable block types over complex multipurpose blocks.

---

## Page Template: Details View With Two-Pane Layout

### Purpose
A details page displays one top-level entity (by slug/route param) and provides:

- A main reading pane that renders the selected item.
- A right-hand contents pane that lists items (including nested groups).
- Local UI state for selection, expansion, and reveal interactions.

### Routing and Lookup
- Read a route parameter (for example slug) and convert it into a signal.
- Lookup the entity through a read-only service.
- Handle “not found” by rendering a simple fallback state.

### Selection Defaults
- On entity change:
  - Select a default item (typically the first in the ordered list).
  - Reset all local UI state (expanded groups, revealed content, revealed hints).

### Scroll Behavior
- When selection changes:
  - Reset scroll position of the main pane to the top.
  - Perform the scroll reset after the DOM updates (microtask or similar).

### Contents Tree Rendering
- Render items in the sidebar according to their type:
  - content: button that selects item
  - external: anchor that opens in a new tab and also updates selection
  - group: button that selects the group and toggles expanded state
- Support nested groups by rendering children when expanded.

### Reveal Interactions
- Support per-item revealable content:
  - show a “hidden content” panel until the user reveals it
  - track revealed ids in a Set-like state
- Support hint blocks:
  - hints contain nested blocks
  - track revealed hint ids in separate state

---

## Renderer Template: Block Switch

### Purpose
Render a list of blocks using a single switch on block.type.

### Rendering Rules
- For each block:
  - render the matching UI primitive
  - apply optional testId to a stable attribute used by tests

### Text Convenience
- Paragraph blocks may optionally be interpreted as lists based on text conventions.
- Prefer structured list blocks when possible to avoid relying on parsing.

### Nested Rendering
- Nested blocks (for example hint blocks) reuse the same rendering strategy.
- Keep nested rendering consistent with the main renderer.

---

## Local State Template

### Signals and Computed Values
- routeParamSignal: derived from router param stream
- entitySignal: computed from service lookup
- selectedId: signal
- derivedSelectedItem: computed via tree search
- derivedSelectedBlocks: computed based on selected item type

### Set-Based UI State
Use set-like state to track:
- expanded group ids
- revealed item ids
- revealed hint ids

This keeps toggles simple and avoids duplicating nested state structures.

---

## Tree Lookup Template

### Purpose
Find an item by id in a nested group structure.

### Strategy
- Depth-first search:
  - check current item
  - if group, recursively search children
- Return null when not found

