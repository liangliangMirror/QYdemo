<template>
  <mt-header title="multiple button">
    <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
      <mt-button @click="handleClose">close</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>
<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";
import { NavBar } from "vant";
import { Field } from "vant";
import { CellGroup } from "vant";
import { Button } from "vant";

Vue.use(Field);
Vue.use(NavBar);
Vue.use(CellGroup);
Vue.use(Button);

// Vue.use(Mint);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
  created() {
    console.log("thisC", this.$route);
  },

  methods: {
    backto() {
      console.log(this.history);
      console.log(this.$router.go);
      this.$router.go(-1);
    }
  }
};
</script>
<style>
</style>
