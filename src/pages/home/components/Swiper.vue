<!--suppress ALL -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style scoped lang="less">
@import "~styles/varibles.less";
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  background: #ccc;
  /*  始终保持外部宽高比违3:10*/
}
.swiper-img {
  width: 100%;
}
</style>
