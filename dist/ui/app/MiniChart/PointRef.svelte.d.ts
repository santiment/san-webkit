declare class __sveltets_Render<GData extends Record<string, any>> {
    props(): {
        class?: string;
        target: number;
        data: GData[];
        points: string[];
        getDate: (data: GData) => Date;
    };
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <GData extends Record<string, any>>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<GData>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<GData>['props']>, ReturnType<__sveltets_Render<GData>['events']>, ReturnType<__sveltets_Render<GData>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<GData>['bindings']>;
    } & ReturnType<__sveltets_Render<GData>['exports']>;
    <GData extends Record<string, any>>(internal: unknown, props: ReturnType<__sveltets_Render<GData>['props']> & {}): ReturnType<__sveltets_Render<GData>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const PointRef: $$IsomorphicComponent;
type PointRef<GData extends Record<string, any>> = InstanceType<typeof PointRef<GData>>;
export default PointRef;
