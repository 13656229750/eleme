<template>
    <div class="find">
     <div class="h">发现</div>
     <div class="center">
       <div class="left">
         <a href="#">
           <img src="/static/img/find/faxian-1.png" alt="">
         </a>
       </div>
       <div class="right">
         <div class="rt">
           <a href="#">
             <img src="/static/img/find/faxian-2.png" alt="">
           </a>
         </div>
         <div class="rb">
           <a href="#">
             <img src="/static/img/find/faxian-3.png" alt="">
           </a>
         </div>
       </div>
     </div>
     <div class="free">
       <div class="f1">
         <a href="#">
           <img src="/static/img/find/faxian-4.png" alt="">
         </a>
       </div>
       <div class="f2">
         <a href="#">
           <img src="/static/img/find/faxian-5.png" alt="">
         </a>
       </div>
     </div>
     <div class="img">
       <a href="#">
         <img src="/static/img/find/img1.png" alt="">
       </a>
     </div>
     <div class="hot">
       <h3>美食热推</h3>
       <p>你的口味、我都懂得</p>
       <div class="hotImg">
         <a href="#">
           <img src="/static/img/goods/csgzmp.webp" alt="">
           <div>
             <p>特价、麻辣特价、麻辣</p>
             <p class="shadow">￥ 23 <span>￥ 43</span></p>
           </div>
         </a>
         <a href="#">
           <img src="/static/img/categories/dapai.png" alt="">
          <div>
            <p>特价、麻辣特价、麻辣</p>
            <p class="shadow">￥ 23 <span>￥ 43</span></p>
            </div>
         </a>
         <a href="#">
           <img src="/static/img/goods/bbz.webp" alt="">
           <div>
             <p>特价、麻辣特价、麻辣特价、麻辣</p>
             <p class="shadow">￥ 23 <span>￥ 43</span></p>
             </div>
         </a>
       </div>
       <h4><a href="#">查看更多</a></h4>
     </div>
     <div class="hot">
       <h3>美食热推</h3>
       <p>你的口味、我都懂得</p>
       <div class="hotImg">
         <a href="#">
           <img src="/static/img/goods/cmj.webp" alt="">
           <div>
             <p>特价、麻辣特价、麻辣</p>
             <p class="shadow">￥ 23 <span>￥ 43</span></p>
           </div>
         </a>
         <a href="#">
           <img src="/static/img/goods/jcjd.webp" alt="">
          <div>
            <p>特价、麻辣特价、麻辣</p>
            <p class="shadow">￥ 23 <span>￥ 43</span></p>
            </div>
         </a>
         <a href="#">
           <img src="/static/img/goods/bbz.webp" alt="">
           <div>
             <p>特价、麻辣特价、麻辣特价、麻辣</p>
             <p class="shadow">￥ 23 <span>￥ 43</span></p>
             </div>
         </a>
       </div>
       <h4><a href="#">查看更多</a></h4>
     </div>
    </div>
</template>
<script>
export default {
  name: 'Find'
}
</script>
<style lang="stylus" scoped>
.h{
  width  100%
  height 1.333333rem /* 100/75 */
  background #00a6ff
  text-align center
  line-height 1.333333rem /* 100/75 */
  font-size .4rem /* 30/75 */
  color #fff
}
.center {
  width 100%
  height 28vh
  display flex
  justify-content space-around
  .left {
    width 50%
    height 100%
    border 0.5px solid #000
    box-sizing:border-box
    img {
      width 100%
      height 100%
    }
  }
  .right {
    clear both
    width 50%
    height 28vh
    .rt
    .rb {
      width 100%
      height 50%
      box-sizing  border-box
      border 0.5px solid #333
      img {
        width  100%
        height  100%
      }
     }
  }
}
.free{
  width 100%
  height 14vh
  display flex
  justify-content space-around
  border-bottom .333333rem /* 25/75 */ solid #ddd
  .f1
  .f2 {
    width 50%
    height  100%
    box-sizing  border-box
    border 1px solid #333
    border-top none
    img {
      width 100%
      height  100%
    }
  }
}
.img {
  width  100%
  height 20vh
  border-bottom .333333rem /* 25/75 */ solid #ddd
  img {
    width 100%
    height 100%
  }
}
.hot {
  width 100%
  text-align center
  h3 {
    padding-top .4rem /* 15/75 */
  }
  p {
    padding-top .2rem /* 15/75 */
    padding-left .2rem
  }
  .hotImg {
    width  100%
    display  flex
    justify-content  space-between
    a {
      display block
      width 100%
      height 4rem /* 300/75 */
      img {
        padding-top .2rem /* 15/75 */
        width 80%
        height  2.666667rem /* 200/75 */
      }
      div {
        p {
          width 3.133333rem /* 235/75 */
          overflow hidden
          text-overflow: ellipsis
          white-space:nowrap;
        }
      }
      .shadow {
        color red
        span {
          color  #000
          text-decoration line-through
        }
      }
    }
  }
  h4 {
    padding .266667rem /* 20/75 */  0
    border-bottom .333333rem /* 25/75 */ solid #ddd
    a {
      color #666
    }
  }
}
</style>
