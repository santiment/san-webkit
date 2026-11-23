import { BROWSER } from 'esm-env';
import { createCtx, getCookie, setCookie } from '../../utils/index.js';
export function createABTestCtx(testSchemas = []) {
    const initABSettings = (event) => testSchemas.reduce((prev, schema) => {
        const cookieValue = event.cookies.get(schema.cookieKey);
        const fitValue = cookieValue && schema.variants.includes(cookieValue);
        const abValue = fitValue
            ? cookieValue
            : schema.variants[Math.floor(Math.random() * schema.variants.length)];
        return { ...prev, [schema.key]: abValue };
    }, {});
    return {
        initABSettings,
        useABTestCtx: createCtx('webkit_useABTestCtx', (settings) => ({
            abTests: {
                get $() {
                    return settings;
                },
                setCookies() {
                    if (!BROWSER)
                        return;
                    testSchemas.forEach((schema) => {
                        const cookieValue = getCookie(schema.cookieKey);
                        if (cookieValue)
                            return;
                        const key = schema.key;
                        const abValue = settings[key];
                        setCookie(schema.cookieKey, abValue);
                    });
                },
            },
        })),
    };
}
