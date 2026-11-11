import { createABTestCtx } from '../ctx/abTest/index.svelte.js';
// Only for `.get` usage. Should be set up properly on app level (ex. in Sanbase)
const { useABTestCtx } = createABTestCtx();
export { useABTestCtx };
