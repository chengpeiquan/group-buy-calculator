import { Input } from 'antd'
import type { Dispatch, SetStateAction } from 'react'

interface Props {
  actualExpenses: string
  setActualExpenses: Dispatch<SetStateAction<string>>
}

export default function ShoppingInfo({
  actualExpenses,
  setActualExpenses,
}: Props) {
  return (
    <section className="form-table">
      <ul className="list shared-list">
        <li className="item">
          <label className="label">
            <span className="text">总支出：</span>
            <Input
              type="number"
              value={actualExpenses}
              defaultValue={actualExpenses}
              placeholder="请填写总支出"
              prefix="￥"
              suffix="元"
              onChange={(e) => setActualExpenses(e.target.value)}
            />
          </label>
        </li>
      </ul>
    </section>
  )
}
