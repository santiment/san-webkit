import { newHeadScript } from './utils';
export function bootIntercom(app_id, user_id, name, email) {
    newHeadScript(`(function(){var w=window;var ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${app_id}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`);
    window.intercomSettings = {
        app_id,
        user_id,
        name,
        email,
        action_color: '#14c393',
    };
    window.Intercom('boot', window.intercomSettings);
}
export function updateIntercom(user_id, name, email) {
    if (process.env.IS_DEV_MODE)
        return;
    Object.assign(window.intercomSettings, {
        user_id,
        name,
        email,
    });
    window.Intercom('update');
}
export function showIntercom() {
    var _a;
    (_a = window.Intercom) === null || _a === void 0 ? void 0 : _a.call(window, 'show');
    if (process.env.IS_DEV_MODE) {
        console.log('%c[DEV ONLY]', 'background:#FFCB47;color:black;padding:3px;border-radius:4px', 'Showing Intercom');
    }
}
//# sourceMappingURL=intercom.js.map