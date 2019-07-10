<template>
  <div>
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  color: #444;
}
</style>

<script>
<<<<<<< HEAD
import Vue from "vue";
import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from "mint-ui";
// import "mint-ui/lib/style.css";
Vue.component(Navbar.name, Navbar);
Vue.component(Cell.name, Cell);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

=======
import "mint-ui/lib/style.css";
import "vant/lib/index.css";
>>>>>>> f433049d07f7b26e7c3e292e0bdb30c4cf1b70b9
export default {
  data() {
    return {};
  }
};
</script>
