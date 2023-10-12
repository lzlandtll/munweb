<template>
  <div style="height: 10vh"></div>
  <div class="infoContainer">
    <input class="inputInfo" v-model="userId" placeholder="请输入昵称">
    <input class="inputInfo" v-model="password" placeholder="请输入密码">
    <input class="inputInfo" v-model="rePassword" placeholder="请确认密码">
    <input class="inputInfo" v-model="mail" placeholder="请输入邮箱">
    <input class="inputInfo" v-model="tel" placeholder="请输入电话号码">
    <div class="inputInfo">
      <input style="" v-model="capCode" placeholder="请输入验证码">
      <img @click="getCapCode" class="getVerification" :src="capCodeUrl" alt=""/>
    </div>

    <div class="inputInfo">
      <input style="" v-model="mailCode" placeholder="请输入验证码">
      <el-button @click="getMailCode" class="getVerification">获取验证码</el-button>
    </div>
    <button class="inputInfo" @click="registry">注册</button>
  </div>
</template>

<script>

import httpService from "@/utils/httpService";
import toasted from "@/utils/toasted";

export default {
  name: "registry",
  data() {
    return {
      userId: "",
      password: "",
      rePassword: "",
      md5Password: "",
      mail: "",
      tel: "",
      capCode: "",
      mailCode: "",
      capCodeUrl: ""
    };
  },
  created() {
    this.getCapCode();
  },
  methods: {
    registry(){

    },
    getCapCode(){

      httpService.get("/api/user/getCapCode").then(
          data => {
            let result = data.data;
            console.log(data)
            if (result.success) {
              this.capCodeUrl = "data:image/gif;base64," + result.data.img;
            }
          }
      )
    },
    getMailCode(){

      httpService.get("/api/user/getMailCode", {
        code: this.capCode
      }).then(
          data => {
            let result = data.data;
            console.log(data)
            if (result.success) {
              toasted.success("验证码发送成功,请注意查收")
            }else{
              toasted.error(result.errorMsg)
            }
          }
      )
    }
  },
}
</script>

<style scoped>
.infoContainer{
  position: relative;
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.infoContainer .inputInfo{
  position: relative;
  display: block;
  width: 40%;
  height: 3vh;
  min-height: 2vw;
  margin-left: 50%;
  margin-top: 3vh;
  transform: translateX(-50%);
  text-align: center;
  background: paleturquoise;
  padding: 1px 2px;
}
.getVerification{
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: calc(100%);
}
</style>
