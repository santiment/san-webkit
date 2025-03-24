import { createStepSchema } from '../types.js';
import Form from './ui/index.svelte';
export const STEP_NOTIFICATIONS_PRIVACY_SCHEMA = createStepSchema({
    name: 'notifications-privacy',
    ui: {
        title: 'Set up Notifications and Privacy',
        label: 'Notification & Privacy',
        description: 'Choose one or multiple alert methods',
        Form,
    },
    initState() {
        return { channel: [], isPublic: false };
    },
    validate(state) {
        return state.channel.length > 0;
    },
    reduceToApi(apiAlert, state) {
        const { channel, ...rest } = state;
        Object.assign(apiAlert, rest);
        Object.assign(apiAlert.settings, { channel });
        return apiAlert;
    },
});
