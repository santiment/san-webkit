var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getTodaysEnd } from './../../lib/utils/dates.js';
export function mockUser(currentUser) {
    if (!currentUser)
        return null;
    var _a = currentUser.id, id = _a === void 0 ? 42 : _a, _b = currentUser.name, name = _b === void 0 ? 'Santiment Mock User' : _b, _c = currentUser.username, username = _c === void 0 ? 'santiment.mock.user' : _c, _d = currentUser.email, email = _d === void 0 ? 'user.mock@santiment.net' : _d, _e = currentUser.avatar, avatar = _e === void 0 ? false : _e, _f = currentUser.moderator, moderator = _f === void 0 ? false : _f, _g = currentUser.sanBalance, sanBalance = _g === void 0 ? 0 : _g, _h = currentUser.isEligibleForSanbaseTrial, isEligibleForSanbaseTrial = _h === void 0 ? false : _h, _j = currentUser.plan, plan = _j === void 0 ? null : _j, promoCodes = currentUser.promoCodes, overwrite = currentUser.overwrite;
    var subscriptions = [];
    if (plan) {
        var _k = plan.pro, pro = _k === void 0 ? false : _k, _l = plan.proPlus, proPlus = _l === void 0 ? false : _l, _m = plan.monthly, monthly = _m === void 0 ? false : _m, _o = plan.yearly, yearly = _o === void 0 ? false : _o, _p = plan.trial, trial = _p === void 0 ? false : _p, trialDaysLeft = plan.trialDaysLeft, cancelledInDays = plan.cancelledInDays;
        if (!pro && !proPlus) {
            return document.write('Plan should have "pro" or "proPlus" value set to "true"');
        }
        if (!monthly && !yearly) {
            return document.write('Plan should have "monthly" or "yearly" value set to "true"');
        }
        var trialEnd = null;
        if (trial) {
            var date = getTodaysEnd();
            if (trialDaysLeft === undefined) {
                date.setDate(date.getDate() + 13);
            }
            else {
                date.setDate(date.getDate() + trialDaysLeft - 1);
            }
            trialEnd = date.toISOString();
        }
        var currentPeriodEndDate = getTodaysEnd();
        if (cancelledInDays === undefined) {
            currentPeriodEndDate.setDate(currentPeriodEndDate.getDate() + 30);
        }
        else {
            currentPeriodEndDate.setDate(currentPeriodEndDate.getDate() + cancelledInDays);
        }
        if (pro || proPlus) {
            subscriptions[0] = {
                status: 'ACTIVE',
                trialEnd: trialEnd,
                cancelAtPeriodEnd: cancelledInDays !== undefined,
                currentPeriodEnd: currentPeriodEndDate.toISOString(),
                id: '63074',
                plan: {
                    amount: 52900,
                    id: '202',
                    interval: yearly ? 'year' : 'month',
                    name: proPlus ? 'PRO_PLUS' : 'PRO',
                    product: { id: '2' },
                },
            };
        }
    }
    return __assign({ id: id, name: name, username: username, email: email, avatarUrl: avatar
            ? 'https://production-sanbase-images.s3.amazonaws.com/uploads/242dc675b4de34d792f5cc7f29627fa67168b3e2284077163916237facf058e8_1671661438252_Optimism%20%28OP%29%20%5B23.23.48%2C%2021%20Dec%2C%202022%5D.png'
            : null, sanBalance: sanBalance, isEligibleForSanbaseTrial: isEligibleForSanbaseTrial, isModerator: moderator, subscriptions: subscriptions, promoCodes: promoCodes }, overwrite);
}
export var CURRENT_USER_MOCK = {
    schema: 'currentUser',
    query: 'currentUser',
    mock: mockUser,
};
