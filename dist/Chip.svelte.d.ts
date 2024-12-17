import type { Color } from './types.ts';
type $$ComponentProps = {
    color?: Color;
    label: string;
    icon?: keyof typeof import('@mdi/js');
    iconColor?: string;
    outline?: boolean;
    active?: boolean;
};
declare const Chip: import("svelte").Component<$$ComponentProps, {}, "active">;
type Chip = ReturnType<typeof Chip>;
export default Chip;
