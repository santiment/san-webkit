import type { TCustomer } from '../../../ctx/customer/api.js';
type TProps = {
    class?: string;
    user: any;
    currentUser: TCustomer['currentUser'];
    source?: string;
};
declare const FollowButton: import("svelte").Component<TProps, {}, "">;
type FollowButton = ReturnType<typeof FollowButton>;
export default FollowButton;
