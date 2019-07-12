<template>
    <header class="header">
      <div @click="home">首页</div>
      <div class="nav">东京</div>
      <div><span><van-icon name="search" size="20px" /></span><span><van-icon name="plus" size="20px" /></span></div>
    </header>
</template>
<script>
// import Vue from "vue";
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
  .van-icon-search:before, .van-span {
    padding: 15px 10px;
  }
.van-icon-plus:before {
    padding: 15px 10px;
  }
.nav{
  font-size: 20px;
  font-weight: 500;
}
}
</style>


