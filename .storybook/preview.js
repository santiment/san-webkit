import { startResponsiveController } from '@/responsive'

startResponsiveController()

document.body.style = 'padding:0'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
