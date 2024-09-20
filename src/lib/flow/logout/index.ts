import { goto } from '$app/navigation'
import { Query } from '$lib/api/executor.js'
import { ApiMutation } from '$lib/api/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { notifcation } from '$ui/core/Notifications/index.js'

const mutateLogout = ApiMutation(
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

        notifcation.info("You've been logged out")
      })
  }

  return {
    startLogout,
  }
}
