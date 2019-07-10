<template>
  <div>
    <van-nav-bar title="穷游网" left-arrow @click-left="backto('home')" />
    <h2>注册/登录</h2>
    <van-cell-group>
      <div class="font-num">+86</div>
      <van-field
        style="display:inline-block;width:90%;"
        v-model="username"
        required
        clearable
        right-icon="question-o"
        placeholder="请输入手机号码"
      />
    </van-cell-group>
    <span class="login-tips">未注册手机号验证后自动创建</span>
    <van-button round type="danger">下一步</van-button>
    <div class="bot">
      <div class="logpass">账号密码登录</div>
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
      username: "",
      password: ""
    };
  },
  methods: {
    backto(name) {
      console.log(name);
      this.$router.push({ name });
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
