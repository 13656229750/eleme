import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/take'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/home/Home'),
      children: [
        {
          path: '/take',
          name: 'Take',
          component: () => import('@/components/home/take/Take.vue'),
          meta: {
            title: '饿了么'
          }
        }, {
          path: '/find',
          name: 'Find',
          component: () => import('@/components/home/find/Find.vue'),
          meta: {
            title: '发现'
          }
        }, {
          path: '/order',
          name: 'Order',
          component: () => import('@/components/home/order/Order.vue'),
          meta: {
            title: '订单'
          }
        }, {
          path: '/mine',
          name: 'Mine',
          component: () => import('@/components/home/mine/Mine.vue'),
          meta: {
            title: '我的'
          }
        }
      ]
    }, {
      path: '/seller',
      name: 'Seller',
      component: () => import('@/components/seller/Seller')
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title = to.meta.title
  next()
})
export default router
