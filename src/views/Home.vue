<template>
  <div class="home">
    <harde-l v-if="isok" />
  </div>
</template>

<script>
// @ is an alias to /src
import "mint-ui/lib/style.css";
import { mapState } from "vuex";
import hardeL from "../components/harde_l.vue";
export default {
  name: "home",
  components: {
    hardeL
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
