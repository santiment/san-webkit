import { parse, Kind } from 'graphql'

export function ApiMock(req: { requestBody: string }, schema: Record<string, any>) {
  const { query, variables } = JSON.parse(req.requestBody)
  const operation = parse(query).definitions[0]

  if (operation.kind !== Kind.OPERATION_DEFINITION) {
    return
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

  if (hasData) return { data: result }
}
