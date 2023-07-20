import { track } from './../../../analytics/index.js';
import { mutateCancelSubscription } from './../../../api/subscription.js';
import { notifications$ } from './../../../ui/Notifications/index.js';
export const REASONS = [
    'Found other tool that fits my needs better',
    'I don’t need all the features',
    'Too difficult to use',
    'Too expensive',
    'Other',
];
export var Screen;
(function (Screen) {
    Screen[Screen["Suggestions"] = 0] = "Suggestions";
    Screen[Screen["Feedback"] = 1] = "Feedback";
})(Screen || (Screen = {}));
export var Event;
(function (Event) {
    Event["SelectReason"] = "cancel_subscribtion_select_reason";
    Event["GiveFeedback"] = "cancel_subscribtion_give_feedback";
})(Event || (Event = {}));
const formatError = (msg) => msg.replace('GraphQL error: ', '');
export function startCancellationFlow(customer$, subscription, feedback, closeDialog) {
    if (feedback) {
        track.event(Event.GiveFeedback, { feedback });
    }
    return mutateCancelSubscription(subscription.id)
        .then(() => {
        closeDialog();
        customer$.refetch();
        notifications$.show({
            type: 'success',
            title: 'You have successfully canceled your subscription.',
            description: 'We will miss you!',
        });
    })
        .catch((e) => {
        const { message } = e[0] || e;
        notifications$.show({
            type: 'error',
            title: 'Error during the cancellation',
            description: formatError(message),
            // actions: contactAction,
        });
    });
}
//# sourceMappingURL=flow.js.map