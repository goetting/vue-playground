<template>
  <div class="TodoContainer">
    <h1>Todo Example</h1>
    <todo-form @submitTodo="addTodo" />
    <ul>
      <todo-item
        v-for="(item, i) in todo.items"
        :key="i"
        :id="i"
        :todo-text="item.todoText"
      />
    </ul>
  </div>
</template>

<script>
import ezFlux from '@/state/ezFlux';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const data = ezFlux.plugins.project({ todo: ['items'] });

export default {
  name: 'TodoContainer',
  data: () => data,
  methods: {
    addTodo(todoText) {
      ezFlux.actions.todo.add(todoText);
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
