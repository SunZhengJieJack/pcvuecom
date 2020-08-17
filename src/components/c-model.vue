<template>
  <div class="c-model">
    <el-dialog :title="title" :visible.sync="visibleDialog" :width="width">
      <slot></slot>
      <template #footer>
        <slot name="footer">
          <span>
            <el-button @click="$_cancel">取 消</el-button>
            <el-button type="primary" @click="$_ok">确 定</el-button>
          </span>
        </slot>
      </template>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "c-model",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '400px',
    },
  },
  computed: {
    // 通过计算属性，对.sync进行转换，外部也可以直接使用visible.sync
    visibleDialog: {
      get() {
        // console.log('get')
       return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    $_cancel() {
      this.$emit("cancel");
    },
    $_ok() {
      this.$emit("ok");
    },
  },
  mounted() {},
};
</script>
