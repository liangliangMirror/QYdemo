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
  font: 14px/24px Helvetica, San Francisco, Arial, sans-serif;
}
ul,
li {
  list-style: none;
}
</style>

<script>
import "mint-ui/lib/style.css";
import "vant/lib/index.css";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      pushhistorys: "pushhistorys"
    })
  },
  mounted() {
    this.pushhistorys();
  }
};
</script>
