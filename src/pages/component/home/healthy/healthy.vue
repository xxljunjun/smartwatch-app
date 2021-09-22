<template>
  <view class="sport">
    <Top title="健康" :isBack="true" :isAdd="true" />
    <view class="mytop">
      <view class="lines mytwo">
        <view class="myleft">今日(5/16)步数：</view>
        <view class="myright">步数排行</view>
      </view>
      <view class="lines mythreen">
        <view class="myleft">- -步</view>
        <view class="mid">距离:- -米</view>
        <view class="myright">消耗:- -Kcal</view>
      </view>
      <view class="lines myfour">
        <!-- uniapp自带组件库表单组件slider -->
        <slider
          :value="sliderNum"
          activeColor="#FFFFFF"
          backgroundColor="rgba(255,255,255,0.19)"
          block-color="#FFFFFF"
          block-size="12"
          :disabled="true"
        />
      </view>
      <view class="lines">
        <view class="myleft">还差- -步达成目标 ></view>
      </view>
    </view>
    <view class="large-box">
      <view class="box" v-for="(item, index) in 4" :key="index">
        <view class="title">运动记录</view>
        <view class="time">2021/02/01</view>
        <view class="img-box">
          <image src="/static/icons/nodata.png" class="de-img" />
        </view>
        <view class="mi"><text class="nums">10</text>公里</view>
      </view>
    </view>
  </view>
</template>

<script>
import Top from "@/pages/component/top.vue";
export default {
  data() {
    return {
      sliderNum: 50,
    };
  },
  methods: {},
  components: {
    Top,
  },
};
</script>

<style lang="scss" scoped>
/deep/uni-slider {
  margin: 0;
}
/deep/.uni-slider-handle-wrapper {
  height: 12rpx;
}
/deep/.uni-slider-thumb {
  display: none;
}
.sport {
  padding-top: 76rpx;
  .mytop {
    margin-left: 20rpx;
    margin-top: 20rpx;
    width: 710rpx;
    height: 350rpx;
    background: #0c9def;
    border-radius: 20rpx;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    .lines {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
    .mytwo {
      margin-bottom: 38rpx;
    }
    .mythreen {
      margin-bottom: 24rpx;
    }
    .myfour {
      margin-bottom: 40rpx;
      display: block;
    }
  }
  .large-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 0 10rpx;
    box-sizing: border-box;
    .box {
      width: 345rpx;
      height: 365rpx;
      background: #f5f5f5;
      border-radius: 24rpx;
      margin-top: 20rpx;
      padding: 20rpx;
      box-sizing: border-box;
      .title {
        font-size: 32rpx;
        color: #000000;
        margin-bottom: 5rpx;
      }
      .time {
        font-size: 24rpx;
        color: #888888;
      }
      .img-box {
        margin-top: 20rpx;
        .de-img {
          height: 110rpx;
          width: 200rpx;
          height: 200rpx;
        }
      }
      .mi {
        margin-top: 20rpx;
        font-size: 28rpx;
        color: #555555;
        .nums {
          font-size: 72rpx;
          color: #000;
        }
      }
    }
  }
}
</style>
