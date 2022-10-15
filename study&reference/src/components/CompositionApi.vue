<script setup>
/* - setup - говорит об установке Composition API */
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div>
    <h2>Composition API simple example</h2>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>
