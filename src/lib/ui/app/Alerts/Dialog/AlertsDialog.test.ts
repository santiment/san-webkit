import type { ComponentProps } from 'svelte'

import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import { noop } from 'rxjs'

import { CTX as DIALOG_CTX_KEY, type TDialogProps } from '$ui/core/Dialog/dialogs.js'

import AlertsDialog from './AlertsDialog.svelte'

describe('AlertsDialog', async () => {
  test('with no props', async () => {
    const res = renderAlertDialog()

    const header = res.getByText('Create custom alerts')
    expect(header).toBeInTheDocument()

    const categoriesHeader = res.getByText('Choose an alert category below:')
    expect(categoriesHeader).toBeInTheDocument()
  })
})

function renderAlertDialog(
  props: Omit<ComponentProps<typeof AlertsDialog>, keyof TDialogProps> = {},
) {
  const dialogProps = { Controller: { close: noop }, resolve: noop, reject: noop } as TDialogProps
  const context = mockDialogCtx()

  return render(AlertsDialog, { context, props: { ...dialogProps, ...props } })
}

function mockDialogCtx() {
  return new Map([
    [DIALOG_CTX_KEY, { Controller: { close: noop } }],
    [
      'webkit_useMetricsRestrictionsCtx',
      {
        MetricRestrictions: {
          get $() {
            return {}
          },
        },
      },
    ],
  ])
}
