export const enum Field {
  LEFT = 0,
  TOP = 1,
  WIDTH = 2,
  HEIGHT = 3,
  NODE = 4,
}

/**  [left, top, width, height, htmlNode] */
export type SnapItem = [number, number, number, number, HTMLElement]

export type Margin = [number, number]

export type SnapGridController = {
  gridWidth: number
  layout: SnapItem[]
  cols: number
  margin: Margin

  columnSize: number
  rowSize: number

  maxCols: number
  minCols: number
  maxRows: number
  minRows: number

  mount: (gridContainerNode: HTMLElement) => void
  resize: (gridWidth: number) => void
  updateLayout: (layout: SnapItem[]) => void

  onDragStart: (e: MouseEvent) => void
}
