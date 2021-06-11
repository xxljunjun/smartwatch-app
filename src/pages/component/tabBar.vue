<template>
  <view class="tabBar">
    <view
      class="item"
      @click="gotopage('home')"
      :class="{ active: current === 'index' }"
    >
      <image
        src="/static/icons/index-blue.png"
        class="imgs"
        v-if="current === 'index'"
      />
      <image src="/static/icons/index.png" class="imgs" v-else />
      <view class="txt">Home</view>
    </view>

    <view
      class="item"
      @click="gotopage('device')"
      :class="{ active: current === 'device' }"
    >
      <image
        src="/static/icons/gong-blue.png"
        class="imgs"
        v-if="current === 'device'"
      />
      <image src="/static/icons/gong.png" class="imgs" v-else />
      <view class="txt">Device</view>
    </view>

    <view
      class="item"
      @click="gotopage('me')"
      :class="{ active: current === 'mine' }"
    >
      <image
        src="/static/icons/mine-blue.png"
        class="imgs"
        v-if="current === 'mine'"
      />
      <image src="/static/icons/mine.png" class="imgs" v-else />
      <view class="txt">Me</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    current: {
      type: String,
      default: 'index',
    },
  },
  data() {
    return {}
  },
  compoennts: {},
  mounted() {
    let routes = getCurrentPages() // 获取当前打开过的页面路由数组
    let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
  },
  methods: {
    gotopage(val) {
      var url
      switch (val) {
        case 'home':
          url = 'index'

          break
        case 'device':
          url = 'device'
          break
        case 'me':
          url = 'mine'
          break
        default:
          break
      }
      uni.navigateTo({
        url: url,
      })
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
    color: #000;
    font-size: 20rpx;
    &.active {
      color: #007aff;
    }
    .imgs {
      height: 48rpx;
      width: 48rpx;
      margin-bottom: 8rpx;
    }
  }
}
</style>