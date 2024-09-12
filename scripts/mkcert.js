import mkcert from 'vite-plugin-mkcert'

const isHttps = process.argv.includes('--https')

const createMkcert = () =>
  isHttps ? mkcert({ savePath: './mkcert', hosts: ['local.santiment.net'] }) : null
createMkcert()?.config?.({})

export { createMkcert as mkcert }
