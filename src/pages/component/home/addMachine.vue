<template>
  <view class="addMachine">
    <TopScan title="扫码添加设备" :isScan="true" />
  </view>
</template>

<script>
import TopScan from '@/pages/component/home/top-scan.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    TopScan,
  },
}
</script>

<style lang="scss" scoped>
.addMachine {
  //   opacity: 0.5;
  //   background: #000000;
}
</style>