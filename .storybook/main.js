const webpack = require('webpack')
const path = require('path')
const cssModules = require('svelte-preprocess-cssmodules')

const API_SERVER = 'https://api-stage.santiment.net'

module.exports = {
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader')
    )
    svelteLoader.options.preprocess = [
      cssModules(),
      require('svelte-preprocess')({}),
    ]

    config.resolve.alias['@'] = path.resolve(__dirname, '../src')

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.GQL_SERVER_URL': JSON.stringify(API_SERVER + '/graphql'),
        'process.env.IS_DEV_MODE': true,
        'process.env.MEDIA_PATH': JSON.stringify(''),
        'process.env.ICONS_PATH': JSON.stringify('/icons'),
        'process.env.IS_PROD_BACKEND': false,
      })
    )

    return config
  },
  stories: [
    //"../src/**/*.stories.mdx",
    '../src/styles/*.css',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    './register.js',
  ],
}
