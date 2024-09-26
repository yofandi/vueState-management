import { ref } from "vue";

export default function useNumbers() {
  const numbers = ref([7, 8, 9, 10, 11, 12, 13]);

  const addNumber = () => {
    numbers.value.push(numbers.value.length + 1);
  };

  return { numbers, addNumber };
}
