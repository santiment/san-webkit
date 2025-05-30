import { BROWSER } from 'esm-env'

import { newHeadScript } from './utils.js'

export function bootIntercom(
  app_id: string,
  user_id?: number,
  name?: string,
  email?: string,
): void {
  window.intercomSettings = {
    app_id,
    user_id,
    name,
    email,
    action_color: '#14c393',
  }

  newHeadScript(
    `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${app_id}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`,
  )

  window.Intercom?.('boot', window.intercomSettings)
}

export function updateIntercom(
  user_id?: number,
  name?: string | null,
  email?: string | null,
): void {
  if (!BROWSER) return
  if (process.env.IS_DEV_MODE) return

  if (!window.intercomSettings) {
    window.intercomSettings = {}
  }

  Object.assign(window.intercomSettings, {
    user_id,
    name,
    email,
  })

  window.Intercom?.('update', window.intercomSettings)
}

export function showIntercom() {
  window.Intercom?.('show')

  if (process.env.IS_DEV_MODE) {
    console.log(
      '%c[DEV ONLY]',
      'background:#FFCB47;color:black;padding:3px;border-radius:4px',
      'Showing Intercom',
    )
  }
}
