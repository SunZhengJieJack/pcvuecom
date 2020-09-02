<template>
  <div>
    <is-child :arr="demo">
      无名插槽
      <slot name="demo">
        替换子组件demo
      </slot>
      <slot name="btn">
          <span>btn-slot</span>
      </slot>
    </is-child>
  </div>
</template>
<script>
import isChild from './child'
export default {
  name: "slot-demo",
  components:{isChild},
  data() {
    return {
      demo: ['海绵宝宝','派大星','蟹老板'],
    };
  },
  mounted() {},
};
</script>


