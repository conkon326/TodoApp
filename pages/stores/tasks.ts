import { defineStore } from "pinia";

interface TaskObj {
  no: number;
  title: string;
  tagIds:number[];
  boardid: number;
}

export const useBoard1Task = defineStore('board1Task', {
  state: () => ({
    tasks: [] as TaskObj[]
  }),
  actions: {
    // タスクを削除するアクション
    deleteTask(index:number) {
      this.tasks.splice(index, 1);
    },
    // タスクを追加するアクション
    addTask(newTask: TaskObj) {
      this.tasks.push(newTask);
    }
  }
});

export const useBoard2Task = defineStore('board2Task', {
  state: () => ({
    tasks: [] as TaskObj[]
  }),
  actions: {
    deleteTask(index:number) {
      this.tasks.splice(index, 1);
    },
    addTask(newTask: TaskObj) {
      this.tasks.push(newTask);
    }
  }
});

export const useBoard3Task = defineStore('board3Task', {
  state: () => ({
    tasks: [] as TaskObj[]
  }),
  actions: {
    deleteTask(index:number) {
      this.tasks.splice(index, 1);
    },
    addTask(newTask: TaskObj) {
      this.tasks.push(newTask);
    }
  }
});

export const useBoard4Task = defineStore('board4Task', {
  state: () => ({
    tasks: [] as TaskObj[]
  }),
  actions: {
    deleteTask(index:number) {
      this.tasks.splice(index, 1);
    },
    addTask(newTask: TaskObj) {
      this.tasks.push(newTask);
    }
  }
});