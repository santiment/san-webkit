import { query } from '@/api'
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

const currentUserAcessor = ({ currentUser }) => currentUser
export const queryCurrentUserInsights = () =>
  query<any>(NFT_INSIGHTS_QUERY).then(currentUserAcessor)

const filter = ({ publishedAt, tags }) =>
  publishedAt && tags.some(({ name }) => name.toUpperCase() === NFT_BATTLE_TAG)
const accessor = (currentUser: null | { insights: any[] }) =>
  currentUser ? currentUser.insights.filter(filter) : []
export const queryUserNftInsights = () => queryCurrentUserInsights().then(accessor)

const KEY = 'NFT_BATTLE_STARTED'
export const checkIsGameStarted = () => getSavedBoolean(KEY)
export const startGame = () => saveBoolean(KEY, true)
