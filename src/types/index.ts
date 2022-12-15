export interface ShoppingListItem {
  name: string
  price: string
  result: number
}

export type ShoppingListItemKey = keyof ShoppingListItem

export interface SharedExpensesInfo {
  packagingFee: string
  deliveryFee: string
}

export type SharedExpensesInfoKey = keyof SharedExpensesInfo
