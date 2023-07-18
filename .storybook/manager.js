import { addons, types } from '@storybook/manager-api'
import ToggleTheme from './ToggleTheme'

// Register the addon
addons.register('THEME', () => {
  // Register the tool
  addons.add('THEME', {
    type: types.TOOL,
    title: 'Theme toggle (dark/light)',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ToggleTheme,
  })
})
