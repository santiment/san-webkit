import type { TViewPoint } from '../types.js'
import type { TRectangleOptions } from './primitive.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js'
import { RectanglePaneRenderer } from './renderer.js'

export class RectanglePaneView extends DrawingPaneView {
  public get viewPoints(): [TViewPoint, TViewPoint] {
    return this._source.viewPoints as [TViewPoint, TViewPoint]
  }

  public get options() {
    return this._source.options as any as TRectangleOptions
  }

  protected _renderer: DrawingCompositePaneRenderer = new DrawingCompositePaneRenderer([
    new RectanglePaneRenderer(this),

    // top left
    new HandleRenderer(this, {
      pointIndices: [0, 0],
    }),

    // top right
    new HandleRenderer(this, {
      pointIndices: [1, 0],
    }),

    // bottom right
    new HandleRenderer(this, {
      pointIndices: [1, 1],
    }),

    // bottom left
    new HandleRenderer(this, {
      pointIndices: [0, 1],
    }),
  ])

  update() {}
}
