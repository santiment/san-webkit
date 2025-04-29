/* eslint-disable import/no-unresolved */
import type { RequestEvent } from '@sveltejs/kit'
import type { TBulletshellManifest, TBulletshellRouteManifest, TRouteFilepaths } from '../types.js'

import fs from 'node:fs'

// @ts-expect-error This is a virtual module
import { BULLETSHELL_MANIFEST as VIRTUAL_MANIFEST } from 'virtual:bulletshell'

import { compress_file } from './compress.js'
import { IS_BULLETSHELL_MODE } from '../env.js'

const BULLETSHELL_MANIFEST = VIRTUAL_MANIFEST as TBulletshellManifest

export const STATUS = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
} as const

export const HEADERS = {
  FORCE_UPDATE: 'x-bulletshell-update',
}

const ENCODINGS = {
  gz: 'gzip',
  br: 'br',
} as Record<string, undefined | 'gzip' | 'br'>

export type TBulletshellManager = ReturnType<typeof Bulletshell>
export function Bulletshell(event: RequestEvent) {
  const routeManifest = BULLETSHELL_MANIFEST[event.route.id!]
  const routeFilepaths = routeManifest && getRouteFilepaths(routeManifest, event)

  const isValidRoute = !!(routeManifest && routeFilepaths)

  return {
    isValidRoute(): boolean {
      return isValidRoute
    },

    doesShellFileExist(): boolean {
      return !!routeFilepaths && fs.existsSync(routeFilepaths.dest + '.br')
    },

    getShellFilepath(): string {
      return routeFilepaths!.dest
    },

    sendRenderRequest(): Promise<Response> {
      if (IS_BULLETSHELL_MODE) {
        return Promise.reject()
      }

      const headers = {} as Record<string, any>
      const options = { forceUpdate: true }

      if (options.forceUpdate) {
        headers[HEADERS.FORCE_UPDATE] = '1'
      }

      return fetch('http://0.0.0.0:3333' + event.url.pathname, {
        headers: { ...event.request.headers, ...headers },
      })
    },

    isShellWriteLocked(): boolean {
      return BULLETSHELL_MANIFEST.__fs_locks.has(routeFilepaths!.dest)
    },

    lockShellWrite(): () => void {
      const dest = routeFilepaths!.dest

      BULLETSHELL_MANIFEST.__fs_locks.add(dest)
      return () => BULLETSHELL_MANIFEST.__fs_locks.delete(dest)
    },

    async writeShellFiles(pageResponse: Response) {
      if (!isValidRoute) {
        return Promise.reject()
      }

      const bodyPromise = pageResponse.text()
      // TODO: Handle Non-POJO pages [@vanguard, 29.04.25]
      // "Cannot stringify arbitrary non-POJOs"

      fs.mkdirSync(routeFilepaths!.dir, { recursive: true })
      fs.writeFileSync(routeFilepaths!.dest, await bodyPromise)

      return Promise.all([
        compress_file(routeFilepaths!.dest, 'gz'),
        compress_file(routeFilepaths!.dest, 'br'),
      ])
    },
  }
}

function getFilename(routeManifest: TBulletshellRouteManifest, event: RequestEvent) {
  const filename =
    routeManifest.route_id === '/'
      ? 'index'
      : `/${routeManifest.config.handle?.(event)?.name || 'index'}`
  return `${filename}.html`
}

function getRouteFilepaths(
  routeManifest: TBulletshellRouteManifest,
  event: RequestEvent,
): TRouteFilepaths {
  const dir = 'build/bulletshells' + routeManifest.route_id
  const filename = getFilename(routeManifest, event)

  return {
    dir,
    filename,
    dest: dir + `${filename}`,
  }
}

export function getBulletshellFileHeaders(filepath: string) {
  const stats = fs.statSync(filepath)

  const headers: Record<string, number | string> = {
    'Content-Length': stats.size,
    'Content-Type': 'text/html;charset=utf-8',
    'Last-Modified': stats.mtime.toUTCString(),
    ETag: `W/"${stats.size}-${stats.mtime.getTime()}"`,
  }

  const encoding = ENCODINGS[filepath.slice(-2)]
  if (encoding) {
    headers['Content-Encoding'] = encoding
  }

  //let cc = opts.maxAge != null && `public,max-age=${opts.maxAge}`;
  //if (cc) {
  //  if (opts.immutable) cc += ',immutable';
  //  else if ( opts.maxAge === 0) cc += ',must-revalidate';
  //
  //	headers['Cache-Control'] = cc;
  //}

  return headers
}
