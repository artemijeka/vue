<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SfcExample from "./components/SfcExample.vue";
import OptionsApi from "./components/OptionsApi.vue";
// import CompositionApi from "./components/CompositionApi.vue";
import DirectiveCustom from "./components/DirectiveCustom.vue";
import ClickEvent from "./components/ClickEvent.vue";
import ScssAndScoped from "./components/ScssAndScoped.vue";
import Select from "./components/Select.vue";
import RadioAndCheckbox from "./components/RadioAndCheckbox.vue";
import CheckboxCustomValue from "./components/CheckboxCustomValue.vue";
import FormModifiers from "./components/FormModifiers.vue";

export default {
  components: {
    // HelloWorld,
    SfcExample,
    OptionsApi,
    // CompositionApi,
    DirectiveCustom,
    ClickEvent,
    ScssAndScoped,
    Select,
    RadioAndCheckbox,
    CheckboxCustomValue,
    FormModifiers,
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
    <DirectiveCustom />
    <hr />
    <ClickEvent />
    <hr />
    <ScssAndScoped />
    <hr />
    <Select />
    <hr />
    <RadioAndCheckbox />
    <hr />
    <CheckboxCustomValue />
    <hr />
    <FormModifiers />
    <hr />
  </section>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-logo {
  width: 50px;
}
h4 {
  margin-bottom: 5px;
}
</style>

<style scoped></style>
