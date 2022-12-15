import styles from './index.module.less'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Header({ children }: Props) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>外卖拼单计算器</h1>
      <div className={styles.navList}>
        <a href="https://chengpeiquan.com" target="_blank">
          <span>Home</span>
        </a>
        <a
          href="https://github.com/chengpeiquan/group-buy-calculator"
          target="_blank"
        >
          <span>GitHub</span>
        </a>
      </div>
      {children}
    </div>
  )
}
