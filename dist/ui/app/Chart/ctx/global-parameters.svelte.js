import { createCtx } from '../../../../utils/index.js';
export const useGlobalParametersCtx = createCtx('useGlobalParametersCtx', (defaultCtxValue) => {
    const parameters = $state({
        from: 'utc_now-60d',
        to: 'utc_now',
        interval: '4h',
        selector: { slug: 'bitcoin' },
        includeIncompleteData: true,
        ...defaultCtxValue,
    });
    return {
        globalParameters: {
            get $$() {
                return parameters;
            },
        },
    };
});
