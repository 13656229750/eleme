<template>
  <div class="loading">
    <img width="35" height="35" src="./icon.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus">
  .loading{
    width: 100%;
    text-align: center;
    .desc{
      line-height: 20px;
      font-size: 25px;
      color: #333;
    }
  }
</style>
