import type { TNominal } from '../types/index.js'

import { v4, v7 } from 'uuid'

export type TUUIDv4 = TNominal<string, 'TUUIDv4'>
export type TUUIDv7 = TNominal<string, 'TUUIDv7'>

export const uuidv4 = v4 as () => TUUIDv4
export const uuidv7 = v7 as () => TUUIDv7
