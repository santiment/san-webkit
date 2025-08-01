import type { IChartApi } from '@santiment-network/chart-next';
import type { TSeries } from './ctx/series.svelte.js';
export declare function downloadChartAsJpeg(title: string, metrics: TSeries[], chart?: IChartApi): Promise<void>;
