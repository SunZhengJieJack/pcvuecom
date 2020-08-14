<template>
  <div class="c-grid">
    <el-table :data="data" v-for="(item,i) in data" :key="i">
      <el-table-column
       v-for="(itemColumn,j) in item.columns"
        :key="j"
        :prop="itemColumn.name"
        :label="itemColumn.label"
        :width="itemColumn.width"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "c-grid",
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped lang="less">
</style>
