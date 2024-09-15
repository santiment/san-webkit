export function log({
  executor,
  cached,
  schema,
  mocked,
  result,
}: {
  executor: any
  schema: any
  cached?: any
  mocked?: any
  result?: any
}) {
  if (process.env.IS_DEV_MODE) {
    const state = cached ? '(CACHED)' : mocked ? '(MOCKED)' : ''

    const executorName = executor
      .toString()
      .replaceAll(' ', '')
      .includes('=>Query(schema,{...options,fetcher})')
      ? 'UniQuery'
      : executor.name

    console.log(
      `%c[DEV ONLY] [${executorName}] New query ${state}`,
      'background:#478FFF;color:black;padding:3px;border-radius:4px',
      typeof schema === 'string' ? { schema } : schema,
      mocked || cached || result,
    )
  }
}
