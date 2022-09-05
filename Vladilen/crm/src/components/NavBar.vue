<script>
import { useAuthStore } from "@/stores/auth";

export default {
  data() {
    return {
      date: Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date()),
      time: "",
      instanceInreval: null,
      instanceDropdown: null,
      auth: useAuthStore(),
    };
  },
  emits: ["sidenav-toggle"],
  // inject: ["date"],
  mounted() {
    this.instanceDropdown = M.Dropdown.init(this.$refs.dropdown, {});

    this.instanceInreval = setInterval(() => {
      this.time = Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());
    }, 1000);
  },
  methods: {
    async logout() {
      console.log('this.auth.logout');
      console.log(this.auth.logout);
      await this.auth
        .logout()
        .then((logoutThen) => {
          // Log out
          console.log('logoutThen');
          console.log(logoutThen);
          this.$router.push("/login?message=logout");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode);
          console.error(errorMessage);
          throw error;
        });
    },
  },
  beforeUnmount() {
    console.log("NavBar.vue beforeUnmount");
    clearInterval(this.instanceInreval);
    console.log("clearInterval(this.instanceInreval)");

    if (this.instanceDropdown && this.instanceDropdown.destroy) {
      console.log("this.instanceDropdown && this.instanceDropdown.destroy)");
      this.instanceDropdown.destroy();
      console.log("this.instanceDropdown.destroy()");
    }
  },
};
</script>

<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent.stop="$emit('sidenav-toggle')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date + " " + time }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <RouterLink to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </RouterLink>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.dropdown-content {
  top: 100% !important;
}
</style>
