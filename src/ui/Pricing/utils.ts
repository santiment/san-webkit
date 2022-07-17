import { subscription$ } from '@/stores/subscription'
import { notifications$ } from '@/ui/Notifications'

export const PLAN_BUTTON_CLICKED = 'PLAN_BUTTON_CLICKED'

export function onPlanChangeSuccess(planName: string) {
  subscription$.refetch()
  notifications$.show({
    type: 'success',
    title: `You have successfully changed your plan to the "${planName}"!`,
  })
}

export function onPlanChangeError(error) {
  notifications$.show({ type: 'error', title: `Error during plan change` })
  return Promise.reject(error)
}
