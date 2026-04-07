import type {
  Coordinate,
  IPrimitivePaneRenderer,
  IPrimitivePaneView,
  PrimitiveHoveredItem,
  PrimitivePaneViewZOrder,
} from '@santiment-network/chart-next'
import type { DrawingPrimitive } from './primitive.js'

import { DrawingAxisPaneRenderer, type TPaneRenderer } from './renderer.js'
import type { TViewPoint } from '../types.js'

export abstract class DrawingPaneView implements IPrimitivePaneView {
  protected _source: DrawingPrimitive<any>
  protected _renderer!: TPaneRenderer

  public points!: TViewPoint[]
  public isHovered = false
  public isSelected = false

  constructor(source: DrawingPrimitive<any>) {
    this._source = source
  }

  public hitTest(x: Coordinate, y: Coordinate): PrimitiveHoveredItem | null {
    const result = this._renderer.hitTest(x, y)

    if (!result) {
      this.isHovered = false
      return null
    }

    this.isHovered = true

    return {
      // @ts-expect-error
      externalId: this._source,
      cursorStyle: 'pointer',
      zOrder: 'normal',
    }
  }

  public zOrder(): PrimitivePaneViewZOrder {
    return this.isSelected ? 'top' : 'normal'
  }

  public move(diffXY: [number, number], handleId?: number) {
    if (handleId !== undefined) {
      return
    }

    const [diffX, diffY] = diffXY

    const { viewPoints, finalizedViewPoints } = this._source

    for (let i = 0; i < this.points.length; i++) {
      const viewPoint = viewPoints[i]
      const finalizedViewPoint = finalizedViewPoints[i]

      viewPoint.x = (finalizedViewPoint.x! + diffX) as Coordinate
      viewPoint.y = (finalizedViewPoint.y! + diffY) as Coordinate
    }
  }

  abstract update(): void

  abstract renderer(): IPrimitivePaneRenderer | null
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
