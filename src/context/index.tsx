import { createContext, useState } from 'react'
import { defaultItem } from '@/assets/data'
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
        setSharedExpenses,
        actualCost,
        setActualCost,
        getResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
