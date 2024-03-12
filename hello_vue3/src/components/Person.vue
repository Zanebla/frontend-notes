<template>
  <div class="person">

  </div>
</template>

<script setup lang="ts" name="Person">
  import {type PersonInter} from '@/types'

  // let person:PersonInter = {id:'sdaljfasld01', name:'Zane', age:18}

  let personList:Array<PersonInter> = [
    {id:'sdaljfasld01', name:'Zane', age: 18},
    {id:'sdaljfasld02', name:'Zeh', age: 19},
    {id:'sdaljfasld03', name:'Tht', age: 20},
  ]

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