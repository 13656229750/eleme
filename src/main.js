import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import MintUI, { Header, Field } from 'mint-ui'

import './assets/css/index.css'
import './assets/css/normalize.css'
import '../static/css/index1.css'
import '@/filter'
Vue.config.productionTip = false
fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.component(Header.name, Header)
Vue.component(Field.name, Field)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
