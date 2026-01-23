import { createReadableStream } from '@sveltejs/kit/node';
import { getBulletshellFileHeaders } from './utils.js';
// https://github.com/sveltejs/kit/blob/b183244819559ec20b6726379b00552d4fbf97e8/packages/adapter-node/src/handler.js#L46
export function serve(request, bulletshell, opts = {
    etag: true,
    brotli: true,
    gzip: true,
    maxAge: null,
    immutable: false,
}) {
    const filepath = bulletshell.getShellFilepath();
    const files = [filepath];
    const acceptedEncoding = request.headers.get('accept-encoding') || '';
    if (opts.gzip && acceptedEncoding.includes('gzip'))
        files.unshift(filepath + '.gz');
    if (opts.brotli && /(br|brotli)/i.test(acceptedEncoding))
        files.unshift(filepath + '.br');
    const file = files[0];
    const headers = getBulletshellFileHeaders(file);
    if (opts.etag && request.headers.get('if-none-match') === headers['ETag']) {
        return new Response(null, {
            status: 304,
            statusText: 'Not Modified',
            // @ts-expect-error Object is accepted as well
            headers,
        });
    }
    if (opts.gzip || opts.brotli) {
        headers['Vary'] = 'Accept-Encoding';
    }
    return new Response(createReadableStream(file), {
        // @ts-expect-error Object is accepted as well
        headers,
    });
}
