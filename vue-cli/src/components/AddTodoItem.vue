<template>
  <!-- в vue @ заменяет v-on: -->
  <!-- @submit.prevent - .prevent один из модификаторов vue, в данном случае этот модификатор делает e.preventDefault() для отправки формы  -->
  <form @submit.prevent="addTodoItem">
    <!-- v-model - это директива vue которая предназначена для простой связки input и textarea с переменной в data() -->
    <input
      v-model="title"
      type="text"
      name=""
      id="" />
    <button type="submit">+</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTodoItem() {
      if (this.title.trim()) {
        const newTodoItem = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        // $emit (испускать, излучать, излучить, источать, издавать, издать) - наше пользовательское событие и параметры
        this.$emit('add-todo-item', newTodoItem);
        this.title = '';
      }
    }
  }
};
</script>
