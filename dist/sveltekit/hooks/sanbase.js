import {} from '@sveltejs/kit';
export const APP_VERSION_COOKIE = `_SB_AV`;
export var AppVersion;
(function (AppVersion) {
    AppVersion["LITE"] = "LITE";
    AppVersion["CLASSIC"] = "CLASSIC";
})(AppVersion || (AppVersion = {}));
export const sanbaseVersionHandle = async ({ event, resolve }) => {
    const currentUser = event.locals.customer?.currentUser;
    let appVersionCookie = event.cookies.get(APP_VERSION_COOKIE);
    if (currentUser) {
        const savedVersion = currentUser.settings.sanbaseVersion === AppVersion.LITE ? AppVersion.LITE : AppVersion.CLASSIC;
        appVersionCookie = appVersionCookie || savedVersion || AppVersion.LITE;
    }
    else {
        appVersionCookie = appVersionCookie || AppVersion.LITE;
    }
    event.cookies.set(APP_VERSION_COOKIE, appVersionCookie, {
        path: '/',
        maxAge: 31536000,
        httpOnly: false,
    });
    event.locals.isLiteVersion = appVersionCookie === AppVersion.LITE;
    return resolve(event);
};
