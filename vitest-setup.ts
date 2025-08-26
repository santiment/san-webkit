/// <reference types="vite/client" />

import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock Web Animations API used by svelte transition directive
Element.prototype.animate ??= vi.fn().mockReturnValue({
  finished: Promise.resolve(),
  cancel: vi.fn(),
  startTime: null,
  currentTime: null,
})

// Mock ResizeObserver used by VirtualList (and maybe somewhere else)
vi.stubGlobal(
  'ResizeObserver',
  vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
)

type TFetchParams = Parameters<(typeof globalThis)['fetch']>

const browserFetch = fetch
vi.stubGlobal('fetch', async (...args: TFetchParams) => {
  const [req, init, ...rest] = args
  const headers = new Headers(init?.headers)

  const token = import.meta.env.VITE_TEST_AUTH_TOKEN

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  return browserFetch(req, { ...init, headers }, ...rest)
})
