import { createServer } from 'miragejs'
import { Cache } from '@/api/cache'
import '@/styles/main.css'
import Decorator from './Decorator.svelte'
import { ApiMock } from './mock'

/** @type {import('@storybook/svelte').Preview} */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    options: {
      storySort: {
        order: ['Intro', 'Development'],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    docs: {
      toc: {
        headingSelector: 'h2, h3',
      },
      story: { inline: false },
    },
  },

  decorators: [
    (_, { args, loaded }) => ({
      Component: Decorator,
      props: { ...args, loaded },
    }),
  ],

  loaders: [
    (ctx) => {
      Cache.forEach((_, key) => Cache.delete(key))

      const { mockApi } = ctx.parameters
      if (!mockApi) return

      const schema = mockApi(ctx)

      const server = createServer({
        routes() {
          this.post(process.env.GQL_SERVER_URL, (_, req) => ApiMock(req, schema))
        },
      })

      return { server }
    },
  ],
}

export default preview
