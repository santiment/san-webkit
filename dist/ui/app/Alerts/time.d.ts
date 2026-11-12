export declare const TimeModifiers: {
    m: {
        label: string;
        name: string;
    } & Record<"key", "m">;
    h: {
        label: string;
        name: string;
    } & Record<"key", "h">;
    d: {
        label: string;
        name: string;
    } & Record<"key", "d">;
};
export type TApiTimeWindow = `${number}${'m' | 'h' | 'd' | 'w'}`;
export type TTimeModifier = keyof typeof TimeModifiers;
export type TTimeWindow = `${number}${TTimeModifier}`;
export declare function getTimeFromApi(timeSetting: TApiTimeWindow): TTimeWindow;
