<template>
  <div>
    <MHeader title="购物车"></MHeader>
    <div class="my-car scroll">
      <!--购物车列表-->
      <div class="list-title">
        <input type="checkbox" @change="checkAll" v-model="all">
        <img src="" alt="">
        <span>水果APP</span>
      </div>
      <div class="notLogin"> {{notlogin}}</div>
      <div class="car-list" v-for="(product,index) in products">
        <div class="l0"><input type="checkbox" v-model="product.isSelected" @change="checkOne"></div>
        <div class="l1"><img :src="product.bookCover" alt=""></div>
        <div class="r0">
          <p>{{product.bookName}}</p>
          <div class="b">
            <span class="price">¥ {{product.bookPrice}}</span>
            <!--<span>{{product.productCount*product.productPrice}}</span>-->
            <span class="list-count">
              <button @click="changeVal(product,-1,index)">-</button>
              <!--<input type="text" v-model="product.productCount">-->
              <input type="text" :value="product.count">
              <button @click="product.count++">+</button>
              <button @click="remove(product.id)" class="button"><i class="iconfont icon-delete"></i></button>
            </span>
          </div>

        </div>
      </div>
    </div>
    <!-- 结算 -->
    <div class="car-counts">
      <div>
        <input type="checkbox" @change="checkAll" v-model="all">
        <label>全选</label>
      </div>
      <div class="price">总计：<span>{{total | toInit(2)}}</span></div>
      <a href="javascript:;">结算</a>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import axios from 'axios';
  //  import pro from '../../pro.json';
  //  import fastclick from '../js/fastclick';
  export default {
    data() {
      return {
        products: [],
        all: true,
        confirm: false,
        cupCarts: [],
        notlogin:''
      }
    },
    filters: {
      toInit(input, param1) {
        return '￥' + input.toFixed(param1)
      }
    },
    created() {
     this.getCarts();
    },
    components: {MHeader},
    methods: {
        getCarts(){
            axios.get('/api/car/list').then(res=>{
              console.log(res);
              if(!res.data.code){
                  this.notlogin = '亲，你还没有登录哦~~~'
              }else {
                this.notlogin = '';
                this.products = res.data.fruits
              }

            })
        },
      checkAll() {
        console.log(this.all);
        this.products.forEach((item => item.isSelected = this.all))
      },
      checkOne() {
        this.all = this.products.every(item => item.isSelected)
      },
      remove(product) {//product标示当前点击的是哪个商品
//        console.log(product);
        this.products = this.products.filter(item => item.id !== product);
        axios.get(`/api/car/delete?id=${product}`).then(res=>{
          console.log(res);
        })
      },
      changeVal(product, val) {
        if (product.count == 1 && val == -1) {
          this.confirm = true;
          return
        } else {
          product.count += val;
        }
      },
    },
    computed: {
      total() {
        this.cupCarts = this.products.filter(item => item.isSelected);
        return this.cupCarts.reduce((prev, next) => {
          return prev + next.bookPrice * next.count;
        }, 0);
      },
      count() {
        return this.carts.reduce((prev, next) => {
          return prev + next.count
        }, 0);
      }
    },
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  .my-car {
    position: fixed;
    top: 50px;
    bottom: 90px;
    width: 100%;
    padding-left: 15px;
  input {
    ouline: none
  }
  .list-title {
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #e2e3e7;
  }
  .car-list {
    overflow: hidden;
    display: block;
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid #e2e2e2;
  .l0 {
    float: left;
    height: 20px;
    width: 20px;
    margin-top: 20px;
  }
  .l1 {
    float: left;
    padding: 0 5px;
  img {
    width: 80px;
    height: 80px;
  }
  }
  .r0 {
  p {
    font-size: 14px;
    padding-right: 6px;
  }
  .price {
    color: red;
  }
  .list-count {
    float: right;
    margin-right: 12px;
  input {
    width: 60px;
    border: 1px solid #e2e2e2;
    outline: none;
    font-size: 12px;
    padding: 3px 5px;
  }
  .button {
    outline: none;
    margin-left: 8px;
  i {
    font-weight: 300;
    color: orangered;
  }
  }
  }
  }
  }
  }
  .car-counts {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e2e2e2;
    align-items: center;
    position: fixed;
    bottom: 45px;
    width: 100%;
    height: 48px;
    background: #fff;
    z-index: 10;
    padding-left: 15px;
  div {
  label {
    font-size: 14px;
    font-weight: 400;
  }
  }
  .price {
    position: fixed;
    right: 120px;
  span {
    color: #e4393c;
  }
  }
  a {
    height: 48px;
    line-height: 48px;
    padding: 0 20px;
    border-radius: 0;
    background: #e4393c;
    color: #FFF;
  }
  }
  .notLogin{
    text-align: center;
    line-height: 300px;
    font-size: 0.4rem;
    color: gray;
  }

</style>
