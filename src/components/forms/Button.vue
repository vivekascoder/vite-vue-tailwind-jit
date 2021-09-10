<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text: { type: String, required: true }
});
</script>

<template>
  <div>
    <button
      class="px-6 py-2 text-sm font-semibold uppercase rounded-sm text-white transition bg-gradient-to-r from-purple-500 to-blue-500"
    >{{ props.text }}</button>
  </div>
</template>