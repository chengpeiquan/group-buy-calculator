<template>
  <div class="data">
    
    <!-- 原价 -->
    <a-card class="input-area" title="填写原价信息">
      <template #extra>
        <a-tooltip placement="left">
          <template #title>
            无需纠结红包、抵扣券等乱七八糟的减免，会自动计算折扣比例来得到最终账单
          </template>
          <QuestionCircleOutlined />
        </a-tooltip>
      </template>

      <!-- 人员信息 -->
      <section class="purchaser">
        <a-divider orientation="left">拼单人员</a-divider>

        <div class="textarea">
          <a-textarea
            v-model:value="purchaser"
            placeholder="请输入拼单者姓名，姓名之间请用空格隔开"
            :rows="1"
            autoSize
            @change="getPurchasers"
          />
          
          <a-tooltip placement="left">
            <template #title>
              可输入拼单人员的姓名，计算结果时可进行账单分组，姓名之间用空格隔开
            </template>
            <QuestionCircleOutlined />
          </a-tooltip>
        </div>
      </section>
      <!-- 人员信息 -->

      <!-- 购买信息 -->
      <section class="table">
        <a-divider orientation="left">购买信息</a-divider>

        <ul class="list item-list">
          <li class="item"
            v-for="(item, index) in dataList"
            :key="index"
          >

            <label class="label">
              <span class="text">物品名：</span>
              <a-input
                v-model:value="item.name"
                placeholder="请填写物品名称"
                allowClear
              />
            </label>

            <label class="label">
              <span class="text">原价格：</span>
              <a-input
                v-model:value="item.price"
                type="number"
                prefix="￥"
                suffix="元"
              />
            </label>

            <label class="label select">
              <a-select
                v-model:value="item.purchaser"
                placeholder="拼单者"
              >
                <a-select-option
                  v-for="(subItem, subIndex) in purchasers"
                  :value="subItem"
                  :key="subIndex"
                >
                  {{ subItem }}
                </a-select-option>
              </a-select>
            </label>

            <DeleteOutlined @click="remove(index)" />
          </li>
        </ul>

        <div class="add">
          <span @click="add"><PlusOutlined /> 添加一项</span>
        </div>
      </section>
      <!-- 购买信息 -->

      <!-- 公摊费用 -->
      <section class="table">
        <a-divider orientation="left">公摊费用</a-divider>

        <ul class="list share-list">
          <li class="item">
            <label class="label">
              <span class="text">包装费：</span>
              <a-input
                v-model:value="packingFee"
                type="number"
                prefix="￥"
                suffix="元"
              />
            </label>
          </li>

          <li class="item">
            <label class="label">
              <span class="text">配送费：</span>
              <a-input
                v-model:value="deliveryFee"
                type="number"
                prefix="￥"
                suffix="元"
              />
            </label>
          </li>
        </ul>
      </section>
      <!-- 公摊费用 -->

      <!-- 实际支付 -->
      <section class="table">
        <a-divider orientation="left">实际支付</a-divider>

        <ul class="list actual-list">
          <li class="item">
            <label class="label">
              <span class="text">总支出：</span>
              <a-input
                v-model:value="actualPrice"
                type="number"
                prefix="￥"
                suffix="元"
              />
            </label>
          </li>
        </ul>
      </section>
      <!-- 实际支付 -->
      
      <section class="btn">
        <a-button type="primary" @click="getResult">点击计算结果</a-button>
      </section>
    </a-card>
    <!-- 原价 -->

    <a-divider class="placeholder" type="vertical" />

    <!-- 实价 -->
    <a-card class="result-area" title="计算后的结果">
      <template #extra>
        <a-tooltip placement="left">
          <template #title>
            取2位小数并四舍五入
          </template>
          <QuestionCircleOutlined />
        </a-tooltip>
      </template>

      <!-- 物品清单 -->
      <section class="table">
        <a-table
          :rowKey="record => record.name"
          :columns="resultTitle"
          :data-source="dataList"
          :pagination="false"
        >
          <template v-slot:name="{ text, record, index}">
            {{ text ? text : `物品${index + 1}` }}
          </template>

          <template v-slot:result="{ text, record, index}">
            ￥{{ text }}
          </template>
        </a-table>
      </section>
      <!-- 物品清单 -->
      
      <!-- 订单总览 -->
      <section class="result">
        <p class="text">原价总计（含运费及打包费）：<strong>￥{{ priceTotal }}</strong></p>
        <p class="text">实际支付：<strong>￥{{ actualPrice }}</strong></p>
        <p class="text">优惠幅度：<strong>{{ discountRate }}%</strong></p>
      </section>
      <!-- 订单总览 -->

    </a-card>
    <!-- 实价 -->

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { QuestionCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons-vue'

interface DataTitle {
  title: string,
  dataIndex: string,
  align: string,
  slots?: any
}

interface Data {
  name: string,
  price?: number | string,
  result?: number | string,
  purchaser?: string
}

export default defineComponent({
  components: {
    QuestionCircleOutlined,
    PlusOutlined,
    DeleteOutlined
  },
  setup () {
    const cardData = [ '填写原价信息', '计算后的结果' ];
    const purchaser = ref<string>('');
    const purchasers = ref<string[]>([]);
    const dataList: Data[] = reactive([
      {
        name: '',
        price: 0,
        result: 0,
        purchaser: ''
      },
      {
        name: '',
        price: 0,
        result: 0,
        purchaser: ''
      }
    ]);
    const deliveryFee = ref<number>(0);
    const packingFee = ref<number>(0);
    const actualPrice = ref<number>(0);
    const priceTotal = ref<number>(0);
    const discountRate = ref<number>(0);
    const resultTitle: DataTitle[] = [
      {
        title: '物品名称',
        dataIndex: 'name',
        align: 'center',
        slots: {
          customRender: 'name'
        }
      },
      {
        title: '需要支付',
        dataIndex: 'result',
        align: 'center',
        slots: {
          customRender: 'result'
        }
      }
    ]

    /** 
     * 获取购买者列表
     */
    const getPurchasers = (e: any): void => {
      // 用空格切割
      const PURCHASERS: string[] = purchaser.value.split(' ') || [];

      // 只保留有内容的项
      purchasers.value = PURCHASERS.filter( (item: string) => {
        if ( item ) {
          return item;
        }
      });

      // 重置之前选择的数据
      dataList.forEach( (item: Data) => {
        item.purchaser = '';
      })
      console.log(purchasers.value);
    }

    /** 
     * 添加项目
     */
    const add = (): void => {
      const item: Data = {
        name: '',
        price: 0,
        result: 0,
        purchaser: ''
      }

      dataList.push(item);
    }
    
    /** 
     * 移除项目
     */
    const remove = (index: number): void => {
      dataList.splice(index, 1);
    }

    /** 
     * 计算结果
     */
    const getResult = (): void => {
      // 计算物品原价总费用
      let itemTotal: number = 0;
      dataList.forEach( (item: Data): void => {
        itemTotal += Number(item.price);
      });

      // 计算公摊原价总费用
      let shareTotal: number = 0;
      shareTotal = Number(deliveryFee.value) + Number(packingFee.value);

      // 计算原价总费用
      let total: number | string = itemTotal + shareTotal;
      total = total.toFixed(2);
      priceTotal.value = Number(total);

      // 计算折扣
      let dis: number | string = 0;
      dis = (actualPrice.value / priceTotal.value) * 100;
      if ( isNaN(dis) ) {
        dis = 0;
      }
      dis = dis.toFixed(2);
      dis = Number(dis)
      discountRate.value = 100 - dis;

      // 计算物品清单
      dataList.forEach( (item: Data, index: number): void => {
        // 物品实际价格
        let actual: number = Number((item as any).price);

        // 运费实际价格
        let delivery: number = deliveryFee.value / dataList.length;

        // 打包费实际价格
        let packing: number = packingFee.value / dataList.length;

        // 最终价格
        let result: number | string = (actual + delivery + packing) * ( <number>dis / 100 );
        result = result.toFixed(2);

        // 更新数据源并展示
        item.result = Number(result);
      });
      
      // 分组展示
      setResultGroup();
    }

    /** 
     * 结果分组展示
     */
    const setResultGroup = (): void => {
      console.log(dataList);
      // const
    }

    return {
      // 数据
      cardData,
      purchaser,
      purchasers,
      dataList,
      deliveryFee,
      packingFee,
      actualPrice,
      priceTotal,
      discountRate,
      resultTitle,

      // 方法
      getPurchasers,
      add,
      remove,
      getResult,
      setResultGroup
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@styl/home.styl";
</style>