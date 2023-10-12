<template>
  <div v-if="index != -1" class="fullscreen">
    <Close @click="clickIndex(-1)" class="closeIcon" />
    <div style="background: #E0F2E9">
      <div class="authContainer">
        <login v-if="index == 1"></login>
        <registry v-if="index == 2"></registry>
      </div>
      <div class="switchPageContainer">
        <button v-if="showIndex != 1" @click="clickIndex(1)" class="switchPageBtn">登录</button>
        <button v-if="showIndex != 2" @click="clickIndex(2)" class="switchPageBtn">注册账号</button>
        <button v-if="showIndex != 3" @click="clickIndex(3)" class="switchPageBtn">找回密码</button>
      </div>
    </div>
  </div>
</template>

<script>
import login from './login'
import registry from './registry'
export default {
  name: "authHome",
  components: {
    "login": login,
    "registry": registry
  },
  props: {
    showIndex: Number
  },
  watch: {
    showIndex(newValue) {
      this.index = newValue;
    },
  },
  data() {
    return {
      visible: this.authVisible,
      index: this.showIndex
    };
  },
  methods: {
    clickIndex(index){
      this.index = index;
      this.$emit('showIndexChange', this.index);
    }
  }
}
</script>

<style scoped>
.closeIcon{
  position: absolute;
  right: 2%;
  top: 3%;
  width: 20px;
  height: 20px;
}
.authContainer{
  display: block;
  width: 30vw;
  height: 75vh;
}
.switchPageContainer{
  display: flex;
  float: right;
  gap: 0.4vw;
  margin-bottom: 0.2vh;
}
.switchPageContainer .switchPageBtn{
  font-size: 0.8vw;
  border: none;
  background: #eee;
}
</style>
