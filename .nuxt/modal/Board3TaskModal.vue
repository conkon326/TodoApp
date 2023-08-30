<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h2>ボード3の新しいタスクを作成</h2>
      <form @submit.prevent="createTask()" class="needs-validation">
        <div class="form-group">
           <label for="taskTitle" class="form-label"
            >タスク名:
            <span class="form-text">
              <span class="required-marker">※</span>必須項目です</span>
          </label>
           <input
            type="text"
            id="taskTitle"
            v-model="taskTitle"
            required
            class="form-control"
            placeholder="タスク名を入力してください"
          />
          <div class="invalid-feedback">タスク名は必須です。</div>
        </div>
        <div class="form-group">
          <label for="taskTagsInput" class="form-label"
            >タグ:<span class="form-text">タグは複数選択可能です</span>
            </label>
          <select
            class="form-select"
            multiple
            v-model="selectedTags"
            id="taskTagsInput"
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
        <button type="submit" class="btn btn-primary">タスクを作成</button>
        <button @click="closeModal" class="btn btn-secondary">閉じる</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
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
      if (this.taskTitle.trim() === "") {
        return;
      }
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
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: auto;
}
.required-marker {
  color: red;
}

#taskTitle {
  margin-bottom: 10px;
}

#taskTagsInput {
  margin-bottom: 10px;
}

.btn {
  margin-right: 10px;
}
</style>
