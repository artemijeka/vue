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
    <h2>MyDirective -></h2>
    <h2 my-directive>MyDirective</h2>
    <hr />
  </div>
</template>
