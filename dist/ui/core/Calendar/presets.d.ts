import type { DateTimeDuration } from '@internationalized/date';
import type { DateRange } from 'bits-ui';
type Preset = {
    id: string;
    title: string;
    range: DateRange;
};
declare function Preset(id: string, title: string, diff: DateTimeDuration, timeZone: string): Preset;
export declare const getPresets: (tz: string) => Preset[];
export {};
