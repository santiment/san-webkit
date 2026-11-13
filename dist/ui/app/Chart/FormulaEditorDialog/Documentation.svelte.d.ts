import type { TDocMetric } from '../../san-formulas/language/definitions.js';
type TProps = {
    definition: {
        icon?: string;
        label: string;
        documentation: string;
        metric?: TDocMetric;
    };
};
declare const Documentation: import("svelte").Component<TProps, {}, "">;
type Documentation = ReturnType<typeof Documentation>;
export default Documentation;
