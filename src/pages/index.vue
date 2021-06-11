<template>
  <view>
    <Top title="Home" :isAdd="true" />
    <view v-if="hasData"></view>
    <view v-else>
      <image src="/static/icons/nodata.png" class="nodata" />
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