import type { Selected } from 'bits-ui';
import { Select } from 'bits-ui';
declare class __sveltets_Render<T> {
    props(): {
        items: Selected<T>[];
        selected?: Selected<T> | undefined;
        onSelectedChange?: ((value: Selected<T> | undefined) => void) | undefined;
        triggerClass?: string;
        contentClass?: string;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "selected";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T>['events']>;
    }): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Select: $$IsomorphicComponent;
type Select<T> = InstanceType<typeof Select<T>>;
export default Select;
