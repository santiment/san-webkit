import * as amplitude from '@amplitude/analytics-browser';
export declare function useDebouncedFn<GFunction extends (...args: any[]) => void>(time: number, fn: GFunction): GFunction;
export declare function useAmplitudeFlow(): void;
export declare function setAmplitudeUserProperties(props: Record<string, any>): amplitude.Identify | undefined;
