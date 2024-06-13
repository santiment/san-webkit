import type { Preview } from '@storybook/svelte'

import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/app.css'
import './preview.css'

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
