import type { BaseTableColumn } from './types.js';
declare class __sveltets_Render<GItem extends Record<string, unknown>, GColumn extends BaseTableColumn<GItem>> {
    props(): {
        items: GItem[];
        columns: GColumn[];
        class?: string;
        headerClass?: string;
        bodyClass?: string;
        headerRowClass?: string;
        bodyRowClass?: string;
    };
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <GItem extends Record<string, unknown>, GColumn extends BaseTableColumn<GItem>>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<GItem, GColumn>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<GItem, GColumn>['props']>, ReturnType<__sveltets_Render<GItem, GColumn>['events']>, ReturnType<__sveltets_Render<GItem, GColumn>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<GItem, GColumn>['bindings']>;
    } & ReturnType<__sveltets_Render<GItem, GColumn>['exports']>;
    <GItem extends Record<string, unknown>, GColumn extends BaseTableColumn<GItem>>(internal: unknown, props: ReturnType<__sveltets_Render<GItem, GColumn>['props']> & {}): ReturnType<__sveltets_Render<GItem, GColumn>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any, any>['bindings']>;
}
declare const DataTable: $$IsomorphicComponent;
type DataTable<GItem extends Record<string, unknown>, GColumn extends BaseTableColumn<GItem>> = InstanceType<typeof DataTable<GItem, GColumn>>;
export default DataTable;
