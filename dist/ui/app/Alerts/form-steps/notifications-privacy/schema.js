import { getChannelFromApi, reduceChannelToApi } from '../../channels.js';
import { createStepSchema } from '../types.js';
import Form from './ui/index.svelte';
import Legend from './ui/Legend.svelte';
export const STEP_NOTIFICATIONS_PRIVACY_SCHEMA = createStepSchema({
    name: 'notifications-privacy',
    ui: {
        title: 'Set up Notifications and Privacy',
        label: 'Notification & Privacy',
        description: 'Choose one or multiple alert methods',
        Form,
        Legend,
    },
    initState(apiAlert) {
        return {
            channel: getChannelFromApi(apiAlert?.settings?.channel) ?? {},
            isPublic: apiAlert?.isPublic ?? false,
            isRepeating: apiAlert?.isRepeating ?? true,
            cooldown: apiAlert?.cooldown ?? '1d',
        };
    },
    validate(state) {
        return Object.values(state.channel).some((value) => !!value);
    },
    reduceToApi(apiAlert, state) {
        const { channel, ...rest } = state;
        Object.assign(apiAlert, rest);
        Object.assign(apiAlert.settings, { channel: reduceChannelToApi(channel) });
        return apiAlert;
    },
});
