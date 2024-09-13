import { goto } from '$app/navigation';
import { Query } from '../../api/executor.js';
import { Mutation } from '../../api/index.js';
import { useCustomerCtx } from '../../ctx/customer/index.svelte.js';
import { notifcation } from '../../ui/core/Notifications/index.js';
const mutateLogout = Mutation(() => `mutation {
    logout {
      success
    }
  }`);
export function useLogoutFlow() {
    const { customer } = useCustomerCtx();
    function startLogout() {
        return mutateLogout(Query)()
            .then(() => goto('/'))
            .then(() => {
            customer.reload();
            notifcation.info("You've been logged out");
        });
    }
    return {
        startLogout,
    };
}
