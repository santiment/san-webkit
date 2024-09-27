import type { DateTimeDuration } from '@internationalized/date';
import type { DateRange } from 'bits-ui';
type Preset = {
    title: string;
    range: DateRange;
};
declare function Preset(title: string, diff: DateTimeDuration, timeZone: string): Preset;
export declare const getPresets: (tz: string) => Preset[];
export {};
