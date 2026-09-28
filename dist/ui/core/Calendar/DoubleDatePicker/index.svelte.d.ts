import type { ComponentProps } from 'svelte';
import Popover from '../../Popover/index.js';
type TProps = {
    dates: [Date, Date];
    buttonClass?: string;
    rootClass?: string;
    onChange: (dates: [Date, Date]) => void;
    portalTo?: ComponentProps<typeof Popover>['portalTo'];
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
