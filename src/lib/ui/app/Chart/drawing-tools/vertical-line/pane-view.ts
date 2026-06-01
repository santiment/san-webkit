import type { TViewPoint } from '../types.js'
import type { TLineOptions } from '../trendline/primitive.js'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js'
import { VerticalLinePaneRenderer } from './renderer.js'

export class VerticalLinePaneView extends DrawingPaneView {
  public get viewPoints(): [TViewPoint] {
    return this._source.viewPoints as [TViewPoint]
  }

  public get options() {
    return this._source.options as any as TLineOptions
  }

  public strokeColor: string = getBrowserCssVariable('waterloo')
  public isSelected: boolean = true

  protected _renderer: DrawingCompositePaneRenderer = new DrawingCompositePaneRenderer([
    new VerticalLinePaneRenderer(this),

    new HandleRenderer(this, { pointIndices: [0, 0] }),
  ])

  public update() {}

  public move(diffXY: [number, number]): void {
    this.movePoint(0, 0, diffXY[0], 0)
  }
}
