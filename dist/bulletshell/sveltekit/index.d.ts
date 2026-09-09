import type { Handle } from '@sveltejs/kit';
/**
 * Add it at the beggining of the sveltekit's `handleError`. This function ensures to stop the rendering->save process if error was encountered
 **/
export declare function bulletshellHandleError(): void;
export declare const bulletshellHandle: Handle;
export { type TBulletshellConfig } from '../types.js';
