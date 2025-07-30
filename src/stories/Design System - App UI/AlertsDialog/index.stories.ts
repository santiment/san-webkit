import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof component>
type Story = StoryObj<typeof meta>

export default meta

export const Empty: Story = {
  parameters: {},
}

const MOCK_SCREENER_ID = 36321
const MOCK_WATCHLIST_ID = 36415

export const AssetAPIAlert: Story = {
  parameters: {},
  args: {
    alert: {
      cooldown: '2w',
      description:
        'Notify me when the price of Ethereum, Tether [on Ethereum] goes above 1$ compared to 1 day(s) earlier. Send me notifications every 1 day(s) via email.',
      id: 43617,
      isActive: true,
      isFrozen: false,
      isPublic: false,
      isRepeating: true,
      settings: {
        type: 'metric_signal',
        template: null,
        target: {
          slug: ['ethereum', 'tether'],
        },
        operation: {
          above: 1,
        },
        channel: ['email'],
        metric: 'price_usd',
        time_window: '3w',
        extra_explanation: null,
      },
      title: 'Ethereum, Tether [on Ethereum] price goes above 1$ compared to 1 day(s) earlier',
    },
  },
}

export const SocialTrendsAPIAlert: Story = {
  parameters: {},
  args: {
    alert: {
      cooldown: '1d',
      description:
        'Notify me when the bear, market appears in social trends. Send me notifications every 1 day(s) via telegram.',
      id: 41806,
      isActive: true,
      isFrozen: false,
      isPublic: true,
      isRepeating: true,
      settings: {
        type: 'trending_words',
        template: null,
        target: {
          word: ['bear', 'market'],
        },
        operation: {
          trending_word: true,
        },
        channel: 'telegram',
        extra_explanation: null,
        include_default_explanation: false,
      },
      title: 'Bear, market in trending words',
    },
  },
}

export const WatchlistAPIAlert: Story = {
  parameters: {},
  args: {
    alert: {
      cooldown: '1m',
      description:
        'Notify me when the price of TestWatchlist moving up 20% or moving down 10% compared to 2 day(s) earlier. Send me notifications every 1 minute(s) via email.',
      id: 2198,
      isActive: true,
      isFrozen: false,
      isPublic: false,
      isRepeating: true,
      settings: {
        type: 'metric_signal',
        template: null,
        target: {
          watchlist_id: MOCK_WATCHLIST_ID,
        },
        operation: {
          some_of: [
            {
              percent_up: 20,
            },
            {
              percent_down: 10,
            },
          ],
        },
        channel: ['email'],
        metric: 'price_usd',
        time_window: '2d',
        extra_explanation: null,
      },
      title: 'TestWatchlist price moving up 20% or moving down 10% compared to 2 day(s) earlier',
    },
  },
}

export const ScreenerAPIAlert: Story = {
  parameters: {},
  args: {
    alert: {
      cooldown: '1m',
      description:
        'Notify me when any project enters/exits Stablecoins. Send me notifications every 1 minute(s) via email, telegram.',
      id: 44624,
      isActive: true,
      isFrozen: false,
      isPublic: false,
      isRepeating: true,
      settings: {
        type: 'screener_signal',
        target: {
          watchlist_id: MOCK_SCREENER_ID,
        },
        operation: {
          selector: {
            watchlist_id: MOCK_SCREENER_ID,
          },
        },
        channel: ['email', 'telegram'],
      },
      title: 'Project enters/exits Stablecoins',
    },
  },
}

export const WalletAPIAlert: Story = {
  parameters: {},
  args: {
    alert: {
      cooldown: '1m',
      description: null,
      id: 2200,
      isActive: true,
      isFrozen: false,
      isPublic: false,
      isRepeating: true,
      settings: {
        type: 'wallet_movement',
        target: {
          address: '0x123f123D2EFde0aD18B30b69acecC12dc3AB1f12',
        },
        operation: {
          below: 1,
        },
        channel: ['email'],
        time_window: '1d',
        selector: {
          slug: 'ethereum',
          infrastructure: 'ETH',
        },
      },
      title: 'Balance goes below 1 compared to 1 day(s) earlier',
    },
  },
}

