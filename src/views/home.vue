<template>

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

      <section class="table">
        <a-divider orientation="left">购买信息</a-divider>

        <ul>
          <li>
            <DeleteOutlined />
          </li>
        </ul>
      </section>
      
      <a-divider orientation="left">公摊费用</a-divider>

      <a-divider />

      <section class="btn">
        <a-button type="dashed">点击计算结果</a-button>
      </section>
    </a-card>
    <!-- 原价 -->

    <a-divider class="placeholder" type="vertical" />

    <!-- 实价 -->
    <a-card title="计算后的结果">
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <!-- 实价 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DeleteOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    DeleteOutlined
  },
  setup () {
    const cardData = [ '填写原价信息', '计算后的结果' ];
    

    return {
      cardData
    }
  }
})
</script>

<style lang="stylus" scoped>
.data
  display flex
  justify-content space-between
  align-items center
  max-width 1200px
  margin 20px auto
  .ant-card
    display flex
    flex-direction column
    flex 1
    .ant-divider
      >>> .ant-divider-inner-text
        font-size 14px
    .btn
      display flex
      justify-content flex-end
      align-items center
  .placeholder
    width 40px
    opacity 0
</style>