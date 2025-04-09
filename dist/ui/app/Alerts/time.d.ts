export declare const TimeModifiers: {
    m: {
        frequencyLabel: string;
        name: string;
    } & Record<"key", "m">;
    h: {
        frequencyLabel: string;
        name: string;
    } & Record<"key", "h">;
    d: {
        frequencyLabel: string;
        name: string;
    } & Record<"key", "d">;
    w: {
        frequencyLabel: string;
        name: string;
    } & Record<"key", "w">;
};
export type TTimeModifier = keyof typeof TimeModifiers;
export type TTimeWindow = `${number}${TTimeModifier}`;
