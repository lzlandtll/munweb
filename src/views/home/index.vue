<template>
  <div class="topNav">
    <div class="topNavLeft">

    </div>
    <div class="topNavCenter">

    </div>
    <div class="topNavRight">
      <img class="userIcon" :src="$store.state.user.userInfo.iconUrl">
    </div>
  </div>
  <div style="width: 300px; height: 200px;">
    <button @click="showIndex = 1">显示认证界面</button>
    <authHome :showIndex="showIndex" @showIndexChange="showIndex = $event" ></authHome>
  </div>
</template>

<script>
import authHome from '@/components/auth/authHome';
import httpService from "@/utils/httpService";
export default {
  name: "indexView",
  components: {
    'authHome': authHome, // 注册登录组件
  },
  data(){
    return {
      showIndex: 2
    }
  },
  mounted() {
    // 在组件挂载后启动定时任务
    this.startTimer();
  },
  beforeUnmount() {
      clearInterval(this.registryVisitorTimer)
  },
  methods: {
    startTimer(){
      this.registryVisitor();
    },
    registryVisitor(){
      console.log("enter ...")
      httpService.get("/api/user/registryVisitor").then(
          data => {
            let result = data.data;
            console.log(data)
            if (result.success) {
              this.$store.commit("user/updateUUID", result.data)
            }
          }
      )
    }
  }
}
</script>

<style scoped>
  .topNav{
    width: 100vw;
    height: 8vh;
    min-height: 4vw;
    background: #E0F2E9;
    display: flex;
  }
  .topNav .topNavLeft{
    width: 30%;
    height: 100%;
  }
  .topNav .topNavCenter{
    width: 40%;
    height: 100%;
    background: aquamarine;
  }
  .topNav .topNavRight{
    width: 30%;
    height: 100%;
    vertical-align: center;
  }
  .topNav .topNavRight .userIcon{
    width: 3vw;
    aspect-ratio: 1/1;
    border-radius: 1.5vw;
  }

</style>
