<template>
    <van-nav-bar left-text="东京首页" left-arrow @click-left="onClickLeft" class="color">
      <!-- <van-icon name="search" slot="right" >
        <span>搜索</span>
        <span>定位</span>
      </van-icon> -->
    </van-nav-bar>
</template>
<script>
import Vue from "vue";
import { NavBar } from 'vant';
Vue.use(NavBar);
export default {
    methods:{
      onClickLeft(){
        this.$router.push({ path:'/city'});
      }
    }
}
</script>

<style lang="scss">
.color{
  background: #0cbf79;
}
.van-nav-bar__text,.van-icon-arrow-left:before{
  color: white;
}

</style>


