<template>
  <div class="notifynotify">
    <span @click="()=>{this.$toast.onShow('onShow',3000)}">btn</span>
    <span @click="()=>{this.$toast.onHide('onHide',1000)}">btn</span>
  </div>
</template>
<script>
export default {
  name: "notify",
  components: {},
  data() {
    return {}
  },
  methods: {
    open() {
      
    },
  },
  mounted() {
  }
};
</script>
