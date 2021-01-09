<template>
  <div class="notifynotify">
    <span @click="()=>{this.$toast.onShow('onShow',3000)}">show</span><br>
    <span @click="()=>{this.$toast.onHide('onHide',1000)}">hide</span><br>
    <span @click="()=>{this.$toast.onHide('init',1000)}">init</span>
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
