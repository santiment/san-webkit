import { writable } from 'svelte/store';
import { Cache } from '@/api/cache';
if (typeof window !== 'undefined') {
    if (!window.__SESSION__)
        window.__SESSION__ = {};
}
export const getSessionValue = () => window.__SESSION__;
export const setSessionValue = (value) => Object.assign(getSessionValue(), value);
export function QueryStore(defaultValue, query, schema, DEFAULT = defaultValue) {
    const { subscribe, set: _set } = writable(defaultValue);
    const set = (value) => (_set(value), value);
    return {
        DEFAULT,
        fetched: false,
        set,
        subscribe(run, invalidate) {
            if (process.browser && !this.fetched)
                this.query();
            return subscribe(run, invalidate);
        },
        clear() {
            Cache.delete(schema);
            this.fetched = false;
        },
        query() {
            if (!process.browser)
                return Promise.reject('Can not fetch during SSR');
            this.fetched = true;
            return query()
                .then(set)
                .catch((e) => {
                console.error(e);
                this.resetToDefault();
                return Promise.reject(e);
            });
        },
        refetch() {
            if (this.fetched === false)
                return;
            this.clear();
            return this.query();
        },
        resetToDefault() {
            set(this.DEFAULT);
        },
    };
}
//# sourceMappingURL=utils.js.map