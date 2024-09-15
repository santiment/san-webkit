import type { Preview } from '@storybook/svelte'

import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/lib/app.css'
import './preview.css'
import { ApiMock } from '../src/lib/api/mock'
import { ApiCache } from '../src/lib/api/cache'
import { MockedApi } from './mock'
import Decorator from './Decorator.svelte'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Design System',
          ['Colors', 'Typography', 'Icons', 'Buttons', 'Input', 'Checkbox', 'Popover', '*'],
        ],
      },
    },
  },

  decorators: [
    (_, { args, loaded, parameters }) => ({
      Component: Decorator,
      props: { ...args, ...loaded, ui: parameters.ui, bodyStyle: parameters.bodyStyle || {} },
    }),
  ],

  loaders: [
    (ctx) => {
      const root = document.querySelector('#storybook-root') as null | HTMLElement
      if (root) {
        root.setAttribute('data-vaul-drawer-wrapper', '')
        root.style.minHeight = '100vh'
        root.classList.add('bg-white')
      }

      // @ts-expect-error
      const dialogs = window.__STORYBOOK_DIALOGS__ as undefined | Set<() => void>
      if (dialogs) {
        dialogs.forEach((fn) => fn())
        dialogs.clear()
      }

      ApiCache.queries.clear()
      ApiMock.reset()

      const { mockApi } = ctx.parameters
      if (!mockApi) return

      const storyMock = mockApi(ctx)

      for (const key in storyMock) {
        const isRawQueryMock = key.startsWith('query ')

        if (isRawQueryMock) {
          ApiMock.add(key.replace('query ', ''), { mock: () => storyMock[key] })
        } else if (MockedApi[key]) {
          const predefinedMock = MockedApi[key]
          ApiMock.add(predefinedMock.apiQuery, { mock: () => predefinedMock.mock(storyMock[key]) })
        }
      }
    },
  ],
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'night-mode',
    },
    defaultTheme: 'light',
  }),
]
export default preview
