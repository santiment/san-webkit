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
        apiMetricName: 'price_usd',
        label: 'Price USD',
        scaleId: 'right-price_usd',

        style: 'line',
      },

      {
        apiMetricName: 'FORMULA_2',
        label: 'Derived formula - Price SMA(SMA(30), 5)',

        scaleId: 'right-price_usd',
        formula: {
          id: '5978ed91-2678-4c27-9d18-165cfca87eb2',
          name: 'Derived formula - Price SMA(SMA(30), 5)',
          //expr: 'btc="bitcoin"\nx1 = asset_metric("price_usd", btc) \nsma(x1, 30)',
          expr: `x1 = asset_metric("makerdao_dsr_total_supplied", "multi-collateral-dai")
x2 = asset_metric("sky_savings_total_supplied", "usds")
x1 + x2`,
        },
      },

      {
        apiMetricName: 'bitmex_perpetual_funding_rate',
        label: 'BitMEX Funding Rate',
        scaleId: 'right-bitmex_perpetual',

        style: 'histogram',

        baseline: {
          value: 0,
          topColor: '#00ff00',
          bottomColor: '#ff0000',
        },
      },

      //{
      //  name: 'FORMULA_1',
      //  label: 'Custom Formula - Price SMA(30)',
      //  style: 'line',
      //  scaleId: 'right-price_usd',
      //  formula: {
      //    id: '407fee1b-ca2d-4777-ae30-89e44155e8f5',
      //    expr: 'sma(m1, 30)',
      //    name: 'Custom Formula - Price SMA(30)',
      //    //expr: 'sma(x1, 30)',
      //    //locals: [{ var: 'x1', metric: 'price_usd' }],
      //  },
      //},
    ],
  },
  parameters: {},
}
