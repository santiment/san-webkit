import { Query } from '../../../api/executor.js';
import { createCtx } from '../../../utils/index.js';
import { useCustomerCtx } from '../../customer/index.js';
import { DEFAULT_METRICS_RESTRICTIONS, queryGetAccessRestrictions, } from './api.js';
export {} from './api.js';
export const useMetricsRestrictionsCtx = createCtx('webkit_useMetricsRestrictionsCtx ', () => {
    const { customer } = useCustomerCtx.get();
    let MetricsRestrictions = $state.raw(DEFAULT_METRICS_RESTRICTIONS);
    $effect(() => {
        customer.$.planName; // NOTE: Refetching restrictions info when customer plan changed
        let race = false;
        queryGetAccessRestrictions(Query)().then((data) => {
            if (race)
                return;
            MetricsRestrictions = data;
        });
        return () => (race = true);
    });
    return {
        MetricsRestrictions: {
            get $() {
                return MetricsRestrictions;
            },
        },
    };
});
