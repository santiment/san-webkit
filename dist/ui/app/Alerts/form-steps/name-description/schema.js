import { createStepSchema } from '../types.js';
import Form from './ui/index.svelte';
import Legend from './ui/Legend.svelte';
export const STEP_NAME_DESCRIPTION_SCHEMA = createStepSchema({
    name: 'name-description',
    ui: {
        title: 'Check name and description',
        label: 'Name & Description',
        description: 'Name and description are generated automatically, but you can change it at your will',
        Form,
        Legend,
    },
    initState(apiAlert) {
        const { title, description } = apiAlert ?? {};
        return { title: title ?? '', description: description ?? '' };
    },
    validate(state) {
        return !!state.title;
    },
    reduceToApi(apiAlert, state) {
        Object.assign(apiAlert, state);
        return apiAlert;
    },
});
