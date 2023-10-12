<template>
  <div id="app" class="app-wrapper">
    <indexView></indexView>
  </div>
</template>

<script>
import indexView from './views/home'

export default {
  name: 'app',
  data(){
    return {

    }
  },
  components: {
    indexView
  }
}
</script>

<style>
</style>
