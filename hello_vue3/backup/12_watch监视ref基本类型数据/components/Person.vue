<template>
  <div class="person">
    <h1>Situation1:监视【ref】定义的【基本类型】数据</h1>
    <h2>The value of sum is: {{ sum }}</h2>
    <button @click="changeSum">Add 1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref, watch} from 'vue'
  let sum = ref(0)
  function changeSum(){
    sum.value += 1
  }

  const stopWatch = watch(sum, (newValue, oldValue)=>{
    console.log('Sum Changes', newValue, oldValue)
    if(newValue >=10){
      stopWatch()
    }
  })
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