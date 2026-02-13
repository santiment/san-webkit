import type { ComponentProps } from 'svelte'

import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import { noop } from 'rxjs'

import { CTX as DIALOG_CTX_KEY, type TDialogProps } from '$ui/core/Dialog/dialogs.js'

import AlertsDialog from './AlertsDialog.svelte'
import { assetAlert } from './testutils/alertMocks.js'

describe('AlertsDialog', async () => {
  test('with no props', async () => {
    const res = renderAlertDialog()

    const header = res.getByText('Create custom alerts')
    expect(header).toBeInTheDocument()

    const categoriesHeader = res.getByText('Choose an alert category below:')
    expect(categoriesHeader).toBeInTheDocument()
  })

  test('prefilled asset alert', async () => {
    const dialog = renderAlertDialog({ alert: assetAlert })

    const submitBtn = dialog.getByRole('button', { name: 'Create alert' })

    expect(submitBtn).toBeInTheDocument()
    expect(submitBtn).not.toBeDisabled()

    const selectedHeading = await dialog.findByText('Selected', {}, { timeout: 10_000 })

    expect(selectedHeading).toBeInTheDocument()
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
