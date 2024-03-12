<template>
  <div class="person">
    <h1>China</h1>
    <h2 ref="title2">Shan Dong</h2>
    <h3>SDU QD Campus</h3>
    <button @click="showLog">点击输出h2元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref, defineExpose} from 'vue'

  // 创建一个title2，用于存储ref标记内容
  let title2 = ref()

  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  function showLog(){
    // console.log(document.getElementById('title2'))
    console.log(title2.value)
  }

  defineExpose({a, b})
</script>

<style scoped>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 5px;
  }
</style>