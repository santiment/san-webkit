import { BROWSER } from 'esm-env';
let hasBooted = false;
export function setupKitClientSession(data) {
    if (BROWSER) {
        if (hasBooted) {
            Object.assign(window.__SESSION__, data);
        }
        else {
            window.__SESSION__ = data || {};
            hasBooted = true;
        }
    }
}
//# sourceMappingURL=kit.js.map