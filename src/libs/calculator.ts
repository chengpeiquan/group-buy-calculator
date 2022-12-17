import type { ShoppingListItem, SharedExpensesInfo } from '@/types'

/**
 * 计算原价总费用
 */
export function calculateOriginalTotalExpenses(
  shoppingList: ShoppingListItem[],
  sharedExpenses: SharedExpensesInfo
) {
  // 计算物品原价总和
  let totalShoppingExpenses = 0
  shoppingList.forEach((item) => {
    totalShoppingExpenses += Number(item.price)
  })

  // 计算公摊原价总和
  let totalSharedExpenses = 0
  totalSharedExpenses =
    Number(sharedExpenses.packagingFee) + Number(sharedExpenses.deliveryFee)

  // 计算原价总费用
  let originalTotalExpenses = totalShoppingExpenses + totalSharedExpenses
  originalTotalExpenses = Number(originalTotalExpenses.toFixed(2))

  return originalTotalExpenses
}

/**
 * 计算折扣
 */
export function calculateDiscountRate(
  actualExpenses: number,
  originalTotalExpenses: number
) {
  // 算出实际支付比例
  let paymentRatio = 1
  paymentRatio = actualExpenses / originalTotalExpenses

  // 剩下的就是折扣比例
  const discountRate = 1 - paymentRatio
  return isNaN(discountRate) ? 0 : discountRate
}
