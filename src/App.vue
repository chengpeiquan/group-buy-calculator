<template>
  <!-- <router-view/> -->
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@views/home.vue'

export default defineComponent({
  components: {
    Home
  },
  setup () {
    

    return {}
  }
})
</script>


<style lang="stylus" scoped>
</style>