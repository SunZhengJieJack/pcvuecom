<template>
  <div class="model">
    <c-model :visible.sync="state" @ok="goto" @cancel="cancel">
      主体内容
    </c-model>
    <el-button type="primary" @click="state=!state">切换</el-button>
  </div>
</template>
<script>
import cModel from "@/components/c-model.vue";
export default {
  name: "model",
  components: {
    cModel,
  },
  data() {
    return {
      state: false,
    };
  },
  methods: {
    goto() {},
    cancel() {
      this.state = false;
    },
  },
  mounted() {},
};
</script>
