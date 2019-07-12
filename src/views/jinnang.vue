<template>
  <div class="jinnang">
    <mt-header title="穷游锦囊">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <mt-button @click="handleClose"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-search v-model="value" :result.sync="result1" placeholder="搜索你想要的锦囊"></mt-search>
    <div class="jn-nav">
      <div class="jn-nav1" v-for="(item,index) in result" :key="index" @click="parent(index)">
        {{item.nav}}
        <span class="bor"></span>
      </div>
    </div>
    <jn-list :title="childrenCom"></jn-list>
    <div class="guideDown">
      <h3 class="caption">喜欢穷游锦囊？下载穷游锦囊APP离线看。</h3>
      <dl class="icons">
        <dt>
          <img src="../assets/img/app.png" width="55" height="55" alt />
        </dt>
        <dd class="iphone">
          <a data-bn-ipg="guide-iphone">
            <span>iPhone</span>
          </a>
        </dd>
        <dd class="android">
          <a data-bn-ipg="guide-android">
            <span>Android</span>
          </a>
        </dd>
      </dl>
    </div>
    <footer class="mFooter">
      <p class="sign">
        <a data-bn-ipg="login-bottom" @click.prevent="goto('login')">登录</a> ｜
        <a data-bn-ipg="foot-register">注册</a>
      </p>
      <p class="nav">
        <a data-bn-ipg="foot-home">穷游首页</a>｜
        <a>目的地</a>｜
        <a>折扣</a>｜
        <a>论坛</a>｜
        <a>问答</a>
      </p>
      <p class="type">
        <em>手机版</em>｜
        <a data-bn-ipg="foot-w" id="js_footer_pc_link" href="javascript:void(0);">电脑版</a>｜
        <a>APP</a>｜
        <a id="js_a_feedback" href="javascript:void(0);">提意见</a>
      </p>
      <p class="copy">Copyright © 2004-2015 QYER.inc</p>
    </footer>
  </div>
</template>
<script>
import Vue from "vue";
import { Header, Button, Search } from "mint-ui";

import jnList from "../components/home/jnlist";

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);

