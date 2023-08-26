import { defineStore } from "pinia";

interface TagObj {
  tagId:number;
  tag: string;
}

export const useTaskTags = defineStore('taskTags', {
  state: () => ({
    tags: [] as TagObj[]
  }),
  actions: {
    // タグを削除するアクション
    deleteTag(index) {
      this.tags.splice(index, 1);
    },
    // タグを追加するアクション
    addTag(newTag) {
      this.tags.push(newTag);
    }
  }
});
