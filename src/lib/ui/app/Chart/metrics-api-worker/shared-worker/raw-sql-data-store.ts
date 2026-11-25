import type { UTCTimestamp } from '@santiment-network/chart-next'
import type { TMetricData } from '../../api/index.js'

import { ApiQuery } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'
import { parseDate } from '$lib/utils/dates/index.js'

import { registerDataStoreTypeResolver, type TDataStoreParameters } from './data-store-metrics.js'

export const RAW_SQL_DATA_STORE = '__raw_sql'
export const RAW_SQL_DATA_FLAG = '__san_formula_processed__'

export const checkIsRawSqlFormulaResult = (data: any): boolean =>
  !!(data && typeof data === 'object' && data[RAW_SQL_DATA_FLAG])

export type TRawSqlData = {
  rows: (string | number)[][]
  columns: string[]
  columnTypes: ('Date' | 'DateTime' | 'Float64')[]
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

    const dateColumnIndex = columnTypes.findIndex((type) => type.startsWith('Date'))
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
  const { from, to, interval } = queryVars

  return queryRunRawSqlQuery({ executor: Query, recache })({
    sql: rawSql,
    parameters: {
      date_from: parseDate(from).toISOString(),
      date_to: parseDate(to).toISOString(),
      granularity: interval,
    },
  }) as any
})

export const RAW_SQL_TIMESERIES_DATA_MSG = '[RAW SQL] '
export const getRawSqlMessage = (msg: string) =>
  msg.startsWith(RAW_SQL_TIMESERIES_DATA_MSG) ? msg.slice(RAW_SQL_TIMESERIES_DATA_MSG.length) : null

export const flagRawSqlData = (columns: string[]) =>
  `${RAW_SQL_TIMESERIES_DATA_MSG}This metric stores SQL timeseries data in the following columns: ` +
  columns.filter((key) => key !== RAW_SQL_DATA_FLAG)
