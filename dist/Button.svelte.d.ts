import type { ButtonType, Color, Size } from './types.js';
type $$ComponentProps = {
    type?: ButtonType;
    label?: string;
    color?: Color;
    textColor?: string;
    size?: Size;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: keyof typeof import('@mdi/js');
    onclick?: () => void;
    refId?: string;
    style?: string;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
