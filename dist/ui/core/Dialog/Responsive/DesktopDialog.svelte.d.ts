import type { Snippet } from 'svelte';
import type { CreateDialogProps } from '@melt-ui/svelte';
declare const DesktopDialog: import("svelte").Component<{
    class?: string;
    children: Snippet<[{
        close: (isForced?: boolean) => false | undefined;
    }]>;
    onOpenChange: CreateDialogProps["onOpenChange"];
}, {}, "">;
type DesktopDialog = ReturnType<typeof DesktopDialog>;
export default DesktopDialog;
