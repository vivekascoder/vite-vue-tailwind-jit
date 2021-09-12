<template>
  <div class="bg-gray-300 border-gray-700 drop-shadow-2xl p-4 m-4 rounded w-min text-center">
    <div class="pb-1">Counter: {{ counter.count }}</div>
    <Button class="pb-1" text="Counter++" @click="counter.count++"></Button>
    <Button class="pb-1" text="Counter.increment" @click="counter.increment()"></Button>
    <Button class="pb-1" text="Counter.decrement" @click="counter.decrement()"></Button>
    <Button class="pb-1" text="Counter.reset" @click="counter.reset()"></Button>
  </div>
</template>

<script setup>
import Button from '../components/forms/Button.vue'
import { useCounterStore } from '../store'

const counter = useCounterStore()
</script>

<style scoped></style>
