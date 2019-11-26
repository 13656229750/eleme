<template>
  <div class="top">
    <div class="wrap">
      <div class="background">
        <img :src="seller.logo">
      </div>
      <div class="container">
        <div class="nav cl">
          <div class="back" @click="back">
            <i class="icon-take icon-fanhui"></i>
          </div>
          <div class="menu">
            <i class="icon-take icon-pingou"></i>
            <i class="icon-take icon-gouwuche"></i>
            <i class="icon-take icon-gengduo"></i>
          </div>
        </div>
        <div class="name cl">
          <div class="logo">
            <img :src="seller.logo" alt="">
          </div>
          <div class="content">
            <div class="title">
              <span class="text">{{seller.name}}欢迎光临，用餐高峰期请提前下单，谢谢。</span>
              <i class="icon-take icon-jiantou3"></i>
            </div>
            <div class="notice">欢迎光临，用餐高峰期请提前下单，谢谢。欢迎光临，用餐高峰期请提前下单，谢谢。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="discount cl">
      <ul class="list">
        <li class="item" v-for="(dis,index) in seller.discount" :key="index">
          <i :class="['icon-take','icon-'+dis.icon]" style="font-size:20px;"></i><span>{{dis.content}}</span>
        </li>
      </ul>
      <div class="drop">
        <span>{{seller.discount.length}}个活动</span>
        <i class="icon-take icon-jiantou"></i>
      </div>
    </div>
    <div class="tab">
      <router-link :to="'/seller/1/goodsList'" class="link" replace>商品</router-link>
      <router-link :to="'/seller/1/rating'" class="link" replace>评价{{seller.rating}}分</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: ['seller'],
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.top {
  width: 100%;
  .wrap {
    position: relative;
    color: #fff;
    width: 100%;
    .background {
      position: absolute;
      overflow: hidden;
      z-index: -1;
      width: 100%;
      height: 100%;
      img {
        filter: blur(100px) brightness(30%);
        width: 100%;
        height: 100%;
      }
    }
    .container {
      padding: 0.8857rem 0.4026rem 0 0.4026rem;
      width: 100%;
      box-sizing: border-box;
      .nav {
        font-size: 0;
        i {
          font-size: 0.5233rem;
        }
        .back {
          float: left;
        }
        .menu {
          float: right;
          i {
            margin-left: 0.7246rem;
          }
        }
      }
      .name {
        width: 100%;
        display: flex;
        transform: translateY(0.4831rem);
        .logo {
          flex: none;
          width: 2.037rem;
          height: 2.037rem;
          box-shadow: 0 0.0805rem 0.4026rem rgba(0, 0, 0, 0.3);
          img {
            width: 100%;
            height: 100%;
            border-radius: 5%;
          }
        }
        .content {
          flex: auto;
          margin-left: 0.2415rem;
          overflow: hidden;
          .title {
            width: 100%;
            display: flex;
            overflow: hidden;
            font-size: 0;
            font-weight: 700;
            .text {
              flex: auto;
              display: inline-block;
              font-size: 0.4428rem;
              line-height: 0.4428rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            i {
              flex: none;
              font-size: 0.4428rem;
            }
          }
          .notice {
            margin-top: 0.161rem;
            color: #e7e6e4;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .discount {
    margin-top: 0.7246rem;
    padding: 0 0.4026rem;
    .list {
      float: left;
      color: #666;
      .item {
        letter-spacing: 0.0242rem;
        margin-top: 0.3221rem;
        span {
          font-size: 0.3rem;
        }
        .icon:after {
          margin-right: 0.0805rem;
          padding: 0.08rem;
          color: #fff;
          text-align: center;
          font-style: normal;
          font-size: 0.3rem;
          line-height: 0.3rem;
          vertical-align: middle;
          border-radius: 0.05rem;
        }
        .icon-tj:after {
          content: '特';
          background: #f1884f;
        }
        .icon-jian:after {
          content: '减';
          background: #f07373;
        }
        .icon-xin:after {
          content: '新';
          background: #01aaff;
        }
        .icon-zeng:after {
          content: '赠';
          background: #ffe536;
        }
      }
    }
    .drop {
      margin-top: 0.3221rem;
      float: right;
      color: #666;
      font-size: 0.2415rem;
      i {
        font-size: 0.2415rem;
      }
    }
  }
  .tab {
    margin-top: 0.4831rem;
    padding: 0 0.4026rem;
    font-size: 0;
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    .link {
      display: inline-block;
      margin-right: 0.4831rem;
      padding-bottom: 0.2415rem;
      letter-spacing: 5px;
      color: #333;
      font-size: 0.4026rem;
      font-weight: 400;
    }
    .active {
      color: #2395ff;
      border-bottom: 5px solid #2395ff;
    }
  }
}
</style>
