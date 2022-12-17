import { Divider } from 'antd'
import styles from '../index.module.less'

export default function NavList() {
  return (
    <div className={styles.navList}>
      <a href="https://chengpeiquan.com" target="_blank">
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
        </svg>
        <span>首页</span>
      </a>

      <Divider type="vertical" />

      <a
        href="https://github.com/chengpeiquan/cooking-cookbook"
        target="_blank"
      >
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 48 48">
          <mask id="svgIDa">
            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
              <path
                strokeLinecap="round"
                d="M10 44h28V20.947C38 14.901 31.732 10 24 10s-14 4.901-14 10.947V44Z"
                clipRule="evenodd"
              />
              <path
                fill="#555"
                d="M38 22.044v-1.097C38 14.901 31.732 10 24 10s-14 4.901-14 10.947v1.093l28 .004Z"
              />
              <path strokeLinecap="round" d="M4 22h40M21 4h6" />
            </g>
          </mask>
          <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
        </svg>
        <span>菜谱</span>
      </a>

      <Divider type="vertical" />

      <a
        href="https://github.com/chengpeiquan/group-buy-calculator"
        target="_blank"
      >
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"
          />
        </svg>
        <span>源码</span>
      </a>

      <Divider type="vertical" />

      <a href="https://github.com/chengpeiquan" target="_blank">
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          />
        </svg>
        <span>GitHub</span>
      </a>
    </div>
  )
}
