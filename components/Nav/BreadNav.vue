<template>
    <!-- 面包屑导航 -->
    <div class="bread-nav bg-gray-light clear"> 
        <div class="float-right">
            <Breadcrumb separator="<span class='black'>></span>">
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">用户信息</BreadcrumbItem>
                <BreadcrumbItem>用户管理</BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>
</template>
<style>
    .bread-nav{
        margin-left: 300px;
        height: 40px;
        margin-top: 10px;
        line-height: 40px;
        margin-right: 20px;
        border-radius: 2px;
        padding-right: 30px;
        border-top: 1px dashed #ccc;
        border-bottom: 1px dashed #ccc;
    }
</style>
<script>
    
</script>

