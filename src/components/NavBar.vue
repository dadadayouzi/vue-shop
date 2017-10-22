<template>
  <nav>
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/mycar">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/profile">
      <i class="iconfont icon-gerenzhongxin"></i>
      <span>个人中心</span>
    </router-link>
  </nav>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    mounted() {
    },
    components: {},
  }
</script>
<style scoped lang="less">
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 45px;
    width: 100%;
    background: ghostwhite;
    border-top: 1px solid gainsboro;
    display: flex;
    flex-direction: row;
    align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-decoration: none;
  }

  .router-link-exact-active {
    color: orangered;
  }

  }


</style>
g
