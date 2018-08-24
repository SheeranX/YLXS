<template>
  <div>
     <LoginNav :item="items"></LoginNav>
     <div class="main-container">
       <nuxt-child/>
     </div>
  </div>
</template>

<script>
import LoginNav from '~/components/Nav/LoginNav.vue'

export default {
  components: {
    LoginNav
  },
  data(){
    return{
      items:[
        {name:'首页',url:'/Login/Login'},
        {name:"产品服务",url:'/clientCase/clientCase'},
        {name:'客户案例',url:'/main'},
        {name:"检售票系统",url:'/ticket'},
        {name:"联系我们",url:"/contact"}]
    }
  },
}
</script>

<style scoped>
  .main-container{
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
</style>

