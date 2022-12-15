import { Dispatch, SetStateAction } from 'react'
import { Input } from 'antd'
import { defaultItem } from '@/assets/data'
import type { ShoppingListItem } from '@/types'

interface Props {
  shoppingList: ShoppingListItem[]
  setShoppingList: Dispatch<SetStateAction<ShoppingListItem[]>>
}

export default function ShoppingInfo({ shoppingList, setShoppingList }: Props) {
  function setValue(
    index: number,
    key: keyof ShoppingListItem,
    value: ShoppingListItem[keyof ShoppingListItem]
  ): void {
    setShoppingList((list) => {
      return list.map((item, i) => {
        if (i === index) {
          if (key === 'name') {
            item[key] = String(value)
          } else {
            item[key] = Number(value)
          }
        }
        return item
      })
    })
  }

  function add() {
    setShoppingList((list) => [...list, { ...defaultItem }])
  }

  function remove(index: number) {
    setShoppingList((list) => list.filter((l, i) => i !== index))
  }

  return (
    <section className="form-table">
      <ul className="list">
        {shoppingList.map((item, index) => {
          return (
            <div className="item" key={`shopping-item-${index}`}>
              <label className="label">
                <span className="text">物品名：</span>
                <Input
                  value={item.name}
                  defaultValue={item.name}
                  placeholder="请填写物品名称"
                  allowClear
                  onChange={(e) => {
                    console.log(index, e.target.value)
                    setValue(index, 'name', e.target.value)
                  }}
                />
              </label>

              <label className="label">
                <span className="text">原价格：</span>
                <Input
                  value={item.price}
                  type="number"
                  prefix="￥"
                  suffix="元"
                />
              </label>

              <div className="btn-remove" onClick={() => remove(index)}>
                <svg width="16" height="16" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.689.689 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.689.689 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0Zm6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794l-.001-11.627ZM6.716 6.34c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.726 0c.38 0 .686.31.686.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.728 0c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.685.692a.689.689 0 0 1-.686-.692v-8.05a.69.69 0 0 1 .686-.692ZM9.176 1.382c-.642.045-1.065.264-1.334.662c-.198.291-.297.543-.313.768l4.938-.001c-.014-.291-.129-.547-.352-.792c-.346-.38-.73-.586-1.093-.635l-1.846-.002Z"
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </ul>

      <div className="btn-add" onClick={add}>
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" />
        </svg>
        <span>添加一项</span>
      </div>
    </section>
  )
}
