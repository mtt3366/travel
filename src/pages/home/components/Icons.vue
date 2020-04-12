<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="">
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  @import "~styles/varibles.less";
  /*先占位*/
  .icons{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
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
      }
    }
  }
</style>
