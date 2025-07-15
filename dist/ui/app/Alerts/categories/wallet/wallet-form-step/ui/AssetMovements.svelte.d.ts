import type { TWalletState } from '../schema.js';
type TProps = {
    stepState: {
        $$: TWalletState;
    };
};
declare const AssetMovements: import("svelte").Component<TProps, {}, "">;
type AssetMovements = ReturnType<typeof AssetMovements>;
export default AssetMovements;
