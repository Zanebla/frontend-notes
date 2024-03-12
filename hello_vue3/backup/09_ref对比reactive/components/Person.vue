<template>
  <div class="person">
    <h2>A {{car.brand}} costs {{ car.price }}w</h2>
    <button @click="changePrice">Change the price of the car</button>
    <button @click="changeBrand">Change the brand of the car</button>
    <button @click="changeCar">Change the car</button>
    <h2>当前SUM的值为:{{ sum }}</h2>
    <button @click="changeSum">Click me to add 1 to SUM</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref, reactive} from 'vue'
  let car = reactive({brand:'Benz', price:100})
  let sum = ref(0)
  function changeBrand(){
    car.brand = 'BMW'
  }
  function changePrice(){
    car.price += 10
  }
  function changeCar(){
    // car = {brand:'Audi', price: 200}
    Object.assign(car, {brand:'Audi', price: 200})
  }
  function changeSum(){
    sum.value += 1
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