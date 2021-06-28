<template>
  <view class="help">
    <Top title="帮助" :isAdd="false" :isBack="true" />
  </view>
</template>

<script>
import Top from '@/pages/component/top.vue'
export default {
  components: {
    Top,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.help {
}
</style>