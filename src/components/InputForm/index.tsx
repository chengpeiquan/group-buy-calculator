import { useContext } from 'react'
import { Button, Card, Divider } from 'antd'
import { GlobalContext } from '@/context'
import TooltipMessage from '@/components/TooltipMessage'
import ShoppingInfo from './components/ShoppingInfo'
import SharedExpenses from './components/SharedExpenses'
import ActualPayment from './components/ActualPayment'

function InputForm() {
  const {
    shoppingList,
    setShoppingList,
    sharedExpenses,
    setSharedExpenses,
    actualExpenses,
    setActualExpenses,
    getResult,
  } = useContext(GlobalContext)

  return (
    <div className="main-wrap">
      <Card
        title="填写原价信息"
        extra={
          <TooltipMessage title="无需纠结红包、抵扣券等乱七八糟的减免，会自动计算折扣比例来得到最终账单" />
        }
      >
        {/* 购买信息 */}
        <ShoppingInfo
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
        {/* 购买信息 */}

        <Divider orientation="left">公摊费用</Divider>

        {/* 公摊费用 */}
        <SharedExpenses
          sharedExpenses={sharedExpenses}
          setSharedExpenses={setSharedExpenses}
        />
        {/* 公摊费用 */}

        <Divider orientation="left">实际支付</Divider>

        {/* 实际支付 */}
        <ActualPayment
          actualExpenses={actualExpenses}
          setActualExpenses={setActualExpenses}
        />
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
