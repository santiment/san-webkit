import type { TAsset } from '../../../ctx/assets/api.js';
import { type Snippet } from 'svelte';
import { type TabKey } from './Tabs.svelte';
declare class __sveltets_Render<T> {
    props(): {
        mapItems: (assets: TAsset[]) => T[];
        onTabSelect?: ((tab: TabKey) => void) | undefined;
        hasSearch?: boolean;
        children: Snippet<[{
            assets: T[];
        }]>;
    };
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Layout: $$IsomorphicComponent;
type Layout<T> = InstanceType<typeof Layout<T>>;
export default Layout;
