import { useState } from 'react'
import { checkIsMobile, watchResize } from '@bassist/utils'

export function usePlatform() {
  const [isMobile, setIsMobile] = useState(checkIsMobile())

  function updatePlatform() {
    const _isMobile = checkIsMobile()
    setIsMobile(() => _isMobile)

    const className = `platform-${_isMobile ? 'mobile' : 'desktop'}`
    const body = document.querySelector('body')
    body!.className = className
  }

  watchResize(updatePlatform)

  return {
    isMobile,
    updatePlatform,
  }
}
