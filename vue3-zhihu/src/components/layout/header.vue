<script setup>
import Menu from './menu.vue'
import {useRouter} from 'vue-router'
const router = useRouter();
</script>

<template>
<div class="header">
  <div class="appheader">
    <Menu/>
    <div class="header-item"></div>
    <div class="header-userinfo"></div>
  </div>
</div>
</template>

<style scoped>

</style>