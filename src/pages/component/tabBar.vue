<template>
  <view class="tabBar">
    <view class="item" @click="gotopage('home')">
      <image src="/static/icons/index.png" class="imgs" />
      <view class="txt">Home</view>
    </view>
    <view class="item" @click="gotopage('device')">
      <image src="/static/icons/gong.png" class="imgs" />
      <view class="txt">Device</view>
    </view>
    <view class="item" @click="gotopage('me')">
      <image src="/static/icons/mine.png" class="imgs" />
      <view class="txt">Me</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  compoennts: {},
  mounted() {
    console.log('00000000', this.$router)
  },
  methods: {
    gotopage(val) {
      switch (val) {
        case 'home':
          break
        case 'device':
          break
        case 'me':
          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tabBar {
  position: fixed;
  bottom: 0;
  height: 100rpx;
  width: 100%;
  background-image: linear-gradient(180deg, #f2f2f2 0%, #d3d3d3 100%);
  box-shadow: inset 0 2px 0 0 #d2d2d2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 110rpx;
  box-sizing: border-box;
  .item {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .imgs {
      height: 48rpx;
      width: 48rpx;
      margin-bottom: 8rpx;
    }
    .txt {
      color: #000;
      font-size: 20rpx;
    }
  }
}
</style>