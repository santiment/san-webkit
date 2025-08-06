import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock Web Animations API used by svelte transition directive
Element.prototype.animate ??= vi.fn().mockReturnValue({
  finished: Promise.resolve(),
  cancel: vi.fn(),
  startTime: null,
  currentTime: null,
})
