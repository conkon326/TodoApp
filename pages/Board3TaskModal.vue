<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h2>ボード3の新しいタスクを作成</h2>
      <form @submit.prevent="createTask()">
        <div class="form-group">
          <label for="taskTitle">タスク名:</label>
          <input type="text" id="taskTitle" v-model="taskTitle" required />
        </div>
        <div class="form-group">
          <label for="taskTagsInput">タグ:</label>
          <select class="form-select" multiple v-model="selectedTags">
            <option
              v-for="tag in taskTags.tags"
              :key="tag.tagId"
              :value="tag.tagId"
            >
              {{ tag.tag }}
            </option>
          </select>
        </div>
        <button type="submit">タスクを作成</button>
        <button @click="closeModal">閉じる</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useBoard3Task } from "~/stores/tasks";
import { useTaskTags } from "~/stores/tags";

export default {
  props: {
    isModalOpen: Boolean,
  },
  data() {
    return {
      taskTitle: "",
      selectedTags: [],
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    createTask() {
      const board3Task = useBoard3Task();
      const generateUniqueTaskId = () => {
        const currentTaskCount = board3Task.tasks.length;
        return currentTaskCount + 1;
      };

      const newTask = {
        no: generateUniqueTaskId(),
        title: this.taskTitle,
        tagIds: this.selectedTags,
        boardid: 1,
      };

      board3Task.addTask(newTask);
      this.taskTitle = "";
      this.selectedTags = [];
      this.closeModal();
    },
  },
  computed: {
    taskTags() {
      return useTaskTags();
    },
  },
};
</script>

<style scoped>
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
  width: auto;
}
</style>
