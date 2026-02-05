export const TODO_DELETE_LEGACY_DESCRIPTION = {
  social_volume_total:
    'Shows the amount of mentions of the coin on 1000+ crypto social media channels, including Telegram groups, crypto subreddits, discord groups, private traders chats and more.',
  social_volume_ai_total:
    'This metric computed using Natural Language Processing (NLP) technique such as Named Entity Recognition (NER). Our trained NER model can process large amount of social data and extract from it mentions about crypto assets.',
  age_consumed:
    'Tracks the movement of previously idle [Project Ticker] tokens. The metric shows the amount of [Project Ticker] changing addresses daily multiplied by the number of days since they last moved. Spikes indicate a significant amount of previously idle [Project Ticker] tokens moving between addresses.',
  exchange_balance:
    'Shows the difference in the amount of [Project Ticker] tokens moving to and out of exchange wallets. If the value is positive, more [Project Ticker] entered the exchange than have left. If the value is negative, more [Project Ticker] flowed out of exchanges than flowed in.',
  daily_active_addresses:
    'Shows the number of unique addresses involved in [Project Ticker] transactions daily. This metric indicates the daily level of crowd interaction (or speculation) with a token',
  supply_on_exchanges:
    'Shows the total amount of [Project Ticker] located in known exchange wallets. Spikes in this metric may indicate a rise in short-term sell pressure.',
  supply_outside_exchanges:
    'Shows the total amount of [Project Ticker]  located outside of known exchange wallets. Spikes in this metric may indicate an accumulation trend.',
  percent_of_total_supply_on_exchanges:
    'Shows the percentage of the total circulating supply of [Project Ticker] located in known exchange wallets. Spikes in this metric may indicate a rise in short-term sell pressure.',
  circulation:
    'Shows only the number of unique [Project Ticker]  tokens transacted daily. If a token changes addresses 5 times on a given day, it will be counted only once by Token Circulation, and 5 times by Transaction Volume.',
  mvrv_usd:
    'Shows the average profit or loss of all [Project Ticker] holders based on the price when each token last moved. Example: if MVRV = 2, then all [Project Ticker] holders are, on average, currently 2x on their initial investment.',
  mvrv_usd_intraday:
    'Shows the intraday average profit or loss of all [Project Ticker] holders based on the price when each token last moved. Example: if MVRV = 2, then all [Project Ticker] holders are, on average, currently 2x on their initial investment.',
  transaction_volume:
    'Shows the aggregate amount of [Project Ticker]  tokens across all transactions that happened on the network daily.',
  transaction_volume_usd:
    'Represents the value of transacted asset expressed in USD. It is computed using formula: `transaction_volume` * `daily_average_price`',
  network_growth:
    'Shows the number of new addresses being created on the network each day. This metric illustrates user adoption over time, and can be used to identify when the project is gaining or losing traction.',
  dev_activity:
    "Shows the project’s development activity over time based on a number of pure development- related 'events' in the project’s public Github repository. (not counted: comments on issues, forks, stars, etc.).",
  velocity:
    'Shows the average number of times that a single [Project Ticker] token changes addresses daily. Higher token velocity means that a single token is used more often in daily transactions.',
  twitter_followers:
    "Shows the number of followers on the project's official Twitter account over time",
  social_dominance_total:
    'Shows the share (or %) of the coin’s mentions on crypto-related social media, compared to a pool of 50+ of the most talked-about projects online.',
  realized_value_usd:
    'Shows the total amount that all [Project Ticker] holders spent to purchase their tokens (i.e. the total acquisition cost). Realized cap is calculated by multiplying the [Project Ticker] supply by the price of each [Project Ticker] token when it last moved on-chain',
  realized_cap_hodl_waves_0d_to_1d:
    'Shows the percentage of [Project Ticker] realized cap for a given timebound interval in total realized cap value. Realized cap HODL waves is calculated by dividing the [Project Ticker] realized cap in given period by [Project Ticker] total realized cap',
  gasUsed:
    'Shows the amount of Gas accrued on the Ethereum network daily. Gas is a unit that measures the amount of computational effort it will take to successfully conduct a transaction or execute a contract on the Ethereum blockchain',
  mean_age:
    'Shows the average amount of days that all [Project Ticker] tokens stayed in their current addresses. Rising slope signals a network-wide accumulation trend. Drop-offs indicate increased movement of [Project Ticker] tokens between addresses.',
  mean_dollar_invested_age:
    'A dollar-based equivalent of the Mean Coin Age. The difference between "coin age" and "dollar age" comes from the different way that we compute the averages.',
  nvt: 'Shows the relationship between the [Project Ticker] market cap and the amount of [Project Ticker] transacted on-chain daily. High NVT levels indicate and overvalued asset, and vice versa. This version of NVT is calculated by dividing the [Project Ticker] market cap by its daily circulation, or the amount of <em>unique</em> [Project Ticker] exchanged on the network daily',
  nvt_transaction_volume:
    'Shows the relationship between the [Project Ticker] market cap and the amount of [Project Ticker] tokens transacted on-chain daily. High NVT levels indicate an overvalued asset, and vice versa. This version of NVT is calculated by dividing the [Project Ticker] Market Cap by its on-chain Transaction Volume.',
  topHoldersPercentOfTotalSupply:
    'Shows the combined balance of the top 10 addresses overall, as a percentage of the coin’s total circulating supply',
  amount_in_top_holders: 'Shows the combined balance of the top N addresses overall',
  amount_in_exchange_top_holders:
    'Shows the combined balance of the top N addresses belonging to exchanges',
  amount_in_non_exchange_top_holders:
    'Shows the combined balance of the top N addresses that don’t belong to exchanges',
  addresses_number_distribution:
    'Breaks down the number of addresses based on the amount of [Project Ticker] they hold.',
  labeled_addresses_number_distribution:
    'Breaks down the number of addresses based on the amount of [Project Ticker] they hold and labeled by owners. Labels are available only for Ethereum/ERC-20 assets',
  addresses_balance_distribution:
    'Represents the sum of all the tokens of all the addresses which hold the amount of tokens from an interval.',
  ethSpentOverTime: 'Shows the amount of ETH moved out of the project’s ICO wallets over time',
  miners_balance: 'Shows the combined ETH balance of addresses belonging to Ethereum mining pools',
  active_deposits:
    'Shows the amount of unique [Project Ticker] deposit addresses daily. Deposit addresses are used to deposit cryptocurrencies to centralized exchanges. Spikes in this metric may indicate a rise in short-term sell pressure.',
  deposit_transactions:
    'Shows the amount of all incoming and outgoing transactions involving [Project Ticker] deposit addresses daily. Deposit addresses are used to deposit cryptocurrencies to centralized exchanges. Spikes in this metric may indicate a rise in short-term sell pressure',
  exchange_inflow:
    'Shows the amount of [Project Ticker] moving to known exchange wallets daily. Excludes exchange-to-exchange transactions. Spikes in this metric may indicate a rise in short-term sell pressure.',
  exchange_outflow:
    'Shows the amount of [Project Ticker] withdrawn from known exchange wallets daily. Excludes exchange-to-exchange transactions. Spikes in this metric may indicate a short-term accumulation trend.',
  withdrawal_transactions:
    'Shows the amount of all incoming and outgoing transactions involving [Project Ticker] withdrawal addresses. Withdrawal addresses are used to withdraw cryptocurrencies from centralized exchanges. Spikes in this metric may indicate a short-term accumulation trend',
  mvrv_long_short_diff_usd:
    'Shows the difference between the 365-day MVRV ratio and 60-day MVRV ratio, respectively. For certain coins, this indicator tends to bottom at the lowest point of its bear market and peak at the top of its bull cycle. Negative values mean that short-term holders are going to realize higher profits than long-term holders if they sell at price at this moment. Positive values show the opposite.\n\nThis an oscillating indicator, which reaches extreme negative values at the bottom of the large bear cycles and extreme positive values at the top of the bull markets. The intuition is that at the top of the bull runs the long term holders are at large profit and this puts large sell pressure. At the bottom of the bear markets, the long term holders are at large loss and are not willing to sell. Compared to the individual MVRVs, this indicator is going to give negative values when both long and short term holders are at the same profit and loss, thus indicating that the current price is not the long term top/bottom, but more of a short term move.',
  bitmex_perpetual_basis:
    'Shows the difference between BitMEX perpetual contract’s price of [Project Ticker] and BitMEX index (spot) price for [Project Ticker]',
  bitmex_perpetual_funding_rate:
    'The funding rate is a fee paid by one side of the perpetual contract to the other. When the funding rate is positive, Longs pay Shorts. When the funding rate is negative, Shorts pay Longs',
  bitmex_perpetual_open_interest:
    "Shows the amount of open perpetual contracts currently on Bitmex's [Project Ticker] / USD trading pairs. When open interest reaches unusually high numbers, it can precede increased volatility in the coin’s price",
  bitmex_perpetual_open_value:
    'Shows the value of the corresponding open interest in Satoshis (XBT/BTC)',
  dormant_circulation_365d:
    'Shows how many coins/tokens that have not been moved for more than 365 days were transacted during a day. This is useful for spotting when really old Bitcoins move.',
  stock_to_flow:
    "Stock To Flow ratio model is a measure of scarcity/abundance of particular resource. It shows how much supply enters yearly relative to the total supply of the resource. We measure Stock To Flow ratio for a given asset as the ratio between <a href='https://academy.santiment.net/metrics/circulation/'>Total Circulation</a> of the asset and the daily minted coins multiplied by days in one year",
  total_supply_in_profit:
    'Total Supply in profit shows the amount of tokens that were ever bought at lower price then the current price of a token.',
  percent_of_total_supply_in_profit:
    "Percent of Total Supply in profit is a measure of market hype or depression. We measure Percent of Total Supply in profit for a given asset as the ratio between <a href='https://academy.santiment.net/metrics/supply-in-profit/'>Total Supply in profit</a> and <a href='https://academy.santiment.net/metrics/circulation/'>Total Circulation</a>  of the asset ",
  defi_total_value_locked_usd: 'Shows total value locked in DeFi projects, available in USD.',
  price_daa_divergence:
    'Price-Daily Addresses Divergence model tracks the relationship between the coin’s price and the amount of daily addresses interacting with the coin. When the price increases while the amount of active addresses declines, the model triggers a ‘Sell’ signal, and vice versa. Historically, strong divergences in these two metrics earmarked interesting entry/exit levels',
  active_addresses_1h:
    'Shows the number of unique addresses involved in [Project Ticker] transactions hourly. This metric indicates the hourly level of crowd interaction (or speculation) with a token',
  active_addresses_24h:
    'Shows the number of unique addresses involved in [Project Ticker] transactions daily. This metric indicates the daily level of crowd interaction (or speculation) with a token',
  network_profit_loss:
    'Network Profit/Loss (NPL for short) computes the average profit or loss of all coins that change addresses daily.\n\nFor each coin that moves on-chain, NPL takes the price at which it was last moved and assumes this to be its acquisition price. Once it changes addresses again, NPL assumes the coin was sold.',
  whale_transaction_count_100k_usd_to_inf:
    'Number of Transactions Transferring More Than 100k USD"',
  whale_transaction_count_1m_usd_to_inf: 'Number of Transactions Transferring More Than 1M USD"',
  mvrv_usd_z_score:
    'Shows the ratio between the difference of market cap and realized cap, and the standard deviation of market cap',
  spent_coins_age_band_0d_to_1d:
    'Spent Coins Age Band is a set of metrics that represent the distribution of coins spent on a given day by the age of coins. In addition to absolute values, there is percentage type of this metric, which shows the relative share of coins in a given interval in relation to total amount of coins spent on a given day. Assigning age to coin/tokens is done according to the <a target="_blank" rel="noopener noreferrer" href="https://academy.santiment.net/metrics/details/stack-coin-age-model/">coin-age model.</a>',
}
