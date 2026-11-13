import type { UTCTimestamp } from '@santiment-network/chart-next'
import type { TMetricData } from '../../api/index.js'

import { ApiQuery } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'

import { registerDataStoreTypeResolver, type TDataStoreParameters } from './data-store-metrics.js'

export const RAW_SQL_DATA_STORE = '__raw_sql'
export const RAW_SQL_DATA_FLAG = '__san_formula_processed__'

export const checkIsRawSqlFormulaResult = (data: any): boolean =>
  RAW_SQL_DATA_FLAG in data && data[RAW_SQL_DATA_FLAG]

export type TRawSqlData = {
  rows: (string | number)[][]
  columns: string[]
  columnTypes: ('Date' | 'Float64')[]
}
export const queryRunRawSqlQuery = ApiQuery(
  (variables: { sql: string; parameters?: null | Record<string, any> }) => ({
    schema: `query($sql: String!, $parameters: json!="{}") {
    data:runRawSqlQuery(sqlQueryText: $sql, sqlQueryParameters: $parameters) {
      rows
      columns
      columnTypes

      clickhouseQueryId
      queryId
      queryEndTime
      queryStartTime
      summary
    }
  }`,
    variables: {
      sql: variables.sql,
      parameters: variables.parameters ? JSON.stringify(variables.parameters) : undefined,
    },
  }),
  (gql: { data: TRawSqlData }) => {
    const { rows, columns, columnTypes } = gql.data

    const dateColumnIndex = columnTypes.findIndex((type) => type === 'Date')
    if (dateColumnIndex < 0) throw new Error('Date column is missing')

    const dates = rows.flatMap(
      (row) => (Date.parse(row[dateColumnIndex] as string) / 1000) as UTCTimestamp,
    )

    const data = {} as Record<string, TMetricData>
    for (let i = 0; i < columns.length; i++) {
      if (i === dateColumnIndex) continue

      const column = columns[i]
      data[column] = rows
        .flatMap((row, rowIndex) => ({
          time: dates[rowIndex],
          value: row[i] as number,
        }))
        .sort((a, b) => a.time - b.time)
    }

    return data
  },
  { cacheTime: undefined },
)

registerDataStoreTypeResolver(RAW_SQL_DATA_STORE, (params, queryVars, recache) => {
  const { rawSql } = params as TDataStoreParameters & { rawSql: string }

  return queryRunRawSqlQuery({ executor: Query, recache })({
    sql: rawSql,
    parameters: {},
  }) as any
})
