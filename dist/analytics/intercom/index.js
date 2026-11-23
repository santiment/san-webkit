import { BROWSER } from 'esm-env';
import { newHeadScript } from '../utils.js';
export function bootIntercom(app_id, settings) {
    window.intercomSettings = { app_id, action_color: '#14c393', ...settings };
    newHeadScript(`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${app_id}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`);
    window.Intercom?.('boot', window.intercomSettings);
}
export function updateIntercom(settings) {
    if (!BROWSER)
        return;
    if (process.env.IS_DEV_MODE)
        return;
    window.intercomSettings = Object.assign(window.intercomSettings || {}, settings);
    window.Intercom?.('update', window.intercomSettings);
}
