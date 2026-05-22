export declare const SHORTCUTS: readonly [readonly ["1D", "1d"], readonly ["7D", "7d"], readonly ["1M", "30d"], readonly ["3M", "90d"], readonly ["6M", "180d"], readonly ["YTD", string], readonly ["1Y", "1y"], readonly ["5Y", "5y"], readonly ["ALL", string]];
export declare const MOBILE_SHORTCUTS: readonly [readonly ["1D", "1d"], readonly ["7D", "7d"], readonly ["1M", "30d"], readonly ["3M", "90d"], readonly ["6M", "180d"]];
type TProps = {
    shortcuts?: readonly (readonly [string, string])[];
};
declare const DatesRangeShortcuts: import("svelte").Component<TProps, {}, "">;
type DatesRangeShortcuts = ReturnType<typeof DatesRangeShortcuts>;
export default DatesRangeShortcuts;
