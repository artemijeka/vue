<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SfcExample from "./components/SfcExample.vue";
import OptionsApi from "./components/OptionsApi.vue";
// import CompositionApi from "./components/CompositionApi.vue";
import CustomDirective from "./components/CustomDirective.vue";
import ClickEvent from "./components/ClickEvent.vue";
import ScssAndScoped from "./components/ScssAndScoped.vue";

export default {
  components: {
    // HelloWorld,
    SfcExample,
    OptionsApi,
    // CompositionApi,
    CustomDirective,
    ClickEvent,
    ScssAndScoped,
  },
};
</script>

<template>
  <section>
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <hr />
    <SfcExample />
    <hr />
    <OptionsApi />
    <hr />
    <!-- <CompositionApi /> -->
    <!-- <hr /> -->
    <CustomDirective />
    <hr />
    <ClickEvent />
    <hr />
    <ScssAndScoped />
    <hr />
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-logo {
  width: 50px;
}
</style>

<style scoped></style>
