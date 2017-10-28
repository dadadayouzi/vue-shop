<template>
  <div class="login">
    <a style="float: right;display:block;width: 20px;height:20px; font-size: 35px; margin-right: 5px" href="/">&times;</a>
    <div class="avatar">
      <img class="reg_img" src="" alt="">
    </div>
    <form class="myForm">
      <div class="form-group fromGroup">
        <label for="exampleInputEmail1" class="username">用户名</label>
        <input  type="请输入用户名" class="form-control fromControl" id="exampleInputEmail1" placeholder="请输入用户名" v-model="user.username">
      </div>
      <div class="form-group fromGroup">
        <label for="exampleInputPassword1" class="password">密码</label>
        <input type="请输入密码" class="form-control fromControl" id="exampleInputPassword1" placeholder="请输入密码" v-model="user.password">
      </div>
      <router-link class="go-log" to="/register">请前往注册页面-> </router-link>

      <div class="reg_btn">
        <button @click.prevent="login" class="btn btn-default log">登录</button>
      </div>
    </form>
    <div id="mock" v-if="this.bb"><p>{{this.bb}}<span @click="ccc"><b>确定</b></span></p></div>
  </div>
</template>
<script>
  import axios from '../../node_modules/axios/dist/axios';
  export default {
    data(){
      return {
          user:{
            username:'',
            password:'',
          },
          bb:'',
        aa:{}
      }
    },
    created(){
    },
    methods: {
      login(){
        axios.post('/api/user/signin',this.user).then(res=>{
          if(res.data.code){
              this.bb='亲，您还没有注册哦！';
          }else {
           // this.$router.push('/profile')
              }

          if(res.data.code==0){
            localStorage.setItem("code","1");
            this.$router.push('/profile');
            window.location.reload();
          }
        })
      },
      ccc(){
        this.bb=''
      }
    },
    computed: {},
    mounted(){
    }
  }
</script>
<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;

  }
  html,body{
    width: 100%;
    height:100%;
  }
  .login{
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background-color: #fff;
  }
  .avatar{
    margin:40px auto 10px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid #cecece;
    background: url('http://static.lagou.com/thumbnail_300x300/i/image/M00/01/71/Cgp3O1ZqrEeACxToAACglH7buEU173.jpg ') no-repeat;
    background-size: 100%;
  }
  .avatar .reg_img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .myForm{
    margin: 40px 20px 100px;
    .username,.password{
      font-size: 15px;
      line-height: 30px;
    }
  }
  .fromGroup{
    width: 100%;
    height:80px;
    font-size: 16px;

  }
  .fromGroup .fromControl{
    width: 100%;
    font-size: 16px;
    padding-left: 10px;
    border: 1px solid #cecece;
  }
  .reg_btn{
    width: 100%;
    display:flex;

  }
  .go-log{
    color:red;
    float: right;
    font-size: 12px;
  }

  .log{
    justify-content: center;
    margin:30px auto;
    width: 100%;
    height:45px;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
    background-color: orangered;
    color:#fff;

  }
#mock{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.4);
  z-index: 100;
}
  #mock p{
    width: 200px;
    height: 150px;
    margin: 240px auto;
    background-color: orangered;
    font-size: 18px;
    text-align: center;
    line-height: 110px;
    border-radius: 10px;
    padding-left: 10px;
    color:#fff;
  }
  #mock p b{
    position: relative;
    top:-50px;
    right: 0px;
    font-size: 20px;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 5px;
  }
</style>
