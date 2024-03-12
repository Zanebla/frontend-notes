<template>
  <div class="person">
    <h2>Name: {{ person.name }}</h2>
    <h2>Age: {{ person.age }}</h2>
    <h2>Car1: {{ person.car.c1 }}</h2>
    <h2>Car2: {{ person.car.c2 }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="changeAge">Change Age</button>
    <button @click="changeC1">Change Car1</button>
    <button @click="changeC2">Change Car2</button>
    <button @click="changeCar">Change Cars</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {reactive, watch} from 'vue'

  let person = reactive({
    name: 'Zane',
    age: 18,
    car: {
      c1: 'Benz',
      c2: 'BMW'
    }
  })

  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = 'Audi'
  }
  function changeC2(){
    person.car.c2 = 'Ferrari'
  }
  function changeCar(){
    person.car = {c1: 'Yadi', c2: 'Aima'}
  }

  // 监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
  watch(()=> person.name, (newValue, oldValue)=>{
    console.log('person\'s name changes', newValue, oldValue)
  })

  watch(()=> person.age, (newValue, oldValue)=>{
    console.log('person\'s age changes', newValue, oldValue)
  })

  // 监视响应式对象中的某个属性，且该属性是对象类型的，写成函数式并手动开启深度监视
  watch(()=>person.car, (newValue, oldValue)=>{
    console.log('person\'s car changes', newValue, oldValue)
  }, {deep:true})
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