<template>
  <view class="top">
    <view class="left" v-if="isBack">
      <image src="/static/icons/back.png" class="back" />
    </view>
    <view class="middle">
      {{ title }}
    </view>
    <view class="right" v-if="isAdd">
      <image src="/static/icons/add.png" class="add" />
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
      default: false,
    },
    isAdd: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
.top {
  height: 76rpx;
  width: 100%;
  background-image: linear-gradient(180deg, #f2f2f2 0%, #d3d3d3 100%);
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
  }
  .right {
    position: absolute;
    top: 5rpx;
    right: 30rpx;
    .add {
      height: 64rpx;
      width: 64rpx;
    }
  }
}
</style>