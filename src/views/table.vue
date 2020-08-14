<template>
  <div class="table">
    <c-grid :data="config"></c-grid>
  </div>
</template>
<script>
import cGrid from "@/components/c-grid.vue";
export default {
  name: "istable",
  components: {
    cGrid,
  },
  data() {
    let self = this;
    let table = [
      {
        query: {},
        columns: [
          {
            name: "name",
            label:'名字'
          },
          {
            name: "age",
            label:'年纪'
          },
          {
            name: "gender",
            label:'性别'
          },
            {
            name: "aa",
            label:'操作',
            render: function (h, param) {
            let buttons = [];
            buttons.push(
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  style: {
                    margin: "0 5px",
                  },
                  on: {
                    click: function () {
                      self.$Modal.confirm({
                        title: "提示",
                        content: "<p>请确认是否删除该产品</p>",
                        onOk: () => {
                          self.gotoDelete(param.row);
                        },
                        onCancel: () => {},
                      });
                    },
                  },
                },
                "删除"
              )
            );
            return h("div", {}, buttons);
          },

          },
        ],
        onloadData(url,param,callback) {
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
        },
      },
    ];
    return {
      config: table,
    };
  },
  mounted() {},
};
</script>
