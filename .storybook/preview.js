import { createServer } from 'miragejs'
import { Cache } from './../lib/api/cache.js'
import './../lib/styles/main.css'
import Decorator from './Decorator.svelte'
import { ApiMock } from './mock/index.js'

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

      window.updateArgs = ({ args, argTypes }) => {
        Object.keys(schema).forEach((key) => {
          args[key] = schema[key]

          argTypes[key] = {
            control: { type: 'object' },
            name: key,
            type: { name: 'object' },
          }
        })

        return args
      }

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
