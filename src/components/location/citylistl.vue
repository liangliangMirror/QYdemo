<template>
  <div>
    <van-index-bar highlight-color="#58bc58">
      <div v-for="(item,index) in citylist" :key="index">
        <van-index-anchor :index="item.index" />
        <van-cell
          :title="items.city"
          v-for="(items,index) in item.citylist"
          :key="index"
          @click="city(items.city,items.id)"
        />
      </div>
    </van-index-bar>
  </div>
</template>


<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
import { mapState, mapMutations } from "vuex";
Vue.use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)
  .use(mapState)
  .use(mapMutations);
export default {
  created() {
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5d109ad4d2f7c32907262335/example/city"
      )
      .then(res => {
        this.ajax(res.data.regions);
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      pinyin: {},
      citylist: {},
      fuzzyquery: {}
    };
  },
  computed: {
    ...mapState({
      value: state => state.value
    })
  },
  watch: {
    value() {
      this.citylist = [];
      this.fuzzyquery.forEach(item => {
        item.citylist.forEach(items => {
          let pat = new RegExp(this.value, "i");
          let isChinese = /[\u4E00-\u9FFF]+/;
          if (isChinese.test(this.value)) {
            if (items.city.match(pat))
              this.guolv(
                item.index,
                this.citylist,
                items.city,
                items.id,
                this.comindexOf
              );
          } else {
            if (items.id.match(pat) != null) {
              this.guolv(
                item.index,
                this.citylist,
                items.city,
                items.id,
                this.comindexOf
              );
            }
          }
        });
      });
    }
  },
  methods: {
    ...mapMutations({
      pushhistory: "pushhistory"
    }),
    city(name, id) {
      this.$router.push({ name: "city", params: { cityname: name, id } });
      this.pushhistory({
        name,
        pinyin: id
      });
    },
    comindexOf(inital, cityNameListAry) {
      for (let i = 0; i < cityNameListAry.length; i++) {
        if (cityNameListAry[i].index === inital) {
          return false;
        }
      }
      return true;
    },
    guolv(inital, cityNameListAry, key, key2, fn) {
      if (fn(inital, cityNameListAry)) {
        cityNameListAry.push({
          index: inital,
          citylist: [{ city: key, id: key2 }]
        });
      } else {
        for (let j = 0; j < cityNameListAry.length; j++) {
          if (cityNameListAry[j].index === inital) {
            cityNameListAry[j].citylist.push({
              city: key,
              id: key2
            });
          }
        }
      }
    },
    ajax(data) {
      data.forEach(item => {
        if (item.regions) {
          item.regions.map(item => {
            if (typeof item.pinyin == "string") {
              let mz = item.name;
              let py = item.pinyin;
              this.pinyin[mz] = py;
            }
          });
        }
      });
      let cityNameListAry = [];
      for (const key in this.pinyin) {
        let inital = this.pinyin[key].slice(0, 1);
        this.guolv(
          inital,
          cityNameListAry,
          key,
          this.pinyin[key],
          this.comindexOf
        );
      }

      this.citylist = cityNameListAry.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        } else {
          return -1;
        }
      });
      this.fuzzyquery = this.citylist;
    }
  }
};
</script>

