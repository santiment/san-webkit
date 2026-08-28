import type { TProductCard } from './ProductCard.svelte'

export const products: TProductCard[] = [
  {
    id: 'sanbase',
    title: 'Sanbase',
    desc: 'Sentiment, on-chain & market data for 1,000+ crypto assets',
    href: 'https://app.santiment.net',
    dimensions: [23.75, 23.74],
  },
  {
    id: 'mcp',
    title: 'MCP',
    desc: 'All Santiment data, now for AI research in natural language',
    href: 'https://ai.santiment.net',
    dimensions: [40, 40],
  },
  {
    id: 'sanapi',
    title: 'API',
    desc: 'Comprehensive API to automate research & trading',
    href: 'https://api.santiment.net',
    dimensions: [24, 22],
  },
  {
    id: 'play',
    title: 'Play',
    desc: 'Fun, risk-free crypto predictions to learn market behavior',
    href: 'https://play.santiment.net/',
    dimensions: [40, 40],
  },
  {
    id: 'score',
    title: 'Score',
    desc: 'Predictions & strategies, funding competitions, trader backing',
    href: 'https://scorearena.ai/',
    dimensions: [40, 40],
  },
]
