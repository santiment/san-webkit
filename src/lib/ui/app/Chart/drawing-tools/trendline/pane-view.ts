import type { TViewPoint } from '../types.js'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js'
import { TrendlinePaneRenderer } from './renderer.js'

export class TrendlinePaneView extends DrawingPaneView {
  public get viewPoints(): [TViewPoint, TViewPoint] {
    return this._source.viewPoints as [TViewPoint, TViewPoint]
  }

  public strokeColor: string = getBrowserCssVariable('waterloo')

  protected _renderer: DrawingCompositePaneRenderer = new DrawingCompositePaneRenderer([
    new TrendlinePaneRenderer(this),

    new HandleRenderer(this, { pointIndices: [0, 0] }),

    new HandleRenderer(this, { pointIndices: [1, 1] }),
  ])

  update() {}
}
