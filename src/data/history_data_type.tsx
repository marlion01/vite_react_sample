export type HistoryProps = {
    year: number;
    events: EventsProps[];
}
export type EventsProps = {
    month?: number;
    contents: ContentsProps[];
}
export type ContentsProps = {
    content: string;
    color?: string|undefined;
    Emphasis?:boolean,
}