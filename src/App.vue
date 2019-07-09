<template>
  <div>
    <harde-l v-if="hardeisok" />
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
import hardeL from "./components/harde_l.vue";
import "mint-ui/lib/style.css";
export default {
  data() {
    return {};
  },
  components: {
    hardeL
  }
};
</script>
