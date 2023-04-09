declare namespace SAN {
  type DialogController = import('../ui/Dialog/dialogs').DialogController
  type DialogLock = import('../ui/Dialog/dialogs').DialogLock

  declare namespace Dialog {
    type Promise = DialogController
    type Lock = DialogLock

    type Ctx = import('../ui/Dialog/ctx').DialogCtxType

    type Props = {
      i: number
      DialogPromise: Promise
    }
  }
}
