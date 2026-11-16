import type { TCustomer } from '../../../ctx/customer/api.js';
import type { ComponentProps } from 'svelte';
import Button from '../../core/Button/Button.svelte';
type TProps = {
    class?: string;
    user: {
        id: string | number;
    };
    currentUser: TCustomer['currentUser'];
    source?: string;
} & Omit<ComponentProps<typeof Button>, 'class'>;
declare const FollowButton: import("svelte").Component<TProps, {}, "">;
type FollowButton = ReturnType<typeof FollowButton>;
export default FollowButton;
