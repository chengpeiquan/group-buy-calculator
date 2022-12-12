import { useState } from 'react'

export function useTheme() {
  const key = 'gbc-theme-is-dark'
  const localTheme = window.localStorage.getItem(key)
  const defaultTheme =
    Boolean(localTheme) ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  window.localStorage.setItem(key, String(defaultTheme))

  const [isDark, toggle] = useState(defaultTheme)

  function toggleTheme() {
    toggle((isDark) => !isDark)
    window.localStorage.setItem(key, String(isDark))
    console.log(isDark)
  }

  return {
    isDark,
    toggleTheme,
  }
}
