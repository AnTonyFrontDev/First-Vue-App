<template>
  <v-container>
    <h1>Lista de Tareas</h1>
    <TaskList />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from '../components/TaskList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TaskList
  }
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
