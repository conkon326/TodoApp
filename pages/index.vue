<template>
  <div class="container mt-5">
    <!-- アプリ名 -->
    <h1 class="text-center">TODO管理アプリ</h1>
    <div class="row">
      <!-- フィルタリング -->
      <div class="col-9"></div>
      <div class="col-md-3">
        <div class="accordion" id="tagFilterAccordion">
          <div class="accordion-header" @click="toggleAccordion">
            タグフィルター
          </div>
          <div v-if="isAccordionOpen" class="accordion-content">
            <select class="form-select" v-model="selectedTag" multiple>
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
      <!-- 新規タグ作成フォーム用ボタン -->
      <div class="col-9"></div>
      <div class="d-grid gap-2 col-3">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="openModal('TagModal')"
        >
          新しいタグを作成
        </button>
      </div>
    </div>

    <div class="row">
      <!-- ボード 1 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 1</div>
          <div class="card-body task-container">
            <!-- ボード 1 のタスク -->
            <draggable
              v-model="board1Task.tasks"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element, index }">
                <div>
                  <div
                    class="task"
                    v-show="
                      selectedTags.length === 0 ||
                      selectedTags.some((tagId) =>
                        element.tagIds.includes(tagId)
                      )
                    "
                  >
                    <div class="task-title">{{ element.title }}</div>
                    <div
                      class="tag"
                      v-for="tagId in element.tagIds"
                      :key="tagId"
                    >
                      {{ getTagName(tagId) }}
                    </div>
                    <div class="del">
                      <!-- タスク削除ボタン -->
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="board1Task.deleteTask(index)"
                      >
                        [削除]
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
            <!-- 新規タスク作成フォーム用ボタン -->
            <div class="d-grid gap-2">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="openModal('board1TaskModal')"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ボード 2 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 2</div>
          <div class="card-body task-container">
            <draggable
              v-model="board2Task.tasks"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element, index }">
                <div>
                  <div
                    class="task"
                    v-show="
                      selectedTags.length === 0 ||
                      selectedTags.some((tagId) =>
                        element.tagIds.includes(tagId)
                      )
                    "
                  >
                    <div class="task-title">{{ element.title }}</div>
                    <div
                      class="tag"
                      v-for="tagId in element.tagIds"
                      :key="tagId"
                    >
                      {{ getTagName(tagId) }}
                    </div>
                    <!-- タスク削除ボタン -->
                    <div class="del">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="board2Task.deleteTask(index)"
                      >
                        [削除]
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
            <div class="d-grid gap-2">
              <!-- 新規タスク作成フォーム用ボタン -->
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="openModal('board2TaskModal')"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ボード 3 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 3</div>
          <div class="card-body task-container">
            <draggable
              v-model="board3Task.tasks"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element, index }">
                <div>
                  <div
                    class="task"
                    v-show="
                      selectedTags.length === 0 ||
                      selectedTags.some((tagId) =>
                        element.tagIds.includes(tagId)
                      )
                    "
                  >
                    <div class="task-title">{{ element.title }}</div>
                    <div
                      class="tag"
                      v-for="tagId in element.tagIds"
                      :key="tagId"
                    >
                      {{ getTagName(tagId) }}
                    </div>
                    <!-- タスク削除ボタン -->

                    <div class="del">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="board3Task.deleteTask(index)"
                      >
                        [削除]
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
            <div class="d-grid gap-2">
              <!-- 新規タスク作成フォーム用ボタン -->

              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="openModal('board3TaskModal')"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ボード 4 -->
      <div class="col-3">
        <div class="card">
          <div class="card-header">ボード 4</div>
          <div class="card-body task-container">
            <draggable
              v-model="board4Task.tasks"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element, index }">
                <div>
                  <div
                    class="task"
                    v-show="
                      selectedTags.length === 0 ||
                      selectedTags.some((tagId) =>
                        element.tagIds.includes(tagId)
                      )
                    "
                  >
                    <div class="task-title">{{ element.title }}</div>
                    <div
                      class="tag"
                      v-for="tagId in element.tagIds"
                      :key="tagId"
                    >
                      {{ getTagName(tagId) }}
                    </div>
                    <!-- タスク削除ボタン -->
                    <div class="del">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="board4Task.deleteTask(index)"
                      >
                        [削除]
                      </button>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
            <!-- 新規タスク作成フォーム用ボタン -->
            <div class="d-grid gap-2">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="openModal('board4TaskModal')"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ボードここまで -->
    <div></div>
    <!-- 各種モーダル -->
    <board1TaskModal
      :isModalOpen="isModalOpen"
      v-if="activeModal === 'board1TaskModal'"
      @close="closeModal()"
    />

    <board2TaskModal
      :isModalOpen="isModalOpen"
      v-if="activeModal === 'board2TaskModal'"
      @close="closeModal()"
    />

    <board3TaskModal
      :isModalOpen="isModalOpen"
      v-if="activeModal === 'board3TaskModal'"
      @close="closeModal()"
    />

    <board4TaskModal
      :isModalOpen="isModalOpen"
      v-if="activeModal === 'board4TaskModal'"
      @close="closeModal()"
    />

    <TagModal
      :isModalOpen="isModalOpen"
      v-if="activeModal === 'TagModal'"
      @close="closeModal()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// ドラッグ＆ドロップコンポーネントライブラリ
import draggable from "vuedraggable";

// ストア
import {
  useBoard1Task,
  useBoard2Task,
  useBoard3Task,
  useBoard4Task,
} from "~/stores/tasks";
const board1Task = useBoard1Task();
const board2Task = useBoard2Task();
const board3Task = useBoard3Task();
const board4Task = useBoard4Task();
import { useTaskTags } from "~/stores/tags";
const taskTags = useTaskTags();

// モーダル
import board1TaskModal from "./Board1TaskModal.vue";
import board2TaskModal from "./Board2TaskModal.vue";
import board3TaskModal from "./Board3TaskModal.vue";
import board4TaskModal from "./Board4TaskModal.vue";
import TagModal from "./TagModal.vue";

// タグ名取得
const getTagName = (tagId: number) => {
  const matchingTag = taskTags.tags.find((tag) => tag.tagId === tagId);
  return matchingTag ? matchingTag.tag : "";
};

// モーダルの表示状態管理
const isModalOpen = ref(false);
const activeModal = ref("");

// モーダルを開く
const openModal = (modalName: string) => {
  activeModal.value = modalName;
  isModalOpen.value = true;
};

// モーダルを閉じる
const closeModal = () => {
  isModalOpen.value = false;
};

// アコーディオンの開閉管理
const isAccordionOpen = ref(false);
const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value;
};

// ボタンをクリックしたときにタスクをタグでフィルタリング
let selectedTag = ref([]);
let selectedTags = ref([]);
const filterTasksByTags = () => {
  selectedTags.value = selectedTag.value;
};
</script>

<style>
/* アコーディオンメニュ */
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

/* タスク */
.task {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
}

.task-container {
  max-height: 75vh;
  overflow-y: auto;
}

.task-title {
  max-height: 4.5em;
  overflow-y: auto;
  position: relative;
}

/* タグ */
.tag {
  background-color: #007bff;
  color: #fff;
  padding: 3px 6px;
  display: inline-block;
  border-radius: 3px;
  padding: 3px;
  margin-top: 5px;
}
</style>
