import { defineStore } from "pinia";

export const useNumbers = defineStore("numbers", {
  state: () => ({
    numbers: [14, 15, 16, 17, 18, 19, 20],
  }),
  actions: {
    addNumber() {
      this.numbers.push(this.numbers.length + 1);
    },
  },
  getters: {
    filterNumber: (state) => {
      return (minNumber) => state.numbers.filter((num) => num >= minNumber);
    },
  },
});
