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
  // color: #444;
}
body {
  background-color: #f5f5f5;
  font: 13px/20px helvetica, arial, sans-serif;
}
</style>

<script>
import "mint-ui/lib/style.css";
import "vant/lib/index.css";
export default {
  data() {
    return {};
  }
};
</script>
