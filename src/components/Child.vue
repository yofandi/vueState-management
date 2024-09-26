<script setup>
// import { inject } from "vue";
import GrandChild from "./GrandChild.vue";
import { useNumbers } from "@/stores/numbers";

const { numbers } = useNumbers();
// const numbers = inject("nummbers_share");
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
