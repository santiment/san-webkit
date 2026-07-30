const toHex = (value) => Math.round(value).toString(16).padStart(2, '0');
const rgbToHex = (r, g, b) => '#' + toHex(r) + toHex(g) + toHex(b);
// NOTE: https://gist.github.com/mjackson/5311256 [@vanguard | Jun 16, 2021]
export function hsvToHex(h, s, v, a = 1) {
    let r = 0;
    let g = 0;
    let b = 0;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    // prettier-ignore
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    const rgbHex = rgbToHex(r * 255, g * 255, b * 255);
    if (a < 0.99) {
        return rgbHex + toHex(a * 255);
    }
    return rgbHex;
}
const parseHex = (hex) => parseInt(hex, 16);
function hexToRgb(hex) {
    const alpha = hex.slice(7, 9);
    return [
        parseHex(hex.slice(1, 3)),
        parseHex(hex.slice(3, 5)),
        parseHex(hex.slice(5, 7)),
        alpha ? parseHex(alpha) : 255,
    ];
}
export function hexToHsv(hex) {
    let [r, g, b, a] = hexToRgb(hex);
    (r /= 255), (g /= 255), (b /= 255), (a /= 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const v = max;
    const d = max - min;
    s = max == 0 ? 0 : d / max;
    if (max == min) {
        h = 0; // achromatic
    }
    else {
        // prettier-ignore
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h * 360, s * 100, v * 100, +a.toFixed(2)];
}
