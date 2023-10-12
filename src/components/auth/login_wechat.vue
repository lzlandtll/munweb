<template>
  <div>
    微信登陆，待开发
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import httpService from "@/utils/httpService";
import toasted from "@/utils/toasted";

export default {
  name: "login_account",
  data() {
    return {
      userId: "",
      password: "",
      md5Password: ""
    };
  },
  methods: {
    accountLogin() {
      this.authVisible = true;
      let md5Hash = CryptoJS.MD5(this.password);
      this.md5Password = md5Hash.toString(CryptoJS.enc.Hex);
      let param = {
        userId: this.userId,
        password: this.md5Password
      }

      httpService.get("/api/user/accountLogin", param).then(
          data => {
            let result = data.data;
            console.log(data)
            if (result.success) {
              toasted.success("登录成功")
              this.$store.commit("user/updateUser", result.data)
            } else {
              toasted.message("登录失败")
            }
          }
      )
    }
  },
}
</script>

<style scoped>

</style>
