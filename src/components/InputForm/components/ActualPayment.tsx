import { Input } from 'antd'
import type { SharedExpensesInfo } from '@/types'

interface Props {
  sharedExpenses: SharedExpensesInfo
}

export default function ShoppingInfo({ sharedExpenses }: Props) {
  return (
    <section className="form-table">
      <ul className="list shared-list">
        <li className="item">
          <label className="label">
            <span className="text">包装费：</span>
            <Input
              value={sharedExpenses.packagingFee}
              type="number"
              prefix="￥"
              suffix="元"
            />
          </label>
        </li>

        <li className="item">
          <label className="label">
            <span className="text">配送费：</span>
            <Input
              value={sharedExpenses.deliveryFee}
              type="number"
              prefix="￥"
              suffix="元"
            />
          </label>
        </li>
      </ul>
    </section>
  )
}
