import { parse, Kind } from 'graphql'
import { mockUser } from './user'

export function ApiMock(req, schema) {
  const { query, variables } = JSON.parse(req.requestBody)
  const operation = parse(query).definitions[0]

  if (operation.kind !== Kind.OPERATION_DEFINITION) {
    return
  }

  if (schema.currentUser !== undefined) {
    schema['query currentUser'] = mockUser(schema.currentUser)
    console.log(schema['query currentUser'])
  }

  let hasData = false
  const result = {}

  operation.selectionSet.selections.forEach((query) => {
    if (query.kind !== Kind.FIELD) return

    const name = query.name.value
    const data = schema['query ' + name]

    if (data !== undefined) {
      result[query.alias?.value || name] = data
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
