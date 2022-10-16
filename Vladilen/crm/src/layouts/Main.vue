<script>
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";

import { useStoreInfo } from "@/stores/info";

export default {
  name: "main-layout",
  data() {
    return {
      sidenavIsOpen: true,
      info: useStoreInfo(),
    };
  },
  components: {
    NavBar,
    SideNav,
  },
  async mounted() {
    // console.log(Object.keys(this.info.$state.info).length)
    if (!Object.keys(this.info.$state.info).length) {
      let fetchInfo = await this.info.fetchInfo()
      console.log('fetchInfo')
      console.log(fetchInfo)
    }
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
