import { newHeadScript } from '../utils.js'

export function initAffiliatly(id: string = 'AF-1074422') {
  if (process.env.IS_LOGGING_ENABLED) return

  newHeadScript(undefined, {
    src: `https://static.affiliatly.com/v3/affiliatly.js?affiliatly_code=${id}`,
  })
}
