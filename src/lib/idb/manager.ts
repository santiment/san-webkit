import type { TNominal } from '$lib/utils/index.js'

import { openDB, deleteDB, type DBSchema, type IDBPDatabase } from 'idb'

// NOTE: Persistant storage
// navigator.storage.persist()

// NOTE: All databases
//indexedDB.databases().then(console.log)

export type TDatabaseName = TNominal<string, 'TDatabaseName'>

export type TDatabaseInfo = {
  name: TDatabaseName
  version: number
  createdAt: number
  schemaHash: string
}

interface IDatabaseManager extends DBSchema {
  databases: {
    key: TDatabaseName
    value: TDatabaseInfo
  }
}

const SAN_MANAGER_DB = 'SAN_MANAGER_DB'

let _cachedMangerDb: undefined | Promise<IDBPDatabase<IDatabaseManager>> = undefined

// Get or create database manager database
function manager() {
  return (_cachedMangerDb ??= openDB<IDatabaseManager>(SAN_MANAGER_DB, 1, {
    upgrade(db) {
      // Create object stores for database registry
      if (!db.objectStoreNames.contains('databases')) {
        db.createObjectStore('databases', { keyPath: 'name' })
      }
    },

    blocking: () => {
      _cachedMangerDb?.then((db) => db.close())
      _cachedMangerDb = undefined
    },

    terminated: () => {
      _cachedMangerDb = undefined
    },
  }))
}

async function readonly() {
  return (await manager()).transaction('databases')
}
async function readwrite() {
  return (await manager()).transaction('databases', 'readwrite')
}

export async function getDatabaseInfo(dbName: TDatabaseName) {
  return (await readonly()).store.get(dbName)
}

// Get all registered databases
export async function getAllDatabases() {
  return (await readonly()).store.getAll()
}

// Register new database in manager
export async function registerDatabase(databaseInfo: TDatabaseInfo) {
  return (await readwrite()).store.put(databaseInfo)
}

export async function deleteDatabase(name: TDatabaseName) {
  return new Promise((resolve, reject) => deleteDB(name, { blocked: reject }).then(resolve))
    .then(readwrite)
    .then((tx) => {
      tx.store.delete(name)
      return tx.done.catch(() => {})
    })
    .catch((e) => {
      console.error('Failed to delete database', e)
    })
}

export async function deleteAllDatabases() {
  const databases = await getAllDatabases()
  return Promise.all(databases.map((db) => deleteDatabase(db.name)))
}
