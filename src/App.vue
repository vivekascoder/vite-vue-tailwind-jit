<script setup>
import Navbar from './components/Navbar.vue';
const links = [
  {id: 1, name: 'Home', path: '/'},
  {id: 2, name: 'About Us', path: '/about'},
  {id: 3, name: 'Docs', path: '/docs'}
]
</script>

<template>
  <Navbar title="DemoApp" :links="links" />
  <div class="pt-20">
    <router-view />
  </div>
</template>

<style>
</style>
