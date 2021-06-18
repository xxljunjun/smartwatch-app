<template>
  <view class="home">
    <Top title="Home" :isAdd="true" />
    <view v-if="hasData" class="hasdata"></view>
    <view v-else class="nodatabox">
      <image src="/static/icons/nodata.png" class="nodata" />
      <text>无内容</text>
    </view>
    <TabBar current="index" />
  </view>
</template>

<script>
import TabBar from '@/pages/component/tabBar.vue'
import Top from '@/pages/component/top.vue'
export default {
  data() {
    return {
      hasData: false,
    }
  },
  components: {
    TabBar,
    Top,
  },
}
</script>

<style lang="scss" scoped>
</style>