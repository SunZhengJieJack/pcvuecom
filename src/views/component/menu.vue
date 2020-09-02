<template>
  <div class="menu">
    <el-card class="box-card">
      <ul>
        <li v-for="(item,index) in config" :key="index" @click="goto(item)">{{item.name}}</li>
      </ul>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "ismenu",
  data() {
    return {
      config: [
        {
          name: "table",
          link: "table",
        },
         {
          name: "对话框",
          link: "model",
        },
         {
          name: "Demo",
          link: "demo",
        },
        {
          name: "自定义v-models",
          link: "vmedol",
        },
         {
          name: "插槽demo",
          link: "slot-demo",
        },
         {
          name: "jsdemo",
          link: "js-demo",
        },
         {
          name: "watch-demo",
          link: "watch-demo",
        },
         {
          name: "vuex-demo",
          link: "vuex-demo",
        },
      ],
    };
  },
  methods:{
    goto(row){
      if(row.link==this.$route.name) return
      this.$router.push({
        name:row.link
      })
    }
  }
};
</script>
<style lang="less" scoped>
ul{
    list-style: none;
    cursor: pointer;
}
</style>
