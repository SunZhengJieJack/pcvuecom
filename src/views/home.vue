<template>
  <div class="home">
    <el-row :gutter="24" class="min-hgt">
      <el-col :span="4">
        <is-menu></is-menu>
      </el-col>
      <el-col :span="18" class="min-hgt">
        <el-card class="box-card">
        <router-view></router-view>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import isMenu from './component/menu'
export default {
  name: 'home',
  components: {
    isMenu
  }
}
</script>



<style lang="less" scoped>
.min-hgt{
  min-height: 300px;
}
</style>