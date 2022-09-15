import { track } from './../../../analytics';
import { mutateCancelSubscription } from './../../../api/subscription';
import { subscription$ } from './../../../stores/subscription';
import { notifications$ } from './../../../ui/Notifications';
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
export function startCancellationFlow(subscription, feedback, closeDialog) {
    track.event(Event.GiveFeedback, { feedback });
    return mutateCancelSubscription(subscription.id)
        .then(() => {
        closeDialog();
        subscription$.refetch();
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
        });
    });
}
//# sourceMappingURL=flow.js.map