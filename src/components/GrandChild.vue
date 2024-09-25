<script setup>
import GreatGrandChild from "./GreatGrandChild.vue";

const { number } = defineProps(["numbers"]);
</script>

<template>
  <div>
    <h1>Grand Child</h1>
    <div class="line"></div>
    <GreatGrandChild :numbers="numbers"></GreatGrandChild>
  </div>
</template>

<style scoped></style>
