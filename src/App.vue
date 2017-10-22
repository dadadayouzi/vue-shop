<template>
  <div id="app">
    <div>
      <router-view></router-view>
      <NavBar/>
    </div>

  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components: {NavBar}
  }
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #7f7f7f;
  }

  body, html {
    font-size: 16px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .scroll{
    width: 100%;
    position: fixed;
    top:50px;
    bottom: 45px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
