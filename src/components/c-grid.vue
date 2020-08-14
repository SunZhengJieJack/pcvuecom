<template>
  <div class="c-grid">
    <el-table :data="tableVal" v-for="(item,i) in data" :key="i">
      <el-table-column
        v-for="(itemColumn,j) in item.columns"
        :key="j"
        :prop="itemColumn.name"
        :label="itemColumn.label"
        :width="itemColumn.width"
      ></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
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
  data() {
    return {
      tableVal: [],
    };
  },
  mounted() {
    var arr = [
      {
        name: "小明",
        age: "20",
        gender: "0",
        state: false,
      },
      {
        name: "韩孝周",
        age: "23",
        gender: "1",
        state: false,
      },
      {
        name: "海绵宝宝",
        age: "11",
        gender: "0",
        state: true,
      },
    ];
    this.tableVal = arr;
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onloadData() {
      //    this.tableVal = arr;
    },
  },
};
</script>
<style scoped lang="less">
</style>
