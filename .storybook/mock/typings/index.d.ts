import { ANNUAL_DISCOUNT_MOCK } from '../annualDiscount'
import { SAVED_CARD_MOCK } from '../savedCard'
import { CURRENT_USER_MOCK } from '../user'

declare module '@storybook/svelte' {
  type Mock<T> = T extends { mock: (arg: infer S) => any } ? S : never

  export interface Parameters {
    mockApi?: (story?: any) => {
      /** Disabling mocking for all requests */
      passthrough?: boolean

      annualDiscount?: Mock<typeof ANNUAL_DISCOUNT_MOCK>

      currentUser?: Mock<typeof CURRENT_USER_MOCK>

      savedCard?: Mock<typeof SAVED_CARD_MOCK>
    } & Record<string, any>
  }
}
