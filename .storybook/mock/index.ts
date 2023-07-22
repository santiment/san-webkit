import type { CurrentUser } from './user'
import type { SelectionNode } from 'graphql'

import { parse, Kind } from 'graphql'
import { mockUser } from './user'

export const MOCKS = [
  {
    schema: 'currentUser',
    query: 'currentUser',
    mock: mockUser,
  },
] as { schema: string; query: string; mock: any }[]

export function ApiMock(req, schema) {
  const { query, variables } = JSON.parse(req.requestBody)
  const operation = parse(query).definitions[0]

  if (operation.kind !== Kind.OPERATION_DEFINITION) {
    return
  }

  MOCKS.forEach((mocker) => {
    if (schema[mocker.schema] !== undefined) {
      schema['query ' + mocker.schema] = mocker.mock(schema[mocker.schema])
    }
  })

  let hasData = false
  const result = {}

  operation.selectionSet.selections.forEach((query) => {
    if (query.kind !== Kind.FIELD) return

    const name = query.name.value
    const data = schema['query ' + name]

    if (data !== undefined) {
      result[query.alias?.value || name] = data
      mapAlises(data, query)
      hasData = true
    }
  })

  if (hasData) return Promise.resolve({ data: result })

  const xhr = req.passthrough()

  return new Promise((resolve) => {
    xhr.onloadend = () => {
      resolve(JSON.parse(xhr.response))
    }
  })
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

declare module '@storybook/svelte' {
  export interface Parameters {
    mockApi?: () => {
      currentUser?: null | CurrentUser
    } & Record<string, any>
  }
}
