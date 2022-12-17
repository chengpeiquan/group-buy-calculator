import { useContext } from 'react'
import { Card, Table } from 'antd'
import { GlobalContext } from '@/context'
import TooltipMessage from '@/components/TooltipMessage'

const { Column } = Table

export default function ResultPreview() {
  const { shoppingList, actualExpenses, originalTotalExpenses, discountRate } =
    useContext(GlobalContext)

  return (
    <div className="main-wrap">
      <Card
        title="计算后的结果"
        extra={<TooltipMessage title="取 2 位小数并四舍五入" />}
      >
        {/* 物品清单 */}
        <Table
          rowKey={() => String(Math.random() * 100)}
          // columns={resultTableColumns}
          dataSource={shoppingList}
          pagination={false}
        >
          <Column
            title="物品名称"
            dataIndex="name"
            key="name"
            align="center"
            render={(text, record, index) => (
              <>
                <span>{text || `物品 ${index + 1}`}</span>
              </>
            )}
          />
          <Column
            title="需要支付"
            dataIndex="result"
            key="result"
            align="center"
            render={(text) => (
              <>
                <span>￥ {text || '0.00'}</span>
              </>
            )}
          />
        </Table>
        {/* 物品清单 */}

        {/* 订单总览 */}
        <section className="result-overview">
          <p className="line">
            原价总计（含运费及打包费）：
            <strong>￥{originalTotalExpenses.toFixed(2)}</strong>
          </p>
          <p className="line">
            实际支付：
            <strong>￥{Number(actualExpenses).toFixed(2) || '0.00'}</strong>
          </p>
          <p className="line">
            优惠幅度：<strong>{(discountRate * 100).toFixed(2)}%</strong>
          </p>
        </section>
        {/* 订单总览 */}
      </Card>
    </div>
  )
}
