import { goto } from '$app/navigation'
import { Query } from '$lib/api/executor.js'
import { Mutation } from '$lib/api/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { notification } from '$ui/core/Notifications/index.js'

const mutateLogout = Mutation(
  () => `mutation {
    logout {
      success
    }
  }`,
)

export function useLogoutFlow() {
  const { customer } = useCustomerCtx()

  function startLogout() {
    return mutateLogout(Query)()
      .then(() => goto('/'))
      .then(() => {
        customer.reload()

        notification.info("You've been logged out")
      })
  }

  return {
    startLogout,
  }
}
