<template>
  <div class="notifynotify">
    <span @click="open">btn</span>
  </div>
</template>
<script>
export default {
  name: "notify",
  components: {},
  data() {
    return {};
  },
  methods: {
    open() {
      this.$toast('测试',3000)
    },
  },
  mounted() {
  },
};
</script>
