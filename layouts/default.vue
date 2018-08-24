<template>
  <div class="theme-default" id="mainPage">
    <nuxt/>
  </div>
</template>
<script>
  export default{
    mounted(){
        let theme = localStorage.getItem('THEME');
        document.getElementById("mainPage").className = theme;
    },
    watch:{

    }
  }
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
#mainPage{
  min-width: 900px;
}

</style>

