type WatchlistSelector = {
    selector: {
        watchlist_id: number;
    };
};
type TApiOperationValue = boolean | number | [number, number] | Record<string, number | [number, number] | undefined>[] | WatchlistSelector | undefined;
export type TApiOperation = Record<string, TApiOperationValue>;
export declare function isNumericOperation(value: TApiOperationValue): value is number | [number, number];
export {};
