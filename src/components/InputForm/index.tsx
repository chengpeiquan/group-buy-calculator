import { useState } from 'react'
import { Card } from 'antd'
import ShoppingList from './ShoppingList'

function InputForm() {
  const [shoppingList, updateShoppingList] = useState([
    {
      name: '',
      price: 0,
      result: 0,
    },
    {
      name: '',
      price: 0,
      result: 0,
    },
  ])

  function remove(index: number) {
    updateShoppingList((list) => list.splice(index, 1))
  }

  return (
    <div className="wrap">
      <Card title="填写原价信息">
        {/* 购买信息 */}
        <section className="form-table">
          <ul className="list item-list">
            <ShoppingList shoppingList={shoppingList} remove={remove} />
          </ul>
        </section>
        {/* 购买信息 */}
      </Card>
    </div>
  )
}

export default InputForm
