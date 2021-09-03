const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader'),
    )
    svelteLoader.options.preprocess = require('svelte-preprocess')({})

    config.resolve.alias['@'] = path.resolve(__dirname, '../src')

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
