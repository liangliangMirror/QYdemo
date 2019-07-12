<template>
    <header class="header">
      <div @click="home">首页</div>
      <div>东京</div>
      <div><span>搜索</span><span>+</span></div>
    </header>
</template>
<script>
import Vue from "vue";
export default {
    methods:{
      home(){
        this.$router.push({ path:'/home'});
        // console.log(this)
      }
    }
}
</script>

<style lang="scss">
.header{
  height: 50px;
  background: #0cbf79;
  text-align: center;
  display: flex;
  color:white;
  div{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>


