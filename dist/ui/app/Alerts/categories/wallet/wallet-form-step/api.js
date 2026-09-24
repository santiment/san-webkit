import { ApiQuery } from '../../../../../../api/index.js';
export const queryAddressAssets = ApiQuery((variables) => ({
    schema: `query($address: String!, $infrastructure: String!) {
    assetsHeldByAddress(
      selector: {address: $address, infrastructure: $infrastructure}
      showAssetsWithZeroBalance: true
    ) {
      slug
      balanceUsd
    }
  }`,
    variables,
}), (gql) => gql.assetsHeldByAddress);
