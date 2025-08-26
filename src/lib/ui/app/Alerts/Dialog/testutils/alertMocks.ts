import type { TAssetSlug } from '$lib/ctx/assets/api.js'
import type { TAssetApiAlert } from '../../categories/asset/schema.js'

export const assetAlert: Partial<TAssetApiAlert> = {
  cooldown: '2w',
  description:
    'Notify me when the price of Ethereum, Tether [on Ethereum] goes above 1$ compared to 1 day(s) earlier. Send me notifications every 1 day(s) via email.',
  isPublic: false,
  isRepeating: true,
  settings: {
    type: 'metric_signal',
    target: {
      slug: ['ethereum', 'tether'] as TAssetSlug[],
    },
    operation: {
      above: 1,
    },
    channel: ['email'],
    metric: 'price_usd',
    time_window: '3w',
  },
  title: 'Ethereum, Tether [on Ethereum] price goes above 1$ compared to 1 day(s) earlier',
}
