import type { ComponentProps } from 'svelte'
import type { TApiAlert } from '../types.js'
import type { TAssetAlertSettings } from '../categories/asset/schema.js'
import type { TAssetSlug } from '$lib/ctx/assets/api.js'
import type { TConditionsAlertSettings } from '../form-steps/metric-conditions/schema.js'

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

  test.only('prefilled asset alert', async () => {
    const alert: Partial<TApiAlert<TAssetAlertSettings & TConditionsAlertSettings>> = {
      cooldown: '2w',
      description:
        'Notify me when the price of Ethereum, Tether [on Ethereum] goes above 1$ compared to 1 day(s) earlier. Send me notifications every 1 day(s) via email.',
      isActive: true,
      isFrozen: false,
      isPublic: false,
      isRepeating: true,
      settings: {
        type: 'metric_signal',
        target: {
          slug: ['ethereum', 'tether'] as TAssetSlug[],
        },
        operation: {
          above: 1,
        },
        channel: ['email'],
        metric: 'price_usd',
        time_window: '3w',
      },
      title: 'Ethereum, Tether [on Ethereum] price goes above 1$ compared to 1 day(s) earlier',
    }

    const dialog = renderAlertDialog({ alert })

    const submitBtn = dialog.getByRole('button', { name: 'Create alert' })

    expect(submitBtn).toBeInTheDocument()
    expect(submitBtn).not.toBeDisabled()
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
