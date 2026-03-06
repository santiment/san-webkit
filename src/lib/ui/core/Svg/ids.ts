import type { TSvgId } from './types.js'

// Replace in build time
const AVAILABLE_IDS = [] as TSvgId[]

const SVG_IDS = new Set<TSvgId>(AVAILABLE_IDS)

export const checkSvgIdAvailable = (id: string) => SVG_IDS.has(id)
