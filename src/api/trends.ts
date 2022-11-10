import { query } from '@/api'

const TRENDING_WORDS_QUERY = `{
    getTrendingWords(size: 50, from: "utc_now-1h", to: "utc_now") {
        topWords {
            word
        }
    }
}`

type Query = SAN.API.Query<
  'getTrendingWords',
  {
    topWords: {
      word: string
    }[]
  }[]
>

const accessor = ({ getTrendingWords }: Query) => {
  let trendingWords = [] as any[]
  const item = getTrendingWords[getTrendingWords.length - 1]

  if (item) {
    trendingWords = item.topWords
  }

  return trendingWords.map(({ word }) => word)
}
export const queryTrends = () => query<Query>(TRENDING_WORDS_QUERY).then(accessor)
