import { describeConditions } from '../../form-steps/metric-conditions/utils.js';
import { createAlertSchema } from '../types.js';
import { STEP_SELECT_WALLET_SCHEMA } from './wallet-form-step/schema.js';
export const WalletAlertTypes = [
    'wallet_movement',
    'wallet_usd_valuation',
    'wallet_assets_held',
];
export const ALERT_WALLET_SCHEMA = createAlertSchema({
    name: 'wallet',
    ui: {
        label: 'Wallet address',
        description: 'Create an alert for the specific asset inside a certain wallet',
        icon: 'wallet',
    },
    steps: [STEP_SELECT_WALLET_SCHEMA],
    deduceApiAlert(apiAlert) {
        return WalletAlertTypes.some((type) => type === apiAlert.settings?.type);
    },
    suggestTitle(steps) {
        const walletStep = steps[0];
        const { type, asset, conditions } = walletStep.state.$$;
        if (type === 'wallet_movement' && asset && conditions) {
            return `${asset.name} ${describeConditions(null, conditions)}`;
        }
        if (type === 'wallet_usd_valuation' && conditions) {
            return `Balance ${describeConditions(null, conditions)}`;
        }
        return 'Existed assets exit the wallet or new asset enters the wallet with non-zero balance';
    },
    suggestDescription(_steps) {
        return '';
    },
});
