<template>
  <div>
    <van-nav-bar title="穷游网" left-arrow @click-left="backto" />
    <h2>登录</h2>
    <van-cell-group>
      <div class="font-num">+86</div>
      <van-field
        style="display:inline-block;width:90%;"
        v-model="phone"
        required
        clearable
        right-icon="question-o"
        placeholder="请输入账号/手机号码"
      />
    </van-cell-group>
    <van-cell-group>
      <div class="font-num">密码</div>
      <van-field
        style="display:inline-block;width:90%;"
        v-model="password"
        type="password"
        required
        clearable
        right-icon="question-o"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <span class="login-tips">未注册手机号验证后自动创建</span>
    <van-button round type="danger" @click="log">登录</van-button>
    <div class="bot">
      <div class="logpass" @click="goReg('register')">账号注册</div>
      <div class="log-help">需要帮助？</div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Field } from "vant";
import { CellGroup } from "vant";
import { Button } from "vant";

Vue.use(Field);
Vue.use(NavBar);
Vue.use(CellGroup);
Vue.use(Button);

export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    goReg(name) {
      this.$router.push({ name });
    },
    log() {
      if (this.phone && this.password) {
        this.$axios
          .get("http://localhost:3000/login", {
            params: {
              phone: this.phone,
              password: this.password
            }
          })
          .then(({ data }) => {
            console.log(data);
            if (data.length > 0) {
              console.log("登录成功~~~~");
              this.$router.replace({ name: "home" });
            } else {
              alert("账号或密码错误！");
            }
          });
      } else {
        alert("账号或密码不能为空！");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
h2 {
  color: #000;
  padding-left: 1.7rem;
  padding-top: 2.625rem;
  font-size: 2.2rem;
  line-height: 1.875rem;
  padding-bottom: 3.125rem;
}
.van-field__control {
  font-size: 0.75rem;
  font-weight: bolder;
}

.van-nav-bar .van-icon {
  color: #424242;
}

.van-cell-group {
  padding: 5px;
  display: flex;
  align-content: center;
}
.van-button--hairline.van-button--round::after,
.van-button--round {
  position: relative;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(21, 219, 145, 0.3);
  border: none;
  width: 20rem;
  height: 2.5rem;
  line-height: 2.5rem;
}

.font-num {
  display: flex;
  flex: 1;
  // justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bolder;
}

.login-tips {
  display: inline-block;
  padding-top: 0.4rem;
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.75rem;
}

.bot {
  padding: 0 20px;
  margin-top: 40px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.logpass {
  flex: 4;
}

.log-help {
  flex: 1;
}
</style>
