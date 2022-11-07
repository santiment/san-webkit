import type { SnapGridController } from './types'

import { getContext, setContext } from 'svelte'

const GRID_CTX = 'GRID_CTX'
export const setSnapGridCtx = (snapGrid: SnapGridController) => setContext(GRID_CTX, snapGrid)
export const getSnapGridCtx = (): SnapGridController => getContext(GRID_CTX)
