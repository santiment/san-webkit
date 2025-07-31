import assert from 'assert';
import { createStepSchema } from '../../../form-steps/types.js';
import { getOperationFromApi, reduceOperationToApi, } from '../../../form-steps/metric-conditions/operations.js';
import { getAddressInfrastructure, Infrastructure } from '../../../../../../utils/address.js';
import Form from './ui/index.svelte';
export const STEP_SELECT_WALLET_SCHEMA = createStepSchema({
    name: 'wallet',
    ui: {
        title: 'Select Wallet & Event',
        label: 'Select Wallet & Event',
        description: 'You can choose any wallet',
        Form,
    },
    initState(apiAlert) {
        const { target, type, selector, operation: apiOperation, time_window, } = apiAlert?.settings || {};
        const operation = getOperationFromApi(apiOperation);
        return {
            target: {
                address: target?.address ?? null,
                get infrastructure() {
                    return getAddressInfrastructure(this.address ?? '');
                },
            },
            type: type ?? null,
            asset: selector?.slug ? { slug: selector.slug, name: '' } : null,
            conditions: operation && time_window
                ? {
                    operation,
                    time: time_window,
                }
                : {
                    operation: { type: 'above', values: [1, 1] },
                    time: '1d',
                },
        };
    },
    validate({ target: { address, infrastructure }, type, conditions, asset }) {
        if (!address || !infrastructure)
            return false;
        switch (type) {
            case 'wallet_assets_held':
                return true;
            case 'wallet_movement':
                return !!conditions && !!asset;
            case 'wallet_usd_valuation':
                return !!conditions;
            case null:
                return false;
        }
    },
    reduceToApi({ target, type, conditions, asset }) {
        assert(type);
        assert(target.address);
        assert(target.infrastructure);
        return {
            settings: {
                type,
                target: {
                    address: target.address,
                },
                selector: {
                    infrastructure: target.infrastructure,
                    slug: asset?.slug,
                },
                time_window: conditions?.time,
                operation: conditions?.operation && reduceOperationToApi(conditions.operation),
            },
        };
    },
});
