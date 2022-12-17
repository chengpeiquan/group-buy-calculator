import { usePlatform } from '@/hooks'
import NavList from './components/NavList'
import styles from './index.module.less'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Header({ children }: Props) {
  const { isMobile } = usePlatform()

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>外卖拼单计算器</h1>

      {/* 导航菜单 */}
      {!isMobile && <NavList />}
      {/* 导航菜单 */}

      {/* 切换主题 */}
      {children}
      {/* 切换主题 */}
    </div>
  )
}
