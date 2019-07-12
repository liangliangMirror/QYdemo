<template>
  <div>
    <van-nav-bar title="穷游网" left-arrow @click-left="backto" />
    <h2>注册</h2>
    <van-cell-group>
      <div class="font-num">+86</div>
      <van-field
        style="display:inline-block;width:90%;"
        v-model="phone"
        required
        clearable
        right-icon="question-o"
        placeholder="请输入手机号码"
        @blur="vertifyPhone"
    
      />
    </van-cell-group>
    <van-cell-group>
      <div class="font-num">密码</div>
      <van-field
        style="display:inline-block;width:90%;"
        v-model="password"
        required
        clearable
        right-icon="question-o"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <span class="login-tips">未注册手机号验证后自动创建</span>
    <van-button round type="danger" @click="reg">下一步</van-button>
    <div class="bot">
      <div class="logpass" @click="goLog('login')">账号密码登录</div>
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
      password: "",
      regFlag: "false"
    };
  },
  methods: {
    backto() {
      this.$router.go(-1);
    },
    goLog(name) {
      this.$router.push({ name });
    },
    vertifyPhone() {
      console.log(787878);
      if (this.phone) {
        this.$axios
          .get("http://localhost:3000/reg/check", {
            params: {
              phone: this.phone
            }
          })
          .then(({ data }) => {
            if (data.code == 250) {
              this.regFlag = false;
              alert("账号已存在");
            } else if (data.code == 1000) {
              this.regFlag = true;
              console.log("ojbkReg~~~");
            }
          });
      } else {
        console.log("手机号不能为空");
      }
    },

    // 注册
    reg() {
      if (this.regFlag) {
        if (this.password.trim()) {
          this.$axios
            .post("http://localhost:3000/reg", {
              phone: this.phone,
              password: this.password
            })
            .then(({ data }) => {
              console.log("data:", data);
              console.log("data.code:", data.code);

              if (data.code == 1000) {
                this.$router.replace({ name: "login" });
              } else {
                console.log("6666");
              }
            });
        } else {
          alert("密码不能为空");
        }
      } else {
        // this.$refs.title.focus();

        alert("手机号码已注册，请更换");
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
