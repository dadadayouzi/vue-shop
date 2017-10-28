<template>
  <div class="register">
    <a href="/#/home" class="close">&times;</a>
    <div class="avatar">
      <img class="reg_img" src="" alt="">
    </div>
    <form class="myForm">
      <div class="form-group l">
        <label for="exampleInputEmail1" class="control-label username">用户名</label>
        <input type="请输入用户名" class="form-control fromGroup" id="exampleInputEmail1" placeholder="请输入用户名"
               v-model="user.username">
      </div>
      <div class="form-group l">
        <label for="exampleInputPassword1" class="control-label password">密码</label>
        <input type="请输入密码" class="form-control fromControl" id="exampleInputPassword1" placeholder="请输入密码"
               v-model="user.password">
      </div>
      <router-link class="go-reg" to="/login">请前往登录页面-> </router-link>
      <div class="reg_btn">
        <button @click.prevent='add()' class="btn BTN">注册</button>
      </div>
    </form>
    <div id="mock" v-if="this.bb"><p>{{this.bb}}<span @click="ccc"><b>确定</b></span></p></div>
  </div>

</template>
<script>
  import axios from '../../node_modules/axios/dist/axios';

  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
        bb: '',
        aa: {}
      }
    },
    created() {
    },
    methods: {
      add() {
        axios.post('/api/user/signup', this.user).then(res => {
          if (res.data.success) {
            this.bb = res.data.success;
//                      alert(res.data.success)
//                      this.$router.push('/login')
          } else {
            this.bb = res.data.error;
//                        alert(res.data.error)
          }

        })
      },
      ccc() {
        this.$router.push('/login')
      },

    },
    computed: {},
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  .register {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background-color: #fff;
    width: 100%;
    height: 100%;
    .close {
      float: right;
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.7rem;
      margin-right: 0.01rem;
    }
    .username, .password {
      font-size: 0.3rem;
      line-height: 0.6rem;
    }
  }

  .go-reg {
    color: red;
    float: right;
    font-size: 0.24rem;
  }

  .fromGroup .fromControl {
    width: 100%;
    font-size: 0.32rem;
    padding-left: 0.2rem;
    border: 0.02rem solid #cecece;
  }

  .avatar {
    margin: 0.8rem auto 0.2rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 0.02rem solid #cecece;
    background: url('http://static.lagou.com/thumbnail_300x300/i/image/M00/01/71/Cgp3O1ZqrEeACxToAACglH7buEU173.jpg ') no-repeat;
    background-size: 100%;
  }

  .avatar .reg_img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .myForm {
    margin: 0.8rem 0.4rem 0.2rem;
  }

  .l {
    margin-bottom: 0.4rem;
  }

  .l input {
    padding: 0 0.01rem;
  }

  .reg_btn {
    width: 100%;
    display: flex;

  }

  .BTN {
    justify-content: center;
    margin: 0.6rem auto;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.36rem;
    background-color: orangered;
    color: #fff;

  }

  #mock {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 100;
  }

  #mock p {
    width: 0.4rem;
    height: 0.3rem;
    margin: 0.48rem auto;
    background-color: orangered;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 0.2rem;
    padding-left: 0.74rem;
    color: #fff;
  }

  #mock p b {
    position: relative;
    top: 0.8rem;
    right: 1.4rem;
    font-size: 0.4rem;
  }
</style>
