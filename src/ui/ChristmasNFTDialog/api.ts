import { query } from '@/api'
import { Cache } from '@/api/cache'
import { getSavedBoolean, saveBoolean } from '@/utils/localStorage'

export const NFT_BATTLE_TAG = 'NFTBATTLE'

const NFT_INSIGHTS_QUERY = `{ currentUser {
      insights(pageSize: 30) {
          id
          title
          publishedAt
          tags { name }
        }
    }}`

const options = {
  cacheTime: 1 * 60,
} as SAN.API.QueryOptions<any>

const currentUserAcessor = ({ currentUser }) => currentUser
export const queryCurrentUserInsights = () =>
  query<any>(NFT_INSIGHTS_QUERY, options).then(currentUserAcessor)
export const clearPaymentCardQuery = () => Cache.delete(NFT_INSIGHTS_QUERY)

const filter = ({ publishedAt, tags }) =>
  publishedAt && tags.some(({ name }) => name.toUpperCase() === NFT_BATTLE_TAG)
const accessor = (currentUser: null | { insights: any[] }) =>
  currentUser ? currentUser.insights.filter(filter) : []
export const queryUserNftInsights = () => queryCurrentUserInsights().then(accessor)

const KEY = 'NFT_BATTLE_STARTED'
export const checkIsGameStarted = () => getSavedBoolean(KEY)
export const startGame = () => saveBoolean(KEY, true)
