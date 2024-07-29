import {createRouter, createWebHistory} from 'vue-router';
import Home from "../Views/Home.vue";

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  }
];
createWebHistory()
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

