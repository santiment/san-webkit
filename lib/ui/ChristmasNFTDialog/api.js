import { query } from './../../api';
import { getSavedBoolean, saveBoolean } from './../../utils/localStorage';
export const NFT_BATTLE_TAG = 'NFTBATTLE';
const NFT_INSIGHTS_QUERY = `{ 
  currentUser {
    insights(pageSize: 50) {
      id
      title
      publishedAt
      tags { name }
    }
  }
}`;
const options = {
    cacheTime: 1 * 60,
};
const currentUserAcessor = ({ currentUser }) => currentUser;
export const queryCurrentUserInsights = () => query(NFT_INSIGHTS_QUERY, options).then(currentUserAcessor);
const filter = ({ publishedAt, tags }) => publishedAt && tags.some(({ name }) => name.toUpperCase() === NFT_BATTLE_TAG);
const accessor = (currentUser) => currentUser ? currentUser.insights.filter(filter) : [];
export const queryUserNftInsights = () => queryCurrentUserInsights().then(accessor);
const KEY = 'NFT_BATTLE_STARTED';
export const checkIsGameStarted = () => getSavedBoolean(KEY);
export const startGame = () => saveBoolean(KEY, true);
const DIALOG_CLOSED_KEY = 'NFT_BATTLE_DIALOG_CLOSED';
export const checkWasNftDialogClosedOnce = () => getSavedBoolean(DIALOG_CLOSED_KEY);
export const saveDialogClose = () => saveBoolean(DIALOG_CLOSED_KEY, true);
// -------------
const NFT_TO_CLAIM_QUERY = `{
  currentUser {
    sanbaseNft {
      nftData {
        address
        tokenIds
        nonValidTokenIds
      }
    }
  }
}`;
export const queryNftToClaim = () => query(NFT_TO_CLAIM_QUERY).then(({ currentUser }) => currentUser ? currentUser.sanbaseNft.nftData : []);
//# sourceMappingURL=api.js.map