import type { SelectionNode } from 'graphql'

import { parse, Kind } from 'graphql'
import { CURRENT_USER_MOCK } from './user'
import { ANNUAL_DISCOUNT_MOCK } from './annualDiscount'
import { SAVED_CARD_MOCK } from './savedCard'

export const MOCKS = [CURRENT_USER_MOCK, ANNUAL_DISCOUNT_MOCK, SAVED_CARD_MOCK] as const

export function ApiMock(req, schema: Record<string, any>) {
  const { query, variables } = JSON.parse(req.requestBody)
  const operation = parse(query).definitions[0]

  if (operation.kind !== Kind.OPERATION_DEFINITION) {
    return
  }

  MOCKS.forEach((mocker) => {
    const { mock, query } = mocker as any
    if (schema[mocker.schema] !== undefined) {
      schema['query ' + query] = mock(schema[mocker.schema])
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

type Mock<T> = T extends { mock: (arg: infer S) => any } ? S : never

declare module '@storybook/svelte' {
  export interface Parameters {
    mockApi?: () => {
      annualDiscount?: Mock<typeof ANNUAL_DISCOUNT_MOCK>
      currentUser?: Mock<typeof CURRENT_USER_MOCK>
      savedCard?: Mock<typeof SAVED_CARD_MOCK>
    } & Record<string, any>
  }
}
