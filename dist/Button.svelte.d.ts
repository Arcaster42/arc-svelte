interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Button: $$__sveltets_2_IsomorphicComponent<{
    style?: string;
    type?: "default" | "outline" | "flat" | "icon";
    label?: string;
    color?: "none" | "primary" | "secondary" | "warning" | "danger";
    textColor?: string;
    size?: "small" | "medium" | "large" | "larger";
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: keyof typeof import("@mdi/js");
    onclick?: () => void;
    refId?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Button = InstanceType<typeof Button>;
export default Button;
