import type { CreateDialogProps } from '@melt-ui/svelte';
import { type Snippet } from 'svelte';
type TProps = {
    class?: string;
    children: Snippet<[{
        close: () => void;
    }]>;
    onOpenChange: CreateDialogProps['onOpenChange'];
};
declare const MobileLandscapeModal: import("svelte").Component<TProps, {}, "">;
type MobileLandscapeModal = ReturnType<typeof MobileLandscapeModal>;
export default MobileLandscapeModal;