export default {
  data() {
    return {
      value: "",
      result1: [
        "热门",
        "亚洲",
        "欧洲",
        "北美洲",
        "南美洲",
        "大洋洲",
        "非洲",
        "南极洲"
      ],
      result: [
        { nav: "热门", name: "hot" },
        { nav: "亚洲", name: "asia" },
        { nav: "欧洲", name: "europe" },
        { nav: "北美洲", name: "north-america" },
        { nav: "南美洲", name: "south-america" },
        { nav: "大洋洲", name: "oceania" },
        { nav: "非洲", name: "africa" },
        { nav: "南极洲", name: "antarctica" }
      ],
      childrenCom: {},
      list: [
        [
          {
            img: require("../assets/img/chaoxian.jpg"),
            name: "朝鲜",
            locate: "朝鲜"
          },
          {
            img: require("../assets/img/nasa.jpg"),
            name: "NASA太空探索指南",
            locate: "美国"
          },
          {
            img: require("../assets/img/qy.jpg"),
            name: "《权力的游戏》",
            locate: "专题"
          },
          {
            img: require("../assets/img/bael.jpg"),
            name: "北爱尔兰",
            locate: "英国"
          },
          {
            img: require("../assets/img/kldy.jpg"),
            name: "克罗地亚",
            locate: "克罗地亚"
          },
          {
            img: require("../assets/img/adlxy.jpg"),
            name: "安达卢西亚",
            locate: "西班牙"
          }
        ],
        [
          {
            img: require("../assets/img/aiersudan.jpg"),
            name: "艾尔苏丹",
            locate: "爱尔苏丹"
          },
          {
            img: require("../assets/img/bajisitan.jpg"),
            name: "巴基斯坦",
            locate: "巴基斯坦"
          },
          {
            img: require("../assets/img/jingdu.jpg"),
            name: "京都",
            locate: "京都"
          },
          {
            img: require("../assets/img/deli.jpg"),
            name: "德利",
            locate: "德利"
          },
          {
            img: require("../assets/img/kataer.jpg"),
            name: "卡塔尔",
            locate: "卡塔尔"
          },
          {
            img: require("../assets/img/mingguwu.jpg"),
            name: "名古屋",
            locate: "名古屋"
          },
          {
            img: require("../assets/img/dongjing.jpg"),
            name: "东京",
            locate: "东京"
          },
          {
            img: require("../assets/img/jianpuzhai.jpg"),
            name: "柬埔寨",
            locate: "柬埔寨"
          },
          {
            img: require("../assets/img/lajiasitan.jpg"),
            name: "拉贾斯坦",
            locate: "拉贾斯坦"
          }
        ],
        [
          {
            img: require("../assets/img/bali.jpg"),
            name: "巴黎",
            locate: "巴黎"
          },
          {
            img: require("../assets/img/helan.jpg"),
            name: "荷兰",
            locate: "荷兰"
          },
          {
            img: require("../assets/img/lusenbao.jpg"),
            name: "卢森堡",
            locate: "卢森堡"
          },
          {
            img: require("../assets/img/luoma.jpg"),
            name: "罗马",
            locate: "罗马"
          },
          {
            img: require("../assets/img/ruidian.jpg"),
            name: "瑞典",
            locate: "瑞典"
          },
          {
            img: require("../assets/img/kataer.jpg"),
            name: "卡塔尔",
            locate: "卡塔尔"
          }
        ],
        [
          {
            img: require("../assets/img/aidunmengde.jpg"),
            name: "埃德蒙顿",
            locate: "埃德蒙顿"
          },
          {
            img: require("../assets/img/nasa.jpg"),
            name: "NASA太空探索指南",
            locate: "美国"
          },
          {
            img: require("../assets/img/huashengdun.jpg"),
            name: "华盛顿博物馆",
            locate: "美国"
          },
          {
            img: require("../assets/img/ny.jpg"),
            name: "纽约",
            locate: "美国"
          },
          {
            img: require("../assets/img/nms.jpg"),
            name: "纽约美食",
            locate: "美国"
          },
          {
            img: require("../assets/img/luoshanji.jpg"),
            name: "洛杉矶",
            locate: "洛杉矶"
          }
        ],
        [
          {
            img: require("../assets/img/baijianei.jpg"),
            name: "秘鲁",
            locate: "秘鲁"
          },
          {
            img: require("../assets/img/baijianei.jpg"),
            name: "百家内",
            locate: "百家内"
          },
          {
            img: require("../assets/img/boliweiya.jpg"),
            name: "玻利维亚",
            locate: "玻利维亚"
          },
          {
            img: require("../assets/img/eguaduoer.jpg"),
            name: "厄瓜多尔",
            locate: "厄瓜多尔"
          },
          {
            img: require("../assets/img/fuhuodao.jpg"),
            name: "复活岛",
            locate: "复活岛地亚"
          },
          {
            img: require("../assets/img/gelunbiya.jpg"),
            name: "哥伦比亚",
            locate: "哥伦比亚"
          }
        ],
        [
          {
            img: require("../assets/img/jlbs.jpg"),
            name: "几里巴斯",
            locate: "基里巴斯"
          },
          {
            img: require("../assets/img/kanbeila.jpg"),
            name: "坎贝拉",
            locate: "堪培拉"
          },
          {
            img: require("../assets/img/palao.jpg"),
            name: "帕劳",
            locate: "帕劳"
          },
          {
            img: require("../assets/img/xinxilan.jpg"),
            name: "新西兰轻徒步",
            locate: "新西兰"
          },
          {
            img: require("../assets/img/xxl.jpg"),
            name: "新西兰动物之旅",
            locate: "新西兰"
          },
          {
            img: require("../assets/img/xn.jpg"),
            name: "悉尼",
            locate: "澳大利亚"
          }
        ],
        [
          {
            img: require("../assets/img/aiji.jpg"),
            name: "埃及",
            locate: "埃及"
          },
          {
            img: require("../assets/img/esaiebiya.jpg"),
            name: "埃塞俄比亚",
            locate: "埃塞俄比亚"
          },
          {
            img: require("../assets/img/kenniya.jpg"),
            name: "肯尼亚",
            locate: "肯尼亚"
          },
          {
            img: require("../assets/img/moluoge.jpg"),
            name: "摩洛哥",
            locate: "摩洛哥"
          },
          {
            img: require("../assets/img/nanfei.jpg"),
            name: "南非",
            locate: "南非"
          },
          {
            img: require("../assets/img/namibiya.jpg"),
            name: "纳米比亚",
            locate: "纳米比亚"
          }
        ],
        [
          {
            img: require("../assets/img/nanji.jpg"),
            name: "乌斯怀亚",
            locate: "南极"
          },
          {
            img: require("../assets/img/nanji.jpg"),
            name: "乌斯怀亚到南",
            locate: "南极"
          },
          {
            img: require("../assets/img/nanji.jpg"),
            name: "乌斯怀亚到南极",
            locate: "南极"
          }
        ]
      ]
    };
  },
  methods: {
    handleClose() {
      this.router.go(-1);
    },
    goto(name) {
      this.$router.push({ name });
    },
    golist(name) {
      this.$router.push({ name });
    },
    parent(index) {
      this.childrenCom = this.list[index];
    }
  },
  mounted() {
    this.childrenCom = this.list[0];
  },
  components: {
    jnList
  }
};
</script>
<style lang="scss" scoped>
body {
  width: 100%;
  background-color: #ecece5;
}

