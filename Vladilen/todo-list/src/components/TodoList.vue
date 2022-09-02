<template>
  <div>
    <h1>Todo list</h1>
    <ul>
      <TodoItem 
        v-for="(todoItem, i) in todoList"
        v-bind:index="i"
        v-bind:todoItem="todoItem"
        v-bind:key="todoItem.id"
        v-on:remove-todo-item="removeTodoItem"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem"; //@ указывает на корневой каталог "src"
export default {
  props: ["todoList"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodoItem(todoItemId) {
      this.$emit('remove-todo-item', todoItemId);//$emit() метод который выводит событие в родительский компонент
    }
  }
};
</script>

<style scoped>
/* scoped говорит о том что эти стили будут только для этого компонента */
ul {
  list-style-type: none;
}
</style>
