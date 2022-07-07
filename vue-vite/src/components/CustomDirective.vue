Своя дирректива наподобии v-for например

<script>
export default {
  data() {
    return {
      beforeMount: (el) => {
        el.textContent = el.textContent.toUpperCase();
      },
    };
  },
};
</script>

<template>
  <div>
    <h2 custom-directive>CustomDirective</h2>
  </div>
</template>
