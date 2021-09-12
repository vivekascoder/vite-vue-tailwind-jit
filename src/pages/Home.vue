<template>
  <div>
    <h1>This is a homepage.</h1>
    <Counter class="mx-auto" />
  </div>
</template>

<script setup></script>
<script>
import Counter from '../components/Counter.vue'
export default {
  components: { Counter }
}
</script>
