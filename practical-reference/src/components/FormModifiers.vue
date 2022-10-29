https://vuejs.org/guide/essentials/forms.html#modifiers

<template>
  <div>
    <h2>Form Modifiers</h2>

    <h4>Lazy</h4>
    <!-- synced after "change" instead of "input" -->
    <div>{{ lazyMsg }}</div>
    <input v-model.lazy="lazyMsg" />

    <h4>Number (похоже не работает)</h4>
    <div>{{ age }}</div>
    <input v-model.number="age" />

    <h4>Trim</h4>
    <div>{{ trimMsg }}</div>
    <input v-model.trim="trimMsg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lazyMsg: "",
      age: 0,
      trimMsg: "",
    };
  },
};
</script>
