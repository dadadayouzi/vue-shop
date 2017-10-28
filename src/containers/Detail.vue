<template>
  <div>
    <MHeader title="详情页" back="true"></MHeader>
    <div class="scroll">
      <div class="col-xs-12 wrap-img">
        <img :src="fruit.bookCover" alt="" class="onefruit">
      </div>
      <div class="col-xs-12">
        <p>商品名称：{{fruit.bookName}} </p>
        <p>￥ {{fruit.bookPrice}}</p>
        <button class="btn btn-danger addbtn" @click="add(fruit)">加入购物车</button>
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
        foodPrice: {name: ':'},
        show: false,
        hint: '',
      }
    },
    filters: {
      toInit(input, param1) {
        return '￥' + input.toFixed(param1)
      }
    },
    created() {
      this.getFruit();
    },
    components: {
      MHeader
    },
    methods: {
      getFruit() {
        axios.get(`/api/fruit?id=${this.$route.params.nid}`).then(res => {
          this.fruit = res.data
        })
      },
      add() {
        axios.post(`/api/car/add?id=${this.$route.nid}`, this.fruit).then(res => {
          if (!res.data.code) {
            this.hint = res.data.error;
            this.show = true;

          } else {
            this.hint = '加入购物车成功~';
            this.show = true;
          }
        })
      },
      know() {
        if (this.hint) {
          this.show = false
        } else {
          this.$router.push('/login')
        }

      }
    },
    computed: {},
    mounted() {
    }
  }
</script>
<style scoped lang="less">
  .wrap-img {
    margin-left: 10%;
    width: 80%;
    height: 5rem;
    border: 0.04rem solid gainsboro;
    -webkit-border-radius: 0.2rem;
    -moz-border-radius: 0.2rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 4.2rem;
      width: 4.4rem;
    }
  }

  .col-xs-12 {
    margin-top: 0.32rem;
    p {
      color: #060706;
      font-size: 0.32rem;
      text-align: center;
      margin-bottom: 0.4rem;
    }
  }

  .col-xs-12 {
    h4 {
      box-shadow: 0 0 0.12rem 0.02rem;
    }
  }

  button {
    margin-left: 2rem;
  }

  .mask {
    position: fixed;
    top: 1rem;
    left: 0;
    bottom: 0.9rem;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(17, 8, 8, 0.7);
    .win {
      margin: auto;
      height: 2.6rem;
      border-radius: 0.2rem;
      width: 4.6rem;
      background: white;
      position: absolute;
      left: 15%;
      top: 25%
    }
  }

  .sure {
    position: absolute;
    left: -0.24rem;
    bottom: 0.3rem;
  }

  .text {
    text-align: center;
    margin-top: 0.56rem;
  }
</style>
