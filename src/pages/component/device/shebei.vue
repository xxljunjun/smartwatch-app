<template>
  <view class="shebei">
    <Top title="AUTEL-KeyWatch" :isBack="true" />
    <view class="box">
      <view class="left">
        <image src="/static/icons/shebei_1.png" class="smart-img" />
      </view>
      <view class="right">
        <view class="line">AUTEL-KeyWatch-001</view>
        <view class="line">已连接</view>
        <view class="line">电量86%</view>
      </view>
    </view>
    <view class="main">
      <view class="small" v-for="(item, index) in mainArr" :key="index" @click="goToPage(item.id)">
        <image :src="item.src" class="small-img">
        <text class="txt">{{item.text}}</text>
      </view>
    </view>
    <view class="a_line" v-for="(item, index) in 2" :key="index">
      消息通知
    </view>
    <view class="del">解除绑定</view>
  </view>
</template>

<script>
import Top from '@/pages/component/top.vue'
export default {
  data() {
    return {
      mainArr: [
        { id: 1, src: '/static/icons/shop.png', text: '表盘市场' },
        { id: 2, src: '/static/icons/music.png', text: '音乐' },
        { id: 3, src: '/static/icons/clock.png', text: '闹钟' },
        { id: 4, src: '/static/icons/man.png', text: '常用联系人' },
        { id: 5, src: '/static/icons/son.png', text: '天气推送' },
        { id: 6, src: '/static/icons/shop_2.png', text: '汽车钥匙' },
      ],
    }
  },
  methods: {
    goToPage(id) {
      console.log(id)
    },
  },
  components: {
    Top,
  },
}
</script>

<style lang="scss" scoped>
.shebei {
  padding-top: 76rpx;
  margin-left: 20rpx;
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
  .main {
    height: 320rpx;
    width: 710rpx;
    background: #f5f5f5;
    border-radius: 15rpx;
    margin: 20rpx 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    .small {
      width: 150rpx;
      display: flex;
      flex-direction: column;
      margin-left: 20rpx;
      align-items: center;
      .txt {
        font-size: 24rpx;
      }
      .small-img {
        height: 50rpx;
        width: 50rpx;
        margin-bottom: 20rpx;
      }
    }
  }

  .a_line {
    height: 106rpx;
    width: 710rpx;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    padding-left: 20rpx;
    box-sizing: border-box;
    &:nth-child(4) {
      border-top-right-radius: 15rpx;
      border-top-left-radius: 15rpx;
      border-bottom: 1rpx solid #ccc;
    }
    &:nth-child(5) {
      border-bottom-right-radius: 15rpx;
      border-bottom-left-radius: 15rpx;
    }
  }
  .del {
    height: 106rpx;
    width: 710rpx;
    background: #f5f5f5;
    border-radius: 15rpx;
    margin-top: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>