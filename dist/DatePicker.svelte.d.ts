declare const DatePicker: import("svelte").Component<{
    start?: Date;
    end?: Date;
    showYear?: boolean;
    allowRange?: boolean;
}, {}, "start" | "end">;
type DatePicker = ReturnType<typeof DatePicker>;
export default DatePicker;
