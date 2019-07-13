<template>
  <div id="box">
    <header-t></header-t>
    <main-r></main-r>
    <footer-e></footer-e>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
#box {
  height: 100%;
  overflow-x: hidden;
  width: 100%;
}
</style>

<script>
// import Vue from "vue";
import "mint-ui/lib/style.css";
import headerT from "../components/header_t";
import mainR from "../components/main_r";
import footerE from "../components/footer_e";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    headerT,
    mainR,
    footerE
  }
};
</script>

