import type { TViewPoint } from '../types.js'

import { getBrowserCssVariable } from '$ui/utils/index.js'

import { DrawingPaneView } from '../_core/pane-view.js'
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js'
import { HorizontalLinePaneRenderer } from './renderer.js'

export class HorizontalLinePaneView extends DrawingPaneView {
  public get viewPoints(): [TViewPoint] {
    return this._source.viewPoints as [TViewPoint]
  }

  public strokeColor: string = getBrowserCssVariable('waterloo')
  public isSelected: boolean = true

  protected _renderer: DrawingCompositePaneRenderer = new DrawingCompositePaneRenderer([
    new HorizontalLinePaneRenderer(this),

    new HandleRenderer(this, { pointIndices: [0, 0] }),
  ])

  public update() {}

  public move(diffXY: [number, number]): void {
    this.movePoint(0, 0, 0, diffXY[1])
  }

  public renderer() {
    return this._renderer
  }
}
