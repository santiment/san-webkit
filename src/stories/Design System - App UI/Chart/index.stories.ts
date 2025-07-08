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

export const Anonymous: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const ViewportPriority: Story = {
  args: {
    viewportPriority: true,
  },
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const PriceFormula: Story = {
  args: {
    defaultMetrics: [
      {
        name: 'price_usd',
        label: 'Price USD',
        style: 'line',
        scaleId: 'right-price_usd',
      },

      {
        name: 'FORMULA_2',
        label: 'Derived formula - Price SMA(SMA(30), 5)',
        style: 'line',
        scaleId: 'right-price_usd',
        formula: {
          expr: 'sma(m3, 5)',
          locals: [],
        },
      },

      {
        name: 'FORMULA_1',
        label: 'Custom Formula - Price SMA(30)',
        style: 'line',
        scaleId: 'right-price_usd',
        formula: {
          expr: 'sma(m1, 30)',
          locals: [],
          //expr: 'sma(x1, 30)',
          //locals: [{ var: 'x1', metric: 'price_usd' }],
        },
      },
    ],
  },
  parameters: {},
}
