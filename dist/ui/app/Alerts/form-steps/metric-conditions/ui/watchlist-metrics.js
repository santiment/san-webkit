const finacial = [
    'price_usd',
    'price_eth',
    'price_btc',
    'price_volatility_1d',
    'price_volatility_1w',
    'price_volatility_2w',
    'price_volatility_4w',
    'marketcap_usd',
    'rank',
    'volume_usd',
    'market_segments',
];
const social = [
    'social_volume_total',
    'social_dominance_total',
    'sentiment_volume_consumed_total',
    'sentiment_balance_total',
];
const development = ['dev_activity_1d'];
const derivarives = ['bitmex_perpetual_funding_rate'];
const onchain = [
    'eth_spent',
    // Network Activity
    'daily_active_addresses',
    'transaction_volume',
    'transaction_volume_usd',
    'circulation',
    'circulation_180d',
    'circulation_usd_180d',
    'network_growth',
    'dormant_circulation_365d',
    'age_destroyed',
    // Exchanges
    'exchange_inflow',
    'exchange_inflow_usd',
    'exchange_outflow',
    'exchange_outflow_usd',
    'exchange_balance',
    'percent_of_total_supply_on_exchanges',
    // Network value
    'mvrv_usd_7d',
    'mvrv_usd_30d',
    'mvrv_usd_60d',
    'mvrv_usd_90d',
    'mvrv_usd_180d',
    'mvrv_usd_365d',
    'mean_dollar_invested_age',
    'network_profit_loss',
    // Whales
    'whale_transaction_count_100k_usd_to_inf',
    'whale_transaction_count_1m_usd_to_inf',
];
export const availableMetrics = new Set([
    ...finacial,
    ...social,
    ...development,
    ...derivarives,
    ...onchain,
]);
