<template>
  <div class="my-header">
    <i class="iconfont icon-fanhui"
       v-if="back"
       @click="goBack"
    ></i>
    {{title}}
  </div>
</template>
<script>
  export default {
    props: {
      title: {},
      back: {
//        type: Boolean,
        default: false,
      }
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {
      goBack(){
        this.$router.history.go(-1)
      }
    },
    computed: {},
    mounted() {
    },
    components: {},
  }
</script>
<style scoped lang="less">
  .my-header{
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: orangered;
    color: white;
  i{
    position: fixed;
    left: 10px;
  }
  }

</style>
