<template>
  <div id="app">
       <login></login>
  </div>
</template>
<script>

 import login from './components/login/login.vue'
  export default{
    components:{
      login
    }
 }

</script>


<style>
  html{
    background: #F8F8FF;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    height: 100%;

  }
</style>
