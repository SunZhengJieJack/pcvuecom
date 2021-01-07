<template>
  <div>
    promisedemo
  </div>
</template>
<script>
    function ajax1(data,time){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('111')
        },1000)
      }) 
    }
    function ajax2(data,time){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('222')
        },500)
      }) 
    }
    function ajax3(data,time){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('333')
        },1000)
      }) 
    }
    function ajax4(data,time){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          reject('444')
        },3000)
      }) 
    }
export default {
  name: 'promisedemo',
  data() {
    return {
    }
  },
  mounted() {
    function foo(){
       Promise.all([ajax1(), ajax2(),ajax3(),ajax4()]).then((result) => {
        console.log(result)               //['成功了', 'success']
      }).catch((error) => {
        console.log('失败',error)
      })
    }foo()

    // delay(100).then(function STEP2(){
    //   console.log('step2')
    //   return delay(200)
    // })
    // .then(function STEP3(){
    //   console.log('step3')
    // })
    // .then(function STEP4(){
    //   throw '失败了'
    //   console.log('step4')
    //   return delay(50) 
    // })
    // .then(function STEP5(){
    //   console.log('step5')
    // }).catch(e=>{
    //   console.log(e)
    // })
  },
  methods: {}
}
</script>
