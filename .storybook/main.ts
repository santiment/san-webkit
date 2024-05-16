import type { StorybookConfig } from '@storybook/sveltekit'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  staticDirs: ['../static'],
  docs: {
    autodocs: 'tag',
  },

  async viteFinal(config) {
    const result = mergeConfig(config, {
      sever: {
        fs: { allow: ['../'] },
      },
    })

    if (result.server.fs) result.server.fs.allow = ['../']

    return result
  },
}
export default config
