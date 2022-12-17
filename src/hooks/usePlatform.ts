import { useState } from 'react'

export function usePlatform() {
  function checkIsMobile() {
    return /iPhone|phone|android|iPod|pad|iPad/i.test(
      window.navigator.userAgent.toLowerCase()
    )
  }
  const [isMobile, setIsMobile] = useState(checkIsMobile())

  function updatePlatform() {
    const _isMobile = checkIsMobile()
    setIsMobile(() => _isMobile)

    const className = `platform-${_isMobile ? 'mobile' : 'desktop'}`
    const body = document.querySelector('body')
    body!.className = className
  }

  window.addEventListener('load', updatePlatform, false)
  window.addEventListener(
    'orientationchange' in window ? 'orientationchange' : 'resize',
    updatePlatform,
    false
  )

  return {
    isMobile,
    updatePlatform,
  }
}
