<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <div>
    <h2>SFC simple example</h2>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
