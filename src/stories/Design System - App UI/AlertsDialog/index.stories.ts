import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Empty: Story = {
  parameters: {},
}

export const AssetAPIAlert: Story = {
  parameters: {},
  args: {
    apiAlert: {
      cooldown: '1d',
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
        time_window: '1d',
        extra_explanation: null,
      },
      title: 'Ethereum, Tether [on Ethereum] price goes above 1$ compared to 1 day(s) earlier',
    },
  },
}

export const SocialTrendsAPIAlert: Story = {
  parameters: {},
  args: {
    apiAlert: {
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
    apiAlert: {
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
          watchlist_id: 1663,
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
