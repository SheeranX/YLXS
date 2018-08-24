<template>
    <!-- 顶部状态栏 -->
     <div>
        <div class="topbar clear">
        <div class="topbar-logo float-left">
            <img src="~/assets/images/logo.png" alt="logo" class="topbar-logo-img">
        </div>
        <div class="userbar float-right">
            <div class="userbar-avatar">
                 <Avatar icon="ios-person" size="large"/>
            </div>
            <div>
                <p>您好，上海大漠电子科技股份有限公司|<a href="#">[退出]</a> 消息 <span class="error">0</span></p>
                <p>
                    票在旅途首页系统时间：2018-08-09
                    <span>
                         <Dropdown @on-click='changeTheme'>
                            <a href="javascript:void(0)">
                                &nbsp; 换肤
                            <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name='theme-default'>默认</DropdownItem>
                                <DropdownItem name='theme-red'>红色</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </span> 
                </p>
            </div>
        </div>
        </div>
        <div class="status-bar bg-green white font-bold font14">
            <div class="status-bar-name">
                <p class="bg-green-deep">青年旅行社</p>
            </div>
            <div>我的工作台</div>
            <div>技术支持电话</div>
        </div>
     </div>
</template>
<style lang='less'>

    .topbar-logo{
        height: 80px;
        line-height: 80px;
        width: 320px;
    }
    .topbar-logo-img{
        height: 60px;
        vertical-align: middle;
    }
    .topbar{
        padding: 0 20px;
       &>div{
        height: 80px;
       }
    }
    .userbar>div{
        display: inline-block;
        height: 80px;
        padding: 15px;
    }
    .userbar div p{
        padding: 2px 0;
    }
    .userbar-avatar span{
        vertical-align: sub;
    }
    .status-bar div{
        display: inline-block;
        width: 33.3%;
        text-align: center;
        height: 40px;
        line-height: 40px;
    }
    .status-bar-name p{
        width: 250px;
        padding-left: 20px;
    }
</style>
<script>
    export default {
        methods:{
            changeTheme(name){
                document.getElementById("mainPage").className = name;
                localStorage.setItem('THEME',name);
            },
        }
    }
</script>

