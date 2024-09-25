import { CURRENT_USER_MOCK } from './user.js'
import { ANNUAL_DISCOUNT_MOCK } from './annualDiscount.js'
import { SAVED_CARD_MOCK } from './savedCard.js'

export const MOCKS = [CURRENT_USER_MOCK, ANNUAL_DISCOUNT_MOCK, SAVED_CARD_MOCK] as const
export const MockedApi = MOCKS.reduce(
  (acc, item) => ({ ...acc, [item.name]: item }),
  {} as Record<string, { name: string; apiQuery: string; mock: (data?: any) => any }>,
)

declare module '@storybook/svelte' {
  type Mock<T> = T extends { mock: (arg: infer S) => any } ? S : never

  export interface Parameters {
    ui?: {
      isNightMode?: boolean
      isLiteVersion?: boolean
    }

    bodyStyle?: Record<string, any>

    mockApi?: (story?: any) => {
      /** Disabling mocking for all requests */
      passthrough?: boolean

      annualDiscount?: Mock<typeof ANNUAL_DISCOUNT_MOCK>

      currentUser?: Mock<typeof CURRENT_USER_MOCK>

      savedCard?: Mock<typeof SAVED_CARD_MOCK>
    } & Record<string, any>
  }
}
