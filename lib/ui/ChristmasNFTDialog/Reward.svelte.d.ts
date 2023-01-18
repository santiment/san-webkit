import { SvelteComponentTyped } from "svelte";
import { Page } from './types';
declare const __propDef: {
    props: {
        page: Page;
        insights?: never[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RewardProps = typeof __propDef.props;
export type RewardEvents = typeof __propDef.events;
export type RewardSlots = typeof __propDef.slots;
export default class Reward extends SvelteComponentTyped<RewardProps, RewardEvents, RewardSlots> {
}
export {};
