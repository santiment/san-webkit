import type { Snippet } from 'svelte';
declare class __sveltets_Render<GItem extends {
    insertText: string;
    icon?: string;
    label: string;
    metric?: any;
}> {
    props(): {
        title: string;
        icon: string;
        indexOffset?: number;
        items: GItem[];
        children: Snippet<[GItem]>;
    };
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <GItem extends {
        insertText: string;
        icon?: string;
        label: string;
        metric?: any;
    }>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<GItem>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<GItem>['props']>, ReturnType<__sveltets_Render<GItem>['events']>, ReturnType<__sveltets_Render<GItem>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<GItem>['bindings']>;
    } & ReturnType<__sveltets_Render<GItem>['exports']>;
    <GItem extends {
        insertText: string;
        icon?: string;
        label: string;
        metric?: any;
    }>(internal: unknown, props: ReturnType<__sveltets_Render<GItem>['props']> & {}): ReturnType<__sveltets_Render<GItem>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Definitions: $$IsomorphicComponent;
type Definitions<GItem extends {
    insertText: string;
    icon?: string;
    label: string;
    metric?: any;
}> = InstanceType<typeof Definitions<GItem>>;
export default Definitions;
