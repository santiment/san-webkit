import { ApiQuery } from '../../../../../api/index.js';
import { Query } from '../../../../../api/executor.js';
import { parseDate } from '../../../../../utils/dates/index.js';
import { registerDataStoreTypeResolver } from './data-store-metrics.js';
export const RAW_SQL_DATA_STORE = '__raw_sql';
export const RAW_SQL_DATA_FLAG = '__san_formula_processed__';
export const checkIsRawSqlFormulaResult = (data) => RAW_SQL_DATA_FLAG in data && data[RAW_SQL_DATA_FLAG];
export const queryRunRawSqlQuery = ApiQuery((variables) => ({
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
}), (gql) => {
    const { rows, columns, columnTypes } = gql.data;
    const dateColumnIndex = columnTypes.findIndex((type) => type === 'Date');
    if (dateColumnIndex < 0)
        throw new Error('Date column is missing');
    const dates = rows.flatMap((row) => (Date.parse(row[dateColumnIndex]) / 1000));
    const data = {};
    for (let i = 0; i < columns.length; i++) {
        if (i === dateColumnIndex)
            continue;
        const column = columns[i];
        data[column] = rows
            .flatMap((row, rowIndex) => ({
            time: dates[rowIndex],
            value: row[i],
        }))
            .sort((a, b) => a.time - b.time);
    }
    return data;
}, { cacheTime: undefined });
registerDataStoreTypeResolver(RAW_SQL_DATA_STORE, (params, queryVars, recache) => {
    const { rawSql } = params;
    const { from, to, interval } = queryVars;
    return queryRunRawSqlQuery({ executor: Query, recache })({
        sql: rawSql,
        parameters: {
            date_from: parseDate(from).toISOString(),
            date_to: parseDate(to).toISOString(),
            granularity: interval,
        },
    });
});
export const RAW_SQL_TIMESERIES_DATA_MSG = '[RAW SQL] ';
export const getRawSqlMessage = (msg) => msg.startsWith(RAW_SQL_TIMESERIES_DATA_MSG) ? msg.slice(RAW_SQL_TIMESERIES_DATA_MSG.length) : null;
export const flagRawSqlData = (columns) => `${RAW_SQL_TIMESERIES_DATA_MSG}This metric stores SQL timeseries data in the following columns: ` +
    columns.filter((key) => key !== RAW_SQL_DATA_FLAG);
