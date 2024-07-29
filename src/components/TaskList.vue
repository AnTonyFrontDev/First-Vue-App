<template>
  <v-container class="max-w-xl mx-auto pt-12">
    <v-text-field
        v-model="newTask"
        label="Nueva Tarea"
        @keyup.enter="addTask"
        outlined
        class="mb-4"
    ></v-text-field>
    <v-btn @click="addTask" color="primary" class="mb-6">
      Añadir
    </v-btn>

    <v-list class="task-grid">
      <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @remove="removeTask"
      />
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TaskItem from './TaskItem.vue';

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskItem
  },
  setup() {
    const newTask = ref('');
    const tasks = ref<{ id: number, text: string }[]>([]);

    const addTask = () => {
      if (newTask.value.trim() === '') return;
      tasks.value.push({ id: Date.now(), text: newTask.value });
      newTask.value = '';
    };

    const removeTask = (id: number) => {
      tasks.value = tasks.value.filter(task => task.id !== id);
    };

    return {
      newTask,
      tasks,
      addTask,
      removeTask
    };
  }
});
</script>

<style scoped>
.task-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
</style>
