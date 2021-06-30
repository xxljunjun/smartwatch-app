<template>
  <view class="smart">
    <view class="mytop">
      <view class="lines myone">
        <view class="myleft">智能手表</view>
        <view class="myright">已连接</view>
      </view>
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
    <view class="botm">
      <view
        class="box"
        v-for="(item, index) in iconArr"
        :key="index"
        @click="goToPage(item.id)"
      >
        <view class="img-box">
          <image :src="item.src" class="small-icon" />
        </view>
        <view class="text-box">
          <view class="txt-1">{{ item.text }}</view>
          <view class="txt-2">{{ item.nums }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      sliderNum: 60,
      iconArr: [
        {
          id: 1,
          src: '/static/icons/sport.png',
          text: '运动记录',
          nums: '--公里',
        },
        {
          id: 2,
          src: '/static/icons/heathy.png',
          text: '心率',
          nums: '--次/分',
        },
        { id: 3, src: '/static/icons/red.png', text: '血氧', nums: '53%' },
        { id: 4, src: '/static/icons/sleep.png', text: '睡眠', nums: '2小时' },
      ],
    }
  },
  methods: {
    goToPage(id) {
      console.log(id)
      uni.navigateTo({
        url: '/pages/component/home/healthy/sport',
      })
    },
  },
}
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
.smart {
  width: 710rpx;
  height: 750rpx;
  margin: 20rpx;
  background: #ebebeb;
  border-radius: 20rpx;
  .mytop {
    height: 430rpx;
    background: #ed7137;
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    .lines {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
    .myone {
      margin-bottom: 38rpx;
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
  .botm {
    height: 320rpx;
    border-bottom-left-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .box {
      width: 355rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 40rpx;
      box-sizing: border-box;
      .img-box {
        margin-right: 20rpx;
        .small-icon {
          height: 80rpx;
          width: 80rpx;
        }
      }
      .text-box {
        .txt-1 {
          margin-bottom: 5rpx;
        }
        .txt-2 {
          margin-bottom: 5rpx;
        }
      }
    }
  }
}
</style>