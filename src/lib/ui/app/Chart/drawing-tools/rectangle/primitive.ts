import type { TViewPoint } from '../types.js'

import { DrawingPrimitive } from '../_core/primitive.js'
import { RectanglePaneView } from './pane-view.js'

export default class RectanglePrimitive extends DrawingPrimitive<'rectangle'> {
  public __type = 'rectangle' as const

  protected _paneViews: RectanglePaneView[] = [new RectanglePaneView(this)]

  public updateEndPoint(point: TViewPoint) {
    this.viewPoints[this.viewPoints.length - 1] = point

    this.requestUpdate()
  }

  protected sortViewPoints(): void {
    const [p1, p2] = this.viewPoints

    const [top, bottom] = p1.y! < p2.y! ? [p1.y, p2.y] : [p2.y, p1.y]
    const [left, right] = p1.x! < p2.x! ? [p1.x, p2.x] : [p2.x, p1.x]

    Object.assign(p1, { x: left, y: top })
    Object.assign(p2, { x: right, y: bottom })
  }
}
