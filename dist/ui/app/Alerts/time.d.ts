export declare const TimeModifiers: {
    m: {
        frequencyLabel: string;
        label: string;
        name: string;
    } & Record<"key", "m">;
    h: {
        frequencyLabel: string;
        label: string;
        name: string;
    } & Record<"key", "h">;
    d: {
        frequencyLabel: string;
        label: string;
        name: string;
    } & Record<"key", "d">;
    w: {
        frequencyLabel: string;
        label: string;
        name: string;
    } & Record<"key", "w">;
};
export type TTimeModifier = keyof typeof TimeModifiers;
export type TTimeWindow = `${number}${TTimeModifier}`;
