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
