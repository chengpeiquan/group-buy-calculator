import { Tooltip } from 'antd'
import styles from './index.module.less'

interface Props {
  title: string
}

export default function TooltipMessage({ title }: Props) {
  return (
    <Tooltip title={title}>
      <svg
        className={styles.iconFaq}
        width="22"
        height="22"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.95 18q.525 0 .888-.363q.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.888.363q-.362.362-.362.887t.362.887q.363.363.888.363Zm-.9-3.85h1.85q0-.825.188-1.3q.187-.475 1.062-1.3q.65-.65 1.025-1.238q.375-.587.375-1.412q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75q-.888.75-1.238 1.8l1.65.65q.125-.45.563-.975Q11.2 7.7 12.1 7.7q.8 0 1.2.437q.4.438.4.963q0 .5-.3.937q-.3.438-.75.813q-1.1.975-1.35 1.475q-.25.5-.25 1.825ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"
        />
      </svg>
    </Tooltip>
  )
}