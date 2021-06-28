<template>
  <view class="top">
    <view class="left" v-if="isBack">
      <image src="/static/icons/back.png" class="back" @click="goToBack" />
    </view>
    <view class="middle">
      {{ title }}
    </view>
    <view class="right" v-if="isScan">
      <image
        src="/static/icons/question.png"
        class="question"
        @click="goToHelp"
      />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    isBack: {
      type: Boolean,
      default: true,
    },
    isScan: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    goToBack() {
      uni.navigateBack({
        delta: 1,
      })
    },
    goToHelp() {
      console.log('22222222')
      uni.navigateTo({
        url: '/pages/component/home/help',
      })
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.top {
  height: 76rpx;
  width: 100%;
  //   background-image: linear-gradient(180deg, #f2f2f2 0%, #d3d3d3 100%);
  box-shadow: inset 0 2px 0 0 #d2d2d2;
  position: fixed;
  top: 0;
  left: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  .left {
    position: absolute;
    left: 30rpx;
    top: 5rpx;
    .back {
      height: 64rpx;
      width: 64rpx;
    }
  }
  .middle {
    color: #fff;
  }
  .right {
    position: absolute;
    top: 15rpx;
    right: 30rpx;
    .add {
      height: 64rpx;
      width: 64rpx;
    }
    .question {
      height: 44rpx;
      width: 44rpx;
    }
  }
}
</style>