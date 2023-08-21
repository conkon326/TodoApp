<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h2>新しいタスクを作成</h2>
      <form @submit.prevent="createTask">
        <div class="form-group">
          <label for="taskTitle">タスク名:</label>
          <input type="text" id="taskTitle" v-model="newTask.title" required>
        </div>
        <div class="form-group">
  <label for="taskTags">タグ:</label>
  <input type="text" id="taskTags" v-model="newTask.tags">
</div>
        <button type="submit">タスクを作成</button>
        <button @click="closeModal">閉じる</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: Boolean
  },
  data() {
    return {
      newTask: {
        title: ''
      }
    };
  },
  methods: {
    createTask() {
      // タスクを作成するロジックをここに追加
      this.closeModal();
    },
    closeModal() {
      this.$emit('close'); // 親コンポーネントに閉じるイベントを送信
    }
  }
};
</script>

<style scoped>
/* モーダルのスタイルをここで定義 */
.modal {
  /* モーダルが画面全体に覆いかぶさるスタイル */
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
  /* モーダルの内部コンテンツスタイル */
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: auto;
  height: auto;

}
</style>
