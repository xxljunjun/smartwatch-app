<template>
  <view class="mine"
    ><Top title="Me" :isAdd="true" />
    <TabBar current="mine" />
    <view>
      <view class="page-body">
        <view class="page-section page-section-gap">
          <map
            style="width: 100%; height: 300px;"
            :latitude="latitude"
            :longitude="longitude"
            :markers="covers"
          >
          </map>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Top from "@/pages/component/top.vue";
import TabBar from "@/pages/component/tabBar.vue";
export default {
  components: {
    TabBar,
    Top,
  },
  data() {
    return {
      id: 0, // 使用 marker点击事件 需要填写id
      title: "map",
      latitude: 39.909,
      longitude: 116.39742,
      covers: [
        {
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: "../static/add.png",
        },
        {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: "../static/add.png",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.mine {
  padding-top: 76rpx;
}
</style>
