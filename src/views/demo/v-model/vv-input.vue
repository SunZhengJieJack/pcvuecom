<template>
  <div class="vmodel">
    <input type="text" :value="value" @input="$_inputChange">
    <b>结果：{{value}}</b>
  </div>
</template>
<script>
export default {
  name: "vmodel",
  props:['value'],
  data() {
    return {
      val:''
    };
  },
  methods:{
   $_inputChange(e){
     this.$emit('update:value',e.target.value)
   }
  }
};
</script>
<style lang="less" scoped>

</style>
