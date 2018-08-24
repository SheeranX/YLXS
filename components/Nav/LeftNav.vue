
<template>
    <!-- 左侧导航栏 -->
        <div class="left-nav bg-white">
            <div v-if="navItem.length>0">
              <div class="left-item" v-for="(item,index) in navItem" :key="index">
                <div class="left-item-title bg-green-light font14 ">
                    <Icon type="md-contacts" size='24' /> {{item.PName}}
                </div>
                <ul class="left-num-item-list clear">
                    <li v-for="(list,index) in item.PGroup" :key="index"><nuxt-link :to='{path:list.router}' class="black">{{list.title}}</nuxt-link></li>
                </ul>
            </div>
            </div>
            <div v-else class="default-loading">
                <Spin size="large" fix></Spin>
            </div>
        </div>
</template>
<style lang='less' scoped>
@import url('../../assets/styles/global.less');
    .center{
        text-align: center;
    }
    .left-nav{
        width: 250px;
        text-align: center;
        padding: 0px 20px 20px 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        margin: 10px 10px 0 0px;
        position: absolute;
    }
    .left-item{
        padding-top: 20px;
    }
    .left-item-title{
        height: 40px;
        line-height: 40px;
    }
    .left-num-item-list{
        list-style: none;
        margin-top: 10px;
    }
    .left-num-item-list li{
        float: left;
        width: 100px;
        padding-top: 5px;
    }
    .left-num-item-list li a{
        border-bottom: 2px solid #ffffff;
        display: inline-block;
    }
    // .left-num-item-list li a:hover{
    //      .border-btm;
    //      .green;
    // }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .default-loading{
        height: 100px;
        width: 100%;
    }
    // .left-nav .nuxt-link-active{
    //     border-bottom: 2px solid #ffffff;
    // }
    // .left-nav .nuxt-link-exact-active{
    //     .green;
    //     .border-btm
    // }
</style>
<script>
    export default {
        props:{
            item:Array
        },
        data(){
            return{
                navItem :this.item
            }
        },
        methods:{

        },
        watch:{
          'item': function(){
              this.navItem = this.item
          }
        }
    }
</script>
