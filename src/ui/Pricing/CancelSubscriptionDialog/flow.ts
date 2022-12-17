import { writable } from 'svelte/store'
import { track } from '@/analytics'
import { mutateCancelSubscription } from '@/api/subscription'
import { subscription$ } from '@/stores/subscription'
import { notifications$ } from '@/ui/Notifications'

export const REASONS = [
  'Found other tool that fits my needs better',
  'I don’t need all the features',
  'Too difficult to use',
  'Too expensive',
  'Other',
]

export enum Screen {
  Suggestions,
  Feedback,
}

export enum Event {
  SelectReason = 'cancel_subscribtion_select_reason',
  GiveFeedback = 'cancel_subscribtion_give_feedback',
}

export enum FieldError {
  Reasons,
  Feedback,
}

export const fieldErrorsStore = writable(new Set<FieldError>())

export function getFieldErrors(reasons: Set<unknown>, feedback = ''): Set<FieldError> {
  const fieldErrors = new Set<FieldError>()
  if (reasons.size < 1) {
    fieldErrors.add(FieldError.Reasons)
  }
  if (feedback.length < 1) {
    fieldErrors.add(FieldError.Feedback)
  }
  return fieldErrors
}

const formatError = (msg) => msg.replace('GraphQL error: ', '')

export function startCancellationFlow(
  subscription: SAN.Subscription,
  feedback: string,
  closeDialog,
) {
  track.event(Event.GiveFeedback, { feedback })

  return mutateCancelSubscription(subscription.id)
    .then(() => {
      closeDialog()
      subscription$.refetch()
      notifications$.show({
        type: 'success',
        title: 'You have successfully canceled your subscription.',
        description: 'We will miss you!',
      })
    })
    .catch((e) => {
      const { message } = e[0] || e
      notifications$.show({
        type: 'error',
        title: 'Error during the cancellation',
        description: formatError(message),
        // actions: contactAction,
      })
    })
}
