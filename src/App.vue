<template>
<div id="app">
    <router-view></router-view>
  <tab-bar-mina/>
</div>
</template>

<script>
import TabBarMina from './components/content/tabbar/MainTabBar'
export default {
  name: "App",
  components:{
    TabBarMina
  }
};
</script>

<style>
@import '~assets/css/base.css';


</style>