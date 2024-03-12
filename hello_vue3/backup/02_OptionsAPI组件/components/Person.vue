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
  data(vm) {
      return {
        name: 'Zane',
        age: 18,
        tel: '15366668888'
      }
  },
  methods:{
    showTel(){
      alert(this.tel)
    },
    changeName(){
      this.name = "Zanebla"
    },
    changeAge(){
      this.age += 1
    }
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