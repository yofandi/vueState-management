<script setup>
// import { inject } from "vue";

// const numbers = inject("nummbers_share");

import { useNumbers } from "@/stores/numbers";
const { numbers } = useNumbers();
</script>

<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ numbers }}
  </div>
</template>

<style scoped></style>
