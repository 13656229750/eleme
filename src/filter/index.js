import Vue from 'vue'
Vue.filter('money', (money) => {
  return '￥' + parseFloat(money).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, '$1,')
})
Vue.filter('savePhone', (phone) => {
  phone += ''
  return phone.substring(0, 4) + '****' + phone.substring(8)
})
