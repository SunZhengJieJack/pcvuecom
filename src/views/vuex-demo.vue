<template>
  <div class="home">
      {{this.$store.state.demo}}  </br>
    <span @click="()=>{
        this.$store.commit('setDemo','替换')
        }">更改Store</span>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="less" scoped>
</style>