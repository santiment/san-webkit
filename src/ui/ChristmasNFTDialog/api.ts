import { query } from '@/api'
import { Cache } from '@/api/cache'
import { getSavedBoolean, saveBoolean } from '@/utils/localStorage'

export const NFT_BATTLE_TAG = 'NFTBATTLE'

const NFT_INSIGHTS_QUERY = `{ 
  currentUser {
    insights(pageSize: 50) {
      id
      title
      publishedAt
      tags { name }
    }
    sanbaseNft {
      hasValidNft
      nftCount
      nftData {
        address
        tokenIds
      }
    }
  }
}`

type CurrentUserQuery = SAN.API.Query<
  'currentUser',
  null | {
    insights: {
      id: number
      title: string
      publishedAt: null | string
      tags: { name: string }[]
    }[]

    sanbaseNft: {
      hasValidNft: boolean
      nftCount: number
      nftData: {
        address: string
        tokenIds: string
      }[]
    }
  }
>

const options = {
  cacheTime: 1 * 60,
} as SAN.API.QueryOptions<any>

const currentUserAcessor = ({ currentUser }: CurrentUserQuery) => currentUser
export const queryCurrentUserInsights = () =>
  query<CurrentUserQuery>(NFT_INSIGHTS_QUERY, options).then(currentUserAcessor)

const filter = ({ publishedAt, tags }) =>
  publishedAt && tags.some(({ name }) => name.toUpperCase() === NFT_BATTLE_TAG)
const accessor = (currentUser: null | { insights: any[] }) =>
  currentUser ? currentUser.insights.filter(filter) : []
export const queryUserNftInsights = () => queryCurrentUserInsights().then(accessor)

const KEY = 'NFT_BATTLE_STARTED'
export const checkIsGameStarted = () => getSavedBoolean(KEY)
export const startGame = () => saveBoolean(KEY, true)

const DIALOG_CLOSED_KEY = 'NFT_BATTLE_DIALOG_CLOSED'
export const checkWasNftDialogClosedOnce = () => getSavedBoolean(DIALOG_CLOSED_KEY)
export const saveDialogClose = () => saveBoolean(DIALOG_CLOSED_KEY, true)
