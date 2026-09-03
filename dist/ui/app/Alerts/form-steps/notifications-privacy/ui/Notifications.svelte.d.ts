import type { TNotificationsState } from '../schema.js';
type TProps = {
    state: {
        $$: TNotificationsState;
    };
};
declare const Notifications: import("svelte").Component<TProps, {}, "">;
type Notifications = ReturnType<typeof Notifications>;
export default Notifications;
