<template>
  <van-index-bar>
    <van-index-anchor index="A" />
    <van-cell title="文本" />
    <van-index-anchor index="B" />
    <van-cell title="文本" />
  </van-index-bar>
</template>


<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";

Vue.use(IndexBar)
  .use(IndexAnchor)
  .use(Cell);
export default {
  created() {
    this.ajax();
  },
  data() {
    return {
      pinyin: {},
      zimu: {}
    };
  },
  methods: {
    ajax() {
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5d109ad4d2f7c32907262335/example/city"
        )
        .then(res => {
          res.data.regions.forEach(item => {
            this.pinyin[item.name] = item.pinyin;
            if (item.regions) {
              item.regions.map(item => {
                if (typeof item.pinyin == "string") {
                  this.pinyin[item.name] = item.pinyin;
                }
              });
            }
          });
          for (const key in this.pinyin) {
            // console.log(this.pinyin);
            // if (this.zimu.indexOf(this.pinyin[key].slice(0, 1)) < 0) {
            //   this.zimu[this.pinyin[key].slice(0, 1)] = {};
            // }
            this.zimu[this.pinyin[key].slice(0, 1)] = {};
            // for (let i = 0; i < this.zimu.length; i++) {
            //   console.log(this.zimu[i]);
            // }
            // console.log(key);
            // this.zimu[this.pinyin[key].slice(0, 1)][key] = this.pinyin[key];
            //   this.zimu[this.pinyin[key].slice(0, 1)][key] = this.pinyin[key];
            // for (const key2 in this.zimu) {
            //   if (key2 == this.pinyin[key].slice(0, 1)) {
            //     this.zimu[key2][key] = this.pinyin[key];
            //   } else {
            //     this.zimu[this.pinyin[key].slice(0, 1)] = {};
            //     this.zimu[this.pinyin[key].slice(0, 1)][key] = this.pinyin[key];
            //   }
            // }
            // console.log(this.zimu);
          }
          for (const key2 in this.zimu) {
            for (const key3 in this.pinyin) {
              if (key2 == this.pinyin[key3].slice(0, 1)) {
                this.zimu[key2][key3] = this.pinyin[key3];
                // console.log(this.zimu);
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
