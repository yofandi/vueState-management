<script setup>
import Child from "./Child.vue";
import useNumbers from "@/composables/useNumbers.js";

const { numbers, addNumber } = useNumbers();
</script>

<template>
  <div>
    <h1>Parent</h1>
    {{ numbers }}
    <button @click="addNumber">Add</button>
    <div class="line"></div>
    <Child></Child>
  </div>
</template>

<style scoped></style>
