<template>
  <div>
    <MHeader title="个人主页"></MHeader>
    <div class="scroll">
      <div class="hea">
        <img src="../components/images/fruit.jpg" alt="">
        <a class="out"
           v-if="this.book.bb" type="button" @click.stop="removebb">退出登录</a>
        <router-link class="login" to="/login" v-if="!this.book.bb">登录</router-link>
      </div>
      <ul class="list">
        <router-link to="/MyCar" tag="li">
          <i class="iconfont icon-dingdan indent"></i>
          <span>全部订单</span>
        </router-link>
        <li>
          <i class="iconfont icon-shoucang collect"></i>
          <span>我的收藏</span>
        </li>
        <li>
          <a href="https://auth.alipay.com/login/index.htm">
            <i class="iconfont icon-zhifubao zhifubao"></i>
            <span>支付宝</span>
          </a>
        </li>
        <li>
          <a href="http://www.kuaidi100.com/all/sf.shtml?from=openv">
          <i class="iconfont icon-wuliu-copy logistics"></i>
          <span>我的物流</span>
          </a>
        </li>
        <li>
          <i class="iconfont icon-kefu chat"></i>
          <span>联系客服</span>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import MHeader from '../components/MHeader.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        book: {
          bb: ''
        }
      }
    },
    created() {
      this.bb

      ()
    },
    components: {MHeader},
    methods: {
      bb() {
        this.book.bb

          = Boolean(localStorage.getItem("code"));
      },
      removebb() {
        axios.get('/api/user/signout').then(res => {
          console.log(res);
          localStorage.removeItem("code");
          window.location.reload();
        })
      }
    },
    computed: {},
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  .hea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("../components/images/bac.jpg");
    border-top: 1px solid gainsboro;
    img {
      display: flex;
      justify-content: center;
      margin: 0.6rem auto 0.2rem;
      width: 2rem;
      height: 2rem;
      border: 2px solid gainsboro;
      border-radius: 50%;
    }
    a {
      margin: 0 auto;
      width: 1.6rem;
      border: 1px solid white;
      list-style: none;
      text-align: center;
      font-size: 0.3rem;
      margin-bottom: 0.6rem;
    }
  }

  .out {
    color: #fff;
    background-color: orangered;
    border-radius: 0.16rem;
    font-size: 0.3rem;
    line-height: 0.72rem;
    border: 1px solid #fff;
  }

  .login {
    color: #fff;
    background-color: orangered;
    border-radius: 0.16rem;
    font-size: 0.28rem;
    line-height: 0.72rem;
    border: 2px solid white;
  }

  .list {
    width: 100%;
    padding: 0.4rem;
    li {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.3rem;
      i {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
      }
      .indent{
        color: orangered;
      }
      .collect{
        color: orangered;
      }
      .zhifubao{
        color: blue;
      }
      .logistics{
        color: black;
      }
      .chat{
        color: red;
      }
      span{
        font-size: 0.26rem;
        margin-left: 0.5rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

</style>
