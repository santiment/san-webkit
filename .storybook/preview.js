import { startResponsiveController } from '@/responsive'
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post(process.env.GQL_SERVER_URL, (req, res, ctx) => {
    // console.log(req, res, ctx)

    return req.passthrough()
  }),
)

worker.start()

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
