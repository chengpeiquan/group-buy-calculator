export interface ShoppingListItem {
  name: string
  price: string
  result: string
}

export type ShoppingListItemKey = keyof ShoppingListItem

export interface SharedExpensesInfo {
  packagingFee: string
  deliveryFee: string
}

export type SharedExpensesInfoKey = keyof SharedExpensesInfo

export interface ResultTableColumn {
  title: string
  dataIndex: string
  align: string
}
