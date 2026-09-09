import type { TAssetApiAlert } from '../../../../categories/asset/schema.js';
import type { TNotificationsApiAlert } from '../../../notifications-privacy/schema.js';
import type { TMetricConditionsApiAlert } from '../../schema.js';
type TProps = {
    asset: TAssetApiAlert;
    conditions: TMetricConditionsApiAlert;
    notifications: TNotificationsApiAlert;
};
declare const PreviewChart: import("svelte").Component<TProps, {}, "">;
type PreviewChart = ReturnType<typeof PreviewChart>;
export default PreviewChart;
