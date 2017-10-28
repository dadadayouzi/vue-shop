<template>
  <div>
    <MHeader title="首页"></MHeader>
    <div class="scroll" ref="container">
      <Swiper :data="this.sliders"></Swiper>
      <div class="search">
        <input type="text"
               placeholder="搜索"
               class="form-control"
               v-model="val"
               @blur="regetList"
               @keyup.enter="searchFor">
        <i class=""></i>
        <button class="btn btn-danger"
                type="button"
                @click="searchFor"
        >搜索
        </button>
      </div>
      <div class="container" v-cloak="">
        <h4>
          <i class="iconfont icon-shuiguo1 shuiguo"></i>
          水果开会
        </h4>
        <ul class="list-group">
          <router-link :to="{name:'detail',params:{nid:item.id}}"
                       class="list-group-item list"
                       v-for="(item,index) in list"
                       :key="item.id"
                       tag="li"
          >
            <img class="fruit" :src="item.bookCover" alt="">
            <div class="detail">
              <p class="text">{{item.bookName}}</p>
              <p class="introduce">{{item.introduce}}</p>
              <p>￥ {{item.bookPrice}}</p>
              <button class="btn btn-danger" @click.prevent="add(item.id)">+</button>
            </div>
          </router-link>
        </ul>
        <div class="loadMore">
          <span @click="changeMore" v-if="more">加载更多</span>
          <span v-if="isShow">正在加载中...</span>
          <span v-if="noMore">没有更多商品</span>
        </div>
      </div>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div class="mask"
             @click="backhome"
             @touchmove="pre"
             v-if="show">
          <div class="center" v-if="show">
            <span>{{hint}}</span>
            <button type="button" class="btn btn-danger" @click="mask">OK</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import Swiper from '../components/Swiper.vue'
  import 'swiper/dist/css/swiper.css'
  import axios from 'axios';
  import {upLoadMore} from '../utils'

  export default {
    data() {
      return {
        sliders: [],
        list: [],
        show: false,
        hint: '',
        val: '',
        fruit: [],
        flag: true,
        newlist: [],
        isShow: false,
        more: true,
        noMore: false,
        newFruits: [],
      }
    },
    watch: {
      val() {
        this.newlist = [];
        this.more=false;
        axios.get('/api/hot').then(res => {
          this.list=this.newFruits;
        }).then(() => {
          for (let i = 0; i < this.list.length; i++) {
            let cur = this.list[i];
            if (this.val !== '') {
              if (cur.bookName.indexOf(this.val) > -1) {
                this.newlist.push(cur);
              }
            }
          }
          if (this.val === '') {
            this.newlist=this.newFruits;
          }
          this.list = this.newlist;
        });
        this.list = [];
      },
    },
    created() {
      this.newFruits.length===0?this.getList():this.list=this.newFruits;
      this.getSliders();
    },
    components: {
      MHeader,
      Swiper
    },
    methods: {
      add(id) {
        let oneInit = this.list.filter((item, index) => {
          return item.id == id;
        });
        let one = oneInit[0];
        axios.post(`/api/car/add?id=${id}`, one).then(res => {
          if (!res.data.code) {
            this.hint = '亲，您还没有登录哦~';
            this.show = true;
          } else {
            this.hint = '亲，加入成功~';
            this.show = true;
          }

        })
      },
      mask() {
        if (this.hint === '亲，您还没有登录哦~') {
          this.$router.push('/login');
        } else {
          this.show = false;
          this.val = '';
        }
      },
      searchFor() {
        if (this.newlist.length !== 0) {
          this.list = this.newlist;
          return;
        }
        this.fruit = this.list.filter((item, index) => item.bookName === this.val);
        if (this.val) {
          if (this.fruit.length !== 0) {
            this.newlist = this.fruit;
            this.list = this.fruit;
          } else {
            this.hint = 'Oh! NO! 商品不存在~~~';
            this.show = true;
          }
        } else {
          this.hint = '你还没说搜啥呢...';
          this.show = true;
        }
      },
      getSliders() {
        axios.get('/api/sliders').then(res => {
          this.sliders = res.data;
        })
      },
      getList() {
        axios.get('/api/hot').then(res => {
          this.newFruits=this.list = res.data;
        })
      },
      regetList() {
        this.newlist = [];
        if (this.val === '') {
          this.newFruits.length===0?this.getList():this.list=this.newFruits;
        }
      },
      backhome(e) {
        e.stopPropagation();
        this.show = false;
      },
      pre(e) {
        e.preventDefault();
      },
      changeMore(){
        this.isShow = true;
        this.more = false;
        if (this.list.length >= 24) {
          this.noMore = true;
          this.isShow = false;
          return
        }
        setTimeout(() => {
          axios.get('/api/hot').then(res => {
            this.newFruits = res.data.concat(this.list);
            this.list=this.newFruits;
            this.isShow = false;
            this.more = true;
          })
        }, 300)
      },
    },
    computed: {},
    mounted() {
      upLoadMore(this.$refs.container, this.changeMore)
    }
  }
</script>
<style scoped lang="less">
  .v-enter {
    opacity: 0;
  }

  .v-enter-active {
    transition: all 1s
  }

  .v-leave-active {
    transition: all 1s;
    opacity: 0;
  }

  .search {
    width: 100%;
    height: 0.6rem;
    background: white;
    display: flex;
    flex-direction: row;
    text-indent: 5em;
    padding: 0.3rem;
    margin-bottom: 0.2rem;

  .form-control {
    height: 0.48rem;
  }

  input {
    border: 1px solid gray;
    border-radius: 0.4rem;
    font-size: 0.28rem;
    width: 80%;
  }

  .btn {
    padding: 0;
  }

  button {
    line-height: 0.44rem;
    width: 17%;
    height: 0.44rem;
    border-radius: 0.4rem;
    margin-left: 0.08rem;
  }

  }

  .container {
    position: relative;

  .loadMore {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    background: orangered;
    text-align: center;
    color: #fff;
  }

  .shuiguo {
    color: orangered;
  }

  .list {
    margin-bottom: 0.2rem;
  }

  .fruit {
    width: 1.55rem;
    height: 1.4rem;
  }

  .detail {
    position: absolute;
    top: 0.24rem;
    width: 65%;
    height: 1.4rem;
    margin-left: 2rem;

  /*border: 1px solid red;*/
  p {
    font-size: 0.28rem;
  }

  .introduce {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    padding: 0;
    border-radius: 50%;
  }

  }
  }

  .mask {
    position: fixed;
    top: 1rem;
    left: 0;
    bottom: 0.9rem;
    width: 100%;
    background: rgba(0, 0, 0, .6);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

  .center {
    width: 4rem;
    height: 2rem;
    line-height: 0.6rem;
    text-align: center;
    background: white;
    color: orangered;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
  }

  }
</style>
