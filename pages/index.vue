<template>

  <div class="container mt-5">
    <h1 class="text-center">TODO管理アプリ</h1>
    <div class="row">
      <div class="col-9"></div>
        <div class="d-grid gap-2 col-3">
          <select class="form-select" v-model="selectedTag">
            <option value="">タグフィルター</option>
            <option v-for="tag in taskTags.tags" :key="tag.tagId" :value="tag.tagId">{{ tag.tag }}</option>
          </select>
      </div>
    </div>

    <div class="row">
      <!-- ボード 1 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 1</div>
          <div class="card-body task-container">
  <!-- ボード 1 のタスク -->
  <draggable v-model="board1Task.tasks" item-key="no" tag="div" group="ITEMS">
  <template #item="{ element, index }">
    <div>
      <div class="task" v-if="!selectedTag || element.tagIds.includes(selectedTag)">
        <div class="task-title">{{ element.title }}</div>
        <div class="tag" v-for="tagId in element.tagIds" :key="tagId">
        {{ getTagName(tagId) }}
      </div>
      <div class="del">
      <button type="button" class="btn btn-danger" @click="board1Task.deleteTask(index)">[削除]</button>
    </div>
      </div>
    </div>
  </template>
</draggable>
  <div class="d-grid gap-2">
    <button type="button" class="btn btn-outline-secondary" @click="openModal(board1Task)">+</button>
  </div>
</div></div>
      </div>

     
       <!-- ボード 2 -->
       <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 2</div>
          <div class="card-body task-container">
  <draggable v-model="board2Task.tasks" item-key="no" tag="div" group="ITEMS">
  <template #item="{ element, index }">
    <div>
      <div class="task" v-if="!selectedTag || element.tagIds.includes(selectedTag)">
        <div class="task-title">{{ element.title }}</div>
        <div class="tag" v-for="tagId in element.tagIds" :key="tagId">
        {{ getTagName(tagId) }}
      </div>
      <div class="del">
      <button type="button" class="btn btn-danger" @click="board1Task.deleteTask(index)">[削除]</button>
    </div>
      </div>
    </div>
  </template>
</draggable>
  <div class="d-grid gap-2">
    <button type="button" class="btn btn-outline-secondary" @click="openModal(board1Task)">+</button>
  </div>
</div></div>
      </div>
       <!-- ボード 3 -->
       <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 3</div>
          <div class="card-body task-container">
  <draggable v-model="board3Task.tasks" item-key="no" tag="div" group="ITEMS">
  <template #item="{ element, index }">
    <div>
      <div class="task" v-if="!selectedTag || element.tagIds.includes(selectedTag)">
        <div class="task-title">{{ element.title }}</div>
        <div class="tag" v-for="tagId in element.tagIds" :key="tagId">
        {{ getTagName(tagId) }}
      </div>
      <div class="del">
      <button type="button" class="btn btn-danger" @click="board1Task.deleteTask(index)">[削除]</button>
    </div>
      </div>
    </div>
  </template>
</draggable>
  <div class="d-grid gap-2">
    <button type="button" class="btn btn-outline-secondary" @click="openModal(board3Task)">+</button>
  </div>
</div></div>
      </div>
       <!-- ボード 4 -->
       <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 4</div>
          <div class="card-body task-container">
  <draggable v-model="board4Task.tasks" item-key="no" tag="div" group="ITEMS">
  <template #item="{ element, index }">
    <div>
      <div class="task" v-if="!selectedTag || element.tagIds.includes(selectedTag)">
        <div class="task-title">{{ element.title }}</div>
        <div class="tag" v-for="tagId in element.tagIds" :key="tagId">
        {{ getTagName(tagId) }}
      </div>
      <div class="del">
      <button type="button" class="btn btn-danger" @click="board1Task.deleteTask(index)">[削除]</button>
    </div>
      </div>
    </div>
  </template>
</draggable>
  <div class="d-grid gap-2">
    <button type="button" class="btn btn-outline-secondary" @click="openModal(board4Task)">+</button>
  </div>
</div></div>
      </div>

    </div>
<!-- ボードここまで -->
 <div><NuxtLink to="taskModal">taskModal</NuxtLink></div>
 <div><NuxtLink to="tagModal">tagModal</NuxtLink></div>
   <!-- モーダル -->
<taskModal v-if="isModalOpen" @close="closeModal" :boardTasks="activeBoardTasks" />
</div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBoard1Task, useBoard2Task, useBoard3Task, useBoard4Task } from "~/stores/tasks";
import { useTaskTags } from "~/stores/tags";
const board1Task = useBoard1Task();
const board2Task = useBoard2Task();
const board3Task = useBoard3Task();
const board4Task = useBoard4Task();
import draggable from "vuedraggable";
import taskModal from "./taskModal.vue";
import tagModal from "./tagModal.vue";

const selectedTag = ref('');
const taskTags = useTaskTags();
let activeBoardTasks = null; // nullに変更

const getTagName = (tagId) => {
  const matchingTag = taskTags.tags.find(tag => tag.tagId === tagId);
  return matchingTag ? matchingTag.tag : ''; // タグが見つからない場合は空文字を返す
};

// モーダルの表示状態管理
const isModalOpen = ref(false);

// モーダルを開く
const openModal = (boardTasks) => {
  activeBoardTasks = boardTasks;
  isModalOpen.value = true;
  console.log(activeBoardTasks) // this を削除
};

// モーダルを閉じる
const closeModal = (boardTasks) => {
  isModalOpen.value = false;
};
</script>

<style>
.task {
border: 1px solid #ccc;
padding: 10px;
margin-bottom: 10px;
background-color: #f8f9fa;
}

.task-container {
max-height: 80vh;
overflow-y: auto;
}

.task-title {
  max-height: 4.5em;
  overflow-y: auto;
  position: relative;
}

.tag {
background-color: #007bff;
color: #fff;
padding: 3px 6px;
display: inline-block;
border-radius: 3px;
padding: 3px;
margin-top: 5px;
}
</style>
