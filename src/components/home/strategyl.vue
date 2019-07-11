<template>
  <section class="ui-section-wrapper flow">
    <h3-l :title="title"></h3-l>
    <div class="flow-wrap">
      <waterfall
        :align="align"
        :line-gap="168"
        :min-line-gap="168"
        :max-line-gap="300"
        :single-max-width="168"
        :watch="items"
        @reflowed="reflowed"
        ref="waterfall"
      >
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot
          v-for="(item, index) in items"
          :width="1680"
          :height="item.img_info.height*1.8"
          :order="index"
          :key="index"
          move-class="item-move"
        >
          <a class="flow-biu-card flow-card">
            <aside class="img-box img-type-2">
              <img alt :src="item.cover||require('../../assets/img/wanle_l 6.jpg')" lazy="loaded" />
            </aside>
            <main class="content-box">
              <p class="title">{{item.title}}</p>
              <div class="other-box">
                <div class="author">
                  <i class="avatar" style="background:center/100% no-repeat url();"></i>
                  <span class="name">{{item.username}}</span>
                </div>
                <div class="nums">
                  <i class="like-icon"></i>
                  <span class="like-nums">{{item.id}}</span>
                </div>
              </div>
            </main>
          </a>
        </waterfall-slot>
      </waterfall>
      <div class="load-more">
        <span @click="addItems">{{jiazai}}</span>
      </div>
    </div>
  </section>
</template>


