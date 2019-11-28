<template>
<div class="newadress">
<mt-header id="" title="新增收货地址">
<router-link to="/adress" slot="left">
<mt-button >
<span class="mint-button-icon">
<i class="mintui mintui-back" id="back"></i></span>
</mt-button>
</router-link>
<mt-button slot="right" class="address"><router-link to='/adress' style="color:#fff;padding:.1rem .3rem; border-radius:15px">删除</router-link>
</mt-button>
</mt-header>

<div class="content">
<mt-field label="姓名" placeholder="请输入用户名" v-model="username"></mt-field>

<mt-field label="手机号码" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="所在地址" placeholder="所在地址" type="url" v-model="address"></mt-field>

<section style="float:left;font-size: .36rem;padding: 0 10px;width:94%;line-height: 1.3rem;height: 1.2rem;">
<p style="float:left">设置默认地址</p>
<mt-switch v-model="isDefault" style="float: right;margin-top:4%"></mt-switch>
</section>
<div class="clearfix"></div>
</div>

<button class="add-address" @click='save'>保存</button>
</div>
</template>
<script>
export default {
  name: 'Newadress',
  data () {
    return {
      username: '',
      phone: '',
      address: '',
      isDefault: false
    }
  },
  methods: {
    save () {
      if (this.username !== '' && this.phone !== '' && this.address !== '') {
        let value = ''
        if (this.isDefault) {
          value = '默认'
        }
        let obj = {name: this.username, phone: this.phone, address: this.address, default: value}
        this.$store.commit('addadress', obj)
        this.$router.push({name: 'Adress'})
      } else {
        alert('不能有空')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.address{font-size:.4rem}
.clearfix{clear:both}
.mint-header {
font-size: .48rem;
height: 1.5rem;
line-height: 1.5rem;
}
#back{font-size: .4rem;}
</style>
