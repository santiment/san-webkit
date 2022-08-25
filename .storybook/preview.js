import { startResponsiveController } from '@/responsive'

startResponsiveController()
window.__onLinkClick = (e) => console.log('Link clicked', e)

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
