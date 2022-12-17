import { useState } from 'react'

export function useTheme() {
  const key = 'gbc-theme'
  const localTheme = window.localStorage.getItem(key)
  const defaultThemeIsDark = localTheme
    ? localTheme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches

  function updateTheme(isDark: boolean) {
    const newTheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem(key, newTheme)

    const root = document.querySelector('html')
    root!.className = newTheme
  }
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
