import { ApiQuery } from '$lib/api/index.js'

type AddressVariables = { address: string; infrastructure: string }

export const queryAddressAssets = ApiQuery(
  (variables: AddressVariables) => ({
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
  }),
  (gql: { assetsHeldByAddress: { slug: string; balanceUsd: number | null }[] }) =>
    gql.assetsHeldByAddress,
)
