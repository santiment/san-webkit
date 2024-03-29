import { newHeadScript } from './utils'

export function initTwitterPixel(id = 'o0e0e'): void {
  newHeadScript(`!function(e,t,n,s,u,a){
  e.twq||(s=e.twq=function(){
  s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
  u.src='//static.ads-twitter.com/uwt.js',
  a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
  }(window,document,'script');
  twq('init','${id}');
`)

  newHeadScript(undefined, {
    async: true,
    src: 'https://static.ads-twitter.com/oct.js',
  })
}

export function trackTwitterPurchaseEvent() {
  window.twttr?.conversion.trackPid('o8scf', { tw_sale_amount: 0, tw_order_quantity: 0 })
}

export function trackTwitterSignUpEvent() {
  window.twttr?.conversion.trackPid('o8scy', { tw_sale_amount: 0, tw_order_quantity: 0 })
}

export enum TwitterTrackActions {
  pageview = 'PageView',
  signup = 'Signup',
  purchase = 'Purchase',
}
