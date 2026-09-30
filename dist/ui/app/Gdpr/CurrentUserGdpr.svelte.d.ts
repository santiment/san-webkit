import type { ComponentProps, Snippet } from 'svelte';
import Gdpr from './Gdpr.svelte';
type TProps = {
    class?: string;
    onAccept: ComponentProps<typeof Gdpr>['onAccept'];
    children: Snippet;
};
declare const CurrentUserGdpr: import("svelte").Component<TProps, {}, "">;
type CurrentUserGdpr = ReturnType<typeof CurrentUserGdpr>;
export default CurrentUserGdpr;
