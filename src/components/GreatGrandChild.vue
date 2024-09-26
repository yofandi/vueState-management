<script setup>
import { inject } from "vue";

const numbers = inject("nummbers_share");
</script>

<template>
  <div>
    <h1>Great Grand Child</h1>
    {{ numbers }}
  </div>
</template>

<style scoped></style>
