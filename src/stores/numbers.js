import { defineStore } from "pinia";

export const useNumbers = defineStore("numbers", {
  state: () => ({
    numbers: [14, 15, 16, 17, 18, 19, 20],
  }),
});
