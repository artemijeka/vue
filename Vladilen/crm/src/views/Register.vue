<template>
  <form class="card auth-card" @submit.prevent="register">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <div class="input-field">
        <!-- 
          Этот класс убрали чтобы валидацию не делал Materialize
          class="validate"
         -->
        <!-- 
          v-model:"$vuelidate.email.$model" - записан так чтобы срабатывал считыватель ввода в поле ($dirty)
          -->
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid: emailInvalid || emailEmpty,
            valid: emailValid && !emailEmpty,
          }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="emailEmpty">
          {{ "Email обязателен!" }}
        </small>
        <small class="helper-text invalid" v-else-if="emailInvalid">
          {{ "Email некорректен!" }}
        </small>
      </div>

      <div class="input-field">
        <!-- 
          Этот класс убрали чтобы валидацию не делал Materialize
          class="validate"
         -->
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid: passShort || passEmpty,
            valid: !passShort && !passEmpty,
          }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="passEmpty">
          {{ "Password обязателен!" }}
        </small>
        <small class="helper-text invalid" v-else-if="passShort">
          {{
            `Password короче ${this.$vuelidate.password.minLength.$params.min} символов!`
          }}
        </small>
      </div>

      <div class="input-field">
        <!-- 
          class="validate" - убрали валидация Materialize не нужна! -->
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: passShort || passEmpty,
            valid: !passShort && !passEmpty,
          }"
        />
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="nameEmpty">
          {{ "Имя обязательно!" }}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agreeRules" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <RouterLink to="/login">Войти!</RouterLink>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useStoreAuth } from "@/stores/auth";

export default {
  name: "register-view",
  setup() {
    return { $vuelidate: useVuelidate() };
  },
  data: () => ({
    email: "",
    password: "",
    name: "",
    agreeRules: false,
    auth: useStoreAuth(),
  }),
  methods: {
    async register() {
      if (this.$vuelidate.$invalid) {
        this.$vuelidate.$touch();
        return;
      } else {
        let formData = {
          email: this.email,
          password: this.password,
          name: this.name,
          bill: 10000,
          agreeRules: this.agreeRules,
        };
        console.log(formData);
        try {
          await this.auth.register(formData);
          this.$router.push("/");
        } catch (error) {
          console.error('error');
          console.error(error);
          throw error
        }
      }
    },
  },
  validations() {
    return {
      email: { email, required, $autoDirty: true },
      password: { required, minLength: minLength(6), $autoDirty: true },
      name: { required },
      agreeRules: { checked: (v) => v },
    };
  },
  computed: {
    emailInvalid() {
      return this.$vuelidate.email.email.$invalid && this.$vuelidate.email.$dirty;
    },
    emailValid() {
      return !this.$vuelidate.email.email.$invalid && this.$vuelidate.email.$dirty;
    },
    emailEmpty() {
      return this.$vuelidate.email.required.$invalid && this.$vuelidate.email.$dirty;
    },
    passShort() {
      return this.$vuelidate.password.minLength.$invalid;
    },
    passEmpty() {
      return this.$vuelidate.password.required.$invalid && this.$vuelidate.password.$dirty;
    },
    nameEmpty() {
      return this.$vuelidate.name.required.$invalid && this.$vuelidate.name.$dirty;
    },
  },
};
</script>
