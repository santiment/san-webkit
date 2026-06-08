const isHttps = process.argv.includes('--https')
const mkcert = isHttps ? (await import('vite-plugin-mkcert')).default : null

const createMkcert = () =>
  mkcert ? mkcert({ savePath: './mkcert', hosts: ['local.santiment.net'] }) : null
createMkcert()?.config?.({})

export { createMkcert as mkcert }
