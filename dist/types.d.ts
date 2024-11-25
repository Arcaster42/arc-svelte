export type Color = 'none' | 'primary' | 'secondary' | 'primary-dark' | 'success' | 'danger' | 'warning';
export type Size = 'small' | 'medium' | 'large' | 'larger';
export type ButtonType = 'default' | 'outline' | 'flat' | 'icon';
export type AlignStyle = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end';
export type InputType = 'text' | 'password' | 'time';
export type JustifyStyle = 'start' | 'center' | 'end' | 'flex-start' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around';
export type CalendarPlan = {
    startDate: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    allDay?: boolean;
    title: string;
    description?: string;
};
export type CalendarType = 'weekly' | 'monthly';
