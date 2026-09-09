import fs from 'node:fs';
// @ts-expect-error This is a virtual module
import { BULLETSHELL_MANIFEST as VIRTUAL_MANIFEST } from 'virtual:bulletshell';
import { compress_file } from './compress.js';
import { IS_BULLETSHELL_MODE } from '../env.js';
const BULLETSHELL_MANIFEST = VIRTUAL_MANIFEST;
export const STATUS = {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
};
export const HEADERS = {
    FORCE_UPDATE: 'x-bulletshell-update',
};
const ENCODINGS = {
    gz: 'gzip',
    br: 'br',
};
export function Bulletshell(event) {
    const routeManifest = BULLETSHELL_MANIFEST[event.route.id];
    const routeFilepaths = routeManifest && getRouteFilepaths(routeManifest, event);
    const isValidRoute = !!(routeManifest && routeFilepaths);
    return {
        isValidRoute() {
            return isValidRoute;
        },
        doesShellFileExist() {
            return !!routeFilepaths && fs.existsSync(routeFilepaths.dest + '.br');
        },
        getShellFilepath() {
            return routeFilepaths.dest;
        },
        async sendRenderRequest() {
            if (IS_BULLETSHELL_MODE) {
                return Promise.resolve();
            }
            const headers = {};
            const options = { forceUpdate: true };
            if (options.forceUpdate) {
                headers[HEADERS.FORCE_UPDATE] = '1';
            }
            return fetch('http://0.0.0.0:3333' + event.url.pathname, {
                headers: { ...event.request.headers, ...headers },
            }).catch((e) => {
                console.log('[Bulletshell] Fetch error');
                console.error(e);
            });
        },
        isShellWriteLocked() {
            return BULLETSHELL_MANIFEST.__fs_locks.has(routeFilepaths.dest);
        },
        lockShellWrite() {
            const dest = routeFilepaths.dest;
            BULLETSHELL_MANIFEST.__fs_locks.add(dest);
            return () => BULLETSHELL_MANIFEST.__fs_locks.delete(dest);
        },
        async writeShellFiles(pageResponse) {
            if (!isValidRoute) {
                return Promise.reject();
            }
            const bodyPromise = pageResponse.text();
            // TODO: Handle Non-POJO pages [@vanguard, 29.04.25]
            // "Cannot stringify arbitrary non-POJOs"
            fs.mkdirSync(routeFilepaths.dir, { recursive: true });
            fs.writeFileSync(routeFilepaths.dest, await bodyPromise);
            return Promise.all([
                compress_file(routeFilepaths.dest, 'gz'),
                compress_file(routeFilepaths.dest, 'br'),
            ])
                .catch((e) => {
                console.log('[Bulletshell] Compress error');
                console.error(e);
            })
                .finally(() => {
                console.log('[Bulletshell] Shell files written: ', routeFilepaths.dest);
            });
        },
        __allowServe() {
            return !event.url.searchParams.has('__bulletshellBypass');
        },
    };
}
function getFilename(routeManifest, event) {
    const filename = routeManifest.route_id === '/'
        ? 'index'
        : `/${routeManifest.config.handle?.(event)?.name || 'index'}`;
    return `${filename}.html`;
}
function getRouteFilepaths(routeManifest, event) {
    const dir = 'build/bulletshells' + routeManifest.route_id;
    const filename = getFilename(routeManifest, event);
    return {
        dir,
        filename,
        dest: dir + `${filename}`,
    };
}
export function getBulletshellFileHeaders(filepath) {
    const stats = fs.statSync(filepath);
    const headers = {
        'Content-Length': stats.size,
        'Content-Type': 'text/html;charset=utf-8',
        'Last-Modified': stats.mtime.toUTCString(),
        ETag: `W/"${stats.size}-${stats.mtime.getTime()}"`,
    };
    const encoding = ENCODINGS[filepath.slice(-2)];
    if (encoding) {
        headers['Content-Encoding'] = encoding;
    }
    headers['Cache-Control'] = 'public,max-age=900,immutable';
    //let cc = opts.maxAge != null && `public,max-age=${opts.maxAge}`;
    //if (cc) {
    //  if (opts.immutable) cc += ',immutable';
    //  else if ( opts.maxAge === 0) cc += ',must-revalidate';
    //
    //	headers['Cache-Control'] = cc;
    //}
    return headers;
}
