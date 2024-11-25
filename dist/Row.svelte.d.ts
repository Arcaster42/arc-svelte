import type { Snippet } from 'svelte';
import type { JustifyStyle } from './types.ts';
type $$ComponentProps = {
    children?: Snippet;
    justify?: JustifyStyle;
    gapless?: boolean;
};
declare const Row: import("svelte").Component<$$ComponentProps, {}, "">;
type Row = ReturnType<typeof Row>;
export default Row;
