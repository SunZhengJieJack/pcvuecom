<template>
  <div>js-demo</div>
</template>
<script>
//writable:如果为false，属性的值就不能被重写,只能为只读了
//configurable:总开关，一旦为false，就不能再设置他的（value，writable，configurable）
//enumerable:是否能在for...in循环中遍历出来或在Object.keys中列举出来。
// var a = {};
// Object.defineProperty(a, "b", {
//   value: 123,
//   writable: true,
// });
// console.log(a.b);
// a.b = 25;
// console.log(a.b);

export default {
  name: "js-demo",
  data() {
    return {
      demo: 1,
    };
  },
  mounted() {
    // function changeInfo(o) {
    //   o.name = "派大星";
    //   o = new Object();
    //   o.name = "海绵宝宝";
    // }
    // let info = {};
    // changeInfo(info);
    // console.log(info.name);

    // var friends = [
    //   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    //   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    //   {
    //     name: "Alice",
    //     books: ["The Lord of the Rings", "The Shining"],
    //     age: 18,
    //   },
    // ];

    // var allbooks = friends.reduce(function (prev, curr) {
    //     console.log(prev)
    //     return [...prev, ...curr.books];
    //   }, ["Alphabet"]);
    // console.log(allbooks,'allbooks')
    // var potatos = [
    //   { id: "1001", weight: 50 },
    //   { id: "1002", weight: 80 },
    //   { id: "1003", weight: 120 },
    //   { id: "1004", weight: 40 },
    //   { id: "1005", weight: 110 },
    //   { id: "1006", weight: 60 },
    // ];
    // var aa = potatos.reduce((sum, p) => {
    //   return p.weight + sum
    // }, 0);
    // console.log(aa);
    this.timer = setInterval(() => {
      console.log('有本事关闭我')
    }, 1000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(this.timer);
    });
  },
};
</script>


