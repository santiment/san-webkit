import type { TAssetSlug } from '$lib/ctx/assets/api.js'
import type { UTCTimestamp } from '@santiment-network/chart-next'
import type { TMetricData } from '$ui/app/Chart/api/index.js'

import { openDB, type DBSchema, type IDBPDatabase, type TypedDOMStringList } from 'idb'

import { Query } from '$lib/api/executor.js'

import {
  getDatabaseInfo,
  registerDatabase,
  type TDatabaseInfo,
  type TDatabaseName,
} from '../manager.js'
import { queryAvailableMetrics } from './api.js'
import { hash } from '../utils.js'

export type TLocalMetricData = {
  time: UTCTimestamp
  value: number
  args: string
}

interface TAssetMetricsDatabaseSchema extends DBSchema {
  [metric: string]: {
    key: ['string', UTCTimestamp]
    value: TLocalMetricData
  }
}

type TAssetMetricDatabase = IDBPDatabase<TAssetMetricsDatabaseSchema> & {
  objectStoreNames: TypedDOMStringList<string>

  createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): unknown
  //): IDBPObjectStore<TAssetMetricsDatabaseSchema, ArrayLike<string>, string, 'versionchange'>
}
export const AliveAssetMetricsDatabases = new Map<TAssetSlug, TAssetMetricDatabase>()

const createDatabaseName = (asset: TAssetSlug) => `SAN_ASSET_${asset}` as TDatabaseName

export function createDatabaseInfo(
  asset: TAssetSlug,
  schemaHash: string,
  version = 1,
): TDatabaseInfo {
  return {
    name: createDatabaseName(asset),
    createdAt: Date.now(),
    version,
    schemaHash,
  }
}

export async function getAssetMetricsDatabase(slug: TAssetSlug) {
  let db = AliveAssetMetricsDatabases.get(slug)

  if (db) {
    return db
  }

  const availableMetrics = await queryAvailableMetrics(Query)(slug)

  const name = createDatabaseName(slug)
  const schemaHash = hash(availableMetrics.toString())

  const dbInfo = (await getDatabaseInfo(name)) || createDatabaseInfo(slug, '', 0)

  if (schemaHash !== dbInfo.schemaHash) {
    dbInfo.version += 1
    dbInfo.schemaHash = schemaHash
    await registerDatabase(dbInfo)
  }

  db = await openDB<TAssetMetricsDatabaseSchema>(dbInfo.name, dbInfo.version, {
    upgrade(db: TAssetMetricDatabase) {
      for (const metric of availableMetrics) {
        if (!db.objectStoreNames.contains(metric)) {
          const store = db.createObjectStore(metric, {
            //keyPath: ['args', 'time'],
            keyPath: ['args', 'time'],
          })
          //store.createIndex('time', 'time')
        }
      }
    },
    blocking: () => {
      const db = AliveAssetMetricsDatabases.get(slug)
      db?.close()
      AliveAssetMetricsDatabases.delete(slug)
    },
  })
  AliveAssetMetricsDatabases.set(slug, db)

  return db
}