.mint-header {
  background-color: #252525;
  position: relative;
}

.mint-searchbar-inner .mintui-search {
  font-size: 1.125rem !important;
}
.mint-searchbar-core {
  font-size: 0.75rem !important;
}
.mint-search {
  height: 9vh;
}

.jinnang {
  width: 100%;
}

.jn-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;

  .jn-nav1 {
    position: relative;

    text-align: center;
    line-height: 32px;
    width: 24.3%;
    height: 32px;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: 1px solid #e7e7e7;
    }
  }
}

.bor {
  position: absolute;
  left: -0.625rem;
  top: 5px;
  display: block;
  width: 1px;
  height: 22px;
  background: #e7e7e7;
}

// .guideList {
//   margin: 10px auto;
//   width: 96%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;

//   background-color: #fff;
//   border: 1px solid #dadada;
//   box-shadow: 0 2px 2px rgba(218, 218, 218, 0.4);

//   li {
//     width: 33%;
//     border-right: 1px solid #dadada;
//     border-bottom: 1px solid #dadada;

//     &:nth-child(3n) {
//       border-right: none;
//     }
//     a {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;

//       padding: 10px 0;
//       text-align: center;

//       .name {
//         padding-top: 5px;
//         font-size: 13px;
//         color: #2c2c2c;
//         font-weight: 400;
//       }

//       .pic {
//         img {
//           display: block;
//           margin: 0 auto;
//           width: 64px;
//           height: 96px;
//         }
//       }

//       .locate {
//         font-size: 11px;
//         line-height: 15px;
//         color: #939393;
//       }
//     }
//   }
// }

h3 {
  font-size: 100%;
}
.guideDown {
  padding: 12px 13px;
  .caption {
    margin-bottom: 10px;
    line-height: 15px;
    color: rgb(55, 41, 41);
    opacity: 0.8;
  }

  .icons {
    width: 100%;
    overflow: hidden;
    dt {
      float: left;
    }

    dd {
      float: left;
      margin-left: 15px;
      a {
        display: block;
        min-width: 38px;
        padding-top: 40px;
        background: url() no-repeat center 0;
        background-size: 38px 38px;
        text-align: center;
        font-size: 10px;
        span {
          opacity: 0.6;
          color: rgb(55, 41, 41);
        }
      }
    }
    dd.android {
      a {
        background-image: url(../assets/img/iphone.png);
      }
    }
    dd.iphone {
      a {
        background-image: url(../assets/img/android.png);
        span {
          opacity: 0.6;
          color: rgb(55, 41, 41);
        }
      }
    }
  }
}
.mint-search-list-warp {
  background-color: #fff;
  z-index: 99;
}
.mFooter {
  border-top: 1px solid #65ae76;
  margin-top: 23px;
  padding: 10px 13px 5px;
  font-size: 15px;
  line-height: 30px;
  a {
    text-decoration: none;
    color: #006aad;
  }
  .sign {
    color: #1e66b2;
  }
  .nav {
    color: #727272;
    a {
      color: #727272;
    }
  }

  .type {
    color: #636363;
    em {
      color: #000;
      font-style: normal;
      font-weight: 500;
    }
  }
  .copy {
    font-size: 13px;
    line-height: 24px;
    color: #b4b4b4;
  }
}
</style>

