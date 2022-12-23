import Player from './Player.svelte'
import Insight from './Insight.svelte'
import Signal from './Signal.svelte'

export const COLUMNS = [
  {
    title: '#',
    format: (_, i) => i + 1,
    className: 'cell-min c-waterloo',
  },
  {
    title: 'Player',
    Component: Player,
    valueKey: 'issuer',
  },
  {
    title: 'Insight',
    valueKey: 'sanbaseInsight',
    Component: Insight,
  },
  {
    title: 'Signal',
    valueKey: 'symbol',
    Component: Signal,
  },
]
