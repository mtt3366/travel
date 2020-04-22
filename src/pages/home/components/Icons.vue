<template>
  <div class="icons">
    <swiper  ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
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
  .icons{
    margin-top: .2rem;
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
