<template>
  <div class="person">
    <h2>Name:{{name}}</h2>
    <h2>Age:{{age}}</h2>
    <h2>Address:{{ address }}</h2>
    <button @click="changeName">Change the name</button>
    <button @click="changeAge">Change the age</button>
    <button @click="showTel">Get the tel</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref} from 'vue'
  let name = ref('Zane')
  let age = ref(18)
  let tel = '15388888888'
  let address = 'SDU QD Campus'

  function changeName(){
      name.value='Zanebla Zhao'
    }
  function changeAge(){
      age.value += 1
    }
  function showTel(){
      alert(tel)
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