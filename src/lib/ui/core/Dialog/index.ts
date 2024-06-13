export { default } from './Dialog.svelte'
export { dialogs$, getDialogControllerCtx } from './dialogs.js'

export type TDialogResolve<T = undefined> = T extends undefined ? () => void : (value: T) => void
export type TDialogReject<T = undefined> = T extends undefined ? () => void : (value: T) => void
