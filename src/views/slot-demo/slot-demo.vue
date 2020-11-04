<template>
  <div>
    <is-child :arr="demo">
      无名插槽
      <div slot="demo">替换子组件demo</div>
      <div slot="btn"><span>btn-slot</span></div>
      <div slot="demo2" slot-scope="slotProps">{{slotProps.childslotval[0]}}</div>
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
      arr: ['a','b','c'],
    };
  },
  mounted() {},
};
</script>


