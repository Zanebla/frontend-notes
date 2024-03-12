<template>
  <div class="person">
    姓: <input type="text" v-model="firstName"> <br>
    名: <input type="text" v-model="lastName"> <br>
    全名: <span>{{ fullName }}</span> <br>
    <button @click="changeFullName">Change FullName</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref, computed} from 'vue'
  let firstName = ref('zane')
  let lastName = ref('zhao')
  // 下面定义的fullName是一个计算属性，并且只读
  // let fullName = computed(()=>{
  //   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value
  // })

  // 下面定义的fullName是一个计算属性，可读可写
  let fullName = computed({
    get(){
      return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value
    },
    set(val){
      const [str1, str2] = val.split(' ')
      firstName.value = str1
      lastName.value = str2
      console.log('set', val)
    }
  })

  function changeFullName() {
    fullName.value = 'zhang erhang'
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