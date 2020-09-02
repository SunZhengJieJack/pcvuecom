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
    </div>
</template>
<script lang="ts">
export default {
    name:'slot-child',
    props:['arr'],
    data(){
        return{

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