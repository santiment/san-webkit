import { parse, Kind } from 'graphql'
import { startWith, Subject } from 'rxjs'
import { Query, RxQuery, type TGqlSchema } from './executor.js'

type TMockConfig = { mock: () => any }
export const ApiMock = {
  mocks: {} as Record<string, undefined | TMockConfig>,

  add(queryName: string, rules: TMockConfig) {
    this.mocks['query ' + queryName] = rules
  },

  reset() {
    this.mocks = {}
  },
}

export function MockExecutor(
  executor: typeof RxQuery | typeof Query,
  schema: TGqlSchema,
  options?: Parameters<typeof RxQuery>[1],
) {
  const mockedResult = MockExecutor.getMock(schema)

  if (mockedResult === undefined) return

  const data = options?.map ? options.map(mockedResult.data) : mockedResult.data

  if (executor === RxQuery) {
    return new Subject().pipe(startWith(data))
  }

  return new Promise((resolve) => {
    return resolve(data)
  })
}

MockExecutor.getMock = (schema: TGqlSchema) => {
  const normalizedSchema = typeof schema === 'string' ? { query: schema } : { query: schema.schema }
  return mockApi(normalizedSchema, ApiMock.mocks)
}

export function mockApi(
  schema: { query: string; variables?: string },
  register: (typeof ApiMock)['mocks'],
) {
  const { query, variables } = schema
  const operation = parse(query).definitions[0]

  if (operation.kind !== Kind.OPERATION_DEFINITION) {
    return
  }

  let hasData = false
  const data = {}
  let error = null

  operation.selectionSet.selections.forEach((query) => {
    if (query.kind !== Kind.FIELD) return

    const name = query.name.value
    const mocked = register['query ' + name]?.mock()

    if (mocked !== undefined) {
      if (mocked?.error) {
        error = mocked.error
      } else {
        // @ts-expect-error
        data[query.alias?.value || name] = mocked
        if (mocked) mapAlises(mocked, query)
      }

      hasData = true
    }
  })

  if (hasData) return { data, error }
}

function mapAlises(data: Record<string, any>, query: SelectionNode) {
  if (query.kind !== Kind.FIELD) return

  query.selectionSet?.selections.forEach((query) => {
    if (query.kind !== Kind.FIELD) return
    if (!query.alias) return

    const value = data[query.name.value]
    data[query.alias.value] = value

    return mapAlises(value, query)
  })
}
