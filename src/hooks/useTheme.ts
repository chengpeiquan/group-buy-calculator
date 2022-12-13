import { useState } from 'react'

const key = 'gbc-theme'

function updateTheme(isDark: boolean) {
  const newTheme = isDark ? 'dark' : 'light'
  window.localStorage.setItem(key, newTheme)

  const root = document.querySelector('html')
  root!.className = newTheme
}

export function useTheme() {
  const localTheme = window.localStorage.getItem(key)
  const defaultThemeIsDark = localTheme
    ? localTheme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  updateTheme(defaultThemeIsDark)

  const [isDark, toggle] = useState(defaultThemeIsDark)

  function toggleTheme() {
    toggle((isDark) => !isDark)
    updateTheme(!isDark)
  }

  return {
    isDark,
    toggleTheme,
  }
}
