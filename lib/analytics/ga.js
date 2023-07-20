import { newHeadScript } from './utils';
export function initGA(id) {
    newHeadScript(undefined, {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
    });
    newHeadScript(`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`);
}
//# sourceMappingURL=ga.js.map