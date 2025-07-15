import type { TSocialTrendsApiAlertTarget } from '../schema.js';
import type { TTrendState } from './schema.js';
export declare function getInitTrendTarget(type: TTrendState['target']['type']): TTrendState['target'];
export declare function parseApiTarget(apiTarget: TSocialTrendsApiAlertTarget): TTrendState['target'];
export declare function getApiTarget(target: TTrendState['target']): TSocialTrendsApiAlertTarget;
