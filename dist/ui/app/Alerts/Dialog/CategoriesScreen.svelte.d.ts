import { type TAlertSchemaUnion } from '../categories/index.js';
type TProps = {
    onSelect: (schema: TAlertSchemaUnion) => void;
};
declare const CategoriesScreen: import("svelte").Component<TProps, {}, "">;
type CategoriesScreen = ReturnType<typeof CategoriesScreen>;
export default CategoriesScreen;
