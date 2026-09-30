import type { Driver } from 'driver.js';
import type { TTourState } from './storage.js';
import type { TTourConfig } from './index.js';
type TProps = {
    driver: Driver;
    type: string;
    tourState: TTourState;
    config: TTourConfig;
};
declare const Step: import("svelte").Component<TProps, {}, "">;
type Step = ReturnType<typeof Step>;
export default Step;
