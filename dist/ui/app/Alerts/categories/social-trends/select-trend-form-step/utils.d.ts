import type { TSocialTrendsApiAlertTarget } from '../schema.js';
import type { TTrendState } from './schema.js';
export declare function getInitTrendTarget(type: TTrendState['target']['type']): TTrendState['target'];
export declare function parseApiTarget(target: TSocialTrendsApiAlertTarget['target']): TTrendState['target'];
export declare function getApiTarget(target: TTrendState['target']): TSocialTrendsApiAlertTarget;
