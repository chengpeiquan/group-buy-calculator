import type { ColumnsType } from 'antd/es/table'
import type { ShoppingListItem, ResultTableColumn } from '@/types'

export const defaultItem: ShoppingListItem = {
  name: '',
  price: '',
  result: '',
}

export const resultTableColumns: ColumnsType<ResultTableColumn> = [
  {
    title: '物品名称',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '需要支付',
    dataIndex: 'result',
    align: 'center',
  },
]
