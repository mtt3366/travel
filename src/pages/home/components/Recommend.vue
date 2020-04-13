<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item" v-for="item in hotList" :key="item.id" >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      hotList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
          title: '牛首山文化旅游区(AAAA景区)',
          desc: '这是个很值的景点！这是一个低调奢华的景点！没进园区就有一个超壮观的音乐喷泉！这个景点每一处都很精致！我对它的印象是既大气又精致！'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
          title: '牛首山文化旅游区(AAAA景区)',
          desc: '这是个很值的景点！这是一个低调奢华的景点！没进园区就有一个超壮观的音乐喷泉！这个景点每一处都很精致！我对它的印象是既大气又精致！'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
          title: '牛首山文化旅游区(AAAA景区)',
          desc: '这是个很值的景点！这是一个低调奢华的景点！没进园区就有一个超壮观的音乐喷泉！这个景点每一处都很精致！我对它的印象是既大气又精致！'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  @import "~styles/mixins.less";
  .title{
    line-height: .8rem;
    background: #eee;
    margin-top: .2rem;
    text-indent: .2rem;
  }
  .item{
    border-bottom: 1px solid #cacaca;
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      min-width: 0;
      flex: 1;
      padding: .1rem;
      .item-title{
        line-height: .54rem;
        font-size: .32rem;
        .ellipsis();
      }
      .item-desc{
        line-height: .4rem;
        color: #ccc;
        .ellipsis();
      }
      .item-button{
        background: #ff9300;
        line-height: .44rem;
        color: #ffffff;
        padding: 0 .2rem;
        border-radius: .06rem;
        margin-top: .2rem;
      }
    }
  }
</style>
