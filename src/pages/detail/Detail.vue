<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl";
  .wrapper
    height 50rem
</style>
