import * as type from './mutation-type'
import Vue from 'vue'
export default {
  [type.SAVE_SELLER] (state, seller) {
    state.seller = seller
  },
  [type.ADD_SHOPCART] (state, {sellerId, goods}) {
    // 拿商家id去购物车里查看，之前是否已经有商品了
    let products = state.shopcart[sellerId]
    if (products) {
      let sign = false
      // 如果商品已经在购物车里了
      for (let i in products) {
        if (products[i].title === goods.title) {
          // 如果这一次点的之前已经点过了 ，则直接在数量上+1
          products[i].count++
          sign = true
          break
        }
      }
      // 如果点的是之前没点过的，则添加上去，count为1
      if (!sign) {
        products.push(goods)
      }
    } else {
    // 这个商家之前没在购物车里，就用这个菜作为该商家数组里的第一件商品
      Vue.set(state.shopcart, sellerId, [goods])
    }
    sessionStorage.getItem('shopcart', JSON.stringify(state.shopcart))
  },
  [type.DEL_SHOPCART] (state, {sellerId, goods}) {
    // 取出这个商家的所有商品
    let products = state.shopcart[sellerId]
    for (let i in products) {
      if (products[i].title === goods.title) {
        products[i].count--
        if (products[i].count === 0) {
          products.splice(parseInt(i), 1)
        }
        break
      }
    }
    sessionStorage.setItem('shopcart', JSON.stringify(state.shopcart))
  },
  addadress (state, obj) {
    state.address.push(obj)
  }
}
