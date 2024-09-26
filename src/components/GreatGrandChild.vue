<script setup>
// import { inject } from "vue";

// const numbers = inject("nummbers_share");

import { useNumbers } from "@/stores/numbers";
const { numbers, filterNumber } = useNumbers();
</script>

<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ filterNumber(18) }}
  </div>
</template>

<style scoped></style>
