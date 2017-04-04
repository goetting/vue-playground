<template>
  <div class="TodoContainer">
    <h1>Todo Example</h1>
    <todo-form @submitTodo="addTodo" />
    <ul>
      <todo-item
        v-for="(item, i) in items"
        :key="i"
        :id="i"
        :todo-text="item.todoText"
        @remove="removeItem"
      />
    </ul>
  </div>
</template>

<script>
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default {
  name: 'TodoContainer',
  data: () => ({
    items: [
      { todoText: 'catch cat' },
      { todoText: 'clean cat' },
      { todoText: 'feed cat' },
      { todoText: 'eat cat' },
    ],
  }),
  methods: {
    addTodo(todoText) {
      this.items.push({ todoText });
    },
    removeItem(i) {
      this.items.splice(i, 1);
    },
  },
  components: {
    TodoForm,
    TodoItem,
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
}
ul {
  max-width: 200px;
  margin: 0 auto;
  text-align: left;
  padding-left: 40px;
}
</style>
