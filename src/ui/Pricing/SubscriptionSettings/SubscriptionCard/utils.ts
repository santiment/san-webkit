import { PlanName } from '@/utils/plans'

export enum SubscriptionCardType {
  Current,
  Suggested,
  Next,
}

export enum SubscriptionType {
  Free,
  OnTrial,
  FreeTrialFinished,
  ProFirstMonth,
  Pro,
  ProPlus,
}

export function getPlanName({ subscriptionType, type, plan }) {
  switch (subscriptionType) {
    case SubscriptionType.Free:
    case SubscriptionType.FreeTrialFinished: {
      switch (type) {
        case SubscriptionCardType.Current: {
          return 'Free'
        }
        case SubscriptionCardType.Suggested: {
          return 'Pro'
        }
        case SubscriptionCardType.Next:
        default: {
          return 'Pro+'
        }
      }
    }
    case SubscriptionType.OnTrial: {
      switch (type) {
        case SubscriptionCardType.Current: {
          return `${PlanName[plan.name]} Trial`
        }
        case SubscriptionCardType.Suggested: {
          return 'Pro / Annual'
        }
        case SubscriptionCardType.Next:
        default: {
          return 'Pro+ / Annual'
        }
      }
    }
    case SubscriptionType.ProFirstMonth: {
      switch (type) {
        case SubscriptionCardType.Current: {
          return 'Pro'
        }
        case SubscriptionCardType.Suggested: {
          return 'Pro / Annual'
        }
        case SubscriptionCardType.Next:
        default: {
          return 'Pro+ / Annual'
        }
      }
    }
    case SubscriptionType.Pro: {
      switch (type) {
        case SubscriptionCardType.Current: {
          return 'Pro'
        }
        case SubscriptionCardType.Suggested: {
          return 'Pro'
        }
        case SubscriptionCardType.Next:
        default: {
          return 'Pro+'
        }
      }
    }
    case SubscriptionType.ProPlus: {
      switch (type) {
        case SubscriptionCardType.Current: {
          return 'Pro+'
        }
        case SubscriptionCardType.Suggested: {
          return 'Pro+'
        }
        case SubscriptionCardType.Next:
        default: {
          return 'Pro+'
        }
      }
    }
  }
}
