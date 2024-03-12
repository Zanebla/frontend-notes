<template>
  <div class="person">
    <h1>Situation3:监视【reactive】定义的【对象类型】数据</h1>
    <h2>Name: {{ person.name }}</h2>
    <h2>Age: {{ person.age }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
    <button @click="changePerson">Change Person</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {reactive, watch} from 'vue'
  let person = reactive({
    name: 'Zane',
    age: 18
  })

  function changeName() {
    person.name += '~'
  }

  function changeAge(){
    person.age += 1
  }

  function changePerson(){
    // person = {name: 'Zeh', age:60}
    Object.assign(person, {name:'zeh', age:60})
  }

  // 监视【reactive】定义的【对象类型】数据，默认是开启深度监视的，且无法关闭
  watch(person, (newValue, oldValue) => {
    console.log('person changes', newValue, oldValue)
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