<template>

  <div class="modal-content">
    <h2>新しいタスクを作成</h2>
    <form @submit.prevent="createTask">
      <div class="form-group">
        <label for="taskTitle">タスク名:</label>
        <input type="text" id="taskTitle" v-model="taskTitle" required>
      </div>
      <div class="form-group">
        <label for="taskTagsInput">タグ:</label>
        <select
          class="form-select"
          multiple
          v-model="selectedTags"
        >
          <option
            v-for="tag in taskTags.tags"
            :key="tag.tagId"
            :value="tag.tagId"
          >
            {{ tag.tag }}
          </option>
        </select>
      </div>
      <button type="submit" @click="closeModal">タスクを作成</button>
      <button @click="closeModal">閉じる</button>
    </form>
  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { useBoard1Task, useBoard2Task, useBoard3Task, useBoard4Task } from "~/stores/tasks";
import { useTaskTags } from "~/stores/tags";

export default defineComponent({
  data() {
    return {
      taskTitle: '',
      selectedTags: [],
      isModalOpen: false,
      activeBoardTasks: null,
    };
  },
  methods: {
    openModal(boardTasks) {
      this.isModalOpen = true;
      this.activeBoardTasks = boardTasks;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    createTask() {
      if (this.activeBoardTasks) {
        const generateUniqueTaskId = () => {
          const currentTaskCount = this.activeBoardTasks.tasks.length;
          return currentTaskCount + 1;
        };

        const newTask = {
          no: generateUniqueTaskId(),
          title: this.taskTitle,
          tagIds: this.selectedTags,
          boardid: this.activeBoardTasks.boardId,
        };
        this.activeBoardTasks.addTask(newTask);
        this.taskTitle = '';
        this.selectedTags = [];
        this.closeModal();
      }
    },
  },
  computed: {
    taskTags() {
      return useTaskTags();
    },
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0e0e0e;
  opacity: 0.5;
  z-index: 10000;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
