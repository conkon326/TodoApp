<template>
  <div class="text-center">
    <h1>TODO管理アプリ</h1>
  </div>

  <div class="container mt-5">
    <div class="row">
      <!-- ボード 1 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 1</div>
          <div class="card-body task-container">
            <!-- ボード 1 のタスク -->
            <div>
              <draggable v-model="board1Tasks" item-key="task.id" tag="div">
                <div v-for="task in board1Tasks" :key="task.id">
                  {{ task.title }}
                </div>
              </draggable>
            </div>
            <div class="d-grid gap-2">
              <button
                @click="openModal(board1Tasks)"
                type="button"
                class="btn task btn-outline-secondary"
              >
                +
              </button>
              <task-modal :isModalOpen="isModalOpen" @close="closeModal" />
            </div>
          </div>
        </div>
      </div>

      <!-- ボード 2 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 2</div>
          <div class="card-body task-container">
            <div class="task" v-for="task in board2Tasks" :key="task.id">
              {{ task.title }}
            </div>
            <div class="d-grid gap-2">
              <button
                @click="openModal(board2Tasks)"
                type="button"
                class="btn task btn-outline-secondary"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ボード 3 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 3</div>
          <div class="card-body task-container">
            <div class="task" v-for="task in board3Tasks" :key="task.id">
              {{ task.title }}
            </div>
            <div class="d-grid gap-2">
              <button
                @click="openModal(board3Tasks)"
                type="button"
                class="btn task btn-outline-secondary"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ボード 4 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 4</div>
          <div class="card-body task-container">
            <div class="task" v-for="task in board4Tasks" :key="task.id">
              {{ task.title }}
            </div>
            <div class="d-grid gap-2">
              <button
                @click="openModal(board4Tasks)"
                type="button"
                class="btn task btn-outline-secondary"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <NuxtLink to="page2">page2</NuxtLink>
  </div>
</template>

<script setup>
import { draggable } from "vuedraggable";

import { ref, computed } from "vue"; // Vue 3のコンポーネントで使用

// 仮のタスクデータ
const board1Tasks = ref([
  { id: 1, title: "ボード 1 のタスク 1" },
  { id: 2, title: "ボード 1 のタスク 2" },
]);

const board2Tasks = ref([
  { id: 1, title: "ボード 2 のタスク 1" },
  { id: 2, title: "ボード 2 のタスク 2" },
]);

const board3Tasks = ref([{ id: 1, title: "ボード 3 のタスク 1" }]);

const board4Tasks = ref([]);
import { useCounterStore as useTaskStore } from "~/stores/tasks";
import TaskModal from "./TaskModal.vue";

const taskStore = useTaskStore();

const isModalOpen = ref(false);

const openModal = (boardTasks) => {
  taskStore.setActiveBoardTasks(boardTasks);
  isModalOpen.value = true;
};

const closeModal = () => {
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
</style>
stores/tasksStore
