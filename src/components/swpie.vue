<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      imgs: {}
    };
  },
  comments: {
    vant() {
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.imgs {
  width: 375px;
  height: 180px;
}
</style>
