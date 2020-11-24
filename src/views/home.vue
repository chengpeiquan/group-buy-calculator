<template>
<<<<<<< HEAD
  <div class="data">
    
    <!-- 原价 -->
    <a-card class="input-area" title="填写原价信息">
      <template #extra>
        <a class="add" @click="add"><PlusOutlined /> 添加一项</a>
      </template>
=======

  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="cardData">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-card :title="item">
          Card content
        </a-card>
      </a-list-item>
    </template>
  </a-list>


  <div class="data">
    
    <!-- 原价 -->
    <a-card title="填写原价信息">
      <template #extra><a href="#">添加一个</a></template>
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104

      <section class="table">
        <a-divider orientation="left">购买信息</a-divider>

<<<<<<< HEAD
        <ul class="list">
          <li class="item"
            v-for="(item, index) in dataList"
            :key="index"
          >

            <label class="label">
              <span class="text">物品：</span>
              <a-input
                v-model:value="item.name"
                placeholder="物品名称"
              />
            </label>

            <label class="label">
              <span class="text">价格：</span>
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
      </section>

      <section class="table">
        <a-divider orientation="left">公摊费用</a-divider>

        <ul class="list">
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

            <DeleteOutlined @click="remove(index)" />
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

            <DeleteOutlined @click="remove(index)" />
=======
        <ul>
          <li>
            <DeleteOutlined />
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
          </li>
        </ul>
      </section>
      
<<<<<<< HEAD
      <a-divider />

      <section class="btn">
        <a-button type="primary" @click="getResult">点击计算结果</a-button>
=======
      <a-divider orientation="left">公摊费用</a-divider>

      <a-divider />

      <section class="btn">
        <a-button type="dashed">点击计算结果</a-button>
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
      </section>
    </a-card>
    <!-- 原价 -->

    <a-divider class="placeholder" type="vertical" />

    <!-- 实价 -->
<<<<<<< HEAD
    <a-card class="result-area" title="计算后的结果">
=======
    <a-card title="计算后的结果">
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <!-- 实价 -->
<<<<<<< HEAD

=======
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { defineComponent, reactive, ref } from 'vue'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons-vue'

interface Data {
  name: string,
  price: number
}

export default defineComponent({
  components: {
    PlusOutlined,
=======
import { defineComponent } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
    DeleteOutlined
  },
  setup () {
    const cardData = [ '填写原价信息', '计算后的结果' ];
<<<<<<< HEAD
    const dataList: Data[] = reactive([
      {
        name: '',
        price: 0
      }
    ]);
    let deliveryFee = ref<number>(0);
    let packingFee = ref<number>(0);

    /** 
     * 添加项目
     */
    const add = (): void => {
      const item: Data = {
        name: '',
        price: 0
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
      console.log(dataList);
      
    }

    return {
      // 数据
      cardData,
      dataList,
      deliveryFee,
      packingFee,

      // 方法
      add,
      remove,
      getResult
=======
    

    return {
      cardData
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
    }
  }
})
</script>

<style lang="stylus" scoped>
<<<<<<< HEAD
@import "~@styl/config"

.data
  display flex
  justify-content space-between
  align-items flex-start
  max-width 1200px
  margin 20px auto
  .ant-list
    width 100%
=======
.data
  display flex
  justify-content space-between
  align-items center
  max-width 1200px
  margin 20px auto
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
  .ant-card
    display flex
    flex-direction column
    flex 1
    .ant-divider
      >>> .ant-divider-inner-text
        font-size 14px
<<<<<<< HEAD
  // 左侧 - 输入区域
  .input-area
    .table
      .list
        padding 0
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
              align-items center
              width 50px
            .ant-input-number
              display flex
              flex 1
          .anticon-delete
            display flex
            flex-shrink 0
            cursor pointer
=======
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
    .btn
      display flex
      justify-content flex-end
      align-items center
<<<<<<< HEAD
  // 中间占位符
  .placeholder
    width 10px
=======
  .placeholder
    width 40px
>>>>>>> f3fef24d55154f61e5ab7adf0ad8a60832a80104
    opacity 0
</style>