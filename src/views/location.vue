<template>
  <div>
    <van-nav-bar title="切换国家城市" left-text="返回" left-arrow @click-left="onClickLeft" />
    <selfmotion-l></selfmotion-l>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <h6 v-if="historyl.arr.length">{{"访问记录"}}</h6>
    <history-l v-if="historyl.arr.length" :title="historyl"></history-l>
    <h6>{{"热门城市"}}</h6>
    <history-l :title="city"></history-l>
    <city-list-l></city-list-l>
  </div>
</template>
<script>
import Vue from "vue";
import historyL from "../components/location/historyl";
import cityListL from "../components/location/citylistl";
import selfmotionL from "../components/location/selfmotion";
import { mapState, mapMutations } from "vuex";
import { NavBar } from "vant";
import { Search } from "vant";

Vue.use(Search);
Vue.use(NavBar);
Vue.use(mapState)
  .use(mapMutations)
  .use(selfmotionL);
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    ...mapMutations({
      inputvalue: "inputvalue"
    })
  },
  data() {
    return {
      value: null,
      city: {
        arr: ["蚌埠市", "鞍山市", "安庆市", "阿拉尔市", "郴州市", "安阳市"],
        pinyin: [
          "BangBuShi",
          "AnShanShi",
          "AnQingShi",
          "ALaErShi",
          "ChenZhouShi",
          "AnYangShi"
        ]
      }
    };
  },
  components: {
    historyL,
    cityListL,
    selfmotionL
  },
  watch: {
    value() {
      this.inputvalue(this.value);
    }
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
h6 {
  line-height: 1;
  font-size: 12px;
  margin: 0 12px;
  border: 0;
  padding-top: 6px;
  font-weight: 400;
}
</style>
