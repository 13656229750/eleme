<template>
  <div class="ad">
  <mt-swipe :auto="0">
  <mt-swipe-item><img src="/static/img/ad/ad.png" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="/static/img/ad/ad2.gif" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="/static/img/ad/ad3.jpg" alt=""></mt-swipe-item>
</mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'Ad'
}
</script>
<style scoped lang='stylus'>
.ad {
  height 15vh
  img{
    height: 100%
    width: 100%
  }
}
</style>
