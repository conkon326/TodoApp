<template>
  <div>
    <!-- <div v-if="isModalOpen" class="modal"> -->
    <div class="modal-content">
      <h2>新しいタグを作成</h2>
      <form @submit.prevent="createTag">
        <div class="form-group">
          <label for="tagTitle">タグ名:</label>
          <input type="text" id="tagTitle" v-model="tagTitle" required>
        </div>
        <button type="submit">タスクを作成</button>
        <button @click="closeModal">閉じる</button>
      </form>
    </div>
  </div>
<!-- </div> -->
</template>

<script>
import { defineComponent } from 'vue';
import { useTaskTags } from "~/stores/tags";

export default defineComponent({
  data() {
    return {
      tagTitle: '',
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
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

      this.tagTitle = '';
      this.closeModal();
    },
  },
  computed: {
    tagTags() {
      // useTagTagsをここで呼び出す
      return useTagTags();
    },
  },
});
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
}
</style>
