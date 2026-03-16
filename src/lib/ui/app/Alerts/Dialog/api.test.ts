import { describe, test, expect } from 'vitest'

import { UniQuery } from '$lib/api/executor.js'

import { mutateDeleteAlert, mutateSaveAlert, type TSaveAlertProps } from './api.js'
import { assetAlert } from './testutils/alertMocks.js'

describe('mutateSaveAlert', async () => {
  test('asset alert', async () => {
    const query = UniQuery(fetch)
    const { id } = await mutateSaveAlert(query)({
      id: null,
      ...assetAlert,
    } as TSaveAlertProps)

    expect(id).toBeGreaterThan(0)

    const res = await mutateDeleteAlert(query)({ id })
    expect(res.id).toBeGreaterThan(0)
  })
})
