import { newHeadScript } from '../utils.js'

const DEFAULT_ID = 'AF-1074422'

function loadAffiliatlyScript(params: string, id = DEFAULT_ID) {
  newHeadScript(undefined, {
    src: `https://static.affiliatly.com/v3/affiliatly.js?affiliatly_code=${id}${params}`,
  })
}

function trackConversion(orderPrice: number) {
  loadAffiliatlyScript(`&conversion=1&id_order=${Date.now()}&order_price=${orderPrice}`)
}

export function trackAffiliatlySignup() {
  trackConversion(0)
}

export function trackAffiliatlyPayment(price: number) {
  trackConversion(price)
}

export function initAffiliatly(id?: string) {
  if (process.env.IS_LOGGING_ENABLED) return

  const load = () => loadAffiliatlyScript('', id)

  if (document.readyState === 'complete') {
    load()
  } else {
    window.addEventListener('load', load)
  }
}
