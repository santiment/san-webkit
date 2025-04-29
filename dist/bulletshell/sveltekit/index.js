import { serve } from './serve.js';
import { Bulletshell, STATUS } from './utils.js';
import { IS_BULLETSHELL_MODE } from '../env.js';
/**
 * Add it at the beggining of the sveltekit's `handleError`. This function ensures to stop the rendering->save process if error was encountered
 **/
export function bulletshellHandleError() {
    if (IS_BULLETSHELL_MODE) {
        throw new Error('Bulletshell render error');
    }
}
export const bulletshellHandle = async ({ event, resolve }) => {
    const bulletshell = Bulletshell(event);
    if (IS_BULLETSHELL_MODE) {
        return renderServiceHandle(bulletshell, () => resolve(event));
    }
    if (bulletshell.isValidRoute()) {
        // TODO: Handle "force update"/"force delete" request [@vanguard, 29.04.25]
        try {
            if (bulletshell.doesShellFileExist() && bulletshell.__allowServe()) {
                return serve(event.request, bulletshell);
            }
            if (!bulletshell.__allowServe()) {
                console.log('\n[Bulletshell]: Bypassing serve\n\n');
            }
            bulletshell.sendRenderRequest();
        }
        catch (e) {
            console.error(e);
        }
    }
    return resolve(event);
};
function renderServiceHandle(bulletshell, resolveEvent) {
    if (!bulletshell.isValidRoute()) {
        return new Response(null, { status: STATUS.BAD_REQUEST });
    }
    const unlockShellWrite = bulletshell.lockShellWrite();
    resolveEvent()
        .then((pageResponse) => bulletshell.writeShellFiles(pageResponse))
        .catch((e) => {
        console.log('Render error ->');
        console.error(e);
    })
        .finally(() => {
        unlockShellWrite();
    });
    return new Response(null, { status: STATUS.NO_CONTENT });
}
export {} from '../types.js';
