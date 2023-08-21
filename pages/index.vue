<template>
  <div class="text-center">
    <h1>TODO管理アプリ</h1>
  </div>
  <div class="container mt-5">

    <div class="row">
      <div class="col-9"></div>
      <div class="col-3">
        <div class="d-grid gap-2">
        <button type="button" class="btn task btn-outline-secondary float-end">
          タグフィルター
        </button>
      </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 1</div>
          <div class="card-body task-container">
            <!-- ボード 1 のタスク -->
            <div class="task" v-for="task in board1Tasks" :key="task.id">
              {{ task.title }}
            </div>
            <div class="d-grid gap-2">
              <button  @click="openModal" type="button" class="btn task btn-outline-secondary">
                +
              </button>
                <task-modal :isModalOpen="isModalOpen" @close="closeModal" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 2</div>
          <div class="card-body task-container">
            <div class="task" v-for="task in board2Tasks" :key="task.id">
              {{ task.title }}
            </div>
            <div class="d-grid gap-2">
              <button type="button" class="btn task btn-outline-secondary">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 3</div>
          <div class="card-body task-container">
            <div class="task" v-for="task in board3Tasks" :key="task.id">
              {{ task.title }}
            </div>
            <div></div>

            <div class="d-grid gap-2">
              <button type="button" class="btn task btn-outline-secondary">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 4</div>
          <div class="card-body task-container">
            <div class="task " v-for="task in board4Tasks" :key="task.id">
              {{ task.title }}
            </div>

            <div class="d-grid gap-2">
              <button type="button" class="btn task btn-outline-secondary">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    {{ counter.counter }}
    <button @click="counter.counter++">button</button>
    <NuxtLink to="page2">page2</NuxtLink>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter';
import TaskModal from './TaskModal.vue';

const counter = useCounterStore();

const board1Tasks = [
  { id: 1, title: "ボード 1 のタスク 1" },
  { id: 2, title: "ボード 1 のタスク 2" },
  // 他のタスクを追加
];

const board2Tasks = [
  { id: 1, title: "ボード 2 のタスク 1" },
  { id: 2, title: "ボード 2 のタスク 2" },
  // 他のタスクを追加
];

const isModalOpen = ref(false);

const openModal = () => {
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
