<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center ><div ><div>购物街</div></div></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from 'network/home'
export default {
  name: "Home",
  data() {
    return {
      result:null,
      banners:[],
      recommends:[]

    }
  },
  components: {
    NavBar,
  },
  created(){
    //请求多个数据
    getHomeMultidata().then(res=>{
    //  this.result = res
    this.banners = res.data.banner.list
    this.recommends = res.data.recommend.list
    })
  }
};
</script>

<style>
.home-nav{
  color: white;
  background:var(--color-tint);
}

</style>