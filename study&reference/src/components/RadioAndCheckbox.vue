https://vuejs.org/guide/essentials/forms.html#value-bindings
https://vuejs.org/guide/essentials/forms.html#radio-1

<template>
  <div>
    <h2>Form Values Bindings</h2>

    <!-- `picked` is a string "a" when checked -->
    <div>{{ picked }}</div>
    <input type="radio" v-model="picked" value="a" />
    <input type="radio" v-model="picked" value="b" />

    <!-- `toggle` is either true or false -->
    <div>{{ toggle }}</div>
    <input type="checkbox" v-model="toggle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: null,
      toggle: null,
    };
  },
};
</script>
