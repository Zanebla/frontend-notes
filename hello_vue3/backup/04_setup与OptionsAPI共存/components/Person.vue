<template>
  <div class="person">
    <h2>Name:{{name}}</h2>
    <h2>Age:{{age}}</h2>
    <button @click="changeName">Change the name</button>
    <button @click="changeAge">Change the age</button>
    <button @click="showTel">Get the tel</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  setup(){
    let name = 'Zane'
    let age = '18'
    let tel = '15388888888'

    function changeName(){
      name='Zanebla Zhao'
    }

    function changeAge(){
      age += 1
    }

    function showTel(){
      alert(tel)
    }

    return {name, age, changeName, changeAge, showTel}
    // setup的返回值也可以是一个渲染函数
    // return ()=>'haha'
  }
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