import type { Snippet } from 'svelte';
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
declare const Row: $$__sveltets_2_IsomorphicComponent<{
    children?: Snippet;
    justify?: "start" | "center" | "end" | "flex-start" | "flex-end" | "space-between" | "space-evenly" | "space-around";
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Row = InstanceType<typeof Row>;
export default Row;
