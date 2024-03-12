<template>
  <div class="person">
    <h2>Name: {{ person.name }}</h2>
    <h2>Age: {{ person.age }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {reactive, toRefs, toRef} from 'vue'
  let person = reactive({
    name: "Zane",
    age: 18
  })

  let {name, age} = toRefs(person)

  let age0 = toRef(person, 'age')
  console.log(age0.value)
  
  function changeName(){
    name.value += '~'
  }

  function changeAge(){
    age.value += 1
  }
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