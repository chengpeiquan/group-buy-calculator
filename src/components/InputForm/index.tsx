import { useContext } from 'react'
import { Button, Card, Divider } from 'antd'
import { GlobalContext } from '@/context'
import ShoppingInfo from './components/ShoppingInfo'
import SharedExpenses from './components/SharedExpenses'
import ActualPayment from './components/ActualPayment'

function InputForm() {
  const { shoppingList, updateShoppingList, sharedExpenses, getResult } =
    useContext(GlobalContext)

  return (
    <div className="main-wrap">
      <Card title="填写原价信息">
        {/* 购买信息 */}
        <ShoppingInfo
          shoppingList={shoppingList}
          updateShoppingList={updateShoppingList}
        />
        {/* 购买信息 */}

        <Divider orientation="left">公摊费用</Divider>

        {/* 公摊费用 */}
        <SharedExpenses sharedExpenses={sharedExpenses} />
        {/* 公摊费用 */}

        <Divider orientation="left">实际支付</Divider>

        {/* 实际支付 */}
        <ActualPayment sharedExpenses={sharedExpenses} />
        {/* 实际支付 */}

        <section className="btn-result">
          <Button type="primary" onClick={getResult}>
            点击计算结果
          </Button>
        </section>
      </Card>
    </div>
  )
}

export default InputForm
