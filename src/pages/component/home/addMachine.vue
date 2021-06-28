<template>
  <view class="addMachine">
    <TopScan title="扫码添加设备" :isScan="true" />
    <view class="xinghao_box">
      <view
        class="line"
        v-for="(item, index) in 2"
        :key="index"
        @click="goToGuide"
      >
        <view class="img_box">
          <image src="/static/icons/shebei_1.png" class="smart-img" />
        </view>
        <view class="text_box">
          <view class="title">智能钥匙手表</view>
          <view class="txt"
            >简介：智能钥匙手表 智能钥匙手表 匙手表 智能钥匙手表
            智能钥匙手表…</view
          >
        </view>
        <view class="arrow_box">
          <image src="/static/icons/dayu.png" class="dayu-img" />
        </view>
      </view>
    </view>
    <view class="scan_box"></view>
    <view class="buttom-swich">
      <view class="left">
        <image src="/static/icons/xinghao.png" class="imgs" />
        <view>按型号添加</view>
      </view>
      <view class="right">
        <image src="/static/icons/scan.png" class="imgs" />
        <view>扫码添加</view>
      </view>
    </view>
  </view>
</template>

<script>
import TopScan from '@/pages/component/home/top-scan.vue'
export default {
  data() {
    return {}
  },
  methods: {
    goToGuide() {
      console.log("11111111'")
      uni.navigateTo({
        url: '/pages/component/home/guid',
      })
    },
  },
  components: {
    TopScan,
  },
}
</script>

<style lang="scss" scoped>
.addMachine {
  //   opacity: 0.5;
  //   background: #000000;
  padding-top: 76rpx;
  .xinghao_box {
    .line {
      width: 750rpx;
      height: 270rpx;
      background: #f5f5f5;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .img_box {
        .smart-img {
          // height: 192rpx;
          width: 192rpx;
        }
      }
      .text_box {
        width: 485rpx;
        .title {
          font-size: 32rpx;
          color: #000000;
          line-height: 48rpx;
          font-weight: 600;
        }
        .txt {
          font-size: 28rpx;
          color: #888888;
          line-height: 36rpx;
        }
      }
      .arrow_box {
        .dayu-img {
          width: 27rpx;
          height: 27rpx;
        }
      }
    }
  }
  .buttom-swich {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750rpx;
    height: 200rpx;
    background: #f3f3f3;
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .left {
      width: 375rpx;
      text-align: center;
      font-size: 28rpx;
      border-right: 1rpx solid #e1e1e1;
    }
    .right {
      width: 375rpx;
      text-align: center;
      font-size: 28rpx;
    }
    .imgs {
      height: 60rpx;
      width: 60rpx;
      margin-bottom: 16rpx;
    }
  }
}
</style>