import type { ButtonType } from './types.ts';
type $$ComponentProps = {
    label: string;
    items: {
        label: string;
        path: string;
    }[];
    buttonType?: ButtonType;
    icon?: keyof typeof import('@mdi/js');
    textColor?: string;
};
declare const Menu: import("svelte").Component<$$ComponentProps, {}, "">;
type Menu = ReturnType<typeof Menu>;
export default Menu;
