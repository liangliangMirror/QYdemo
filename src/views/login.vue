<template>
<<<<<<< HEAD
    <p></p> 
</template>

=======
  <mt-header title="multiple button">
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
      <mt-button @click="handleClose">close</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>
>>>>>>> 749718a41c4f17653030eb16bfa696fc57796359
<script>
import Vue from "vue";
import router from "vue-router";
// import Mint from "mint-ui";
import { Header, Button } from "mint-ui";

// Vue.use(Mint);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {};
</script>
<style>
</style>
