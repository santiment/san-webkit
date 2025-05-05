import type { z } from 'zod';
export type TApiChannel = 'email' | 'telegram' | {
    telegram_channel: string;
} | {
    webhook: string;
};
type TSimpleChannels = Extract<TApiChannel, string>;
type TComplexChannels = UnionToIntersection<Extract<TApiChannel, object>>;
export type TChannel = z.util.flatten<Partial<Record<TSimpleChannels, boolean> & TComplexChannels>>;
export declare function getChannelFromApi(channels: TApiChannel[] | undefined): TChannel | null;
export declare function reduceChannelToApi(channels: TChannel): TApiChannel[];
export declare function formatChannels(channels: TChannel): string;
export {};
