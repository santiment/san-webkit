import { Switch, type SwitchRootProps } from 'bits-ui';
type $$ComponentProps = SwitchRootProps & {
    class?: string;
    icon?: {
        active: {
            id: string;
            w: number;
            h?: number;
        };
        inactive: {
            id: string;
            w: number;
            h?: number;
        };
    };
};
declare const Switch: import("svelte").Component<$$ComponentProps, {}, "">;
type Switch = ReturnType<typeof Switch>;
export default Switch;
