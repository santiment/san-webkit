export type SS<T> = T extends {
    $: any;
} ? T : {
    $: T;
};
export type MaybeSS<GType> = GType | SS<GType>;
/**
 * Assigning object with a same reference will NOT trigger an update
 */
export declare function ss<T>(value: T | {
    $: T;
}): {
    $: T;
};
