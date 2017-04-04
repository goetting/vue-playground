import Vue from 'vue';
import Router from 'vue-router';
import Root from '@/components/Root';
import TodoContainer from '@/components/todo/TodoContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'TodoContainer',
      component: TodoContainer,
    },
    {
      path: '/',
      name: 'Root',
      component: Root,
    },
  ],
});
