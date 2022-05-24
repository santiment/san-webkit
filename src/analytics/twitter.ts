import { newHeadScript } from './utils'

const PID_IDS = ['o8scf', 'o8scy']

export function initTwitterPixel(id: string): void {
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
    src: `https://static.ads-twitter.com/oct.js`,
  })

  PID_IDS.forEach((pidId) =>
    newHeadScript(
      `twttr.conversion.trackPid('${pidId}', { tw_sale_amount: 0, tw_order_quantity: 0 });`,
      {
        async: true,
      },
    ),
  )
}

export enum TwitterTrackActions {
  pageview = 'PageView',
  signup = 'Signup',
  purchase = 'Purchase',
}
