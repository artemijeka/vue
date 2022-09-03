<script>
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "main-layout",
  data() {
    return {
      sidenavIsOpen: true,
    };
  },
  components: {
    NavBar,
    SideNav,
  },
};
</script>

<template>
  <div>
    <div class="app-main-layout">
      <NavBar @sidenav-toggle="sidenavIsOpen = !sidenavIsOpen" />

      <SideNav :sidenavIsOpen="sidenavIsOpen" />

      <main class="app-content" :class="{ full: !sidenavIsOpen }">
        <div class="app-page">
          <RouterView />
        </div>
      </main>

      <div class="fixed-action-btn">
        <RouterLink class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </RouterLink>
        <!-- <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a> -->
      </div>
    </div>
  </div>
</template>