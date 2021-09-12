<script setup>
import Button from '../components/forms/Button.vue'
import { useCounterStore } from '../store'

const counter = useCounterStore()
</script>

<template>
  <div>
    <h1>This is a homepage.</h1>

    <div class="box-border h-auto w-auto p-4 border-4 items-center justify-center text-center">
      <div class="row-auto">
        {{ counter.count }}
      </div>
      <div class="row-auto pb-1">
        <Button text="Counter +1" @click="counter.count++"></Button>
      </div>
      <Button text="Counter increment" @click="counter.increment()"></Button>
    </div>
  </div>
</template>
