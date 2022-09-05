<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import { useAuthStore } from "@/stores/auth";

export default {
  name: "login-view",
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    email: "",
    password: "",
    auth: useAuthStore(),
  }),
  methods: {
    async login() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      } else {
        
        let formData = {
          email: this.email,
          password: this.password,
        };
        // console.log(formData);

        try {
          // console.log("this.auth");
          // console.log(this.auth);
          await this.auth.login(formData);
          this.$router.push("/");
        } catch (error) {
          console.error(error);
        }

      }
    },
  },
  validations() {
    return {
      email: { email, required, $autoDirty: true },
      password: { required, minLength: minLength(6), $autoDirty: true },
    };
  },
  mounted() {
    if (this.$messages[this.$route.query.message]) {
      this.$showMessage(this.$messages[this.$route.query.message], {
        classes: "rounded",
        inDuration: 1000,
        outDuration: 250,
        completeCallback: null,
        activationPercent: 0.9, //90%
      });
    }
  },
  computed: {
    emailInvalid() {
      return this.v$.email.email.$invalid && this.v$.email.$dirty;
    },
    emailValid() {
      return !this.v$.email.email.$invalid && this.v$.email.$dirty;
    },
    emailEmpty() {
      return this.v$.email.required.$invalid && this.v$.email.$dirty;
    },
    passShort() {
      return this.v$.password.minLength.$invalid;
    },
    passEmpty() {
      return this.v$.password.required.$invalid && this.v$.password.$dirty;
    },
  },
};
</script>

<template>
  <form class="card auth-card" @submit.prevent="login">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <!-- 
          Этот класс убрали чтобы валидацию не делал Materialize
          class="validate"
         -->
        <!-- 
          v-model:"v$.email.$model" - записан так чтобы срабатывал считыватель ввода в поле ($dirty)
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
            `Password короче ${this.v$.password.minLength.$params.min} символов!`
          }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <RouterLink to="/register">Зарегистрироваться</RouterLink>
      </p>
    </div>
  </form>
</template>
