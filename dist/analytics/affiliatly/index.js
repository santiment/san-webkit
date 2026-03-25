import { newHeadScript } from '../utils.js';
export function initAffiliatly(id = 'AF-1074422') {
    if (process.env.IS_LOGGING_ENABLED)
        return;
    const load = () => newHeadScript(undefined, {
        src: `https://static.affiliatly.com/v3/affiliatly.js?affiliatly_code=${id}`,
    });
    if (document.readyState === 'complete') {
        load();
    }
    else {
        window.addEventListener('load', load);
    }
}
