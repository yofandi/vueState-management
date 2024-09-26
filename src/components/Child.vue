<script setup>
import { inject } from "vue";
import GrandChild from "./GrandChild.vue";

const numbers = inject("nummbers_share");
</script>

<template>
  <div>
    <h1>Child</h1>
    {{ numbers }}
    <div class="line"></div>
    <GrandChild></GrandChild>
  </div>
</template>

<style scoped></style>
