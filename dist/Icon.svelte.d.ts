import type { Size } from './types.js';
type $$ComponentProps = {
    icon: keyof typeof import('@mdi/js');
    color?: string;
    size?: Size;
    width?: string;
    height?: string;
};
declare const Icon: import("svelte").Component<$$ComponentProps, {}, "">;
type Icon = ReturnType<typeof Icon>;
export default Icon;
