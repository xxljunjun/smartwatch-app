<template>
  <view class="device">
    <Top title="Device" :isAdd="true" />
    <TabBar current="device" />
    <view
      v-for="(item, index) in 2"
      :key="index"
      class="box"
      @click="goToDetail"
    >
      <view class="left">
        <image src="/static/icons/shebei_1.png" class="smart-img" />
      </view>
      <view class="right">
        <view class="line">AUTEL-KeyWatch-001</view>
        <view class="line">已连接</view>
        <view class="line">电量86%</view>
      </view>
    </view>
  </view>
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
  methods: {
    goToDetail() {
      console.log('22222222')
      uni.navigateTo({
        url: '/pages/component/device/shebei',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.device {
  padding-top: 76rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  .box {
    width: 710rpx;
    height: 360rpx;
    background: #f5f5f5;
    margin-top: 20rpx;
    border-radius: 15rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    .left {
      margin-right: 30rpx;
      .smart-img {
        height: 270rpx;
        width: 200rpx;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      .line {
        margin-bottom: 10rpx;
      }
    }
  }
}
</style>