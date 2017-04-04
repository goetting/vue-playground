<template>
  <div class="TodoForm">
    <input v-model="todoText" />
    <button type="button" v-on:click="submitTodo">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: () => ({ todoText: '' }),
  methods: {
    submitTodo() {
      if (!this.todoText) return;
      this.$emit('submitTodo', this.todoText);
      this.todoText = '';
    },
  },
};
</script>

<style scoped>
input, button {
  display: block;
  margin: 5px auto;
  width: 200px;
  padding: 0;
  border: 1px solid #444;
  border-radius: 0;
  background-color: white;
  box-sizing: border-box;
}
</style>
