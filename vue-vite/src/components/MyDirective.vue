<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    el.textContent = el.textContent.toUpperCase();
  },
};
</script>

<template>
  <div>
    <h2>vMyDirective -></h2>
    <h2 v-my-directive>vMyDirective</h2>
    <hr />
  </div>
</template>
