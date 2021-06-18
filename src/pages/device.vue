<template>
  <view class="device"
    ><Top title="Device" :isAdd="true" />2222222222222<TabBar current="device"
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
.device {
  padding-top: 76rpx;
}
</style>