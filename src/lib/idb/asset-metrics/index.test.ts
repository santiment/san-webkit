import type { TAssetSlug } from '$lib/ctx/assets/api.js'

import * as fakeIndexdb from 'fake-indexeddb'
import { beforeEach, describe, expect, it } from 'vitest'

import { ApiMock } from '$lib/api/mock.js'

import { AliveAssetMetricsDatabases, getAssetMetricsDatabase } from './index.js'
import { deleteDatabase, getDatabaseInfo, type TDatabaseName } from '../manager.js'

Object.assign(globalThis, fakeIndexdb)

describe('Asset Metrics DB', () => {
  ApiMock.add('projectBySlug', {
    mock: () => ({
      availableMetrics: ['price_usd', 'volume_usd'],
    }),
  })

  beforeEach(() => {
    AliveAssetMetricsDatabases.forEach((db) => {
      db.close()
      deleteDatabase(db.name as TDatabaseName)
    })
    AliveAssetMetricsDatabases.clear()

    expect(AliveAssetMetricsDatabases.size).toBe(0)
  })

  it('Setup (registration)', async () => {
    const db = await getAssetMetricsDatabase('bitcoin' as TAssetSlug)
    const registeredDb = await getDatabaseInfo(db.name as TDatabaseName)

    expect(registeredDb).toBeTruthy()
    expect(db.version).toBe(registeredDb!.version)
  })

  it('Reusing alive DB', async () => {
    const db = await getAssetMetricsDatabase('bitcoin' as TAssetSlug)
    const sameDb = await getAssetMetricsDatabase('bitcoin' as TAssetSlug)

    expect(db).toBe(sameDb)
  })

  it('Syncing metrics data', async () => {})
})
