https://vuejs.org/guide/essentials/forms.html#select
https://vuejs.org/guide/essentials/forms.html#select-options
https://vuejs.org/guide/essentials/forms.html#select-options

<template>
  <div>
    <h2>Select</h2>

    <h4>Selected: {{ selected }}</h4>
    <select v-model="selected">
      <option value="" disabled selected>Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <br />
    <br />

    <h4>Multiple selected: {{ mulSelected }}</h4>
    <select v-model="mulSelected" multiple>
      <option value="" disabled selected>Please select multiple</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <br />
    <br />

    <h4>Dynamic options</h4>
    <div>Selected: {{ selected2 }}</div>
    <select v-model="selected2">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>

    <br />
    <br />

    <h4>Select options</h4>
    <div>Selected: {{ selected3 }}</div>
    <select v-model="selected3">
      <!-- inline object literal -->
      <option :value="{ number: 1 }">1</option>
      <option :value="{ number: 2 }">2</option>
    </select>

    <br />
    <br />

    <h4>Select</h4>
    <!-- `selected` is a string "abc" when the first option is selected -->
    <div>{{ selected4 }}</div>
    <select v-model="selected4">
      <option value="a">A</option>
      <option value="b">B</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      selected2: [],
      selected3: null,
      selected4: null,
      mulSelected: [],

      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
  watch: {
    selected(newVal, oldVal) {
      console.log("---");
      console.log(newVal);
      console.log(oldVal);
      console.log("---");
    },
  },
};
</script>
