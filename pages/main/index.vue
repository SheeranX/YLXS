<template>
    <div>
       <TopBar></TopBar>
       <LeftNav :item='items'></LeftNav>
       <BreadNav></BreadNav>
       <div class="container">
            <nuxt-child/>
       </div>
    </div>
</template>
<style>
    .container{
        margin: 10px 20px 20px 300px;
    }
</style>
<script>
    import TopBar from '~/components/Nav/TopBar.vue';
    import LeftNav from '~/components/Nav/LeftNav.vue';
    import BreadNav from '~/components/Nav/BreadNav.vue';
    export default {
        components:{
            TopBar,
            LeftNav,
            BreadNav
        },
        data(){
            return {
                items:[]
            }
        },
        mounted() {
            const _this = this;
            let list = [
                    {
                        PName:"用户管理",
                        PGroup:[
                            { 
                                title:'用户信息',
                                router:'/main/userManager/userManager',
                                meta:{delete:true,query:false,update:false,push:false}
                            },
                            {
                                title:'角色管理',
                                router:'/main/roleManager/roleManager',
                                meta:{delete:false,query:true,update:true,push:true}
                            },
                            {
                                title:'权限管理',
                                router:'/main/addUser/addUser',
                                meta:{delete:true,query:true,update:false,push:false}
                            }
                        ]
                    },
                    {
                        PName:'产品管理',
                        PGroup:[
                            {
                                title:'编号管理',
                                router:'/main/numberManager/number',
                                meta:{delete:false,query:false,update:true,push:true}
                            },
                            {
                                title:'套票管理',
                                router:'/main/mutiplyManager',
                                meta:{delete:false,query:true,update:false,push:false}
                            },
                            {
                                title:"产品限购说明",
                                router:"/peoduct/userManager/userManager",
                                meta:{delete:false,query:true,update:false,push:true}
                            }
                        ]
                    }
                ]
           setTimeout(()=>{
                _this.items = list
           },1000);
            this.$store.commit('addFullPermission',list);
            this.$router.push({name:'main-index-userManager-userManager'});
        },
    }
</script>

