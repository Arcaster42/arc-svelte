import type { CalendarPlan, CalendarType } from './types.js';
type $$ComponentProps = {
    plans: CalendarPlan[];
    type?: CalendarType;
};
declare const Calendar: import("svelte").Component<$$ComponentProps, {}, "plans">;
type Calendar = ReturnType<typeof Calendar>;
export default Calendar;
