import { createContext, useState } from 'react'
import { defaultItem } from '@/assets/data'
import {
  calculateOriginalTotalExpenses,
  calculateDiscountRate,
} from '@/libs/calculator'
import type { ReactNode } from 'react'
import type { SharedExpensesInfo, ShoppingListItem } from '@/types'

interface Props {
  children: ReactNode
}

export const GlobalContext = createContext<Record<string, any>>({})

export function GlobalContextProvider({ children }: Props) {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([
    { ...defaultItem },
    { ...defaultItem },
  ])

  const [sharedExpenses, setSharedExpenses] = useState<SharedExpensesInfo>({
    packagingFee: '',
    deliveryFee: '',
  })

  const [actualExpenses, setActualExpenses] = useState('')
  const [originalTotalExpenses, setOriginalTotalExpenses] = useState(0)
  const [discountRate, setDiscountRate] = useState(0)

  /**
   * 计算最终结果
   */
  function getResult() {
    // 原价总费用
    const _originalTotalExpenses = calculateOriginalTotalExpenses(
      shoppingList,
      sharedExpenses
    )
    setOriginalTotalExpenses(() => _originalTotalExpenses)

    // 折扣率
    const _discountRate = calculateDiscountRate(
      Number(actualExpenses),
      _originalTotalExpenses
    )
    setDiscountRate(() => _discountRate)

    // 平摊的配送费价格
    const averageDeliveryFee =
      Number(sharedExpenses.deliveryFee) / shoppingList.length

    // 平摊的打包费价格
    const averagePackagingFee =
      Number(sharedExpenses.packagingFee) / shoppingList.length

    // 更新物品折扣后的最终价格
    setShoppingList((list) => {
      return list.map((item) => {
        const result =
          (Number(item.price) + averageDeliveryFee + averagePackagingFee) *
          (1 - _discountRate)
        item.result = result.toFixed(2)
        return item
      })
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        shoppingList,
        setShoppingList,
        sharedExpenses,
        setSharedExpenses,
        actualExpenses,
        setActualExpenses,
        originalTotalExpenses,
        discountRate,
        getResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
