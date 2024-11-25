type $$ComponentProps = {
    title?: string;
    items: any[];
    strings?: {
        [key: string]: string;
    };
    center?: boolean;
    left?: boolean;
    striped?: boolean;
    width?: string;
};
declare const Table: import("svelte").Component<$$ComponentProps, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
