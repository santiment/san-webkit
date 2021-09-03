import React from 'react'
import { addons, types } from '@storybook/addons'
import ToggleTheme from './ToggleTheme'

// https://www.chromatic.com/blog/how-to-build-a-storybook-addon/
addons.register('THEME', () => {
  addons.add('THEME', {
    title: 'Outline',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => <ToggleTheme />,
  })
})
