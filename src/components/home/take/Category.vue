<template>
  <div class="category">
    <mt-swipe :auto="4000" class="swiper">
    <mt-swipe-item v-for='(cate,i) in list' :key="i">
    <a class="item" v-for="(c,index) in cate" :href="c.url" :key="index">
      <img :src="c.icon" alt="">
      <p>{{c.name}}</p>
    </a>
    </mt-swipe-item>
   </mt-swipe>
  </div>
</template>
<script>
import * as api from '@/api'
export default {
  data () {
    return {
      list: []
    }
  },
  name: 'Category',
  created () {
    this.$http({
      url: api.CATEGORIES
    }).then(res => {
      this.list = res.data
    })
  }
}
</script>
<style scoped lang='stylus'>
.category {
  height 23vh
  margin-top: 0.2415rem;
  .swiper {
    margin: 0 0.2657rem;
    height: 4.72rem;
    .item {
      float: left;
      width: 20%;
      text-align: center;
      img {
        width: 1.1916rem;
        height: 1.1916rem;
      }
      p {
        color: #666;
      }
    }
  }
}
</style>
