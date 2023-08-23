import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: 'tasksStore',
  state: () => ({
    board1Tasks: [
    ],

    board2Tasks: [
    ],

    board3Tasks: [
      ],
      board4Tasks: [
      ],
  }),
});
