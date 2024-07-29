<template>
  <v-list-item>
    <v-list-item-content>{{ task.text }}</v-list-item-content>
    <v-list-item-action>
      <v-btn icon="" @click="$emit('remove', task.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
.v-list-item {
  margin: 10px 0;
}
</style>
