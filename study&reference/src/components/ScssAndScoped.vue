<script>
export default {};
</script>

<template>
  <div>
    <h2>Scss And Scoped</h2>
    <div class="wrapper">
      <div class="circle --1"></div>
      <div class="circle --2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: pink;
  &.--2 {
    background-color: lime;
  }
}
</style>
