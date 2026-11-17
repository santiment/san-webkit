import type { TBaseSchema } from '../schema.js';
import type { TBaseState } from '../../../../form-steps/index.svelte.js';
import type { Component } from 'svelte';
type TProps = {
    state: TBaseState<TBaseSchema>;
};
declare const Index: Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
