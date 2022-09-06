<template>
  <ul class="sidenav app-sidenav" :class="{open: sidenavIsOpen}">
    <li v-for="link in links" :key="link.url" :class="{ 'active': link.name === this.$route.name }">
      <!-- Тут он ещё добавил атрибут exact https://youtu.be/YtEIore1kVc?t=809 -->
      <RouterLink active-class="active" :to="link.url" class="waves-effect waves-orange pointer">
        {{ link.title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Счет", url: "/", name: "home" },
        { title: "История", url: "/history", name: "history" },
        { title: "Планирование", url: "/planning", name: "planning" },
        { title: "Новая запись", url: "/record", name: "record" },
        { title: "Категории", url: "/categories", name: "categories" },
      ],
    };
  },
  props: ['sidenavIsOpen'],
  mounted() {
    // console.log(this.$route.name)
  },
};
</script>