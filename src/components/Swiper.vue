<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(src,index) in data"
                    :key="index"
                    class="slide"
      >
        <img :src="src" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    props:{
      data:{}
    },
    data() {
      return {
        swiperOption: {
          autoplay: 2000,
          direction: 'horizontal',
          setWrapperSize: true,
          observeParents: true,
          pagination: '.swiper-pagination',
        }
      }
    },
    created() {
    },
    methods: {},
    computed: {},
    mounted() {
    },
    components: {},
  }
</script>
<style>
  .slide{
    width: 100%;
    height: 2.7rem;
  }
  .slide img{
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet-active{
    opacity:1;
    background: orangered;
  }
</style>
