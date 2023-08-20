<template>
  <div class="container mt-5">

    <div class="text-center">
      <h1>TODO管理アプリ</h1>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-header">
            ボード 1
          </div>
          <div class="card-body">
            <!-- ボード 1 のタスク -->
            <div class="task" v-for="task in board1Tasks" :key="task.id">
              {{ task.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="card">
          <div class="card-header">
            ボード 2
          </div>
          <div class="card-body">
            <div class="task" v-for="task in board2Tasks" :key="task.id">
              {{ task.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="card">
          <div class="card-header">
            ボード 3
          </div>
          <div class="card-body">
            <div class="task" v-for="task in board3Tasks" :key="task.id">
              {{ task.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <div class="card">
          <div class="card-header">
            ボード 4
          </div>
          <div class="card-body">
            <div class="task" v-for="task in board4Tasks" :key="task.id">
              {{ task.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board1Tasks: [
        { id: 1, title: 'ボード 1 のタスク 1' },
        { id: 2, title: 'ボード 1 のタスク 2' },
      ],
      board2Tasks: [
        { id: 1, title: 'ボード 2 のタスク 1' },
        { id: 2, title: 'ボード 2 のタスク 2' },
      ],
    };
  },
};
</script>

<style>
.task {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
}
</style>
