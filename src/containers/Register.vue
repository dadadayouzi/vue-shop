
<template>
  <div class="register">
    <a style="float: right;display:block;width: 20px;height:20px; font-size: 35px; margin-right: 5px" href="/#/home">&times;</a>
    <div class="avatar">
      <img class="reg_img" src="" alt="">
    </div>
    <form class="myForm">
      <div class="form-group l">
        <label style="line-height: 30px;" for="exampleInputEmail1" class="control-label">用户名</label>
        <input  type="请输入用户名" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名" v-model="user.username">
      </div>
      <div class="form-group l">
        <label style="line-height: 30px;" for="exampleInputPassword1" class="control-label">密码</label>
        <input type="请输入密码" class="form-control" id="exampleInputPassword1" placeholder="请输入密码" v-model="user.password">
      </div>

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
            add(){
                axios.post('/api/user/signup',this.user).then(res=>{
                    if(res.data.success){
                      this.bb=res.data.success;
//                      alert(res.data.success)
//                      this.$router.push('/login')
                    }else {
                      this.bb=res.data.error;
//                        alert(res.data.error)
                    }

                })
            },
          ccc(){
            this.$router.push('/login')
          },

        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;

  }
  html,body{
    width: 100%;
    height:100%;
  }
  .register{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background-color: #fff;
    width:100%;
    height: 100%;
  }
  .avatar{
    margin:50px auto;
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
  }
  .l{
    margin-bottom: 20px;
  }
  .l input{
    padding: 0 5px;
  }

  .reg_btn{
    width: 100%;
    display:flex;

  }

  .BTN{
    justify-content: center;
    margin:30px auto;
    width: 100%;
    height:40px;
    line-height: 40px;
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
    line-height: 150px;
    border-radius: 10px;
    padding-left: 37px;
    color:#fff;
  }
  #mock p b{

    position: relative;
    top:40px;
    right: 70px;
    font-size: 20px;
  }
</style>
