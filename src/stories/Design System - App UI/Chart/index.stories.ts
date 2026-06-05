import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import { MetricType } from '$lib/ctx/metrics-registry/types/index.js'
import { zodGranularityRulesSchema } from '$lib/ctx/metrics-registry/settings-schema.js'

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
    defaultDrawings: [
      {
        type: 'fib-retracement',
        options: { lineStyle: 1 },
        data: {
          points: [
            {
              time: 1727740800,
              value: 56287.24502956653,
            },
            {
              time: 1739059200,
              value: 105093.45311719566,
            },
          ],
        },
      },
    ],
  },
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const Drawings: Story = {
  args: {
    defaultDrawings: [
      {
        type: 'trendline',
        options: { lineStyle: 1 },
        data: {
          points: [
            {
              time: 1727740800,
              value: 56287.24502956653,
            },
            {
              time: 1739059200,
              value: 105093.45311719566,
            },
          ],
        },
      },
    ],
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

        version: '1.0',
      },

      {
        apiMetricName: 'FORMULA_2',
        label: 'Derived formula - Price SMA(SMA(30), 5)',

        scaleId: 'right-price_usd',
        formula: {
          id: '5978ed91-2678-4c27-9d18-165cfca87eb2',
          name: 'Derived formula - Price SMA(SMA(30), 5)',
          //expr: 'btc="bitcoin"\nx1 = api_metric("price_usd", btc) \nsma(x1, 30)',
          expr: `x1 = api_metric("makerdao_dsr_total_supplied", {slug: "multi-collateral-dai"})
x2 = api_metric("sky_savings_total_supplied", {slug: "usds"})
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

export const BacktestFormula: Story = {
  args: {
    defaultMetrics: [
      {
        apiMetricName: 'price_usd',
        label: 'Price USD',
        scaleId: 'right-price_usd',

        style: 'line',
      },

      {
        apiMetricName: 'FORMULA_1',
        label: 'Price SMA(5)',

        scaleId: 'right-price_usd',
        formula: {
          id: '5978ed91-2678-4c27-9d18-165cfca87eb2',
          name: 'Price SMA(5)',
          expr: `sma(m1, 5)`,
        },
      },

      {
        apiMetricName: 'FORMULA_2',
        label: 'Price SMA(30)',

        scaleId: 'right-price_usd',
        formula: {
          id: '4ae0f3a9-da97-4279-9d7b-6ccfd5c32af2',
          name: 'Price SMA(30)',
          expr: `sma(m1, 30)`,
        },
      },
      {
        apiMetricName: 'FORMULA_3',
        label: 'Backtest HODL',

        scaleId: 'right-backtest',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: 'Backtest HODL',
          expr: `backtest(m1, m1 / m1)`,
        },
      },
    ],
  },
  parameters: {},
}

export const SignalFormula: Story = {
  args: {
    defaultMetrics: [
      {
        apiMetricName: 'price_usd',
        label: 'Price USD',
        scaleId: 'right-price_usd',

        style: 'candles',
        candleDownColor: '#ff0000',
      },

      {
        apiMetricName: 'FORMULA_1',
        label: 'Price SMA(5)',

        scaleId: 'right-price_usd',
        formula: {
          id: '5978ed91-2678-4c27-9d18-165cfca87eb2',
          name: 'Price SMA(5)',
          expr: `sma(m1, 5)`,
        },
      },

      {
        apiMetricName: 'FORMULA_2',
        label: 'Price SMA(30)',

        scaleId: 'right-price_usd',
        formula: {
          id: '4ae0f3a9-da97-4279-9d7b-6ccfd5c32af2',
          name: 'Price SMA(30)',
          expr: `sma(m1, 30)`,
        },
      },
      {
        apiMetricName: 'FORMULA_3',
        label: 'LONG - SMA(5) > SMA(30)',
        style: 'signal',

        signal: {
          shape: 'arrowDown',
          color: '#00ff00',
          position: 'aboveBar',
          text: 'LONG',
          isZeroIncluded: false,
        },

        scaleId: 'right-signal',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: 'LONG - SMA(5) > SMA(30)',
          expr: `if(m2 > m3, 1, 0)`,
        },
      },

      {
        apiMetricName: 'FORMULA_4',
        label: 'SHORT - SMA(5) <= SMA(30)',
        style: 'signal',

        signal: {
          shape: 'arrowUp',
          color: '#e91e63',
          position: 'belowBar',
          text: 'SHORT',
          isZeroIncluded: false,
        },

        scaleId: 'right-signal',
        formula: {
          id: '9849870e-b200-498a-9375-f37dcd0f1cb8',
          name: 'SHORT - SMA(5) <= SMA(30)',
          expr: `if(m2 <= m3, -1, 0)`,
        },
      },

      {
        apiMetricName: 'FORMULA_5',
        label: 'SMA Crossover Backtest',

        scaleId: 'right-backtest',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: 'SMA Crossover Backtest',
          expr: `backtest(m1, m4 + m5, {stop_loss: 0.02})`,
        },
      },
    ],
  },
  parameters: {},
}

export const ComplexSignalFormula: Story = {
  args: {
    defaultMetrics: [
      {
        apiMetricName: 'price_usd',
        label: 'Price USD',
        scaleId: 'right-price_usd',

        //style: 'candles',
        candleDownColor: '#ff0000',
      },

      {
        apiMetricName: 'FORMULA_1',
        label: 'SMA(10)',

        scaleId: 'right-price_usd',
        formula: {
          id: '5978ed91-2678-4c27-9d18-165cfca87eb2',
          name: 'SMA(10)',
          expr: `sma(m1, 10)`,
        },
      },

      {
        apiMetricName: 'FORMULA_2',
        label: 'SMA(25)',

        scaleId: 'right-price_usd',
        formula: {
          id: '4ae0f3a9-da97-4279-9d7b-6ccfd5c32af2',
          name: 'SMA(25)',
          expr: `sma(m1, 25)`,
        },
      },

      {
        apiMetricName: 'FORMULA_3',
        label: 'SMA(10) > SMA(25)',
        style: 'area',

        scaleId: 'right-signal',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: 'SMA(10) > SMA(25)',
          expr: `if(m2 > m3, 1, 0)`,
        },
      },

      {
        apiMetricName: 'FORMULA_4',
        label: 'RSI(14)',
        pane: 1,

        scaleId: 'right-signal',
        formula: {
          id: '9849870e-b200-498a-9375-f37dcd0f1cb8',
          name: 'RSI(14)',
          expr: `rsi(m1, 14)`,
        },
      },
      {
        apiMetricName: 'FORMULA_4',
        label: 'RSI(14) < 70',
        style: 'area',
        pane: 1,

        //scaleId: 'right-signal',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: 'RSI(14) < 70',
          expr: `if(m5 < 70, 1, 0)`,
        },
      },

      {
        apiMetricName: 'FORMULA_4',
        label: '[SMA] AND [RSI] Signal',
        style: 'area',
        pane: 2,

        //scaleId: 'right-signal',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: '[SMA] AND [RSI] Signal',
          expr: `if(m4 + m6 >= 2, 1, 0)`,
        },
      },

      {
        apiMetricName: 'FORMULA_5',
        label: '[SMA] AND [RSI] Backtest',
        pane: 2,
        color: '#000000',

        scaleId: 'right-backtest',
        formula: {
          id: 'a825ddb0-32bf-4281-ba9e-45db077b66de',
          name: '[SMA] AND [RSI] Backtest',
          expr: `backtest(m1, m7, { capital: 100000, fee: 0.002, stop_loss: 0.05 })`,
        },
      },
    ],
  },
  parameters: {},
}

export const ZeroDivisionFormula: Story = {
  args: {
    defaultMetrics: [
      {
        apiMetricName: 'price_usd',
        label: 'Price USD',
        scaleId: 'right-price_usd',
      },

      {
        apiMetricName: 'FORMULA_1',
        label: 'SMA(10)',
        // style: 'area',

        scaleId: 'right-price_usd',
        formula: {
          id: '5978ed91-2678-4c27-9d18-165cfca87eb2',
          name: 'm1 / 0',
          expr: `m1 / if(m1 > 115000, 0, 1)`,
        },
      },
    ],
  },
  parameters: {},
}

export const CombinedDistributionMetric: Story = {
  args: {
    defaultMetrics: [
      {
        apiMetricName: 'price_usd',
        label: 'Price USD',
        scaleId: 'right-price_usd',
      },

      {
        type: MetricType.COMBINED_DISTRIBUTION,
        // apiMetricName: 'FORMULA_1',
        // style: 'area',

        selector: {
          slug: 'ethereum',
          labels: ['exchange', 'infrastructure'],
        },

        scaleId: 'right-123123123',
        distribution: {
          base: 'holders_labeled_distribution',
          combined: ['0_to_0.001', '0.001_to_0.01'],
        },
      },
    ],
  },
  parameters: {},
}

export const SparseGapsInFormula: Story = {
  args: {
    defaultMetrics: [
      {
        label: 'Positive Sentiment vs. Negative Sentiment Ratio',
        scaleId: 'right-0.702362761389925',
        formula: {
          expr: '(m4 / m5 - 1) * m6',
          id: '019e027a-d694-776d-831a-8264461c821d',
          name: 'Positive Sentiment vs. Negative Sentiment Ratio',
        },
      },
      {
        apiMetricName: 'price_usd',
        label: 'Price',
        scaleId: 'right-price_usd0.4735169585340905',
        visible: false,
      },
      {
        apiMetricName: 'funding_rates_aggregated_by_exchange',
        label: 'Funding Rates Aggregated by Exchange',
        scaleId: 'right-funding_rates_aggregated_by_exchange0.5737146641511001',
        visible: false,
      },
      {
        apiMetricName: 'sentiment_positive_total',
        label: 'Positive sentiment (Total)',
        scaleId: 'right-sentiment_positive_total0.2276557543070883',
        selector: {
          slug: 'hyperliquid',
        },
        visible: false,
        version: '2.0',
      },
      {
        apiMetricName: 'sentiment_negative_total',
        label: 'Negative sentiment (Total)',
        scaleId: 'right-sentiment_negative_total0.21020496250093323',
        visible: false,
        selector: {
          slug: 'hyperliquid',
        },
        version: '2.0',
      },
      {
        apiMetricName: 'social_dominance_total',
        label: 'Social Dominance',
        scaleId: 'right-social_dominance_total0.2563513938628289',
        visible: false,
        selector: {
          slug: 'hyperliquid',
        },
        version: '2.0',
      },
    ],
  },
  parameters: {},
}

export const MetricsRegistryCustomGranularityRules: Story = {
  args: {
    defaultMetrics: [
      {
        apiMetricName: 'price_usd',
        label: 'Price',
        scaleId: 'right-price_usd0.4735169585340905',
      },
      {
        apiMetricName: 'sentiment_volume_consumed_total',
        label: 'Weighted sentiment total',
        scaleId: 'right-0.702362761389925',
        meta: {
          granularityRules: zodGranularityRulesSchema.safeParse([
            { maxTimeRangeDays: 33, value: '1h' },
            { maxTimeRangeDays: 800, value: '1d' },
          ]).data,
        },
      },
    ],
  },
}
