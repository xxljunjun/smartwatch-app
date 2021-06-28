<template>
  <view class="mask" v-if="haveMachine && !hasData">
    <view class="box">
      <image src="/static/icons/add.png" class="add" />
    </view>
    <view class="box_1">点击右上角图标，添加设备</view>
    <view class="close">
      <image src="/static/icons/close@3x.png" class="del" @click="closeMask" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    hasData: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    hasData: {
      handler(newVal) {
        console.log(newVal)
        if (newVal) {
          this.haveMachine = false
        }
      },
    },
  },
  data() {
    return {
      haveMachine: true,
    }
  },
  methods: {
    closeMask() {
      this.haveMachine = false
    },
  },
}
</script>

<style lang="scss" scoped>
.mask {
  color: #fff;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  .box {
    width: 76rpx;
    height: 76rpx;
    background: #fff;
    border-radius: 5rpx;
    position: absolute;
    right: 15rpx;
    .add {
      height: 64rpx;
      width: 64rpx;
      position: relative;
      right: 1rpx;
      top: 6rpx;
    }
  }
  .box_1 {
    width: 435rpx;
    height: 130rpx;
    background: #0e80ff;
    color: #fff;
    font-size: 32rpx;
    position: absolute;
    right: 15rpx;
    top: 120rpx;
    border-radius: 10rpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .close {
    .del {
      width: 50rpx;
      height: 50rpx;
      position: absolute;
      right: 200rpx;
      top: 300rpx;
    }
  }
}
</style>