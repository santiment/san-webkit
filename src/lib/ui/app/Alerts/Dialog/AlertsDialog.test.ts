import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/svelte'

import { CTX as DIALOG_CTX_KEY } from '$ui/core/Dialog/dialogs.js'

import AlertsDialog from './AlertsDialog.svelte'

describe('AlertsDialog', async () => {
  const context = mockDialogCtx()

  test('with no props', async () => {
    const res = render(AlertsDialog, { context })

    const header = res.getByText('Create custom alerts')
    expect(header).toBeInTheDocument()

    const categoriesHeader = res.getByText('Choose an alert category below:')
    expect(categoriesHeader).toBeInTheDocument()
  })
})

function mockDialogCtx() {
  return new Map([
    [DIALOG_CTX_KEY, { Controller: { close: () => {} } }],
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
