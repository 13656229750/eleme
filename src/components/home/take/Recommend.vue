<template>
  <div class="recommend">
    <header class="cl">
      <h3 class="fl">品质优选</h3>
      <a href="javascript:;" class="fr">更多</a>
    </header>
    <main>
      <section>
        <img src="/static/img/seller/xiyu.webp"/>
        <h4>叫个饭</h4>
        <p>大牌精选</p>
      </section>
      <section>
        <img src="/static/img/seller/dicos.png"/>
        <h4>德克士</h4>
        <p>大牌精选</p>
      </section>
      <section>
        <img src="/static/img/seller/lilaosi.jpeg"/>
        <h4>东东包</h4>
        <p>大牌精选</p>
      </section>
      <section>
        <img src="/static/img/seller/black.jpeg"/>
        <h4>大师兄</h4>
        <p>大牌精选</p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style lang="stylus" scoped>
header
  margin-top .133333rem /* 10/75 */
  margin-bottom .266667rem /* 20/75 */
  padding 0 .133333rem /* 10/75 */
  h3
    color #B38A55
main
  display flex
  justify-content center
  text-align center
  section
    flex 1
    h4
      margin-top .106667rem /* 8/75 */
      margin-bottom .2rem /* 15/75 */
    img
      width 50%
    p
      width 60%
      margin auto
      color #00ABFF
      border 1px solid #00ABFF
      font-size .293333rem /* 22/75 */
</style>
