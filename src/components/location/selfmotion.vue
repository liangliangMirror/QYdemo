<template>
  <div class="position unknown">
    <span class="icon-place icon-place-front-sight" v-if="isok" @click="fresh">
      <van-icon name="location-o" color="#0cbf79" />
      &nbsp;{{location}}
    </span>
    <van-loading color="#1989fa" v-else />
  </div>
</template>


<script>
import Vue from "vue";
import { Icon } from "vant";
import { Loading } from "vant";
import { mapState, mapMutations } from "vuex";
Vue.use(Loading);
import getCurrentCityName from "../../js/pomis";
Vue.use(Icon);
Vue.use(mapState).use(mapMutations);
export default {
  data() {
    return {
      isok: true,
      locations: ""
    };
  },
  created() {
    // this.$axios
    //   .jsopn(
    //     "http://api.map.baidu.com/location/ip?ak=jINeLiejQ4ybdICxWL6ZAA44enHLVRMG",
    //     jsonParams
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  methods: {
    getCurrentCity() {
      getCurrentCityName().then(city => {
        this.citys(city);
      });
    },
    fresh() {
      this.isok = false;
      this.getCurrentCity();
      setTimeout(() => {
        this.isok = true;
      }, 1000);
    },
    ...mapMutations({
      citys: "citys"
    })
  },
  computed: {
    ...mapState({
      location: state => state.city
    })
    // location: this.$store.state.city
  },
  watch: {
    location() {
      this.locations = this.location;
    }
  },
  mounted() {
    this.getCurrentCity();
  }
};
</script>


<style lang="scss" scoped>
.position {
  height: 38px;
  line-height: 38px;
  border-top: 0.01rem solid #0cbf79;
  border-bottom: 0.01rem solid #0cbf79;
  text-align: center;
  background-color: #fff;
  font-size: 12px;
}
.unknown {
  border-color: #ececec;
}
b {
  margin-left: 8px;
  color: #0cbf79;
  font-weight: 400;
}
span {
  line-height: 38px;
}
</style>
