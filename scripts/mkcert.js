import mkcert from 'vite-plugin-mkcert'

mkcert({ savePath: './mkcert', hosts: ['local.santiment.net'] }).config({})
