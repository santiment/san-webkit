import { fetchGql } from './fetch.js'

const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/

export const fetchStatusAssetLogos = () =>
  fetchGql(`{
  allProjects(minVolume: 0) {
    slug
    logoUrl
  }
}`)
    .then((data) => data.allProjects)
    .then((assets) => {
      return assets.reduce((acc, { slug, logoUrl }) => {
        if (!logoUrl) return acc

        const logoSlug = slug.replace(CHAIN_REGEX, '')

        if (logoUrl.includes(`logo64_${logoSlug}.png`)) return acc

        acc[slug] = logoUrl.slice(0, -'.png'.length).split('logo64_')[1]

        return acc
      }, {})
    })
