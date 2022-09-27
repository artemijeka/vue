<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{
              '--invalid':
                $vuelidate.title.$dirty && !$vuelidate.title.required,
            }"
          />
          <label for="name">Название</label>
          <span
            class="helper-text invalid"
            v-if="$vuelidate.title.$dirty && !$vuelidate.title.required"
            >Введите название категории</span
          >
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model="limit"
            :class="{
              '--invalid':
                $vuelidate.limit.$dirty && !$vuelidate.limit.minValue,
            }"
          />
          <label for="limit">Лимит</label>
          <span
            class="helper-text invalid"
            v-if="$vuelidate.limit.$dirty && !$vuelidate.limit.minValue"
            >Минимальная величина</span
          >
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minValue } from "@vuelidate/validators";
export default {
  name: "CategoryCreate",
  data: () => ({
    title: "",
    limit: 1,
    $vuelidate: useVuelidate(),
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(1) },
  },
  mounted() {
    // M.updateTextFields()
  },
  methods: {
    submitHandler() {
      if (this.$vuelidate.$invalid) {
        this.$vuelidate.$touch();
        return;
      }
    },
  },
};
</script>
