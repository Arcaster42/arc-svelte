import type { InputType } from './types.ts';
type $$ComponentProps = {
    type: InputType;
    title?: string;
    value: string;
    validations?: ((val: string) => true | string)[];
    style?: string;
    width?: string;
    minInlineSize?: string;
    fitContent?: boolean;
    minTime?: string;
    maxTime?: string;
    increments?: ('00' | '15' | '30' | '45')[];
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value">;
type Input = ReturnType<typeof Input>;
export default Input;
