<script>
export default {
  data() {
    return {};
  },
  methods: {
    message(message, e) {
      // now we have access to the native event
      if (e) {
        e.preventDefault();
      }
      alert(message + " " + e.target.tagName);
    },
  },
};
</script>

<template>
  <div>
    <!-- using $event special variable -->
    <button @click="message('Событие click сработало!', $event)">Button</button>

    <!-- using inline arrow function -->
    <input
      @click="(event) => message('Событие click сработало!', event)"
      type="submit"
      value="Input"
    />
  </div>
</template>
