<template>
  <view class="car">
    <view class="text-box">
      <view class="text-1 txt">钥匙匹配</view>
      <view class="text-2 txt">未连接</view>
      <view class="text-3 txt">点击卡片激活手表汽车钥匙功能</view>
    </view>
    <view class="img-box">
      <image src="/static/icons/shebei_1.png" class="smart-img" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.car {
  width: 710rpx;
  height: 290rpx;
  margin: 20rpx;
  background: #ededed;
  border-radius: 20rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  .img-box {
    .smart-img {
      width: 192rpx;
      height: 230rpx;
    }
  }
  .text-box {
    margin-left: 40rpx;
    margin-right: 130rpx;
    .txt {
      margin-bottom: 10rpx;
    }
    .text-1 {
      font-size: 36rpx;
      color: #000;
    }
    .text-2 {
      font-size: 32rpx;
      color: #555;
    }
    .text-3 {
      font-size: 24rpx;
      color: #888;
    }
  }
}
</style>