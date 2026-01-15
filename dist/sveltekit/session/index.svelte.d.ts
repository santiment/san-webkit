export declare function useAppSessionFlow(data: {
    session: Pick<App.Locals, 'customer' | 'device' | 'isLiteVersion'>;
}): void;
/**
 * Pass LayoutLoad's `data` in `+layout.ts`
 */
export declare function setupClientAppSession(data: Pick<App.Locals, 'customer' | 'device' | 'isLiteVersion'>): void;
