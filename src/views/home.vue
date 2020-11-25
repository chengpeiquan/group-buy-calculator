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

      <!-- 购买信息 -->
      <section class="table">
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
  result?: number | string
}

export default defineComponent({
  components: {
    QuestionCircleOutlined,
    PlusOutlined,
    DeleteOutlined
  },
  setup () {
    const cardData = [ '填写原价信息', '计算后的结果' ];
    const dataList: Data[] = reactive([
      {
        name: '',
        price: 0,
        result: 0
      },
      {
        name: '',
        price: 0,
        result: 0
      }
    ]);
    let deliveryFee = ref<number>(0);
    let packingFee = ref<number>(0);
    let actualPrice = ref<number>(0);
    let priceTotal = ref<number>(0);
    let discountRate = ref<number>(0);
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
     * 添加项目
     */
    const add = (): void => {
      const item: Data = {
        name: '',
        price: 0,
        result: 0
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
        (item as any).result = Number(result);
      });
        
    }

    return {
      // 数据
      cardData,
      dataList,
      deliveryFee,
      packingFee,
      actualPrice,
      priceTotal,
      discountRate,
      resultTitle,

      // 方法
      add,
      remove,
      getResult
    }
  }
})
</script>

<style lang="stylus" scoped>
@import "~@styl/config"

.data
  display flex
  justify-content space-between
  align-items flex-start
  width 100%
  max-width 1200px
  margin 40px auto
  .ant-list
    width 100%
  .ant-card
    display flex
    flex-direction column
    flex 1
    .ant-divider
      >>> .ant-divider-inner-text
        font-size 14px
  // 左侧 - 输入区域
  .input-area
    .table
      .list
        display flex
        flex-direction column
        padding 0
        margin 0
        .item
          display flex
          align-items center
          margin-bottom $margin
          .label
            display flex
            flex 1
            align-items center
            margin-right $margin
            .text
              display flex
              flex-shrink 0
              justify-content flex-end
              align-items center
              width 60px
              margin-right ($margin /2)
            .ant-input-number
              display flex
              flex 1
          .anticon-delete
            display flex
            flex-shrink 0
            cursor pointer
        // 公摊
        &.share-list
          flex-direction row
          .item
            width 45%
            margin-right $margin
            .label
              margin-right 0
        // 实际支付
        &.actual-list
          .item
            width 45%
            .label
              margin-right 0
      .add
        display flex
        justify-content flex-end
        align-items center
        width 100%
        cursor pointer
    .btn
      display flex
      justify-content flex-end
      align-items center
  // 右侧 - 结果区域
  .result-area
    .result
      display flex
      flex-direction column
      align-items flex-end
      margin-top $margin
      .text
        &:last-child
          margin-bottom 0
        strong
          margin-left ($margin /2)
  // 中间占位符
  .placeholder
    width 10px
    opacity 0

// 手机样式
.mode-mobile
  .data
    flex-direction column
    max-width 100%
    margin 0
    .placeholder
      display none
    .ant-card
      width 100%
      &:first-child
        margin-bottom $margin
</style>