<template>
  <div class="person">
    <h2>A {{car.brand}} costs {{ car.price }}w</h2>
    <button @click="changePrice">Change the price of the car</button>
    <br>
    <h2>Game List</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">Change the first game's name</button>
    <hr>
    <h2>TEST:{{ obj.a.b.c }}</h2>
    <button @click="changeC">Change the test</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {reactive} from 'vue'
  let car = reactive({brand:'Benz', price:100})
  let games = reactive([
    {id:'fjaldsfjsldfkj01', name:'Overwatch'},
    {id:'fjaldsfjsldfkj02', name:'LOL'},
    {id:'fjaldsfjsldfkj03', name:'Apex'},
  ])
  let obj = reactive({
    a:{
      b:{
        c: 666
      }
    }
  })
  function changePrice(){
    car.price += 10
  }
  function changeFirstGame(){
    games[0].name = "CSGO"
  }
  function changeC(){
    obj.a.b.c = 777
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