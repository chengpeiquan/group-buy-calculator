import { createContext, useState } from 'react'
import { defaultItem } from '@/assets/data'
import type { ReactNode } from 'react'
import type { SharedExpensesInfo, ShoppingListItem } from '@/types'

interface Props {
  children: ReactNode
}

export const GlobalContext = createContext<Record<string, any>>({})

export function GlobalContextProvider({ children }: Props) {
  const [shoppingList, updateShoppingList] = useState<ShoppingListItem[]>(
    Array(2).fill({ ...defaultItem })
  )

  const [sharedExpenses] = useState<SharedExpensesInfo>({
    packagingFee: 0,
    deliveryFee: 0,
  })

  const [actualCost, updateActualCost] = useState(0)

  function getResult() {
    updateActualCost((cost) => cost++)
    console.log(actualCost)
  }

  return (
    <GlobalContext.Provider
      value={{
        shoppingList,
        updateShoppingList,
        sharedExpenses,
        actualCost,
        updateActualCost,
        getResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
