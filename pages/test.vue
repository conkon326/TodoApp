<template>

    <div class="row">
      <div class="col-9"></div>
      <div class="col-md-3">
        <div class="accordion" id="tagFilterAccordion">
          <div class="accordion-header" @click="toggleAccordion">
            タグフィルター
          </div>
          <div
            v-if="isAccordionOpen"
            class="accordion-content"
          >
            <select class="form-select" v-model="selectedTags" multiple>
              <option
                v-for="tag in taskTags.tags"
                :key="tag.tagId"
                :value="tag.tagId"
              >
                {{ tag.tag }}
              </option>
            </select>
            <div class="d-grid gap-2">
              <button
                type="button"
                class="btn btn-primary"
                @click="filterTasksByTags"
              >
                絞り込む
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBoard1Task } from "~/stores/tasks";
import { useTaskTags } from "~/stores/tags";

const isAccordionOpen = ref(false);
const selectedTags = ref([]);
const taskTags = useTaskTags();

const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value;
};

const filterTasksByTags = () => {
  // タグに基づいてタスクをフィルタリングするロジックをここに追加
};
</script>

<style scoped>
  .accordion-header {
    cursor: pointer;
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #f5f5f5;
  }

  .accordion-content {
    border: 1px solid #ddd;
    border-top: none;
    padding: 10px;
    background-color: #fff;
  }
</style>
