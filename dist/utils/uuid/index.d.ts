import type { TNominal } from '../types/index.js';
export type TUUIDv4 = TNominal<string, 'TUUIDv4'>;
export type TUUIDv7 = TNominal<string, 'TUUIDv7'>;
export declare const uuidv4: () => TUUIDv4;
export declare const uuidv7: () => TUUIDv7;
