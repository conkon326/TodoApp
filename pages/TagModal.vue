<template>
  <!-- モーダルが開いている場合に表示 -->
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h2>新しいタグを作成</h2>
      <!-- タグ作成フォーム -->
      <form @submit.prevent="createTag" class="needs-validation" novalidate>
        <div class="form-group">
          <label for="tagTitle">タグ名:</label>
          <input
            type="text"
            id="tagTitle"
            v-model="tagTitle"
            class="form-control"
            placeholder="タグ名を入力してください"
            required
          />
          <div class="invalid-feedback">タスク名は必須です。</div>
        </div>
        <!-- タグ作成ボタン -->
        <button type="submit" class="btn btn-primary">タグを作成</button>
        <!-- モーダルを閉じるボタン -->
        <button @click="closeModal" class="btn btn-secondary">閉じる</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { useTaskTags } from "~/stores/tags";

export default {
  props: {
    isModalOpen: Boolean,
  },
  data() {
    return {
      tagTitle: "",
    };
  },
  methods: {
    // モーダルを閉じるメソッド
    closeModal() {
      this.$emit("close");
    },
    // タグを作成するメソッド
    createTag() {
      if (this.tagTitle.trim() === "") {
        // タグ名が空の場合は何もしない
        return;
      }
      const TaskTags = useTaskTags();
      // 一意のタグIDを生成する関数
      const generateUniqueTagId = () => {
        const currentTagCount = TaskTags.tags.length;
        return currentTagCount + 1;
      };
      // 新しいタグオブジェクトを作成
      const newTag = {
        tagId: generateUniqueTagId(),
        tag: this.tagTitle,
      };
      // ストアにタグを追加
      TaskTags.addTag(newTag);
      // 入力フィールドをクリアし、モーダルを閉じる
      this.tagTitle = "";
      this.closeModal();
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
#tagTitle {
  margin-bottom: 10px;
}
.btn {
  margin-right: 10px;
}
</style>
