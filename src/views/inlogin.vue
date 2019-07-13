<template>
  <div class="inlog">
    <header class="head">
      <div class="left"></div>
      <div class="mid"></div>
      <div class="xinfen"></div>
    </header>
    <section class="userBox">
      <div class="userBg">
        <img src="//static.qyer.com/images/user2/index/headImage_lite.png?v=" alt />
      </div>
      <div class="userFace">
        <img src="../assets/img/adlxy.jpg" alt />
      </div>
      <h2 class="username">
        <span class="name">12312313</span>
        <i></i>
        <a>
          <span class="op">退出登录</span>
        </a>
      </h2>
    </section>
    <section class="menu">
      <ul class="mylist">
        <li class="myForum" v-for="item in mylist" :key="item.name">
          <a>
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul>
    </section>
    <footer class="qui-footerBasic">
      <p class="copyright">2004-2019 © 穷游网™ qyer.com All rights reserved.</p>
      <p>
        <a style="color: #9ea3ab;" target="_blank">营业执照</a>
        <a style="color: #9ea3ab;" target="_blank">经营许可证</a>
      </p>
      <p class="switchStyle">
        <span class="current" data-bn-ipg="mindex-bottomtab-phone">手机版</span>
        <span>
          <a class="js_pc_url" data-bn-ipg="mindex-bottomtab-pc">电脑版</a>
        </span>
        <span>
          <a data-bn-ipg="mindex-bottomtab-app">APP</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
  data() {
    return {
      mylist: [
        { name: "我的论坛", img: "", classname: "" },
        { name: "我的问答", img: "", classname: "" },
        { name: "我的行程计划", img: "", classname: "" },
        { name: "穷游商城收藏", img: "", classname: "" },
        { name: "穷游商城优惠券", img: "", classname: "" },
        { name: "常用旅客管理", img: "", classname: "" },
        { name: "兑换我的穷逼", img: "", classname: "" },
        { name: "我的钱包余额", img: "", classname: "" },
        { name: "账号与密码管理", img: "", classname: "" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}
h2 {
  font-size: 100%;
  font-weight: normal;
}

// 头部
.head {
  width: 100%;
  height: 44px;
  background-color: #2bab79;
  overflow: hidden;
  position: relative;

  .left {
    float: left;
    height: 100%;
    width: 44px;
    background: url(../assets/img/sanhua.png);
    background-position: center center;
    background-repeat: no-repeat;
  }

  .mid {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 120px;
    background: url(../assets/img/topbar-logo.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80%;

    margin: 0 auto;
  }

  .xinfen {
    float: right;
    height: 100%;
    width: 44px;
    background: url(../assets/img/xinfeng.png);
    background-position: center center;
    background-repeat: no-repeat;
  }
}

// 用户信息
.userBox {
  position: relative;
  text-align: center;
  .username {
    position: absolute;
    left: 0;
    bottom: 13px;
    width: 100%;
    color: #fff;
    .name {
      font-size: 16px;
    }
    i {
      display: inline-block;
      width: 1px;
      height: 19px;
      line-height: 19px;
      background: #fff;
      margin: 10px 4px -4px 6px;
    }

    .op {
      font-size: 12px;
    }
  }
  .userBg {
    width: 100%;
    height: 156px;
    overflow: hidden;
    background-color: #fff;

    img {
      width: 100%;
    }
  }

  .userFace {
    position: absolute;
    left: 50%;
    margin-left: -32px;
    bottom: 46px;
    width: 64px;
    height: 64px;
    z-index: 10;
    img {
      width: 64px;
      height: 64px;
      display: block;
      border-radius: 50%;
      border: 0;
    }
  }
}

// 导航
.menu {
  padding: 10px 0 1px 0;
  margin-bottom: 8px;
  background: #f5f5f5;

  .mylist {
    li {
      overflow: hidden;
      span {
        padding-left: 34px;
        float: left;
        background: url(/m/project/ucenter/images/icons-ucenter.png) left center
          no-repeat;
        background-size: 24px 360px;
      }

      a {
        &:after {
          content: ".";
          font-size: 0;
          float: right;
          width: 8px;
          height: 8px;
          border: 2px solid #c8c8c8;
          border-bottom: 2px solid transparent;
          border-left: 2px solid transparent;
          transform: rotate(45deg);
          margin: 6px 9px auto auto;
        }
      }
    }

    .myForum {
      padding-left: 10px;
      font-size: 16px;
      background: #fff;

      span {
        background-position: 0px 0px;
      }
    }
    a {
      display: block;
      width: 100%;
      color: #444;
      height: 24px;
      padding: 15px 0;
      &:link {
        display: block;
        width: 100%;
        color: #444;
        height: 24px;
        padding: 15px 0;
      }
    }
  }
}

//
.qui-footerBasic {
  width: 100%;
  margin: 20px 0;
  text-align: center;
  font-size: 10px;
  line-height: 20px;
  .copyright {
    color: #9ea3ab;
  }
  .switchStyle {
    color: #9ea3ab;

    a {
      color: #444;
    }
    span {
      margin-left: 30px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>

