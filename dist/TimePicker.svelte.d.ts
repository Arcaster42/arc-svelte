type $$ComponentProps = {
    value: string;
    increment?: '15' | '30' | '60';
    min?: string;
    max?: string;
    bookedTimes?: string[];
};
declare const TimePicker: import("svelte").Component<$$ComponentProps, {}, "value">;
type TimePicker = ReturnType<typeof TimePicker>;
export default TimePicker;
