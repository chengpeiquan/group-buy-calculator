<template>
  <!-- <router-view/> -->
  <Home />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue'
import Home from '@views/home.vue'

export default defineComponent({
  components: {
    Home
  },
  setup () {
    /** 
     * 根据访问设备添加样式名
     */
    const checkDevice = (): any => {
			const CLIENT_WIDTH: number = document.documentElement.clientWidth;
			const CLIENT_HEIGHT: number = document.documentElement.clientHeight;
      if ( !CLIENT_WIDTH ) { 
        return false;
      }

      // 判断是否是手机设备
      const IS_MOBILE: boolean = /iPhone|phone|android|iPod|pad|iPad/i.test(navigator.userAgent.toLowerCase());

      // 添加样式名
      (document as any).querySelector('body').className = IS_MOBILE ? 'mode-mobile' : 'mode-desktop';
    }
    
    onMounted( () => {
      checkDevice();
    })

    return {
      checkDevice
    }
  }
})
</script>


<style lang="stylus" scoped>
</style>