import styles from './index.module.less'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.line}>Released under the MIT License.</p>
      <p className={styles.line}>
        Copyright © 2020-PRESENT{' '}
        <a href="https://github.com/chengpeiquan" target="_blank">
          chengpeiquan
        </a>
      </p>
    </div>
  )
}
