<template>
  <div class="cart">
    <div class="desc">
      <span class="amount">已满50元，</span>
      <span>结算减
        <span class="discount">34</span>元</span>
    </div>
    <transition @enter="enter" @afterEnter="afterEnter" @leave="leave" @beforeEnter="beforeEnter" @beforeLeave="beforeLeave" @afterLeave="afterLeave">
      <div class="slide" v-if="showList" ref="slide">
        <div class="title cl">
          <div class="text">已选商品</div>
          <div class="clear">
            <i class="icon-take icon-gouwuche"></i>
            <span>清空</span>

          </div>
        </div>
        <ul class="goods-list">
          <li class="item cl" v-for="(s,i) in shopcartData" :key="i">
            <div class="goods">
              <div class="name">{{s.title}}</div>
              <div class="content">{{s.tis}}</div>
            </div>
            <div class="control">
              <span class="price">&yen;{{s.price}}</span>
              <span class="shopping">
                <i class="icon-take icon-jian" @click="sub(s)"></i>
                <span class="count">{{s.count}}</span>
                <i class="icon-take icon-jia" @click="plus(s)"></i>
              </span>
            </div>
          </li>
          <li class="item cl">
            <div class="goods">
              <div class="name">餐盒</div>
            </div>
            <div class="control">
              <span class="price">&yen;{{box}}</span>
            </div>
          </li>
        </ul>
        <div class="prompt">
          <span class="text">商品如需分开打包，请使用多人订餐</span>
          <i class="icon-take icon-jiantou3"></i>
        </div>
      </div>
    </transition>
    <div class="footer" @click="showList = !showList">
      <div class="icon">
        <div class="outer">
          <div class="inner">
            <i class="icon-xiangzi"></i>
          </div>
        </div>
      </div>
      <div class="amount">
        <div class="totals">&yen;{{totalMoney}}</div>
        <div class="send-fee">另需配送费&yen;2.5元</div>
      </div>
      <div class="settle">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['shopcartData'],
  data () {
    return {
      showList: true,
      slideHeight: null,
      box: 5
    }
  },
  computed: {
    totalMoney () {
      let sun = 0
      this.shopcartData.forEach((v) => {
        sun += v.price*v.count
      })
      sun += this.box
      return sun
    }
  },
  methods: {
    sub (product) {
      this.$emit('sub', product)
    },
    plus (product) {
      this.$emit('plus', product)
    },
    beforeEnter (el) {
    },
    enter (el) {
      el.style.height = 0
    },
    afterEnter (el) {
      el.style.height = this.slideHeight + 'px'
      el.style.transition = 'all .5s'
    },
    beforeLeave () {
    },
    leave (el) {
      el.style.height = 0
    },
    afterLeave () {
    }
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
.cart {
  position: fixed;
  width: 100%;
  bottom: 0;
  .desc {
    padding: 0 0.3623rem;
    height: 0.6844rem;
    line-height: 0.6844rem;
    font-size: 0;
    text-align: center;
    background: #f8f3d1;
    box-sizing: border-box;
    border: 1px solid #f1e2a1;
    span {
      font-size: 0.2818rem;
    }
    .discount {
      color: #ff6000;
    }
  }
  .slide {
    overflow: hidden;
    .title {
      padding: 0.2415rem 0.3623rem;
      color: #666666;
      height: 0.4428rem;
      font-size: 0.3221rem;
      line-height: 0.4428rem;
      background: #eeeeee;
      .text {
        float: left;
        padding-left: 0.2415rem;
        font-weight: 700;
        border-left: 0.0966rem solid #2395ff;
      }
      .clear {
        float: right;
        .icon-take {
          font-size: 0.3221rem;
        }
      }
    }
    .goods-list {
      padding: 0 0.3623rem;
      background: #fff;
      .item {
        display: flex;
        padding: 0.4026rem 0;
        border-bottom: 1px solid #ccc;
        &:last-child {
          border: none;
        }
        .goods {
          flex: auto;
          overflow: hidden;
          .name {
            color: #666;
            font-size: 0.3382rem;
            font-weight: 400;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .content {
            margin-top: 0.1932rem;
            color: #999;
            font-size: 0.2415rem;
            font-weight: 200;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .control {
          flex: none;
          transform: translateY(10%);
          margin-left: 0.4831rem;
          line-height: 0.5636rem;
          .price {
            padding: 0 0.2415rem;
            float: left;
            color: #ff5339;
            font-size: 0.3382rem;
            font-weight: bolder;
          }
          .shopping {
            float: right;
            font-size: 0;
            .count {
              display: inline-block;
              padding: 0 0.161rem;
              font-size: 0.3623rem;
              vertical-align: middle;
            }
            .icon-take {
              display: inline-block;
              color: #2395ff;
              font-size: 0.5636rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .prompt {
      padding: 0 0.3623rem;
      height: 0.6844rem;
      font-size: 0;
      text-align: center;
      line-height: 0.6844rem;
      background: #f8f8f8;
      .text {
        color: #666;
        font-size: 0.2818rem;
      }
      .icon-take {
        color: #ccc;
        font-size: 0.2818rem;
      }
    }
  }
  .footer {
    display: flex;
    width: 100%;
    height: 1.2077rem;
    background: rgba(0, 0, 0, 0.8);
    .icon {
      flex: none;
      width: 1.9968rem;
      background: #454547;
      .outer {
        margin: 0 auto;
        padding: 0.0966rem;
        width: 1.401rem;
        height: 1.401rem;
        background: #454547;
        border-radius: 50%;
        transform: translateY(-25%);
        box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.2);
        .inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: #333333;
          border-radius: 50%;
          .icon-xiangzi:after {
            content: ' ';
            display: block;
            position: absolute;
            margin: 50% 50%;
            transform: translate(-50%, -50%);
            width: 0.7246rem;
            height: 0.6441rem;
            background-image: url('/static/img/shopcart/box.png');
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
      }
    }
    .amount {
      flex: auto;
      color: #fff;
      font-size: 0;
      .totals {
        line-height: 0.75rem;
        font-size: 0.4026rem;
        font-weight: 700;
      }
      .send-fee {
        font-size: 0.2415rem;
      }
    }
    .settle {
      flex: none;
      width: 2.5362rem;
      line-height: 1.2077rem;
      color: #fff;
      font-size: 0.3865rem;
      font-weight: 700;
      text-align: center;
      background: #58d178;
    }
  }
}
</style>
