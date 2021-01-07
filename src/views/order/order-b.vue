<template>
    <div>BBBB</div>
</template>
<script>
export default {
  name: 'Order-b',
  data() {
    return {}
  },
  beforeCreate() {
    console.log('beforeCreate B')
  },
  created() {
    console.log('created B')
  },
  beforeMount() {
    console.log('beforeMount B')
  },
  mounted() {
    console.log('mounted B')
  },
  beforeUpdate() {
    console.log('beforeUpdate B')
  },
  updated() {
    console.log('updated B')
  },
  beforeDestroy() {
    console.log('beforeDestroy B')
  },
  destroyed() {
    console.log('destroyed B')
  }
}
</script>
