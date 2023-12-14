import { SvelteComponentTyped } from "svelte";
import type { CurrentUser } from './types';
declare const __propDef: {
    props: {
        isNftWinner?: boolean | undefined;
        currentUser: CurrentUser | null;
        discountCode: undefined | string;
        isDiscountWinner?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InfoProps = typeof __propDef.props;
export type InfoEvents = typeof __propDef.events;
export type InfoSlots = typeof __propDef.slots;
export default class Info extends SvelteComponentTyped<InfoProps, InfoEvents, InfoSlots> {
}
export {};
