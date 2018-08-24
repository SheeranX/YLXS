<template>
    <!-- 登陆页导航 -->
    <div class="nav-index clear bg-white">
        <div class="nav-logo">
            <img src="~/assets/images/logo.png" alt="logo" class="logo-img">
        </div>
        <div class="nav-menu bg-white">
           <ul class="clear">
               <li v-for="(item,index) in navItem" :key="index" class="bg-white font16"><nuxt-link :to='{path:item.url}' class="black">{{item.name}}</nuxt-link></li>
           </ul>
        </div>
        <div class="collapse-nav">
            <dropdown trigger='click' placement="bottom-end">
                <a href="javascript:void(0)" class="green">
                  <Icon type="ios-list" size='50'/>
                </a>
                <dropdown-menu slot="list">
                    <dropdown-item  v-for="(item,index) in navItem" :key="index"><nuxt-link :to='{path:item.url}' class="font16">{{item.name}}</nuxt-link></dropdown-item>
                </dropdown-menu>
            </dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                navItem:this.item,
            }
        },
        props:["item"],
         mounted() {
          this.$router.push({name:"index-Login-Login"});
         },
    }
</script>
<style lang='less' scoped>
@import url('../../assets/styles/global.less');

    .nav-menu ul{
        list-style: none;
    }
    .nav-menu ul li{
        float: left;
        height: 80px;
        line-height: 80px;
    }
    .nav-menu ul li a{
        display: block;
        padding: 0 50px;
    }
    // .nav-menu ul li a:hover{
    //     .bg-green;
    //     .white;
    // }
    .nav-logo{
        height: 80px;
        padding: 0 20px;
        line-height: 80px;
        width: 320px;
    }
    .logo-img{
        height: 60px;
        vertical-align: middle;
    }
    .nav-index{
        box-shadow: 0 0 5px rgba(0, 0, 0, .7);
    }
    .nav-index div{
        float: left;
    }
    // .index-active a{
    //     .bg-green;
    //     .white!important;
    // }
    // .nav-menu .nuxt-link-active{
    //    .bg-white;
    //    .black;
    // }
    // .nav-menu .nuxt-link-exact-active{
    //   .bg-green;
    //   .white!important;
    // }
    .collapse-nav{
        line-height: 80px;
        float: right!important;
        padding-right: 40px;
        visibility: hidden;
        text-align: center;
    }
    .collapse-nav ul{
      min-width: 150px;  
    }
    // .collapse-nav ul li a{
    //     .black;
    // }
    //  .collapse-nav ul li {
    //    height: 30px;
    //    padding: 40px;
    // }
    // .collapse-nav .nuxt-link-active{
    //    .bg-white;
    //    .black;
    // }
    // .collapse-nav .nuxt-link-exact-active{
    //      .green!important;
    // }
   @media (max-width:1220px) { 
       .nav-menu{
           display: none;
       }
       .collapse-nav{
           visibility:visible;
       }
   }    

</style>

