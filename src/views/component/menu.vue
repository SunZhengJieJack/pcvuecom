<template>
  <div class="menu">
    <el-card class="box-card">
      <ul>
        <li v-for="(item,index) in routes[0].children" :key="index" @click="goto(item)">{{item.meta.title}}</li>
      </ul>
    </el-card>
  </div>
</template>
<script>
import { routes } from '@/router/router.confg.js'
export default {
  name: "ismenu",
  data() {
    return {
      routes
    };
  },
  methods:{
    goto(row){
      this.$router.push({
        name: row.name
      })
    }
  }
};
</script>
<style lang="less" scoped>
ul{
    list-style: none;
    cursor: pointer;
    li{
      padding: 15px 0;
    }
}
</style>
