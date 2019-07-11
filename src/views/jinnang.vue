<template>
  <div class="jinnang">
    <mt-header title="穷游锦囊">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <mt-button @click="handleClose"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-search v-model="value" :result.sync="result" placeholder="搜索你想要的锦囊"></mt-search>
    <div class="jn-nav">
      <div class="jn-nav1" v-for="(item,index) in result" :key="index">
        {{item}}
        <span class="bor"></span>
      </div>
    </div>
    <ul class="guideList">
      <li v-for="item in list" :key="item.name">
        <a href="###">
          <p class="pic">
            <img :src="item.img" alt />
          </p>
          <h3 class="name">{{item.name}}</h3>
          <p class="locate">{{item.locate}}</p>
        </a>
      </li>
    </ul>
    <div class="guideDown">
      <h3 class="caption">喜欢穷游锦囊？下载穷游锦囊APP离线看。</h3>
      <dl class="icons">
        <dt>
          <img src="../assets/img/app.png" width="55" height="55" alt />
        </dt>
        <dd class="iphone">
          <a
            data-bn-ipg="guide-iphone"
            href="//guide.qyer.com/app/download/?campaign=app_guide&amp;category=qyer_m_guide_lixian"
          >
            <span>iPhone</span>
          </a>
        </dd>
        <dd class="android">
          <a
            data-bn-ipg="guide-android"
            href="//guide.qyer.com/app/download/?campaign=app_guide&amp;category=qyer_m_guide_lixian"
          >
            <span>Android</span>
          </a>
        </dd>
      </dl>
    </div>
    <footer class="mFooter">
      <p class="sign">
        <a href="//m.qyer.com/login.php" data-bn-ipg="login-bottom">登录</a> ｜
        <a data-bn-ipg="foot-register" href="//login.qyer.com/register.php">注册</a>
      </p>
      <p class="nav">
        <a href="//m.qyer.com/" data-bn-ipg="foot-home">穷游首页</a>｜
        <a href="//m.qyer.com/place">目的地</a>｜
        <a href="//m.qyer.com/z/">折扣</a>｜
        <a href="//m.qyer.com/bbs">论坛</a>｜
        <a href="//m.qyer.com/ask">问答</a>
      </p>
      <p class="type">
        <em>手机版</em>｜
        <a data-bn-ipg="foot-w" id="js_footer_pc_link" href="javascript:void(0);">电脑版</a>｜
        <a href="//m.qyer.com/app">APP</a>｜
        <a
          id="js_a_feedback"
          href="//m.qyer.com/feedback?title=%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E7%A9%B7%E6%B8%B8%E9%94%A6%E5%9B%8A_%E6%97%85%E6%B8%B8%E6%8C%87%E5%8D%97%E8%B7%AF%E4%B9%A6%E4%B8%8B%E8%BD%BD_%E8%87%AA%E5%8A%A9%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E7%A9%B7%E6%B8%B8%E9%94%A6%E5%9B%8A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20"
        >提意见</a>
      </p>
      <p class="copy">Copyright © 2004-2015 QYER.inc</p>
    </footer>
  </div>
</template>
<script>
import Vue from "vue";
import { Header, Button, Search } from "mint-ui";

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);

export default {
  data() {
    return {
      value: "",
      result: [
        "热门",
        "亚洲",
        "欧洲",
        "北美洲",
        "南美洲",
        "大洋洲",
        "非洲",
        "南极洲"
      ],
      list: [
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
      ]
    };
  },
  methods: {
    handleClose() {}
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

.guideList {
  margin: 10px auto;
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: #fff;
  border: 1px solid #dadada;
  box-shadow: 0 2px 2px rgba(218, 218, 218, 0.4);

  li {
    width: 33%;
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;

    &:nth-child(3n) {
      border-right: none;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      padding: 10px 0;
      text-align: center;

      .name {
        padding-top: 5px;
        font-size: 13px;
        color: #2c2c2c;
        font-weight: 400;
      }

      .pic {
        img {
          display: block;
          margin: 0 auto;
          width: 64px;
          height: 96px;
        }
      }

      .locate {
        font-size: 11px;
        line-height: 15px;
        color: #939393;
      }
    }
  }
}

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
</style>