export const PartialTrendsAlert: Story = {
  parameters: {},
  args: {
    alert: {
      settings: {
        type: 'trending_words',
        target: {
          word: ['bear', 'market'],
        },
        operation: {
          trending_word: true,
        },
      },
    },
  },
}

export const PartialScreenerAlert: Story = {
  parameters: {},
  args: {
    alert: {
      settings: {
        type: 'screener_signal',
        target: { watchlist_id: MOCK_SCREENER_ID },
        operation: { selector: { watchlist_id: MOCK_SCREENER_ID } },
      },
    },
  },
}

export const PartialWatchlistAlert: Story = {
  parameters: {},
  args: {
    alert: {
      settings: {
        type: 'metric_signal',
        target: { watchlist_id: MOCK_WATCHLIST_ID },
      },
    },
  },
}

export const PartialAssetAlert: Story = {
  parameters: {},
  args: {
    alert: {
      settings: {
        type: 'metric_signal',
        target: { slug: ['ethereum'] },
      },
    },
  },
}

export const PartialWalletMovementAlert: Story = {
  parameters: {},
  args: {
    alert: {
      settings: {
        type: 'wallet_movement',
        target: { address: '0x123f123D2EFde0aD18B30b69acecC12dc3AB1f12' },
        selector: { infrastructure: 'ETH' },
      },
    },
  },
}

export const PartialAssetWithDailyMetricAlert: Story = {
  parameters: {},
  args: {
    alert: {
      settings: {
        type: 'daily_metric_signal',
        target: { slug: ['bitcoin'] },
        metric: 'daily_active_addresses',
      },
    },
  },
}

export const DefaultTargetScreenerAlert: Story = {
  parameters: {},
  args: {
    alert: {
      cooldown: '5m',
      description: 'Notify me about changes inside the monitoring Screener',
      isActive: true,
      isFrozen: false,
      isPublic: false,
      isRepeating: true,
      settings: {
        type: 'screener_signal',
        state: {
          slugs_in_screener: [
            'tether',
            'digix-gold-token',
            'steem-dollars',
            'trueusd',
            'dai',
            'bitcny',
            'susd',
            'stasis-euro',
            'paxos-standard',
            'usd-coin',
            'nubits',
            'stableusd',
            'gemini-dollar',
            'cryptofranc',
            'eosdt',
            'brz',
            'binance-usd',
            'husd',
            'anchor',
            'multi-collateral-dai',
            'usdx-stablecoin',
            'terra-krw',
            'tether-gold',
            'neutrino-dollar',
            'empty-set-dollar',
            'basis-cash',
            'vai',
            'dynamic-set-dollar',
            'terrausd',
            'one-cash',
            'midas-dollar',
            'frax',
            'fei-protocol',
            'liquity-usd',
            'magic-internet-money',
            'usdx-kava',
            'xsgd',
            'celo-dollar',
            'tether-eurt',
            'origin-dollar',
            'bnb-tether',
            'bnb-usd-coin',
            'bnb-binance-usd',
            'usdd',
            'mstable-usd',
            'celo-euro',
            'bnb-multi-collateral-dai',
            'o-tether',
            'o-usd-coin',
            'o-multi-collateral-dai',
            'euro-coin',
            'p-multi-collateral-dai',
            'p-tether',
            'arb-tether',
            'arb-usd-coin',
            'arb-multi-collateral-dai',
            'gyen',
            'usdj',
            'bnb-helio-money',
            'edgecoin',
            'just-stablecoin',
          ],
        },
        target: 'default',
        operation: {
          selector: {
            watchlist_id: MOCK_SCREENER_ID,
          },
        },
        channel: ['telegram'],
      },
      title: "Alert for screener 'My Screener'",
    },
  },
}
