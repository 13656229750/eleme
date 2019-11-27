<template>
  <div class="box">
    <div id="shoplist-title" class="shoplist-title">推荐商家</div>
    <!-- 加载中 -->
    <!-- <div v-for="load in 10" :key="load"  v-show="!sellerList || sellerList.length==0" class="skeleton">
      <skeleton class="skeleton"></skeleton>
    </div> -->
    <div v-if='sellerList.length == 0'>
    <Loading></Loading>
    </div>
    <ul class="seller-list" v-infinite-scroll='loadMore' infinite-scroll-disabled='loading' infinite-scroll-distance='20'>
          <li class="list-item" v-for="(seller) in sellerList" :key="seller.id" @click="detail(seller)">
            <div class="logo">
              <img :src="'/'+seller.logo">
            </div>
            <div class="detail">
              <h3 class="name">{{seller.name}}</h3>
              <div class="rating">
                <Star :value="seller.rating"></Star>
                <!-- <span>{{seller.rating}}</span> -->
                <span>月售{{seller.orderNo}}单</span>
              </div>
              <div class="fee">
                <span>&yen;{{seller.sendFee}}起步</span>
                <span>配送费&yen;{{seller.deliveryFee}}</span>
                <span>&yen;{{seller.avgFee}}/人</span>
              </div>
              <div class="discount">
                <div class="count fr">{{seller.discount.length}}个活动▼</div>
                <ul class="activity">
                  <li v-for="(d,i) in seller.discount" :key="i">
                    <i class="icon-take icon-manjiujian" style="background:#F29867;color:white;"></i>&nbsp;{{d.content}}
                  </li>
                </ul>
              </div>
            </div>
          </li>
    </ul>
  </div>
</template>
<script>
import * as api from '@/api'
import Star from '@/base/Star'
import * as type from '@/store/mutation-type'
import Loading from '@/base/Loading'
export default {
  name: 'SellerList',
  data () {
    return {
      sellerList: []
    }
  },
  components: {
    Star, Loading
  },
  created () {
    setTimeout(() => {
      this.$http({
        url: api.SELLER
      }).then((res) => {
        this.sellerList = res.data
      })
    }, 2000)
  },
  methods: {
    detail (seller) {
      this.$store.commit(type.SAVE_SELLER, seller)
      this.$router.push({name: 'Seller'})
    },
    loadMore () {
      this.sellerList = this.sellerList.concat(this.sellerList)
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-badge__content
  font-size .266667rem /* 20/75 */
.box
  margin-top .133333rem /* 10/75 */
.seller-list {
  background-color: #fff;
  position: relative;
  min-height: 300px;
  .list-item {
    display: flex;
    padding: 0.4rem 0;
    font-size: 0.293333rem;
    border-bottom: 0.013333rem solid #eee;
    a{
      display: flex;
      color:#333;
    }
    .logo {
      flex: none;
      width: 1.733333rem;
      height: 1.733333rem;
      padding: 0 0.266667rem;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 0.053333rem;
        border: 0.133333vw solid rgba(0, 0, 0, 0.08);
      }
    }
    .detail {
      flex: 1;
      padding-left: 0.266667rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .h3 {
        font-size: 0.4rem;
      }
      div {
        color: #666;
      }
      .name{
        margin-bottom:15px;
      }
      .fee{
        margin:7px 0;
      }
      .count{
        cursor:default;
      }
      .activity{
        li{
          margin-top:10px;
        }
      }
    }
  }
}
.shoplist-title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.96rem;
  font-size: 0.4rem;
  color: #000;
  &::before,
  &::after {
    display: block;
    content: '';
    width: 0.53333rem;
    height: 0.026667rem;
    background-color: #999;
  }
  &::before {
    margin-right: 0.346667rem;
  }
  &::after {
    margin-left: 0.346667rem;
  }
}
</style>
