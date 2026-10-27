import { deleteSavedValue, getSavedJson, saveJson } from '../../utils/localStorage/index.js';
import { trackEvent } from './index.js';
const LOGIN_METHOD = 'LOGIN_METHOD';
export function saveLoginMethod(method) {
    return saveJson(LOGIN_METHOD, { method, timestamp: Date.now() });
}
export function getSavedLoginMethod() {
    const value = getSavedJson(LOGIN_METHOD);
    deleteSavedValue(LOGIN_METHOD);
    return value;
}
export function trackAuthStart(method) {
    const date = new Date();
    saveLoginMethod(method);
    return trackEvent('auth_start', {
        method,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        timestamp: +date,
        source_url: window.location.href,
        source_search_params: window.location.search,
        referrer: document.referrer,
    });
}
export function trackAuthFinish(method, isNewUserSignup) {
    const date = new Date();
    return trackEvent('auth_finish', {
        method,
        is_new_user_signup: isNewUserSignup,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        timestamp: +date,
        source_url: window.location.href,
        source_search_params: window.location.search,
        referrer: document.referrer,
    });
}
export function trackLoginStart(method) {
    const date = new Date();
    saveLoginMethod(method);
    return trackEvent('login_start', {
        method,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        timestamp: +date,
        source_url: window.location.href,
    });
}
export const trackLoginFinish = (method) => trackEvent('login_finish', { method });
export function trackSignupStart(method) {
    saveLoginMethod(method);
    return trackEvent('signup_start', {
        method,
        source_url: window.location.href,
    });
}
export const trackSignupFinish = (method, trackers) => trackEvent('signup_finish', { method }, trackers);
export function trackAuth(method, isSignUp) {
    trackAuthStart(method);
    if (isSignUp) {
        trackSignupStart(method);
    }
    else {
        trackLoginStart(method);
    }
}
