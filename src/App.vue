<script setup>
import { ref } from "vue";
import Parent from "@/components/Parent.vue";

const number = ref([1, 2, 3, 4, 5, 6]);
</script>
<template>
  <main>
    <Parent :numbers="number"></Parent>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(122, 50, 255);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
