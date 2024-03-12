<template>
  <div class="person">
    <h1>Situation2:监视【ref】定义的【对象类型】数据</h1>
    <h2>Name: {{ person.name }}</h2>
    <h2>Age: {{ person.age }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
    <button @click="changePerson">Change Person</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref, watch} from 'vue'
  let person = ref({
    name: 'Zane',
    age: 18
  })

  function changeName() {
    person.value.name += '~'
  }

  function changeAge(){
    person.value.age += 1
  }

  function changePerson(){
    // .value即是响应式
    person.value = {name: 'Zeh', age:60}
  }

  // 监视【ref】定义的【对象类型】数据, 监视的是对象的地址值，若想监视对象内部属性的变化，则需要手动开启深度监视
  watch(person, (newValue, oldValue) => {
    console.log('person changes', newValue, oldValue)
  }, {deep:true, immediate:true})
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