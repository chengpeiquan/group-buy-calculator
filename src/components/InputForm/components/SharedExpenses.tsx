import { Input } from 'antd'
import type { Dispatch, SetStateAction } from 'react'
import type { SharedExpensesInfo, SharedExpensesInfoKey } from '@/types'

interface Props {
  sharedExpenses: SharedExpensesInfo
  setSharedExpenses: Dispatch<SetStateAction<SharedExpensesInfo>>
}

export default function SharedExpenses({
  sharedExpenses,
  setSharedExpenses,
}: Props) {
  function setValue(
    key: SharedExpensesInfoKey,
    value: SharedExpensesInfo[SharedExpensesInfoKey]
  ): void {
    setSharedExpenses((info) => {
      info[key] = value
      return { ...info }
    })
  }

  return (
    <section className="form-table">
      <ul className="list shared-list">
        <li className="item">
          <label className="label">
            <span className="text">包装费：</span>
            <Input
              type="number"
              value={sharedExpenses.packagingFee}
              defaultValue={sharedExpenses.packagingFee}
              placeholder="请填写包装费"
              prefix="￥"
              suffix="元"
              onChange={(e) => setValue('packagingFee', e.target.value)}
            />
          </label>
        </li>

        <li className="item">
          <label className="label">
            <span className="text">配送费：</span>
            <Input
              type="number"
              value={sharedExpenses.deliveryFee}
              defaultValue={sharedExpenses.deliveryFee}
              placeholder="请填写配送费"
              prefix="￥"
              suffix="元"
              onChange={(e) => setValue('deliveryFee', e.target.value)}
            />
          </label>
        </li>
      </ul>
    </section>
  )
}
