type $$ComponentProps = {
    color?: 'primary' | 'secondary';
    title?: string;
    textColor?: string;
    iconColor?: string;
    menuItems?: {
        label: string;
        path: string;
    }[];
    routingItems?: {
        label: string;
        path: string;
    }[];
};
declare const AppBar: import("svelte").Component<$$ComponentProps, {}, "">;
type AppBar = ReturnType<typeof AppBar>;
export default AppBar;
