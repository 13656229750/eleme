<template>
<div class="coupon">
<mt-header  title="优惠券">
<router-link to="/mine" slot="left">
<span class="el-icon-arrow-left">红包</span>
</router-link>
<mt-button class="right" slot="right">兑换红包</mt-button>
</mt-header>
<section v-for="(v,i) in user.coupon" :key="i">
<div class="tan">
<h4>￥{{v.piece}}</h4>
<div class="discount">
<div>
<h3>品质联盟专享红包</h3>
<ul>
<li>限2019-11-11至2019-12-12使用</li>
<li>{{v.name}}</li>
<li>{{v.use}}</li>
</ul>
</div>
<div class="use">去使用</div>
</div>
</div>
</section>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'You',
  computed: mapGetters([
    'user'
  ])
}
</script>
<style lang="stylus" scoped>
.mint-header
  height 1.333333rem /* 100/75 */
  font-size  .533333rem /* 40/75 */
section {
width: 95%;
height: 12vh;
padding: 0.4rem /* 30/75 */ 18px;
.tan {
display flex
justify-content flex-start
border 1px solid #ddd
height 100%
h4 {
font-size: .533333rem /* 40/75 */
line-height: 2rem /* 150/75 */
color: red
padding-right .293333rem /* 22/75 */
padding-left .266667rem /* 20/75 */
width 1.266667rem /* 95/75 */
}
.discount {
display: flex;
justify-content: flex-start;
padding-top .4rem /* 30/75 */
.use {
width 1.6rem /* 120/75 */
height .4rem /* 30/75 */
border-radius .266667rem /* 20/75 */
background-color red
text-align center
line-height .4rem /* 30/75 */
color #fff
margin-top .373333rem /* 28/75 */
margin-left .373333rem /* 28/75 */
}
}
}
}
</style>
