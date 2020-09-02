<template>
  <div>
    <span @click="()=>{
                   // list.push('3')
                    list[0]='0'
          }">btn</span>
  </div>
</template>
<script>
export default {
  name: "watch-demo",
  watch: {
    list: {
      handler: function (data) {
        console.log("执行");
      },
      deep: true,
      //immediate:true
    },
  },
  data() {
    return {
      list: ['默认1', '默认2'],
    };
  },
  mounted() {
    setTimeout(() => {
      console.log("3秒了");
      this.list[0] = '修改默认1'
    }, 3000);
  },
};
</script>


