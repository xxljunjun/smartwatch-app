<template>
  <view class="guid">
    <Top title="配对引导" :isAdd="false" :isBack="true" />
    <view class="img-box">
      <image src="/static/icons/shebei_1.png" class="smart-img" />
    </view>
    <view class="start-box">
      <view class="txt">开始配对</view>
    </view>
  </view>
</template>

<script>
import Top from '@/pages/component/top.vue'
export default {
  data() {
    return {}
  },
  meethods: {},
  components: {
    Top,
  },
}
</script>

<style lang="scss" scoped>
.guid {
  padding-top: 76rpx;
  .start-box {
    position: fixed;
    bottom: 40rpx;
    left: 125rpx;
    .txt {
      background: #0e80ff;
      border-radius: 40rpx;
      width: 500rpx;
      height: 80rpx;
      color: #fff;
      text-align: center;
      line-height: 80rpx;
    }
  }
  .img-box {
    margin-top: 126rpx;
    width: 750rpx;
    display: flex;
    justify-content: center;
    .smart-img {
      height: 422rpx;
      width: 320rpx;
    }
  }
}
</style>