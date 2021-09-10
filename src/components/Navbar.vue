<script setup>
import {defineProps} from 'vue'
import Button from './forms/Button.vue';

const props = defineProps({
  title: {type: String, required: true},
  links: {type: Array, required: true}
});
</script>

<template>
<div class="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
  <nav class="flex items-center container mx-auto h-full justify-between">
    <h1 class="font-semibold uppercase text-lg text-gray-200">
      {{title}}
    </h1>
    <div>
      <ul class="flex items-center space-x-10 text-sm">
        <li v-for="link in props.links" :key="link.id">
          <router-link :to="link.path" class="text-gray-400 hover:text-gray-100">
            {{link.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <Button text="Login"/>
    </div>
  </nav>
</div>
</template>