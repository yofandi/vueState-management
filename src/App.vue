<script setup>
import { ref } from "vue";

const red = ref(0);
const green = ref(0);
const blue = ref(0);
</script>
<template>
  <main :style="{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }">
    <div>
      <input type="number" placeholder="red" v-model="red" id="" />
      <input type="number" placeholder="green" v-model="green" id="" />
      <input type="number" placeholder="blue" v-model="blue" id="" />
    </div>
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
