<template>
  <li>
    <span v-bind:class="{done: todoItem.completed}">
      <input
        v-on:change="todoItem.completed = !todoItem.completed"
        type="checkbox"
        name=""
        id="" />
      <strong>{{ index+1 }}</strong>
      <span>{{ todoItem.title }}</span>
      <!-- $emit метод который выводит событие в родительский компонент, событие названо произвольным именем -->
      <button
        v-on:click="$emit('remove-todo-item', todoItem.id)">&times;</button>
    </span>
  </li>
</template>



<script>
export default {
  props: {
    todoItem: {/* принимаем параметр от родительского компонента TodoList в объекте описываем проверки для приходящего параметра */
      type: Object, //todoItem должен быть получен в виде объекта
      required: true, //todoItem обязательно к получению
    },
    index: Number,//можно записывать проверку типа сразу как значение а не как объект выше с {type: Object}
  }
};
</script>



<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
