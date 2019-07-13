<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="https://picb2b.qyer.com/FuhcpbmD6CmLSmyIiDa4C9JR9KPv" alt class="imgs" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://zworld.qyerstatic.com/web/project/index/images/ad/ad2.jpg" alt class="imgs" />
    </van-swipe-item>
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
