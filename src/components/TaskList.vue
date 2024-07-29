<template>
  <v-container>
    <v-text-field
        v-model="newTask"
        label="Nueva Tarea"
        @keyup.enter="addTask"
        outlined
    ></v-text-field>
    <v-btn @click="addTask" color="primary" class="my-4">Añadir</v-btn>

    <v-list>
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
v-container {
  max-width: 600px;
  margin: auto;
  padding-top: 50px;
}
</style>
