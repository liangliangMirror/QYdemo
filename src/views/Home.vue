<template>
  <div class="home">
    <harde-l v-if="isok" />
    <swpie-l></swpie-l>
  </div>
</template>

<script>
// @ is an alias to /src
import "mint-ui/lib/style.css";
import { mapState } from "vuex";
import hardeL from "../components/harde_l.vue";
import swpieL from "../components/swpie.vue";
export default {
  name: "home",
  components: {
    hardeL,
    swpieL
  },
  computed: {
    ...mapState({
      isok(state) {
        return state.harde;
      }
    })
  }
};
</script>
