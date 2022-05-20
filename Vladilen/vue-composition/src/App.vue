<template>
  <div>

    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <form @submit.prevent="submit">
        <input type="email" name="email" id="email" v-model="form.email" />
        <input type="password" name="password" id="password" v-model="form.password" />
        <button type="submit">submit</button>
      </form>
    </div>
    
    {{form}}

  </div>
</template>



<script>
import { useForm } from "./use/form";

export default {
  setup() {
    const form = useForm({
      email: {
        value: "some@email.ru",
        validators: { required },
      },
      password: {
        value: "somepassword",
        validators: { required, minLength: minLength(8) },
      },
    });

    console.log(form.password);

    function submit() {}

    return { form, submit };
  },
};

const required = (value) => !!value; //дважды инверсия чтобы булево значение получить
const minLength = (length) => (value) => value.length >= length;
</script>



<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
