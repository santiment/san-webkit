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

addons.setConfig({
  theme: {
    brandTitle: `
    <div class="column" style="--black:#fff; text-align: center;">
      <svg style="width:113px;height:22px;min-width:113px"><use href="/sprites/illus/santiment.svg#0"></use></svg>
      <span style="font-family:Monospace; letter-spacing:6px;">webkit</span>
    </div>
  `,
  },
})
