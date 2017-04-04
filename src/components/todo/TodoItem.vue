<template>
  <li class="TodoItem">
    {{ todoText }}
    <span @click="remove" @enter="remove">X</span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: { todoText: String, id: Number },
  methods: {
    remove() {
      this.$emit('remove', this.id);
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
