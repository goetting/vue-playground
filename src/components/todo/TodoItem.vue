<template>
  <li class="TodoItem">
    {{ todoText }}
    <span v-on:click="remove">X</span>
  </li>
</template>

<script>
import ezFlux from '@/state/ezFlux';

export default {
  name: 'TodoItem',
  props: { todoText: String, id: Number },
  methods: {
    remove() {
      ezFlux.actions.todo.remove(this.id);
    },
  },
};
</script>

<style scoped>
li {
  width: 180px;
}
span {
  float: right;
  color: #42b983;
  cursor: pointer;
}
</style>
