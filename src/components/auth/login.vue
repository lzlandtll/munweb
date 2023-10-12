<template>
  <div class="loginContainer">
    <login_account class="loginTypeContainer" v-if="loginType == 'account'"></login_account>
    <login_wechat class="loginTypeContainer" v-if="loginType == 'wechat'"></login_wechat>
  </div>
  <div>
    <button @click="switchType('account')">普通登录</button>
    <button @click="switchType('wechat')">微信登录</button>
  </div>
</template>

<script>
import login_account from "@/components/auth/login_account";
import login_wechat from "@/components/auth/login_wechat";

export default {
  name: "login",
  components: {login_account, login_wechat},
  data() {
    return {
      loginType: "account"
    };
  },
  methods: {
    switchType(loginType){
      this.loginType = loginType
    }
  },
}
</script>

<style scoped>
.loginContainer{
  position: relative;
}
.loginContainer .loginTypeContainer{
  width: 100%;
}
</style>
