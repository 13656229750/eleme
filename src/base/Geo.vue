<template>
  <span>{{location}}</span>
</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {
      location: '定位'
    }
  },
  created () {
    // 获取详细地址
    var geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition((r) => {
      var p = new BMap.Point(r.point.lng, r.point.lat)
      var myGeo = new BMap.Geocoder()
      myGeo.getLocation(p, (res) => {
        if (res) {
          this.location = res.address
        }
      })
    })
  }
}
</script>
<style scoped lang='stylus'>

</style>
