<template>
  <div class="table">
    <c-grid :data="config" :value="isval"></c-grid>
  </div>
</template>
<script>
import cGrid from "@/components/c-grid";
export default {
  name: "istable",
  components: {
    cGrid,
  },
  data() {
    let self = this;
    let table = {
      query: {},
      columns: [
        {
          name: "name",
          label: "名字",
          width:'100'
        },
        {
          name: "age",
          label: "年纪",
        },
        {
          name: "gender",
          label: "性别",
          formatter(row, column, cellValue) {
            return cellValue === 0 ? '男' : '女'
          }
        },
        {
          name: "aa",
          label: "操作",
          render: function (h, param) {
            let buttons = [];
            // buttons.push(
            //   h(
            //     "Button",
            //     {
            //       props: {
            //         type: "error",
            //         size: "small",
            //       },
            //       style: {
            //         margin: "0 5px",
            //       },
            //       on: {
            //         click: function () {},
            //       },
            //     },
            //     "删除"
            //   )
            // );
            return h("div", {}, buttons);
          },
        },
      ],
      onloadData(url, param, callback) {
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
        callback(arr, {
          total: 200,
        });
      },
    };
    return {
      config: table,
      isval: [
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
      ],
    };
  },
  mounted() {},
};
</script>
