<template>
  <v-container>
    <h1 class="text-3xl font-bold text-center mb-6">Lista de Tareas</h1>
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
