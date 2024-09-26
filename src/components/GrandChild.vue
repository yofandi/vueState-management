<script setup>
import GreatGrandChild from "./GreatGrandChild.vue";
import useNumbers from "@/composables/useNumbers.js";
const { numbers } = useNumbers();
</script>

<template>
  <div>
    <h1>Grand Child</h1>
    {{ numbers }}
    <div class="line"></div>
    <GreatGrandChild></GreatGrandChild>
  </div>
</template>

<style scoped></style>
