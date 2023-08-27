<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <h2>新しいタグを作成</h2>
      <form @submit.prevent="createTag">
        <div class="form-group">
          <label for="tagTitle">タグ名:</label>
          <input type="text" id="tagTitle" v-model="tagTitle" required />
        </div>
        <button type="submit">タグを作成</button>
        <button @click="closeModal">閉じる</button>
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
    closeModal() {
      this.$emit("close");
    },
    createTag() {
      const TaskTags = useTaskTags();
      const generateUniqueTagId = () => {
        const currentTagCount = TaskTags.tags.length;
        return currentTagCount + 1;
      };

      const newTag = {
        tagId: generateUniqueTagId(),
        tag: this.tagTitle,
      };

      TaskTags.addTag(newTag);
      this.tagTitle = "";
      this.closeModal();
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
