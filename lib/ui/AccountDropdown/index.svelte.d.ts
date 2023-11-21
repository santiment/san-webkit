import { SvelteComponentTyped } from "svelte";
import { AccountStatusType } from './../../ui/AccountStatus.svelte';
declare const __propDef: {
    props: {
        currentUser: any;
        onLogoutClick: any;
        isOpened?: boolean | undefined;
        tooltipClass?: string | undefined;
        variant?: AccountStatusType.First | undefined;
        isAppUpdateAvailable?: boolean | undefined;
        version?: string | undefined;
        isShowingFollowers?: boolean | undefined;
        onOldVersionClick?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy: () => void;
            };
        };
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
