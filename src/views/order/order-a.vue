<template>
  <div>
      123
    <order-b></order-b>
  </div>
</template>
<script>
import orderB from './order-b'
export default {
  name: 'Order-a',
  components: {
      orderB
  },
  data() {
    return {}
  },
  beforeCreate() {
    console.log('beforeCreate A')
  },
  created() {
    console.log('created A')
  },
  beforeMount() {
    console.log('beforeMount A')
  },
  mounted() {
    console.log('mounted A')
  },
  beforeUpdate(){
    console.log('beforeUpdate A')
  },
  updated(){
    console.log('updated A')
  },
  beforeDestroy(){
    console.log('beforeDestroy A')
  },
  destroyed(){
    console.log('destroyed A')
  }
}
</script>
