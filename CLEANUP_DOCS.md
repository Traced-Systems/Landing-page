# Code Cleanup Documentation

## Purpose

This file will record all changes related to removal of redundant, dead, and unused code in this repository.

Status: Created — will NOT be updated until you explicitly command updates.

## How this file is used

- Record each removed file, function, component, or export.
- For each change include: path, short rationale, revert steps, and test commands.
- Keep entries chronological with a one-line summary and a detailed section.

## Sections (template)

1. Summary
   - Short one-line summary of the overall cleanup batch.

2. Removed Files
   - [path/to/file] — reason, impact, revert note

3. Removed Code Blocks
   - File + snippet location — reason, revert note

4. Modified Files
   - [path/to/file] — summary of edits

5. Rationale
   - Why each item was removed or changed.

6. Revert / Rollback
   - Exact commands or git steps to revert each change.

7. Test commands
   - `npm run build`
   - `npm run dev` (local smoke)

8. Notes
   - Any follow-ups, TODOs, or potential regressions to watch.

## Entry template (fill only after approval)

-- Batch: YYYY-MM-DD — Short title

Removed Files:

- [path](path) — one-line reason

Removed Code Blocks:

- [path](path#L1-L1) — description

Modified Files:

- [path](path#L1-L1) — summary

Rationale:

- Explain why the removals are safe.

Revert steps:

- `git checkout -- <file>` or exact PR revert instruction.

---

Will not change until you tell me to update this file.

-- Batch: 2026-04-30 — Remove unused header SheetHeader

Removed Files:

- [src/components/header/SheetHeader.tsx](src/components/header/SheetHeader.tsx) — Unused header component (name collides with UI `SheetHeader`). Deleted to remove dead code and avoid confusion.

Removed Code Blocks:

- None (file removed in its entirety).

Modified Files:

- [CLEANUP_DOCS.md](CLEANUP_DOCS.md) — Added this cleanup entry.

Rationale:

- `src/components/header/SheetHeader.tsx` was not imported anywhere in the codebase. The UI also exports a `SheetHeader` type from the `sheet` component which created a naming collision and potential confusion. Removing the unused file reduces maintenance burden and eliminates ambiguity.

Revert / Rollback:

- If the file was not yet committed: `git restore src/components/header/SheetHeader.tsx`
- If the deletion was committed on the current branch: `git checkout origin/main -- src/components/header/SheetHeader.tsx` (or replace `origin/main` with the branch/commit where the file still exists).

Test commands:

- `npm run build`
- `npm run dev` (local smoke test)

Notes:

- Confirm there are no intended references to this file before merging the deletion.
- If you prefer keeping a copy, create a branch or tag before deleting.

-- Batch: 2026-04-30 — Refactor TabsSection to data-driven

Added Files:

- [src/components/our-values/tabsData.ts](src/components/our-values/tabsData.ts) — Added tab definitions (`key`, `label`, `image`, `title`, `body`) to centralize tab content and imagery.

Modified Files:

- [src/components/our-values/TabsSection.tsx](src/components/our-values/TabsSection.tsx) — Refactored to map the `tabs` data array instead of using inline conditional JSX and repeated blocks.

Rationale:

- Moving tab content and metadata into `tabsData.ts` reduces duplicated JSX, makes the component data-driven, simplifies future content edits, and improves readability.

Revert / Rollback:

- To revert the refactor: `git checkout -- src/components/our-values/tabsData.ts src/components/our-values/TabsSection.tsx` (or revert the commit/PR).

Test commands:

- `npm run build`
- `npm run dev` (verify Tabs render and images load)

Notes:

- Consider extracting `TabTrigger` and `TabContent` tiny components if further reduction is desired.
- Keep copy in `tabsData.ts` short; consider moving longer content to markdown files if content editing is frequent.

-- Batch: 2026-04-30 — Remove unused BlogPostSheet

Removed Files:

- [src/components/BlogPostSheet.tsx](src/components/BlogPostSheet.tsx) — Unused/duplicate blog post sheet. The application uses `BlogPostSubsheet` in practice; this file was unused and removed to reduce dead code.

Removed Code Blocks:

- None (file removed in its entirety).

Modified Files:

- [CLEANUP_DOCS.md](CLEANUP_DOCS.md) — Added this cleanup entry.

Rationale:

- `src/components/BlogPostSheet.tsx` was not imported anywhere. Functionality is covered by `BlogPostSubsheet`, so deleting the unused file reduces confusion and maintenance overhead.

Revert / Rollback:

- To restore the file from another branch or commit: `git checkout <commit> -- src/components/BlogPostSheet.tsx`

Test commands:

- `npm run build`
- `npm run dev` (verify blog posts and subsheet behavior)

Notes:

- If you want to keep the file for reference, create a patch or branch before permanently removing it.
