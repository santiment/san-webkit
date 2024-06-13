import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'dark',
  brandTitle: `
    <div class="column" style="--black:#fff; text-align: center;">
      <svg style="width:113px;height:22px;min-width:113px"><use href="/webkit/sprites/illus/santiment.svg#0"></use></svg>
      <span style="font-family:Monospace; letter-spacing:6px;">webkit</span>
    </div>
  `,
})

addons.setConfig({
  theme,
})
