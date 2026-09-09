/**
 *
 * @param {string} cmd
 * @param {boolean} includeStdout
 * @returns
 */
export function exec(cmd: string, includeStdout?: boolean): Promise<any>;
/**
 *
 * @param {string[]} rule
 * @param {(entry: string) => Promise<any>} clb
 * @param {*} [opts]
 * @returns
 */
export function forFile(rule: string[], clb: (entry: string) => Promise<any>, opts?: any): Promise<any[]>;
export function __dirname(): string;
/**
 *
 * @param {string} path
 * @param {(file: string) => string} clb
 * @returns
 */
export function patchSvelteKitFile(path: string, clb: (file: string) => string): Promise<any>;
