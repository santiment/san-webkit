import { Query } from '$lib/api/executor.js'
import { ApiMutation } from '$lib/api/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'
import { notification } from '$ui/core/Notifications/index.js'

const mutateCancelSubscription = ApiMutation(
  (id: number | string) => `
  mutation {
    cancelSubscription(subscriptionId:${id}) {
      isScheduledForCancellation
      scheduledForCancellationAt
    }
  }
`,
)

const formatError = (msg: string) => msg.replace('GraphQL error: ', '')
export function useSubscriptionCancelFlow() {
  const { customer } = useCustomerCtx()

  function startCancellationFlow() {
    const { primarySubscription } = customer.$

    if (!primarySubscription) {
      alert('No active subscription found')
      return Promise.reject()
    }

    return mutateCancelSubscription(Query)(primarySubscription.id)
      .then(() => {
        customer.reload()
        // @ts-ignore
        window.onCanceledSubscription?.()

        notification.info('You have successfully canceled your subscription', {
          content: 'We will miss you!',
        })
      })
      .catch((e: any) => {
        const { message } = e[0] || e
        notification.error('Error during the cancellation', {
          content: formatError(message),
        })

        return Promise.reject()
      })
  }

  return { startCancellationFlow }
}