<script>
import h3L from "./h3l";
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
export default {
  components: {
    h3L,
    Waterfall,
    WaterfallSlot
  },
  data() {
    return {
      title: "精选攻略",
      align: "center",
      items: [],
      isBusy: false,
      jiazai: "加载更多内容",
      arr: 0,
      drr: 0,
      crr: 0,
      ih: 0
    };
  },
  methods: {
    addItems: function() {
      this.jiazai = "加载中...";
      this.arr = Object.keys(this.items);
      if (!this.isBusy && this.arr.length < 100) {
        this.isBusy = true;
        this.axioss();
        console.log(123);
      } else if (this.arr.length > 100) {
        this.jiazai = "更多内容请去APP观看";
      }
    },
    reflowed: function() {
      this.isBusy = false;
    },
    axioss() {
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5d109ad4d2f7c32907262335/example/PUBU"
        )
        .then(response => {
          for (const key in response.data.data) {
            this.drr = key * 1 + this.crr;
            this.items[this.drr] = response.data.data[key];
          }
          console.log(this.items);
          this.jiazai = "加载更多内容";
          this.crr += 15;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    ihs() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      this.ih = scrollHeight - scrollTop - windowHeight;
      if (this.ih <= 10) {
        this.addItems();
        return this.ih;
      }
      return this.ih;
    }
  },
  created() {
    this.addItems();
  },
  mounted() {
    window.addEventListener("scroll", this.ihs);
  }
};
</script>

<style lang="scss" scoped>
.flow {
  padding-bottom: 30px;
  width: 100%;
  .load-more {
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    color: #0cbf79;
  }
  .flow-wrap {
    position: relative;
    margin: 13px 13px 0;
    box-sizing: border-box;
  }
}
.ui-section-wrapper {
  background-color: #fff;
  margin-top: 30px;
}

.flow-card {
  position: relative;
  width: 100%;
  -moz-column-break-inside: avoid;
  break-inside: avoid;
  height: 100%;
  margin-bottom: 10px;
  .content-box {
    width: 168px;
    margin-top: 5px;
    .title {
      height: 42px;
      font-size: 14px;
      line-height: 21px;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      font-weight: 600;
    }
    .other-box {
      display: flex;
      justify-content: space-between;
      font-size: 0;
      height: 18px;
      .author {
        display: inline-block;
        vertical-align: middle;
        .avatar {
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          margin-right: 5px;
          border-radius: 50%;
          overflow: hidden;
          // background: url(//fes.qyerstatic.com/FurPR8aA_RznD30juuPr3LhFdOiY?imageslim=) no-repeat 50%;
          background-size: 100%;
        }
        .name {
          display: inline-block;
          vertical-align: middle;
          font-size: 11px;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      .nums {
        display: inline-block;
        color: #666;
        vertical-align: middle;
        font-family: special;
        .like-icon {
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMzAgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5pY19MaWtlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IumhtemdojEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuODAwMDAwMDEyIj4KICAgICAgICA8ZyBpZD0iSDXpppbpobUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkuMDAwMDAwLCAtMzYxOS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IueAkeW4g+a1gSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAyMDA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjItY29weeWkjeWItiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzY2LjAwMDAwMCwgMTA0MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNfTGlrZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc3LjAwMDAwMCwgNTc1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYsOC4wNTU1NDg2NyBDMjYsMy42MTU2MjMwNiAyMi41OTkxMDcxLDAgMTguNDIzNDM3NSwwIEMxNi4zNjAyNjc5LDAgMTQuNDEwMjY3OSwwLjkxMDYwMTM2NCAxMywyLjQ2Njk1NTk4IEMxMS41ODk3MzIxLDAuOTEwNjAxMzY0IDkuNjMzOTI4NTcsMCA3LjU3NjU2MjUsMCBDMy40MDA4OTI4NiwtNC4yMjg4OTY2M2UtMTYgMCwzLjYxMjY0NzI0IDAsOC4wNTU1NDg2NyBDMCw4LjIwNDMzOTc0IDAuMDE0NTA4OTI4Niw4LjMzODI1MTcgMC4wMjYxMTYwNzE0LDguNDQ4MzU3MSBDMC4wMjMyMTQyODU3LDguNDg0MDY2OTYgMC4wMjMyMTQyODU3LDguNTE5Nzc2ODEgMC4wMjMyMTQyODU3LDguNTU4NDYyNDkgQzAuMDIzMjE0Mjg1Nyw5LjM0NDA3OTM2IDAuMjA4OTI4NTcxLDEwLjIxMDA0MzQgMC41NzQ1NTM1NzEsMTEuMTI2NTk2NCBDMC41ODYxNjA3MTQsMTEuMTU5MzMwNCAwLjU5Nzc2Nzg1NywxMS4xOTIwNjQ1IDAuNjEyMjc2Nzg2LDExLjIyMTgyMjcgQzIuOTIyMDk4MjEsMTYuODk2NzE0MiAxMS44MDczNjYxLDIzLjQyMjY5MDYgMTIuMTg0NTk4MiwyMy43MjMyNDg2IEMxMi40MTk2NDI5LDIzLjkwNzc0OTUgMTIuNjk4MjE0MywyNCAxMi45Nzk2ODc1LDI0IEMxMy4yNjQwNjI1LDI0IDEzLjU0NTUzNTcsMjMuOTA0NzczNyAxMy43ODM0ODIxLDIzLjcxNzI5NyBDMTQuMTA1NTgwNCwyMy40NTU0MjQ3IDIxLjY4NTA0NDYsMTcuODYzODU2MiAyNC42OTQxOTY0LDEyLjU3NTgyMTUgQzI0LjgwNzM2NjEsMTIuMzk3MjcyMiAyNC44OTQ0MTk2LDEyLjIyNDY3NDUgMjQuOTY5ODY2MSwxMi4wNzU4ODM0IEMyNC45OTMwODA0LDEyLjAyODI3MDMgMjUuMDEzMzkyOSwxMS45ODA2NTcyIDI1LjAzOTUwODksMTEuOTM2MDE5OCBMMjUuMDQ4MjE0MywxMS45MTUxODkxIEMyNS4wNTY5MTk2LDExLjg5NzMzNDIgMjUuMDY4NTI2OCwxMS44NzY1MDM0IDI1LjA4MDEzMzksMTEuODYxNjI0MyBDMjUuMjYwMDQ0NiwxMS41MDE1NDk5IDI1LjQwMjIzMjEsMTEuMTY4MjU3OSAyNS41MTgzMDM2LDEwLjg0Mzg5MzQgQzI1LjgzMTY5NjQsMTAuMDA0NzExNyAyNS45ODI1ODkzLDkuMjU3NzgwNTMgMjUuOTgyNTg5Myw4LjU2MTQzODMxIEMyNS45ODI1ODkzLDguNTA3ODczNTMgMjUuOTc5Njg3NSw4LjQ2MDI2MDM4IDI1Ljk3Njc4NTcsOC40MjE1NzQ3MSBDMjUuOTg4MzkyOSw4LjMyNjM0ODQyIDI2LDguMjAxMzYzOTIgMjYsOC4wNTU1NDg2NyBaIiBpZD0iUGF0aC1Db3B5IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktNiIgZmlsbD0iIzAwMDAwMCIgeD0iMTYiIHk9IjgiIHdpZHRoPSIzIiBoZWlnaHQ9IjQiIHJ4PSIxLjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTEwIiBmaWxsPSIjMDAwMDAwIiB4PSI3IiB5PSI4IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiByeD0iMS41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)
            no-repeat 50%;
          background-size: 100%;
          width: 13px;
          height: 18px;
          margin-right: 4px;
          display: inline-block;
          vertical-align: middle;
        }
        span {
          font-size: 11px;
          line-height: 18px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .img-box {
    width: 168px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      width: 168px;
      display: block;
      :after {
        content: " ";
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>

