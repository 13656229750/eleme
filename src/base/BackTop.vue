<template>
  <div class="back" v-show='isShow' @click='go'>
      Up</div>
</template>
<script>
export default {
  name: 'BackTop',
  data () {
    return {
      isShow: false
    }
  },
  created () {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop
      const height = document.documentElement.clientHeight
      if (top >= height) {
        this.isShow = true
      } else if (top === 0) {
        this.isShow = false
      }
    })
  },
  methods: {
    go () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style scoped lang='stylus'>
.back
  width .933333rem /* 70/75 */
  height .933333rem /* 70/75 */
  line-height .933333rem /* 70/75 */
  position fixed
  right .266667rem /* 20/75 */
  bottom 2rem /* 150/75 */
  background #ffffff
  border 2px solid #cccccc
  text-align center
  z-index 10
</style>
