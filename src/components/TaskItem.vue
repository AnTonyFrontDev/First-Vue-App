<template>
  <v-list-item class="task-item">
    <v-card class="task-card">
      <v-card-title class="task-title">{{ task.text }}</v-card-title>
      <v-card-text class="task-text">{{ task.text }}</v-card-text>
      <v-card-actions>
        <v-btn icon="mdi:delete" @click="$emit('remove', task.id)" class="bg-red-500">
          <Icon icon="mdi:delete" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'TaskItem',
  components: {
    Icon
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.task-card {
  width: 100%;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  border-radius: 8px;
  background-color: #f5f5f5; /* Tailwind: bg-gray-100 */
}

.task-card:hover {
  transform: translateY(-5px);
}

.task-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #374151; /* Tailwind: text-gray-800 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.5rem;
}

.task-text {
  font-size: 0.875rem;
  color: #6b7280; /* Tailwind: text-gray-600 */
  margin-bottom: 0.75rem;
}

.delete-btn {
  color: #f87171; /* Tailwind: text-red-400 */
}
</style>
