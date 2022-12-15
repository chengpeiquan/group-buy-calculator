import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { SharedExpensesInfo, ShoppingListItem } from '@/types'

interface Props {
  children: ReactNode
}

export const GlobalContext = createContext<Record<string, any>>({})

export function GlobalContextProvider({ children }: Props) {
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([])

  const [sharedExpenses] = useState<SharedExpensesInfo>({
    packagingFee: 0,
    deliveryFee: 0,
  })

  const [actualCost, setActualCost] = useState(0)

  function getResult() {
    setActualCost((cost) => cost++)
    console.log(actualCost)
  }

  return (
    <GlobalContext.Provider
      value={{
        shoppingList,
        setShoppingList,
        sharedExpenses,
        actualCost,
        setActualCost,
        getResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
