/// <reference types="stripe-v3" />
export declare const CardBrandIllustration: {
  MasterCard: {
    id: string
    w: number
    h: number
  }
  Visa: {
    id: string
    w: number
    h: number
  }
}
export declare function mapPlans(plans: SAN.Plan[], plansFilter: (plan: SAN.Plan) => boolean): any
declare type FormData = {
  name: string
  discount?: string
}
export declare function getPaymentFormData(form: HTMLFormElement): FormData
export declare function createCardToken(
  stripe: stripe.Stripe,
  card: stripe.elements.Element,
  checkoutInfo: {
    [key: string]: any
  },
): Promise<stripe.Token>
export declare function buyPlan(
  plan: SAN.Plan,
  stripe: stripe.Stripe,
  card: stripe.elements.Element,
  form: {
    [key: string]: any
  },
  savedCard?: SAN.PaymentCard,
): Promise<any>
export {}
