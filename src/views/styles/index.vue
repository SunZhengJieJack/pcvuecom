<template>
  <div class="box" :style="styleVar">
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 54,
    },
    background: {
      type: String,
      default: '#2d2',
    },
  },
  computed: {
    styleVar() {
      return {
        '--szj-height': this.height + 'px',
        '--szj-background': this.background,
      }
    }
  },
}
</script>
<style scoped>
.box {
  height: var(--szj-height);
  background: var(--szj-background);
}
</style>