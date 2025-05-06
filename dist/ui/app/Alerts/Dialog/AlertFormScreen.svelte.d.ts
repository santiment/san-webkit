import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert } from '../types.js';
type TProps = {
    schema: TAlertSchemaUnion;
    apiAlert?: null | TApiAlert;
};
declare const AlertFormScreen: import("svelte").Component<TProps, {}, "">;
type AlertFormScreen = ReturnType<typeof AlertFormScreen>;
export default AlertFormScreen;
