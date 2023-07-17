// const webpack = require('webpack')
// const fs = require('fs')
// const path = require('path')
// const cssModules = require('svelte-preprocess-cssmodules')
// const utils = require('../scripts/utils')
// const { getSvgId } = require('../scripts/icons')
//
// const API_SERVER = process.env.BACKEND_URL
//
// function extractAttributeValue(string, anchor) {
//   const start = string.indexOf(anchor) + anchor.length + 2
//   const end = string.indexOf('"', start)
//   return string.slice(start, end).toString()
// }
//
// async function prepareIconsData(dir, filename) {
//   const ICONS = []
//   await utils.forFile([utils.SRC + dir + '/**/*.svg'], (entry) => {
//     const file = fs.readFileSync(entry)
//     const key = getSvgId(utils.SRC + dir + '/', entry)
//     const width = extractAttributeValue(file, 'width')
//     const height = extractAttributeValue(file, 'height')
//     ICONS.push({ key, width, height })
//   })
//
//   fs.writeFile(
//     path.resolve(utils.ROOT, 'stories', filename + '.json'),
//     JSON.stringify(ICONS),
//     () => {},
//   )
// }

// module.exports = {
//   webpackFinal: async (config) => {
//
//     await Promise.all([
//       prepareIconsData('/illus', 'illustrations'),
//       prepareIconsData('/icons', 'icons'),
//     ])
//
//     const svelteLoader = config.module.rules.find(
//       (r) => r.loader && r.loader.includes('svelte-loader'),
//     )
//     svelteLoader.options.preprocess = [cssModules(), require('svelte-preprocess')({})]
//
//     config.resolve.alias['@'] = path.resolve(__dirname, '../src')
//
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         'process.browser': true,
//         'process.env.GQL_SERVER_URL': JSON.stringify(API_SERVER + '/graphql'),
//         'process.env.IS_DEV_MODE': true,
//         'process.env.MEDIA_PATH': JSON.stringify(''),
//         'process.env.ICONS_PATH': JSON.stringify('/icons'),
//         'process.env.IS_STAGE_BACKEND': true,
//         'process.env.IS_PROD_BACKEND': false,
//       }),
//     )
//
//     return config
//   },
//   stories: [
//     '../stories/**/*.stories.mdx',
//     '../src/styles/*.css',
//     '../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)',
//   ],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-svelte-csf',
//     './register.js',
//   ],
// }

/** @type {import('@storybook/sveltekit').StorybookConfig} */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  // staticDirs: ['../src'],
  // staticDirs: ['../src/icons/', '../src/illus/'],

  async viteFinal(config) {
    config.server.fs.allow = ['../']

    Object.assign(config.define, {
      'process.browser': true,
      'globalThis.fetch': `((() => {
        const fetch = window.fetch
        return (...args) => (window.fetch.polyfill ? window.fetch : fetch)(...args)
      })())`,
    })

    config.optimizeDeps.exclude = ['san-webkit']

    return config
  },
}

export default config
