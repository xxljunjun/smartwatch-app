<template>
  <view class="mine"
    ><Top title="Me" :isAdd="true" />3333333<TabBar current="mine"
  /></view>
</template>

<script>
import Top from '@/pages/component/top.vue'
import TabBar from '@/pages/component/tabBar.vue'
export default {
  components: {
    TabBar,
    Top,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.mine {
}
</style>