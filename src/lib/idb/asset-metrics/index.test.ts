import type { TAssetSlug } from '$lib/ctx/assets/api.js'

import * as fakeIndexdb from 'fake-indexeddb'
import { beforeEach, describe, expect, it } from 'vitest'

import { ApiMock } from '$lib/api/mock.js'

import {
  AliveAssetMetricsDatabases,
  getAssetMetricsDatabase,
  type TLocalMetricData,
} from './index.js'
import { deleteDatabase, getDatabaseInfo, type TDatabaseName } from '../manager.js'
import { ONE_HOUR_IN_MS } from '$lib/utils/dates/index.js'
import type { TMetricData } from '$ui/app/Chart/api/index.js'
import type { UTCTimestamp } from '@santiment-network/chart-next'

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

  it('Syncing metrics data', async () => {
    const db = await getAssetMetricsDatabase('bitcoin' as TAssetSlug)
    const trx = db.transaction('price_usd' as any, 'readwrite')
    const metricStore = trx.objectStore('price_usd')

    const timeseries = mockTimeseries(new Date('2025-04-02T21:59:59.232Z'))
    console.log(metricStore)

    for (const data of timeseries) {
      metricStore.put(data)
    }

    //trx.commit()

    await trx.done
    console.log(metricStore)

    const trx_2 = db.transaction('price_usd' as any, 'readwrite')
    const metricStore_2 = trx_2.objectStore('price_usd')

    console.log(await metricStore_2.getAll())

    const timeseries2 = mockTimeseries(
      new Date('2025-04-02T20:59:59.232Z'),
      '{"label_fqn":"some_label"}',
    )
    for (const data of timeseries2) {
      metricStore_2.put(data)
    }
    await trx_2.done

    const trx_3 = db.transaction('price_usd' as any)
    const metricStore_3 = trx_3.objectStore('price_usd')

    console.log(await metricStore_3.getAll())

    //console.log(db)
  })
})

function mockTimeseries(startIsoDate: Date, args = '') {
  const size = 5

  const timeseries = new Array(size) as TLocalMetricData[]
  const hourInterval = ONE_HOUR_IN_MS / 1000

  let time = Math.floor(+startIsoDate / 1000)

  for (let i = 0; i < size; i++) {
    timeseries[i] = {
      time: time as UTCTimestamp,
      value: Math.random(),
      args,
    }
    time += hourInterval
  }

  return timeseries
}
