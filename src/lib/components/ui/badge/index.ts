export { default as Badge } from "./badge.svelte";
export { badgeVariants, type BadgeVariant } from "./badge.svelte";
/*
 * `ZirelBadge` is the Console-parity variant (six tone palette,
 * `rounded-md` chip). Re-exported here so public-surface components
 * can `import { ZirelBadge, type BadgeTone } from
 * "$lib/components/ui/badge"` without reaching into internals.
 */
export { default as ZirelBadge, type BadgeTone } from "./badge-zirel.svelte";
