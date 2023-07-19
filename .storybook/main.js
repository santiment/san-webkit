const { mergeConfig } = require('vite')
const fs = require('fs')
const path = require('path')
const utils = require('../scripts/utils')
const { prepareIcons, getSvgId } = require('../scripts/icons')

function extractAttributeValue(string, anchor) {
  const start = string.indexOf(anchor) + anchor.length + 2
  const end = string.indexOf('"', start)
  return string.slice(start, end).toString()
}

async function prepareIconsData(dir, filename) {
  const ICONS = []
  await utils.forFile([utils.SRC + dir + '/**/*.svg'], (entry) => {
    const file = fs.readFileSync(entry)
    const key = getSvgId(utils.SRC + dir + '/', entry)
    const width = extractAttributeValue(file, 'width')
    const height = extractAttributeValue(file, 'height')
    ICONS.push({
      key,
      width,
      height,
    })
  })
  fs.writeFile(
    path.resolve(utils.ROOT, 'stories', filename + '.json'),
    JSON.stringify(ICONS),
    () => {},
  )
}

utils.mkdir(utils.LIB)

/** @type {import('@storybook/sveltekit').StorybookConfig} */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../lib'],
  // staticDirs: ['../src/icons/', '../src/illus/'],

  async viteFinal(config) {
    await utils.forFile(['src/{icons,illus}/**/*.svg'], utils.copyFile)

    await Promise.all([
      prepareIcons(),
      prepareIconsData('/illus', 'illustrations'),
      prepareIconsData('/icons', 'icons'),
    ])

    const result = mergeConfig(config, {
      sever: {
        fs: { allow: ['../'] },
      },
      define: {
        'process.browser': true,
        'globalThis.fetch': `((() => {
        const fetch = window.fetch
        return (...args) => (window.fetch.polyfill ? window.fetch : fetch)(...args)
      })())`,
        'process.env.MEDIA_PATH': JSON.stringify(''),
        'process.env.ICONS_PATH': JSON.stringify('/icons'),
      },
      optimizeDeps: { exclude: ['san-webkit'] },
    })

    if (result.server.fs) result.server.fs.allow = ['../']

    return result
  },
}

export default config
