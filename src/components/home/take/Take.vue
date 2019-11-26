<template>
    <div class="take">
    <Top></Top>
    <Category></Category>
    <Ad></Ad>
    <Recommend></Recommend>
    <Sellerlist></Sellerlist>
    </div>
</template>
<script>
import Top from '@/components/home/take/Top.vue'
import Category from '@/components/home/take/Category.vue'
import Ad from '@/components/home/take/Ad.vue'
import Recommend from '@/components/home/take/Recommend.vue'
import Sellerlist from '@/components/home/take/Sellerlist.vue'
export default {
  name: 'Take',
  components: {
    Top, Category, Ad, Recommend, Sellerlist
  }
}
</script>
<style scoped lang='stylus'>

</style>
