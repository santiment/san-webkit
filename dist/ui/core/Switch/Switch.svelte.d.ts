import { Switch, type SwitchRootProps } from 'bits-ui';
type Icon = {
    id: string;
    w: number;
    h?: number;
};
type $$ComponentProps = SwitchRootProps & {
    class?: string;
    icon?: {
        active?: Icon;
        inactive?: Icon;
    };
};
declare const Switch: import("svelte").Component<$$ComponentProps, {}, "">;
type Switch = ReturnType<typeof Switch>;
export default Switch;
