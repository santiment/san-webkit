import { createPopper } from '@popperjs/core'

export function setPosition({ $datepicker, $target, $pointer, done }, range) {
  let popper = createPopper($target, $datepicker, {
    placement: 'top',
    modifiers: [
      {
        name: 'flip',
        options: {
          padding: {
            top: 64,
          },
        },
      },
      {
        name: 'offset',
        options: {
          offset: range ? [37, 20] : [76, 20],
        },
      },
      {
        name: 'arrow',
        options: {
          element: $pointer,
        },
      },
    ],
  })

  return function completeHide() {
    popper.destroy()
    done()
  }
}
