import type {
  Coordinate,
  IPrimitivePaneRenderer,
  IPrimitivePaneView,
  PrimitiveHoveredItem,
  PrimitivePaneViewZOrder,
} from '@santiment-network/chart-next'
import type { DrawingPrimitive } from './primitive.js'
import type { TViewPoint } from '../types.js'

import { DrawingAxisPaneRenderer, type TPaneRenderer } from './renderer.js'

export abstract class DrawingPaneView implements IPrimitivePaneView {
  protected _source: DrawingPrimitive<any>
  protected abstract _renderer: TPaneRenderer

  public abstract get viewPoints(): TViewPoint[]

  public isHovered = false
  public isSelected = false

  constructor(source: DrawingPrimitive<any>) {
    this._source = source
  }

  abstract update(): void

  abstract renderer(): IPrimitivePaneRenderer | null

  public hitTest(x: Coordinate, y: Coordinate): PrimitiveHoveredItem | null {
    const result = this._renderer.hitTest(x, y)

    if (!result) {
      this.isHovered = false
      return null
    }

    this.isHovered = true

    return {
      // @ts-expect-error
      externalId: {
        primitive: this._source,
        hit: result,
      },
      cursorStyle: 'pointer',
      zOrder: 'normal',
    }
  }

  public zOrder(): PrimitivePaneViewZOrder {
    return this.isSelected ? 'top' : 'normal'
  }

  public move(diffXY: [number, number], handleIndices?: [number, number]) {
    const [diffX, diffY] = diffXY

    if (handleIndices !== undefined) {
      this.movePoint(handleIndices[0], handleIndices[1], diffX, diffY)
      return
    }

    for (let i = 0; i < this.viewPoints.length; i++) {
      this.movePoint(i, i, diffX, diffY)
    }
  }

  protected movePoint(xIndex: number, yIndex: number, diffX: number, diffY: number) {
    const { viewPoints, finalizedViewPoints } = this._source

    viewPoints[xIndex].x = (finalizedViewPoints[xIndex].x! + diffX) as Coordinate
    viewPoints[yIndex].y = (finalizedViewPoints[yIndex].y! + diffY) as Coordinate
  }
}

export abstract class DrawingAxisPaneView implements IPrimitivePaneView {
  _source: DrawingPrimitive<any>
  _points: (Coordinate | null)[] = []
  _vertical: boolean = false

  constructor(source: DrawingPrimitive<any>) {
    this._source = source
  }

  update() {
    this._points = this._source.viewPoints.map((coordinate) =>
      this._vertical ? coordinate.y! : coordinate.x!,
    )
  }

  renderer() {
    return this._source.isSelected()
      ? new DrawingAxisPaneRenderer(
          this._points,
          this._source.options.axisLabels.bg,
          this._vertical,
        )
      : null
  }
  zOrder(): PrimitivePaneViewZOrder {
    return 'bottom'
  }
}

export class DrawingPriceAxisPaneView extends DrawingAxisPaneView {
  _vertical: boolean = true
}

export class DrawingTimeAxisPaneView extends DrawingAxisPaneView {}
