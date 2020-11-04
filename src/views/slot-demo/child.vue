<template>
    <div>
        <slot></slot>
        <slot name="demo">
            子组件slot
        </slot>
        <div v-for="(item,index) in arr" :key="index">
                {{item}}
            <slot name="btn"></slot>
        </div>
        -------------------------------
        <slot name="demo2" :childslotval="[child,child2]"></slot>
    </div>
</template>
<script lang="ts">
export default {
    name:'slot-child',
    props:['arr'],
    data(){
        return{
          child:'slot-scopechildval',
          child2:'slot-scopechildval2',
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
}
</script>