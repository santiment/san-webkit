import React, { useEffect, useState } from 'react'
import { IconButton } from '@storybook/components'

const Moon = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
)

const Sun = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
)

const ToggleTheme = () => {
  const [isDark, setDark] = useState(false)

  const updateMode = () => {
    setDark(!isDark)
  }

  useEffect(() => {
    const iframe = document.getElementById('storybook-preview-iframe')
    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document
    if (!iframeDocument) return
    if (!iframeDocument.body) return
    iframeDocument.body.classList.toggle('night-mode', isDark)
  }, [isDark])

  return (
    <IconButton
      key='theme-toggle'
      active={false}
      title={isDark ? 'Change to light theme' : 'Change to dark theme'}
      onClick={updateMode}
    >
      {isDark ? <Sun /> : <Moon />}
    </IconButton>
  )
}

export default ToggleTheme
