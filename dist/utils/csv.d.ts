type Header<T> = {
    title: string;
    format: (item: T) => string | number;
};
export declare function downloadCsv<T>(title: string, headers: Header<T>[], data: T[]): void;
export {};
