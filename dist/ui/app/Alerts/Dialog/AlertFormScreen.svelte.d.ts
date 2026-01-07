import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert } from '../types.js';
type TProps = {
    schema: TAlertSchemaUnion;
    alert?: null | Partial<TApiAlert>;
    resetCategory: () => void;
    close: () => void;
    onCreate?: (alert: TApiAlert) => void;
};
declare const AlertFormScreen: import("svelte").Component<TProps, {}, "">;
type AlertFormScreen = ReturnType<typeof AlertFormScreen>;
export default AlertFormScreen;
