<script setup>
import GrandChild from "./GrandChild.vue";

const { number } = defineProps(["numbers"]);
</script>

<template>
  <div>
    <h1>Child</h1>
    <div class="line"></div>
    <GrandChild :numbers="numbers"></GrandChild>
  </div>
</template>

<style scoped></style>
