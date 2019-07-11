<template>
  <section class="ui-section-wrapper z-world-cate">
    <h3-l :title="title"></h3-l>
    <div class="ui-section-body">
      <ul class="index-subcategory-list">
        <li v-for="(item,key,index) in ploys" :key="index">
          <a @click="location">
            <img :src="item" />
            <span>{{key}}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import h3L from "./h3l";
export default {
  components: {
    h3L
  },
  data() {
    return {
      ploys: {
        特价机票: "//fes.qyerstatic.com/FjhPw2CAsHhvxjAuUQvT0EjTfOTF?imageslim",
        机酒自由行:
          "//fes.qyerstatic.com/Fh9eg1ZGwLp8GHrTbKSfjwMgUqz8?imageslim",
        当地玩乐: "//fes.qyerstatic.com/FrnlnoQrQLokB6xx4mGmJhuz9eCf?imageslim",
        门票票券: "//fes.qyerstatic.com/Fv-WDaw3GtUH1_8rcId7Bny4bwYV?imageslim",
        日本高铁: "//fes.qyerstatic.com/FuFMfHPUrw-ms3echc2_SAd1EXoP?imageslim",
        WiFi电话卡:
          "//fes.qyerstatic.com/FgxEv9eVMgiTxXvVg4-h5GjE7muR?imageslim",
        欧铁频道: "//fes.qyerstatic.com/Fu9r87vH7j46Gtafrd8ohKHQEoBm?imageslim",
        保险频道: "//fes.qyerstatic.com/Fnf6W8mmlmHqGnzGvu-NnM_zK-1p?imageslim",
        接送机包车:
          "//fes.qyerstatic.com/FnI5stm2aLT-icX075jIpjXIjKT4?imageslim"
      },
      title: "精选玩乐"
    };
  },
  methods: {
    location() {
      this.$router.push({ name: "location" });
    }
  }
};
</script>


<style lang="scss" scoped>
.index-subcategory-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 12px;
  li {
    flex: 0 0 33.33%;
    width: 33.33%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    a {
      display: block;
      position: relative;
      width: 109px;
      height: 40px;
      padding: 5.7px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      font-size: 11px;
      line-height: 11px;
      color: rgba(0, 0, 0, 0.8);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      img {
        width: 22.5px;
        height: 18.75px;
        position: absolute;
        right: 2.25px;
        bottom: 0;
        display: block;
      }
      img,
      span {
        vertical-align: middle;
        font-weight: 500;
      }
    }
  }
}
</style>
