<template>
  <div class="seller">
        <Top :seller='seller'></Top>
        <GoodsList :products="products" :shopcartData="shopcartData"></GoodsList>
        <Shop-cart :shopcartData="shopcartData" @sub='sub' @plus='plus'></Shop-cart>
  </div>
</template>
<script>
import Top from './top/top'
import ShopCart from './shopCart/shopCart'
import GoodsList from './goodsList/GoodsList'
import {GOODS} from '@/api'
import * as type from '@/store/mutation-type'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      showCart: true,
      products: [],
      shopcartData: []
    }
  },
  created () {
    // 查询当前商家所售的所有商品，放在products中
    this.$http({
      url: GOODS
    }).then((v) => {
      // console.log(v)
      let arr = v.data.filter(v => {
        return this.seller.id === v.sellerId
      })
      this.products = arr[0]
    })
    // 根据当前商家id，从购物车去除商家的商品
    this.getShopCart(this.shopcart)
  },
  computed: {
    seller () {
      document.title = this.$store.getters.seller.name
      return this.$store.getters.seller
    },
    ...mapGetters(['shopcart'])
  },
  components: {
    Top,
    ShopCart,
    GoodsList
  },
  beforeRouteEnter (to, from, next) {
    document.title = '德克士'
    next()
  },
  methods: {
    getGoods () {},
    getShopCart (shopcart) {
    // shopcart里面是所有商家信息，需要过滤
      this.shopcartData = shopcart[this.seller.id] || []
    },
    sub (product) {
      this.$store.commit(type.DEL_SHOPCART, {sellerId:this.seller.id, goods: product})
    },
    plus (product) {
      this.$store.commit(type.ADD_SHOPCART, {sellerId:this.seller.id, goods: product})
    }
  }
}
</script>
<style lang="stylus" scoped>
.seller {
  position:absolute;
  overflow: hidden;
  z-index: 99;
  height: 100%;
  width:100%;
  background-color: #fff;
  top:0;
  left:0;
}
</style>
