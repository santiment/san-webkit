import type { RequestEvent } from '@sveltejs/kit'

export type TServerManifest = {
  _: {
    nodes: Promise<any>[]
    routes: {
      id: string
      page: { leaf: number }
    }[]
  }
}

export type TBulletshellConfig<GRequestEvent extends RequestEvent> = {
  handle?: (event: GRequestEvent) => {
    name?: string
  }
}

export type TBulletshellFiles = Record<
  string,
  | undefined
  | {
      headers: Record<string, number | string>
    }
>

export type TBulletshellRouteManifest = {
  route_id: string
  config: TBulletshellConfig<RequestEvent>
  bulletshells: TBulletshellFiles
}

export type TBulletshellManifest = Record<string, undefined | TBulletshellRouteManifest> & {
  __fs_locks: Set<string>
}

export type TRouteFilepaths = {
  dir: string
  filename: string
  dest: string
}
