<template>
  <div>
    <MHeader title="个人主页"></MHeader>
    <div class="scroll">
      <div class="hea">
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2039753389,3948663904&fm=27&gp=0.jpg

" alt="">
        <a style="color:#fff;background-color: orangered;border-radius: 8px;font-size: 15px;line-height: 36px;border:1px solid #fff;" v-if="this.book.bb" type="button" @click.stop="removebb">退出登录</a>
        <router-link style="color:#fff;background-color: orangered;border-radius: 8px;font-size: 18px;line-height: 36px;border:1px solid #fff;" to="/login" v-if="!this.book.bb">登录</router-link>

      </div>
      <ul class="list">
        <router-link to="/MyCar" tag="li"><i class="iconfont icon-dingdan"></i>全部订单</router-link>
        <li><i style="color:red;font-size: 18px" class="iconfont icon-shoucang" ></i>我的收藏</li>
        <li><a style="color: black" href="https://auth.alipay.com/login/index.htm"><i style="color:dodgerblue;font-size: 18px" class="iconfont icon-zhifubao"></i>支付宝</a></li>
        <li><a style="color: black" href="http://www.kuaidi100.com/all/sf.shtml?from=openv"><i class="iconfont icon-wuliu-copy" style="font-size: 18px"></i>我的物流</a></li>
        <li><i class="iconfont icon-kefu" style="font-size: 18px"></i>联系客服</li>
      </ul>
    </div>
  </div>

</template>
<script>
  import MHeader from '../components/MHeader.vue'
  import axios  from 'axios'
  export default {
    data(){
      return {
        book:{
          bb:''
        }
      }
    },
    created(){
      this.bb

      ()
    },
    components: {MHeader},
    methods: {
      bb(){
        this.book.bb

          = Boolean(localStorage.getItem("code"));
      },
      removebb(){
//        localStorage.removeItem("code")
//        window.location.reload();
        axios.get('/api/user/signout').then(res=>{
          console.log(res);
          localStorage.removeItem("code");
           window.location.reload();
        })
      }
    },
    computed: {},
    mounted(){
    }
  }
</script>
<style scoped>
  .hea{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: orangered;
    border-top: 1px solid gainsboro;
  }
  .hea img{
    display: flex;
    justify-content: center;
    margin: 30px auto 10px;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius:50% ;
  }
  .hea a{
    margin: 0 auto;
    width: 100px;
    border: 1px solid #999;
    list-style: none;
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }


  .list{
    width: 100%;
    padding: 20px;
  }
  .list li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }

  .list li i{
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 20px;
  }
   a{
     text-decoration: none;
   }

</style>
