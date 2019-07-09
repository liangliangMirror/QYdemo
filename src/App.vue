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
import "mint-ui/lib/style.css";
export default {
  data() {
    return {};
  }
};
</script>
