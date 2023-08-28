<template>
  <!-- モーダルが開いている場合に表示 -->
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h2>ボード1の新しいタスクを作成</h2>
      <!-- タスク作成フォーム -->
      <form @submit.prevent="createTask()" class="needs-validation" novalidate>
        <div class="form-group">
          <label for="taskTitle" class="form-label">タスク名:</label>
           <input
            type="text"
            id="taskTitle"
            v-model="taskTitle"
            class="form-control"
            placeholder="タスク名を入力してください"
            required
          />
          <div class="invalid-feedback">タスク名を入力してください</div>
        </div>
        <!-- タグ選択ボタン -->
        <div class="form-group">
          <label for="taskTagsInput" class="form-label">タグ:</label>
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
        <!-- タスク作成ボタン -->
        <button type="submit" class="btn btn-primary">タスクを作成</button>
        <!-- モーダルを閉じるボタン -->
        <button @click="closeModal" class="btn btn-secondary">閉じる</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useBoard1Task } from "~/stores/tasks";
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
    // モーダルを閉じるメソッド
    closeModal() {
      this.$emit("close");
    },
    // タスクを作成するメソッド
    createTask() {
      if (this.taskTitle.trim() === "") {
        // タグ名が空の場合は何もしない
        return;
      }
      const board1Task = useBoard1Task();
      // 一意タスクIDを作成するメソッド
      const generateUniqueTaskId = () => {
        const currentTaskCount = board1Task.tasks.length;
        return currentTaskCount + 1;
      };
      // 新しいタスクオブジェクトを作成
      const newTask = {
        no: generateUniqueTaskId(),
        title: this.taskTitle,
        tagIds: this.selectedTags,
        boardid: 1,
      };
      // ストアにタスクを追加
      board1Task.addTask(newTask);
      // 入力フィールドをクリアし、モーダルを閉じる
      this.taskTitle = "";
      this.selectedTags = [];
      this.closeModal();
    },
  },
  //タグ名を取得
  computed: {
    taskTags() {
      return useTaskTags();
    },
  },
};
</script>

<style scoped>
/* モーダル背景 */

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
/* モーダル */
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: auto;
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
