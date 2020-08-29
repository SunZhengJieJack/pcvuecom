<template>
  <div class="vmodel">
    <vv-input :value.sync="val" ></vv-input>
  </div>
</template>
<script>
import vvInput from './vv-input'
export default {
  name: "vmodel",
  components:{vvInput},
  data() {
    return {
        val:'123'
    };
  },
  methods:{
    
  }
};
</script>
<style lang="less" scoped>

</style>
