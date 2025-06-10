import { createStepSchema } from '../../../form-steps/types.js';
import Form from './ui/index.svelte';
import { getApiTarget, getInitTrendTarget, parseApiTarget } from './utils.js';
export const STEP_SELECT_TREND_SCHEMA = createStepSchema({
    name: 'select-trend',
    ui: {
        title: 'Select Social trend',
        label: 'Select Social trend',
        description: 'You can choose any social word, asset or watchlist',
        Form,
    },
    initState(apiAlert) {
        const { target, operation } = apiAlert?.settings || {};
        if (target && operation) {
            return { target: parseApiTarget(target) };
        }
        return {
            target: getInitTrendTarget('asset'),
        };
    },
    validate({ target }) {
        if (target.type === 'asset')
            return !!target.slugs.length;
        if (target.type === 'word')
            return !!target.words.length;
        return !!target.id;
    },
    reduceToApi(apiAlert, state) {
        Object.assign(apiAlert.settings, { type: 'trending_words' });
        Object.assign(apiAlert.settings, { target: getApiTarget(state.target) });
        Object.assign(apiAlert.settings, { operation: getApiOperation(state) });
        return apiAlert;
    },
});
function getApiOperation({ target }) {
    if (target.type === 'word')
        return 'trending_word';
    return 'trending_project';
}
