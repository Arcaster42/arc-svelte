import type { Snippet } from 'svelte';
import type { AlignStyle } from './types.ts';
type $$ComponentProps = {
    children?: Snippet;
    align?: AlignStyle;
    gapless?: boolean;
};
declare const Col: import("svelte").Component<$$ComponentProps, {}, "">;
type Col = ReturnType<typeof Col>;
export default Col;
