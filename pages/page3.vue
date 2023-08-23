<template>
  <div id="app" class="container">
    <div id="box1" class="box">
      <draggable v-model="board1Tasks" item-key="no" tag="ul" group="ITEMS">
        <template #item="{ element, index }">
          <li>{{ element.name }}-{{ element.tag }}- (No.{{ element.no }})</li>
        </template>
      </draggable>
    </div>

    <div id="box2" class="box">
      <draggable v-model="board2Tasks" item-key="no" tag="ul" group="ITEMS">
        <template #item="{ element, index }">
          <li>{{ element.name }}-{{ element.tag }}- (No.{{ element.no }})</li>
        </template>
      </draggable>
    </div>
  </div>

  <div>
    <NuxtLink to="/">index</NuxtLink>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ref } from 'vue';

const board1Tasks = ref([
  {no: 1, name: 'タスク１', tag: '最重要', categoryNo: '1'},
  {no: 2, name: 'タスク２', tag: 'なるはや', categoryNo: '2'},
  {no: 3, name: 'タスク３', tag: 'それなり', categoryNo: '3'}
]);

const board2Tasks = ref([
  {no: 1, name: 'タスク１', tag: '最重要', categoryNo: '1'},
  {no: 2, name: 'タスク２', tag: 'なるはや', categoryNo: '2'}
]);
</script>

<style>
.box {
  width: 50%;
  float: left;
  padding: 20px 0;
}
#box1 {
  background-color: #fdd;
}
#box2 {
  background-color: #ddf;
}
ul {
  list-style-type: none;
  padding-right: 2rem;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
  background-color: #fff;
}
</style>
