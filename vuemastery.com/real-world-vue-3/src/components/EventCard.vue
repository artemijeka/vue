<template>
  <router-link
    :to="{ name: 'EventDetails', params: { id: event.id } }"
    class="event-card__link"
  >
    <div class="event-card">
      <div>@ {{ event.time }} on {{ event.date }}</div>
      <h4 class="event-card__title">{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // event: {
      //   id: 5928101,
      //   category: "animal welfare",
      //   title: "Cat Adoption Day",
      //   description: "Find your new feline friend at this event.",
      //   location: "Meow Town",
      //   date: "January 28, 2022",
      //   time: "12:00",
      //   petsAllowed: true,
      //   organizer: "Kat Laydee",
      // },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #2c3e50;
  margin-bottom: 18px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  &__title {
    font-size: 20px;
  }
  &__link {
    text-decoration: none;
    color: #39495c;
  }
}
</style>
