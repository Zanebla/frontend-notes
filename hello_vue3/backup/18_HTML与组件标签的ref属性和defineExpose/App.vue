<template>
    <h2 class="person" ref="title2">Hello</h2>
    <button @click="showLog">TEST</button>
    <Person ref="people"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue';
  import {ref} from 'vue'

  let title2 = ref()
  let people = ref()

  function showLog(){
    // console.log(title2.value)
    console.log(people.value)
  }
</script>