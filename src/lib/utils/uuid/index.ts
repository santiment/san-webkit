import type { TNominal } from '../types/index.js'

import { v4 } from 'uuid'

export type TUUIDv4 = TNominal<string, 'TUUIDv4'>

export const uuidv4 = v4 as () => TUUIDv4
