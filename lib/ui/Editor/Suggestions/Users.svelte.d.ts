import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        searchTerm?: string | undefined;
        href?: (({ id }: {
            id: any;
        }) => string) | undefined;
        label?: (({ username }: {
            username: any;
        }) => string) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type UsersProps = typeof __propDef.props;
export declare type UsersEvents = typeof __propDef.events;
export declare type UsersSlots = typeof __propDef.slots;
export default class Users extends SvelteComponentTyped<UsersProps, UsersEvents, UsersSlots> {
    get href(): ({ id }: {
        id: any;
    }) => string;
    get label(): ({ username }: {
        username: any;
    }) => string;
}
export {};
