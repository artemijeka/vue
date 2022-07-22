https://vuejs.org/guide/essentials/forms.html#checkbox-1

<template>
  <div>
    <h2>Checkbox Custom Value</h2>
    <div>{{ toggle }}</div>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

    <div>{{ toggle2 }}</div>
    <input
      type="checkbox"
      v-model="toggle2"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: null,

      toggle2: null,
      dynamicTrueValue: "YES!",
      dynamicFalseValue: "NO!",
    };
  },
};
</script>
