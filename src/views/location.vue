<template>
  <div>
    <van-nav-bar title="切换国家城市" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <history-l></history-l>
  </div>
</template>
<script>
import Vue from "vue";
import historyL from "../components/location/historyl";
import { mapState } from "vuex";
import { NavBar } from "vant";
import { Search } from "vant";

Vue.use(Search);
Vue.use(NavBar);
export default {
  methods: {
    onClickLeft() {
      console.log(this.$route);
    }
  },
  mounted() {
    console.log(this.$route);
  },
  data() {
    return {
      value: ""
    };
  },
  components: {
    historyL
  },
  computed: {
    ...mapState({
      historyl(state) {
        return state.historyl;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar {
  background: #0cbf79;
}
.van-nav-bar__text {
  color: #fff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
</style>
