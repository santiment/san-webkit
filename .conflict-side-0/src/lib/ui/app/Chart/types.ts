export const Mode = {
  DRAG: 0,
  SHIFT: 1,
  ZOOM: 2,
} as const

export type TMode = (typeof Mode)[keyof typeof Mode]

export const ModeOptions = {
  [Mode.DRAG]: {
    handleScroll: { mouseWheel: false, pressedMouseMove: true },
    handleScale: { mouseWheel: false },
  },
  [Mode.SHIFT]: {
    handleScroll: { mouseWheel: true, pressedMouseMove: false },
    handleScale: { mouseWheel: true },
  },
  [Mode.ZOOM]: {
    handleScroll: { mouseWheel: false, pressedMouseMove: false },
    handleScale: { mouseWheel: true },
  },
}
