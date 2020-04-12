<template>
  <div class="icons">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgSrc" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
        // loop: true
      },
      iconList: [
        {
          id: '0001',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '0002',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '0003',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '0004',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '0005',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '0006',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '0007',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '0008',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '0009',
          imgSrc: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        }
      ]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  @import "~styles/varibles.less";
  @import "~styles/mixins.less";
  /*先占位*/
  .icons /deep/ .swiper-container{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
  }
  .icon{
    position: relative;
    overflow: hidden;
    height: 0;
    float: left;
    width:25%;
    padding-bottom: 25%;
    .icon-img{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: .44rem;
      box-sizing: border-box;
      padding: .1rem;
      .icon-img-content{
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc{
      position: absolute;
      bottom:0;
      left: 0;
      right: 0;
      height: .44rem;
      line-height: .44rem;
      color:@darkColor;
      text-align: center;
      .ellipsis()
    }
  }
</style>
