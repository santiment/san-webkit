import { type TDialogProps } from '../../../core/Dialog/index.js';
type TProps = {
    url: string;
    onScheduled?: () => void;
};
type $$ComponentProps = TDialogProps & TProps;
declare const CalendlyDialog: import("svelte").Component<$$ComponentProps, {}, "">;
type CalendlyDialog = ReturnType<typeof CalendlyDialog>;
export default CalendlyDialog;
