<template>
  <view class="home">
    <Top title="Home" :isAdd="true" />
    <view v-if="hasData" class="hasdata">
      <Smart />
      <Car />
    </view>
    <view v-else class="nodatabox">
      <image src="/static/icons/nodata.png" class="nodata" />
      <text class="notext">无内容</text>
    </view>
    <Tips :hasData="hasData" />
    <TabBar current="index" />
  </view>
</template>

<script>
import TabBar from "@/pages/component/tabBar.vue";
import Top from "@/pages/component/top.vue";
import Smart from "@/pages/component/home/smart.vue";
import Car from "@/pages/component/home/car.vue";
import Tips from "@/pages/component/home/tips.vue";
// import axios from "axios";
const Mock = require("mockjs");
import { fetchData } from "@/serve/api.js";
export default {
  data() {
    return {
      hasData: true,
    };
  },
  mounted() {
    this.getFetchData();
  },
  components: {
    TabBar,
    Top,
    Smart,
    Car,
    Tips,
  },
  methods: {
    getFetchData() {
      fetchData().then((res) => {
        console.log("1111", res);
        Mock.mock("http://localhost:8080/api/xxl/mock", "get", {
          aa: 11,
        });
        console.log("2222", res);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
uni-page-body {
  height: 100%;
}
.home {
  position: relative;
  padding-top: 76rpx;
  padding-bottom: 100rpx;
  background: #ccc;
  .hasdata {
  }
  .nodatabox {
    position: fixed;
    width: 200rpx;
    height: 200rpx;
    z-index: 9;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .nodata {
      height: 136rpx;
      width: 136rpx;
    }
    .notext {
      font-size: 30rpx;
      color: #888888;
      letter-spacing: 0;
      text-align: center;
      line-height: 30rpx;
    }
  }
}
</style>
