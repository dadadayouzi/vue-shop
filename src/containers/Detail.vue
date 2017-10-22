<template>
  <div>
    <MHeader title="详情页" back="true"></MHeader>
    <div class="scroll">
      <div class="row">
        <div class="col-xs-12" >
          <img :src="fruit.bookCover" alt="" class="onefruit">
        </div>
      </div>
      <div class="col-xs-12">
        <p >
         {{foodPrice.name}}{{fruit.bookName}} </p>
        <p >{{fruit.bookPrice | toInit(2)}}</p>
        <button class="btn btn-info" @click="add(fruit)"> {{shoppingCar.name}}</button>
      </div>
      <div class="mask" v-if="show">
        <div class="win">
          <p class="text">{{hint}}</p>
          <button class="btn btn-danger sure" @click="know">确定</button>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import axios from 'axios'

  export default {
    data() {
      return {
        fruit: {
          bookCover: "",
          bookName: "",
          bookPrice: "",
          bookInfo: "",
          introduce: ""
        },
        foodPrice:{name:'商品名称:'},
        shoppingCar:{name:'加入购物车'},
        show:false,
        hint:'',
      }
    },
    filters:{
      toInit(input,param1){
        return '￥' + input.toFixed(param1)
      }
    },
    created() {
      this.getFruit();
    }
    ,
    components: {
      MHeader
    }
    ,
    methods: {
      getFruit() {
        axios.get(`/api/fruit?id=${this.$route.params.nid}`).then(res => {
          console.log(res);
          this.fruit = res.data
        })
      },
      add(){
        axios.post(`/api/car/add?id=${this.$route.nid}`,this.fruit).then(res=>{
          if(!res.data.code){
            this.hint=res.data.error;
            this.show=true;

          }else {
            this.hint='加入购物车成功~';
            this.show=true;
            //alert('加入成功')
          }
        })
      },
      know(){
      if(this.hint){
        this.show = false
      }else {
        this.$router.push('/login')
      }

      }
    }
    ,
    computed: {}
    ,
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  .onefruit{
    width: 270px;
    height: 270px;
    margin-left: 25px;
  }
  img {
    height:300px;
    width: 100%;

  }

  .col-xs-12 {
    margin-top: 16px;
   p{
     color: #060706;
     font-size: 16px;
     text-align: center;
     text-shadow:-2px 0px 4px #333333;
     /*font-weight: normal;*/
     margin-bottom: 20px;
   }
  }
  .col-xs-12{
    h4{
      box-shadow: 0 0 6px 1px ;
    }
  }

  button{
    float:right;
  }
.mask{
  position: fixed;
  top: 50px;
  left: 0;
  bottom:45px;
  right:0;
  width: 100%;
  height:100%;
  background: rgba(17, 8, 8, 0.7);
  .win{
    margin: auto;
    height: 130px;
    border-radius: 10px;
    width:230px;
    background: white;
    position: absolute;
    left:15%;
    top:25%

  }
}
  .sure{
    position: absolute;
    left: 88px;
    bottom: 15px;
  }
  .text{
    text-align: center;
    margin-top: 28px;
  }
</style>
