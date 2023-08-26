<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useBoard1Task, useBoard2Task,useBoard3Task,useBoard4Task } from "~/stores/tasks";
const board1Task = useBoard1Task();
const board2Task = useBoard2Task();
const board3Task = useBoard3Task();
const board4Task = useBoard4Task();
import { useTaskTags } from "~/stores/tags";
const taskTags = useTaskTags();

import { onMounted } from 'vue';

onMounted(() => {
  board1Task.tasks.push(
    { no: 0, title: "タスク１", tagIds: [0,1], boardid: 1 },
    { no: 1, title: "タスク2", tagIds: [0,1], boardid: 1 },
    { no: 2, title: "タスク3", tagIds: [0,1], boardid: 1 },
  );

  board2Task.tasks.push(
    { no: 0, title: "タスク１", tagIds: [1,2], boardid: 2 },
    { no: 1, title: "タスク2", tagIds: [1,2], boardid: 2 },
  );

  board3Task.tasks.push(
    { no: 0, title: "タスク１", tagIds:  [2,3], boardid: 3 },
  );

  board4Task.tasks.push(
  );
  taskTags.tags.push(
    {tagId: 0, tag:"重要かつ緊急"},
    {tagId: 1, tag:"重要度:低、緊急性:高"},
    {tagId: 2, tag:"重要度:高、緊急性:低"},
    {tagId: 3, tag:"重要度：低、緊急性：低"}
  );
});
</script>
